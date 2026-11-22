---
title: "Diagrams"
summary: "Commutative and string diagrams: when two routes agree, and how to draw packet-processing pipelines."
icon: network
readingsIntro: "Read after finishing the notes (about 30 to 45 minutes)."
downloads:
  - label: "Detailed notes (27 pages)"
    file: Unit02-Diagrams-Notes.pdf
  - label: "Slides (48 pages)"
    file: Unit02-Diagrams-Slides.pdf
readings:
  - title: "An Invitation to Applied Category Theory: Seven Sketches in Compositionality"
    authors: "Brendan Fong and David I. Spivak"
    source: "Cambridge University Press; free on arXiv"
    year: 2019
    url: "https://arxiv.org/abs/1803.05316"
    note: "Section 3.2.2, Presenting categories via path equations (for Section A.8 of the notes); then Section 2.2.2, Introducing wiring diagrams, for a first look at string diagrams in another setting."
  - title: "Basic Category Theory"
    authors: "Tom Leinster"
    source: "Cambridge University Press; free on arXiv"
    year: 2014
    url: "https://arxiv.org/abs/1612.09375"
    note: "Section 1.1: the paragraphs on commutative diagrams."
  - title: "An Introduction to String Diagrams for Computer Scientists"
    authors: "Robin Piedeleu and Fabio Zanasi"
    source: "Cambridge University Press; free on arXiv"
    year: 2025
    url: "https://arxiv.org/abs/2305.08768"
    note: "The opening chapters, for string diagrams in depth."
    optional: true
---

Unit 1 ended with a question it could not yet answer: in the path category of a network, the routes a → b → c and a → c are different arrows, yet we often want to say that they agree. This unit gives the language for saying that, in two pictures. Commutative diagrams are equations between composites, drawn so you can see them. String diagrams draw the same equations with arrows as boxes and objects as wires, which makes long chains and processes running side by side easy to read.

## How to work through this unit

Allow about 4 hours.

1. Skim the slides once, quickly, without stopping (20 minutes). You only need the shape of the argument.
2. Read Part A with a pencil (90 minutes). Redraw every diagram and check every equation yourself.
3. Read Part B (60 minutes). For every network diagram, ask: in which category is this diagram supposed to commute?
4. Do the exercises in Part C before reading the solutions (60 minutes).
5. Read the short external reading listed above (30 to 60 minutes).

## What you will be able to do

1. Say what a diagram in a category is, and what it means for a diagram to commute.
2. Check whether a triangle or a square of functions commutes, by computing both routes or by finding one element where they differ.
3. Prove that two commuting squares placed side by side give a commuting rectangle (the pasting lemma), and explain why the converse fails.
4. Present a category by a graph together with equations between paths, and count its arrows.
5. Read and draw string diagrams for sequential and parallel composition, and state the interchange law.
6. Decide in which category a network diagram commutes: routes, latencies, hop counts or delivered content.
7. Recognise when a proposed way of declaring routes equal is compatible with composition (a congruence), and when it is not.
8. Draw a packet-processing pipeline as a string diagram, and use the picture to decide whether two pipelines do the same job.

## Before you start

Unit 1: the definition of a category, the examples Set, preorders, monoids and Path(G), and the idea of a compositional quantity. If any of these feels shaky, reread Sections A.3, A.10 and B.5 of Unit 1 first.

## What is in the notes

**Part A: the theory**

- A.1 What a diagram is
- A.2 What it means for a diagram to commute
- A.3 Triangles and squares
- A.4 A recipe for checking that a diagram commutes
- A.5 Pasting: commuting pieces glue together
- A.6 The category laws, drawn as diagrams
- A.7 Diagram chasing: proving things by walking
- A.8 Presenting a category: a graph plus equations
- A.9 String diagrams: a second way to draw
- A.10 Side by side: parallel composition
- A.11 From picture to formula and back

**Part B: on networks**

- B.1 The first question: in which category?
- B.2 Routes that agree on cost
- B.3 Declaring routes equal: congruences on a network
- B.4 Commuting diagrams of data: protocols that are transparent
- B.5 Commuting as a consistency check: clocks
- B.6 String diagrams for packet processing
- B.7 Where the analogy breaks

**Part C: exercises, solutions, reading and a glossary**

## Looking ahead

Two diagrams in Part B were almost about reversibility: a transparent tunnel, where decoding undoes encoding, and lossless compression, where decompression undoes compression. Unit 3 studies arrows that can be undone, isomorphisms, and their weaker cousins that can be undone only on one side. On networks they describe relabelling nodes, embedding one network in another, and aggregating many addresses into one.
