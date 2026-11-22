---
title: "Many systems"
summary: "Entanglement, decoherence and distance: two quantum systems, and how to measure the damage noise does to them."
icon: link
readingsIntro: "Read after finishing the notes (about 30 to 45 minutes)."
downloads:
  - label: "Detailed notes (45 pages)"
    file: unit02-notes.pdf
  - label: "Slides (100 pages)"
    file: unit02-slides.pdf
readings:
  - title: "The Nobel Prize in Physics 2022: popular science background"
    source: "Nobel Prize Outreach"
    year: 2022
    url: "https://www.nobelprize.org/prizes/physics/2022/popular-information/"
    note: "A short, well-illustrated account of Bell’s test and the experiments of Section A.4."
  - title: "Quantum Mechanics: The Theoretical Minimum"
    authors: "Leonard Susskind and Art Friedman"
    source: "Basic Books"
    year: 2014
    note: "Lectures 6 and 7: combining systems, entanglement, and the state of one part."
  - title: "Quantum Computation and Quantum Information"
    authors: "Michael A. Nielsen and Isaac L. Chuang"
    source: "Cambridge University Press, 10th anniversary edition"
    year: 2010
    note: "Section 1.3.7 (teleportation), Section 2.2.8 (composite systems), Section 2.4.3 (the reduced density operator), Section 2.6 (EPR and the Bell inequality), and Chapter 9 up to Section 9.2.2 (trace distance and fidelity)."
  - title: "Lecture notes for Physics 219: Quantum Computation"
    authors: "John Preskill"
    source: "Caltech, free online"
    url: "http://theory.caltech.edu/~preskill/ph229/"
    note: "Chapter 4, Quantum entanglement, for a deeper treatment of Bell inequalities and the partial trace."
    optional: true
  - title: "Decoherence and the transition from quantum to classical"
    authors: "Wojciech H. Zurek"
    source: "Physics Today 44(10), 36"
    year: 1991
    url: "https://doi.org/10.1063/1.881293"
    note: "The classic readable account of Section A.10."
    optional: true
---

A network is about connections: a photon in Dublin linked to a memory in Cork. So this unit asks what happens when there are two quantum systems, and how we measure the damage that noise does to them. The answers bring three ideas. Entanglement: two systems can share a single state that neither has on its own, and this is the resource a quantum network distributes. Decoherence: when a system’s surroundings “take notes” on it, the qubit loses its quantum character; this is what noise is, underneath. Distance: the trace distance and the fidelity say how far a state is from the one we wanted, and every network experiment reports them.

## How to work through this unit

Allow about 6 hours.

1. Skim the slides once, quickly (20 minutes).
2. Read Part A slowly, one section at a time (3 hours). Do the “Check yourself” questions before reading their answers. Sections A.1 to A.5 are the heart of the unit: entanglement, Bell’s test and why it cannot send messages.
3. Do the exercises in Part B before reading the solutions (2 hours).
4. Read the short external reading listed above (30 minutes).

## What you will be able to do

1. Describe two qubits with four amplitudes, build a product state with the “multiplication table”, and explain why the description grows as 2ⁿ.
2. Tell a product state from an entangled one with a one-line test, and explain the difference using a pair of gloves.
3. Write the four Bell states, and predict their correlations for any pair of questions.
4. Explain Bell’s test as a game that a hidden list wins at most 75% of the time and an entangled pair wins 85% of the time.
5. Explain why entanglement cannot be used to send messages.
6. Find the state of one part of a pair, and explain how a pure whole can have mixed parts.
7. Make entanglement with a CNOT gate, and describe teleportation and entanglement swapping step by step.
8. Explain decoherence as the surroundings keeping a record, and describe dephasing, energy loss and depolarising noise.
9. Compute the trace distance and the fidelity between two states, and say what each means in an experiment.
10. Follow the fidelity of an entangled pair through a network: transmission, storage, swapping and purification.

## Before you start

Unit 1, in particular kets, bras and brackets (Sections A.7 and A.8 of Unit 1), measurement (A.10), coherence (A.11) and the density matrix (A.13). Each is recalled briefly when it is used. New mathematics is re-taught in grey boxes:

| Maths refresher | Section |
| --- | --- |
| the tensor product as a multiplication table | A.1 |
| when does a grid of numbers factorise? | A.2 |
| adding mod 2 (exclusive or) | A.4 |
| marginal probabilities: adding up over the other system | A.6 |
| 4 × 4 matrices and the CNOT gate | A.7 |
| exponential decay and multiplying many small factors | A.10 |
| absolute differences and the trace of a matrix | A.12 |

## What is in the notes

**Part A: one idea at a time.** Each section pairs an everyday picture with the quantum idea, and ends where the everyday picture breaks.

- A.1 Two systems at once
- A.2 Independent or entangled?
- A.3 Perfect correlations in every question
- A.4 Bell’s test: no hidden list
- A.5 No signalling: correlation without communication
- A.6 The state of one part
- A.7 Making entanglement: gates and sources
- A.8 Teleportation: moving a qubit without sending it
- A.9 Entanglement swapping: linking nodes that never met
- A.10 Decoherence: the surroundings take notes
- A.11 Three ways to forget
- A.12 How different are two states? The trace distance
- A.13 How good is a copy? Fidelity
- A.14 Entanglement across distance
- A.15 Summary of Part A

**Part B: 23 exercises with full solutions, reading, a glossary and a symbol dictionary.**

## Looking ahead

Almost every qubit in this unit that travelled anywhere was a photon. Unit 3 looks at light itself as the carrier of quantum information: what a photon is, how lasers differ from single-photon sources, why most light is not made of neat single photons, how loss in a fibre acts on quantum states of light, and the encodings used in real networks.
