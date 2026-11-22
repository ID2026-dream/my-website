---
title: "Functors"
summary: "Structure-preserving translations between categories: measurements, mappings and data that respect routes."
icon: pulse
readingsIntro: "Read after finishing the notes (about 45 to 60 minutes)."
downloads:
  - label: "Detailed notes (28 pages)"
    file: Unit04-Functors-Notes.pdf
  - label: "Slides (47 pages)"
    file: Unit04-Functors-Slides.pdf
readings:
  - title: "An Invitation to Applied Category Theory: Seven Sketches in Compositionality"
    authors: "Brendan Fong and David I. Spivak"
    source: "Cambridge University Press; free on arXiv"
    year: 2019
    url: "https://arxiv.org/abs/1803.05316"
    note: "Section 3.3: read 3.3.2, Functors, and 3.3.3, Database instances as Set-valued functors. The second is Section B.6 of the notes, told with databases instead of packets."
  - title: "Basic Category Theory"
    authors: "Tom Leinster"
    source: "Cambridge University Press; free on arXiv"
    year: 2014
    url: "https://arxiv.org/abs/1612.09375"
    note: "Section 1.2, Functors: the definition, forgetful functors, contravariant functors, and full and faithful functors."
  - title: "Header Space Analysis: Static Checking for Networks"
    authors: "Peyman Kazemian, George Varghese and Nick McKeown"
    source: "USENIX NSDI"
    year: 2012
    url: "https://www.usenix.org/conference/nsdi12/technical-sessions/presentation/kazemian"
    note: "For the network side. Read the introduction and the section on the model, and look for the composition of transfer functions along paths."
---

Units 1 to 3 worked inside one category at a time. This unit steps outside, to functors: translations from one category to another that keep composition and identities intact. In plain words, a functor is a translation that keeps the grammar. You have already met several without the name: latency as a compositional quantity, diagrams, and virtual network embeddings. On networks, functors are the precise form of measurements that respect routes, mappings between networks that respect routes, and data that travels along routes, such as packet headers rewritten hop by hop.

## How to work through this unit

Allow about 4 hours.

1. Skim the slides once, quickly, without stopping (20 minutes). You only need the shape of the argument.
2. Read Part A with a pencil (90 minutes). For every example, check the two functor laws yourself.
3. Read Part B (60 minutes). For every network measurement or mapping, ask: what are the two categories, and does the translation keep composition?
4. Do the exercises in Part C before reading the solutions (60 minutes).
5. Read the short external reading listed above (30 to 60 minutes).

## What you will be able to do

1. State the definition of a functor and check the two functor laws for a proposed translation.
2. Recognise functors between preorders (order-preserving maps) and between monoids (homomorphisms).
3. Give standard examples: forgetful functors, the powerset functor, hom functors, and the path functor.
4. Prove that functors preserve commuting diagrams and isomorphisms, and explain why they need not preserve monos.
5. Use any functor to build an invariant, and so to prove that two objects are not isomorphic.
6. Define a functor out of a free category by saying only where nodes and links go.
7. Say what full and faithful mean, and classify common network measurements accordingly.
8. Model latency, hop count, embeddings, aggregations and header rewriting on a network as functors, and use functoriality as a consistency check on measurements.

## Before you start

Units 1 to 3, especially compositional quantities (Unit 1, Section B.5), commuting diagrams and presentations (Unit 2, Sections A.2 and A.8), and isomorphisms and graph homomorphisms (Unit 3, Sections A.2 and B.1).

## What is in the notes

**Part A: the theory**

- A.1 From inside a category to between categories
- A.2 The definition of a functor
- A.3 A recipe for checking that something is a functor
- A.4 Three easy functors
- A.5 Functors between preorders: order-preserving maps
- A.6 Functors between monoids: homomorphisms
- A.7 Functors between larger categories
- A.8 What functors preserve, and what they do not
- A.9 Composing functors: the category Cat
- A.10 Functors out of a free category
- A.11 Diagrams are functors
- A.12 Full and faithful
- A.13 Reversing the arrows: contravariant functors

**Part B: on networks**

- B.1 Measurements are functors
- B.2 Measurements that are not functors
- B.3 Every functor decides which routes look the same
- B.4 Maps between networks give functors between route categories
- B.5 Composing functors: measuring through a map
- B.6 Data on a network: functors into Set
- B.7 Pushing sets forward, pulling them back
- B.8 Faithful and full, on networks
- B.9 Invariants from functors
- B.10 Where the analogy breaks

**Part C: exercises, solutions, reading and a glossary**

## Looking ahead

This unit ends with a question it cannot answer: how do we compare two functors with the same source and target? Latency measured on Monday and on Tuesday are two such functors; latency in milliseconds and in microseconds are two functors related by a conversion that works the same way on every route. Unit 5 calls such a comparison a natural transformation.
