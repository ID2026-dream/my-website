---
title: "Natural transformations"
summary: "Consistent families of maps: unit conversions, clock offsets, and methods that ignore arbitrary labels."
icon: globe
readingsIntro: "Read after finishing the notes (about 45 to 60 minutes)."
downloads:
  - label: "Detailed notes (26 pages)"
    file: Unit05-NaturalTransformations-Notes.pdf
  - label: "Slides (42 pages)"
    file: Unit05-NaturalTransformations-Slides.pdf
readings:
  - title: "An Invitation to Applied Category Theory: Seven Sketches in Compositionality"
    authors: "Brendan Fong and David I. Spivak"
    source: "Cambridge University Press; free on arXiv"
    year: 2019
    url: "https://arxiv.org/abs/1803.05316"
    note: "Section 3.3.4, Natural transformations. It defines natural transformations, draws the naturality square, and collects database instances into a functor category."
  - title: "Basic Category Theory"
    authors: "Tom Leinster"
    source: "Cambridge University Press; free on arXiv"
    year: 2014
    url: "https://arxiv.org/abs/1612.09375"
    note: "Section 1.3, Natural transformations, including the part on equivalence of categories."
  - title: "Natural Graph Networks"
    authors: "Pim de Haan, Taco Cohen and Max Welling"
    source: "NeurIPS"
    year: 2020
    url: "https://arxiv.org/abs/2007.08349"
    note: "For the network side. Read the introduction and the section on global naturality, and compare it with Section B.6 of the notes."
  - title: "General theory of natural equivalences"
    authors: "Samuel Eilenberg and Saunders Mac Lane"
    source: "Transactions of the American Mathematical Society 58"
    year: 1945
    url: "https://doi.org/10.1090/S0002-9947-1945-0013131-6"
    note: "For history. The introduction only, where the vector space example appears."
    optional: true
---

Unit 4 ended with a question: given two functors with the same source and target, how do we compare them? A natural transformation is a family of maps, one for each object, that converts the first translation into the second consistently: converting and then moving along an arrow gives the same result as moving and then converting. On networks this is the precise form of changing units or encodings consistently at every node, clock offsets between unsynchronised measurements, and methods that ignore arbitrary labels, such as node scores and graph neural network layers.

## How to work through this unit

Allow about 4 hours.

1. Skim the slides once, quickly, without stopping (20 minutes). You only need the shape of the argument.
2. Read Part A with a pencil (90 minutes). For every example, draw the naturality square and check it yourself.
3. Read Part B (60 minutes). For every network example, ask: what are the two functors, what are the components, and which square must commute?
4. Do the exercises in Part C before reading the solutions (60 minutes).
5. Read the short external reading listed above (30 to 60 minutes).

## What you will be able to do

1. State the definition of a natural transformation and check the naturality square for a proposed family of maps.
2. Give standard natural and unnatural families in Set, and explain why naturality depends on which arrows are in the category.
3. Recognise natural transformations between functors out of a monoid (equivariant maps) and into a preorder.
4. Define natural isomorphisms, compose natural transformations, and describe functor categories.
5. Check naturality on a network link by link, using the free property of Unit 4.
6. Explain the difference between an isomorphism of categories and an equivalence of categories.
7. Model unit conversions, re-encodings of headers and clock offsets on a network as natural transformations.
8. Explain why a node score or a graph neural network layer that ignores labels is exactly a natural transformation.

## Before you start

Units 1 to 4, especially clock offsets and the defect of a triangle (Unit 2, Section B.5), symmetries and scores that see only structure (Unit 3, Section B.5), and functors, the free property and Path(φ) (Unit 4, Sections A.2, A.10 and B.4).

## What is in the notes

**Part A: the theory**

- A.1 Comparing two translations
- A.2 The definition of a natural transformation
- A.3 A recipe for checking naturality
- A.4 Natural families in Set
- A.5 Unnatural families, and why the arrows matter
- A.6 Functors out of a monoid: equivariant maps
- A.7 Functors into a preorder
- A.8 Natural isomorphisms
- A.9 Composing natural transformations: functor categories
- A.10 Natural transformations out of a free category
- A.11 Maps between diagrams
- A.12 When are two categories the same?

**Part B: on networks**

- B.1 Consistent conversions on a network
- B.2 Changing units consistently
- B.3 Two encodings of the same header
- B.4 Clock offsets are a natural transformation
- B.5 Labels should not matter: node scores
- B.6 Equivariant layers: graph neural networks
- B.7 Naturality depends on which maps you ask for
- B.8 Forgetting the route is natural
- B.9 Equivalence: reachability and strongly connected components
- B.10 Where the analogy breaks

**Part C: exercises, solutions, reading and a glossary**

## Looking ahead

Section A.11 met the cone: one object with an arrow to every object of a diagram, making every triangle commute. Among all cones over a diagram there is sometimes a best one, through which every other cone passes in exactly one way. Unit 6 calls such best cones universal constructions. On networks they describe joining two tables of flow records on a shared key, and gluing two topologies along a shared border.

Units 6 to 11 are in preparation.
