---
title: "Light as the quantum carrier"
summary: "Photons, modes, sources, loss and detection: what light is, quantum mechanically, and what happens to it in a network."
icon: sparkle
readingsIntro: "Read after finishing the notes (about 30 to 45 minutes)."
downloads:
  - label: "Detailed notes (49 pages)"
    file: unit03-notes.pdf
  - label: "Slides (101 pages)"
    file: unit03-slides.pdf
readings:
  - title: "The Nobel Prize in Physics 2005: popular science background"
    source: "Nobel Prize Outreach"
    year: 2005
    url: "https://www.nobelprize.org/prizes/physics/2005/summary/"
    note: "Roy Glauber, John Hall and Theodor Hänsch. A short account of the quantum theory of light behind Sections A.5 to A.7."
  - title: "Quantum Optics: An Introduction"
    authors: "Mark Fox"
    source: "Oxford University Press"
    year: 2006
    note: "Chapter 5 (photon statistics), Chapter 6 (photon antibunching) and Chapter 7 (coherent states). The most readable textbook treatment of this unit."
  - title: "Quantum cryptography"
    authors: "Nicolas Gisin, Grégoire Ribordy, Wolfgang Tittel and Hugo Zbinden"
    source: "Reviews of Modern Physics 74, 145"
    year: 2002
    url: "https://doi.org/10.1103/RevModPhys.74.145"
    note: "Sections 2 and 3: sources, encodings, fibres and detectors, from the point of view of a working QKD system."
  - title: "Fundamental limits of repeaterless quantum communications"
    authors: "Stefano Pirandola, Riccardo Laurenza, Carlo Ottaviani and Leonardo Banchi"
    source: "Nature Communications 8, 15043"
    year: 2017
    url: "https://doi.org/10.1038/ncomms15043"
    note: "Read the abstract and introduction for the bound of Section A.11."
  - title: "Decoy state quantum key distribution"
    authors: "Hoi-Kwong Lo, Xiongfeng Ma and Kai Chen"
    source: "Physical Review Letters 94, 230504"
    year: 2005
    url: "https://doi.org/10.1103/PhysRevLett.94.230504"
    note: "For Section A.5."
    optional: true
---

In almost every network that exists, the carrier of quantum information is light: a photon in an optical fibre, or in free space between a satellite and the ground. This unit asks what light is, quantum mechanically, and what happens to it on its way through a network. Photons live in modes, and a qubit is written on a photon by choosing which mode it occupies. A laser does not produce one photon at a time, and every single-photon source trades speed against purity. A fibre loses photons at a steady rate per kilometre, which sets a hard limit on any direct link. Real detectors miss photons, click when none came, go blind after a click and blur the arrival time, and each imperfection is a kind of noise.

## How to work through this unit

Allow about 6 hours.

1. Skim the slides once, quickly (20 minutes).
2. Read Part A slowly, one section at a time (3 hours). Do the “Check yourself” questions before reading their answers. Sections A.4 to A.9 are the heart of the unit: counting photons, laser light, thermal light, bunching, the beam splitter and two-photon interference.
3. Do the exercises in Part B before reading the solutions (2 hours).
4. Read the short external reading listed above (30 minutes).

## What you will be able to do

1. Convert between wavelength, frequency and photon energy, and count the photons in a beam of given power.
2. Explain what a mode is, and how a qubit is written on one photon in two modes.
3. Use number states |n⟩ and the ladder picture, and tell the vacuum |0⟩ apart from the qubit state |0⟩.
4. Compute the photon-number odds of laser light (Poisson) and of thermal light, and explain why a weak laser is not a single-photon source.
5. Explain the bunching number g⁽²⁾(0) and use it to tell thermal light, laser light and single photons apart.
6. Describe what a beam splitter does to one photon, to laser light and to two identical photons (the Hong–Ou–Mandel effect).
7. Compare single-photon and photon-pair sources, and explain the trade-off between brightness and multi-photon errors.
8. Turn decibels into transmission, model fibre loss as a beam splitter, and state the repeaterless bound −log₂(1 − η).
9. Describe polarisation, time-bin, frequency-bin and path encodings, and say which suits fibre and which suits free space.
10. List the imperfections of real single-photon detectors and work out a simple link budget: singles, coincidences and accidental coincidences.

## Before you start

Unit 1 (kets, amplitudes, measurement, interference, the Mach–Zehnder interferometer and the density matrix) and Unit 2 (two systems, Bell states, entanglement swapping, fidelity and the Werner state). Each is recalled briefly when it is used. New mathematics is re-taught in grey boxes:

| Maths refresher | Section |
| --- | --- |
| speed = wavelength × frequency; powers of ten and prefixes | A.1 |
| energy per packet and counting packets in a beam | A.2 |
| square roots in the ladder: √n and √(n + 1) | A.4 |
| factorials and the Poisson formula | A.5 |
| the geometric series | A.6 |
| averages of n and of n(n − 1) | A.7 |
| logarithms and decibels | A.11 |
| multiplying chances along a chain | A.14 |

## What is in the notes

**Part A: one idea at a time.** Each section pairs an everyday picture with the quantum idea, and ends where the everyday picture breaks.

- A.1 Light as a wave
- A.2 Light comes in packets: photons
- A.3 Modes: the boxes that photons live in
- A.4 Counting photons: number states and the ladder
- A.5 Laser light: coherent states
- A.6 Thermal light: lamps, stars and noise
- A.7 Bunching, and the number g⁽²⁾
- A.8 The beam splitter
- A.9 Two photons meet: the Hong–Ou–Mandel effect
- A.10 Making photons: single-photon and pair sources
- A.11 Losing photons: loss as a quantum channel
- A.12 Writing a qubit on a photon: encodings
- A.13 Detecting photons
- A.14 Photons in a network: putting it together
- A.15 Unit 3 in one page

**Part B: 24 exercises with full solutions, reading, a glossary and a symbol dictionary.**

## Looking ahead

This unit treated each disturbance of light (loss, vacuum leaking in, dark counts) with its own picture. Every one of them has the same shape: a system meets some surroundings, they interact, and the surroundings are thrown away. Unit 4 makes that shape into a single mathematical object, the quantum channel, and shows that loss is just one example.
