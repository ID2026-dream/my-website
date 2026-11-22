---
title: Category Theory for Networks
summary: From no category theory at all to reading applied category theory papers about communication networks, one idea at a time.
level: Reading course
facts: ['About 4 hours per unit', 'Notes and slides for every unit', 'Units 6 to 11 in preparation']
icon: graph
color: '#2e5d9f'
order: 1
updated: 2026-11-01
draft: false
---

This course takes you from no category theory at all to the point where you can see how each of its main ideas applies to communication networks, and can read applied category theory papers about networks. Applying these ideas to specific research problems comes after the core units.

## How every unit works

Each unit has the same two halves, followed by exercises:

- **Part A: the theory.** The mathematical idea, explained slowly, with small pictures and small examples you can check by hand.
- **Part B: the network analogy.** The same idea, read as a statement about communication networks, routes and measurements. This is where the theory meets networks.
- **Part C: exercises, solutions and reading.** Exercises with full solutions, a short external reading list and a glossary.

Every unit comes as a slide deck and as detailed notes. The slides give the shape of the argument; the notes give every step, every example worked in full, and the exercises. Each slide tells you which section of the notes it belongs to.

## What you need before starting

Very little. You need to know what a set is, what a function is, and what a directed graph is (dots joined by arrows). Unit 1 refreshes sets and functions in a few minutes. Nothing else is assumed: no abstract algebra, no topology.

## The course at a glance

| Unit | Part A: theory | Part B: network meaning |
| --- | --- | --- |
| 1 | [Categories: objects, arrows, composition](categories/) | Nodes, routes, joining routes |
| 2 | [Diagrams: commutative and string](diagrams/) | When two routes agree; processing pipelines |
| 3 | [Isomorphisms and special arrows](special-arrows/) | Relabelling, embedding, aggregating |
| 4 | [Functors](functors/) | Measurements that respect routes |
| 5 | [Natural transformations](natural-transformations/) | Methods that ignore arbitrary labels |
| 6 | Universal constructions | Joins of flow records, gluing topologies |
| 7 | Adjunctions | Flows versus nodes, coarse versus fine |
| 8 | Monoidal categories, open systems | Parallel links, subnetworks with borders |
| 9 | Sheaves | Local-to-global consistency of traffic |
| 10 | Categories and learning | Neural networks as composable layers |
| 11 | Capstone | Modelling a real network, end to end |

Units 1 to 5 are available now. Units 6 to 11 are in preparation.

## Notation

Categories are written in curly letters (𝒞, 𝒟). Objects are capital letters (A, B, C). Arrows are small letters (f, g, h). Named categories are in bold (**Set**, **Path**(G)). Network nodes are small letters (a, b, c). Each unit ends with a glossary of its symbols.
