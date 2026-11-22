---
title: "Categories"
summary: "Objects, arrows and composition, and how a communication network becomes a category of routes."
icon: nodes
readingsIntro: "Read after finishing the notes (about 30 to 45 minutes)."
downloads:
  - label: "Detailed notes (28 pages)"
    file: Unit01-Categories-Notes.pdf
  - label: "Slides (47 pages)"
    file: Unit01-Categories-Slides.pdf
readings:
  - title: "An Invitation to Applied Category Theory: Seven Sketches in Compositionality"
    authors: "Brendan Fong and David I. Spivak"
    source: "Cambridge University Press; free on arXiv"
    year: 2019
    url: "https://arxiv.org/abs/1803.05316"
    note: "Section 3.2, Categories, especially 3.2.1 on free categories."
  - title: "Basic Category Theory"
    authors: "Tom Leinster"
    source: "Cambridge University Press; free on arXiv"
    year: 2014
    url: "https://arxiv.org/abs/1612.09375"
    note: "Section 1.1, Categories. Read the definition and the examples; skip anything that mentions groups or topological spaces if it is unfamiliar."
  - title: "Category Theory for Programmers"
    authors: "Bartosz Milewski"
    url: "https://github.com/hmemcpy/milewski-ctfp-pdf"
    note: "Chapter 1, Category: the essence of composition. For intuition through programming."
    optional: true
---

Category theory is built on one idea: the arrows between things matter more than the things themselves. This unit defines a category piece by piece, works through the standard small examples, and then reads a communication network as a category whose arrows are routes.

## How to work through this unit

Allow about 4 hours.

1. Skim the slides once, quickly, without stopping (20 minutes). You only need the shape of the argument.
2. Read Part A of the notes with a pencil (90 minutes). Redraw every picture yourself.
3. Read Part B (60 minutes). Keep asking: what are the objects, what are the arrows, how do they compose?
4. Do the exercises in Part C before reading the solutions (60 minutes).
5. Read the short external reading listed above (30 to 60 minutes).

## What you will be able to do

1. State the definition of a category from memory, in words and in symbols.
2. Check whether a proposed category really is one, by testing composition, identities and the two laws.
3. Recognise five standard examples: sets and functions, tiny drawn categories, preorders, monoids, and the free category on a graph.
4. Turn a communication network into a category of routes, and say exactly what the objects, arrows, composition and identities are.
5. Decide whether a path quantity (latency, hop count, loss, average delay) is compositional, and repair it when it is not.
6. Describe an end-to-end connection as a composite arrow, and state "which hops make up this route?" as a question about factorising arrows.

## Before you start

Very little. You need to know what a set is, what a function is, and what a directed graph is. Section A.2 refreshes sets and functions in a few minutes. Nothing else is assumed.

## What is in the notes

**Part A: the theory**

- A.1 The big idea: arrows matter more than things
- A.2 Warm-up: sets and functions in ten minutes
- A.3 The definition of a category, piece by piece
- A.4 Why exactly these two laws?
- A.5 Notation you will meet in papers
- A.6 First example: sets and functions
- A.7 Tiny categories you can draw
- A.8 Preorders: categories with at most one arrow
- A.9 Monoids: categories with one object
- A.10 Free categories: arrows are paths
- A.11 Non-examples: when something is not a category
- A.12 Three things beginners get wrong

**Part B: on networks**

- B.1 A network as a directed graph
- B.2 Routes are arrows: the path category of a network
- B.3 Counting routes
- B.4 Keeping less: reachability as a preorder
- B.5 Keeping a number: compositional path quantities
- B.6 Factorising routes: seeing only part of the journey
- B.7 Overlays: arrows that are themselves routes
- B.8 Where the analogy breaks

**Part C: exercises, solutions, reading and a glossary**

## Looking ahead

In the path category of a network, two different routes from a to d are two different arrows. Often we want to say that two routes agree in some respect: they deliver the same content, or they have the same latency. Unit 2 introduces diagrams and the idea of a diagram commuting, which is how category theory says that two ways of getting from here to there give the same result.
