---
title: "Isomorphisms and other special arrows"
summary: "When two things are the same: isomorphisms, monos and epis, and relabelling, embedding and aggregating networks."
icon: arrows-left-right
readingsIntro: "Read after finishing the notes (about 30 to 45 minutes)."
downloads:
  - label: "Detailed notes (25 pages)"
    file: Unit03-SpecialArrows-Notes.pdf
  - label: "Slides (47 pages)"
    file: Unit03-SpecialArrows-Slides.pdf
readings:
  - title: "An Invitation to Applied Category Theory: Seven Sketches in Compositionality"
    authors: "Brendan Fong and David I. Spivak"
    source: "Cambridge University Press; free on arXiv"
    year: 2019
    url: "https://arxiv.org/abs/1803.05316"
    note: "Section 3.2.5, Isomorphisms in a category. Short, with examples in Set and in preorders."
  - title: "Basic Category Theory"
    authors: "Tom Leinster"
    source: "Cambridge University Press; free on arXiv"
    year: 2014
    url: "https://arxiv.org/abs/1612.09375"
    note: "Section 1.1: the definition of isomorphism and the examples that follow it. Monics and epics appear in Chapter 5; skim those pages for the definitions only."
  - title: "Applied Category Theory course, Lecture 46"
    authors: "John Baez"
    url: "https://math.ucr.edu/home/baez/act_course/lecture_46.html"
    note: "On isomorphisms and inverses. Friendly, with puzzles."
    optional: true
---

The guiding question of this unit is an old one: when are two things the same? Category theory's answer is that two objects are the same, for every purpose the category can see, when there is an arrow between them that can be undone: an isomorphism. Around isomorphisms sit weaker kinds of special arrow. Monomorphisms lose no information, epimorphisms reach everything that matters, and split monos and epis can be undone from one side only. On networks these become relabellings, embeddings and aggregations, and symmetry limits what any method that looks only at structure can tell apart.

## How to work through this unit

Allow about 4 hours.

1. Skim the slides once, quickly, without stopping (20 minutes). You only need the shape of the argument.
2. Read Part A with a pencil (90 minutes). For every definition, find one example and one non-example in Set before reading on.
3. Read Part B (60 minutes). For every map between networks, ask: does it lose information, does it reach everything, can it be undone?
4. Do the exercises in Part C before reading the solutions (60 minutes).
5. Read the short external reading listed above (30 to 60 minutes).

## What you will be able to do

1. Define an isomorphism, prove that inverses are unique, and find the inverse of a composite.
2. Say what the isomorphisms are in Set, in a preorder, in a monoid and in a free category.
3. Define monomorphisms and epimorphisms, and prove that in Set they are exactly the injective and the surjective functions.
4. Explain split monomorphisms and split epimorphisms, and why every split mono is mono.
5. Show with examples that an arrow can be both mono and epi without being an isomorphism.
6. Describe graph homomorphisms, and recognise relabellings, embeddings and aggregations of networks.
7. Use invariants to prove two networks are not isomorphic, and count the symmetries of small networks.
8. Classify common address maps (embedding, aggregation, translation, hashing) as mono, epi or iso.

## Before you start

Units 1 and 2: categories, the examples Set, preorders, monoids and Path(G), commutative triangles and squares, and diagram chasing. You also need two words from school mathematics: a function is injective when different inputs always give different outputs, and surjective when every element of the codomain is the output of some input.

## What is in the notes

**Part A: the theory**

- A.1 When are two things the same?
- A.2 Isomorphisms
- A.3 Isomorphisms in the examples you know
- A.4 Isomorphic is not equal: what isomorphisms preserve
- A.5 Automorphisms and groupoids
- A.6 Monomorphisms: arrows that lose no information
- A.7 Epimorphisms: arrows that reach everything that matters
- A.8 Split monos and split epis: undoing from one side
- A.9 Mono and epi together do not make an isomorphism
- A.10 How special arrows compose
- A.11 Idempotents: arrows that settle

**Part B: on networks**

- B.1 Arrows between networks
- B.2 Isomorphisms of networks are relabellings
- B.3 A bijection on nodes is not enough
- B.4 Invariants: proving that two networks are different
- B.5 Symmetries of a network
- B.6 Monomorphisms on networks: embeddings
- B.7 Epimorphisms on networks: aggregation
- B.8 One-sided inverses on networks
- B.9 Where the analogy breaks

**Part C: exercises, solutions, reading and a glossary**

## Looking ahead

Three times in this unit a map needed to respect more than objects: a virtual network embedding sends links to routes, a relabelling of a network relabels all its routes too, and an aggregation turns routes between hosts into routes between subnets. Each is a translation from one category to another that keeps composition intact. Unit 4 names these translations functors.
