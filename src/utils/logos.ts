// Project logos, prepared while the site is built (on GitHub Actions): an
// uploaded file in src/assets/logos/, or the logo on the project's website.
// Each is trimmed, scaled and stored in the page, so visitors' browsers never
// contact the project sites. If a site cannot be reached, the build carries
// on and the project shows its icon instead.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

export interface Logo {
  src: string;
  width: number;
  height: number;
  /** Mostly white artwork, so it needs a dark background. */
  light: boolean;
}

const downloads = new Map<string, Promise<Buffer>>();
const logos = new Map<string, Promise<Logo | null>>();

/** A logo, `height` pixels tall (use twice the displayed height for sharp screens). */
export function remoteLogo(url: string, height = 96): Promise<Logo | null> {
  const key = `${url}@${height}`;
  if (!logos.has(key)) logos.set(key, load(url, height));
  return logos.get(key)!;
}

function download(url: string): Promise<Buffer> {
  if (!downloads.has(url)) {
    downloads.set(
      url,
      fetch(url, {
        signal: AbortSignal.timeout(15000),
        headers: { 'user-agent': 'Mozilla/5.0 (compatible; website build)' },
      }).then(async (res) => {
        if (!res.ok) throw new Error(`the server answered ${res.status}`);
        return Buffer.from(await res.arrayBuffer());
      }),
    );
  }
  return downloads.get(url)!;
}

// Logos uploaded to src/assets/logos/, named after the project (e.g. enact.png).
const LOGO_DIR = join(process.cwd(), 'src', 'assets', 'logos');
const LOGO_FILE = /\.(svg|png|jpe?g|webp)$/i;

/** An uploaded logo for the project with this id, if there is one. */
export function localLogo(id: string, height = 96): Promise<Logo | null> {
  if (!existsSync(LOGO_DIR)) return Promise.resolve(null);
  const file = readdirSync(LOGO_DIR).find((f) => LOGO_FILE.test(f) && f.replace(LOGO_FILE, '').toLowerCase() === id);
  if (!file) return Promise.resolve(null);
  const key = `file:${file}@${height}`;
  if (!logos.has(key)) logos.set(key, prepare(readFileSync(join(LOGO_DIR, file)), height, file));
  return logos.get(key)!;
}

async function load(url: string, height: number): Promise<Logo | null> {
  try {
    return await prepare(await download(url), height, url);
  } catch (err) {
    console.warn(`[logos] Could not use the logo at ${url} (${(err as Error).message}). Showing the project icon instead.`);
    return null;
  }
}

async function prepare(input: Buffer, height: number, source: string): Promise<Logo | null> {
  try {
    // sharp comes with Astro; loading it here means a missing copy only costs the logos.
    const { default: sharp } = await import('sharp');
    // Trim the empty margin, then scale to the requested height.
    const trimmed = await sharp(input, { density: 300 }).trim().png().toBuffer();
    const scaled = sharp(trimmed).resize({ height, withoutEnlargement: false });

    const { data, info } = await scaled.clone().ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    // A logo on a transparent background whose artwork is mostly white is
    // meant for dark backgrounds. A logo with its own solid background is
    // shown as it is.
    let sum = 0;
    let count = 0;
    let clear = 0;
    for (let i = 0; i < data.length; i += info.channels) {
      if (data[i + 3] < 128) {
        clear++;
        continue;
      }
      sum += (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255;
      count++;
    }
    const transparent = clear > 0.05 * (clear + count);
    const light = transparent && count > 0 && sum / count > 0.82;

    const out = await scaled.webp({ quality: 90, alphaQuality: 100 }).toBuffer({ resolveWithObject: true });
    return {
      src: `data:image/webp;base64,${out.data.toString('base64')}`,
      width: out.info.width,
      height: out.info.height,
      light,
    };
  } catch (err) {
    console.warn(`[logos] Could not read the logo ${source} (${(err as Error).message}). Showing the project icon instead.`);
    return null;
  }
}
