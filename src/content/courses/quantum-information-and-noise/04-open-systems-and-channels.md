---
title: "Open quantum systems and quantum channels"
summary: "What surroundings do to a quantum state, in one language: the quantum channel."
icon: waves
readingsIntro: "Read after finishing the notes (about 30 to 45 minutes)."
downloads:
  - label: "Detailed notes (41 pages)"
    file: unit04-notes.pdf
  - label: "Slides (100 pages)"
    file: unit04-slides.pdf
readings:
  - title: "Quantum Computation and Quantum Information"
    authors: "Michael A. Nielsen and Isaac L. Chuang"
    source: "Cambridge University Press, 10th anniversary edition"
    year: 2010
    note: "Chapter 8: Sections 8.1 to 8.3 (quantum operations, Kraus and environment pictures, the Bloch-ball picture) and Section 8.4 (the standard noise channels). The classic treatment of this whole unit."
  - title: "Lecture notes for Physics 219: Quantum Computation"
    authors: "John Preskill"
    source: "Caltech, free online"
    url: "http://theory.caltech.edu/~preskill/ph229/"
    note: "Chapter 3, Foundations II: measurement and evolution. Open systems, Kraus operators and the Lindblad equation, written for physicists."
  - title: "Quantum Information Theory"
    authors: "Mark M. Wilde"
    source: "Cambridge University Press, 2nd edition; free on arXiv"
    year: 2017
    url: "https://arxiv.org/abs/1106.1445"
    note: "Chapter 4 and Section 5.2: channels, Choi states and complementary channels, with an eye on capacities (Units 10 to 12)."
  - title: "Colloquium: Non-Markovian dynamics in open quantum systems"
    authors: "Heinz-Peter Breuer, Elsi-Mari Laine, Jyrki Piilo and Bassano Vacchini"
    source: "Reviews of Modern Physics 88, 021002"
    year: 2016
    url: "https://doi.org/10.1103/RevModPhys.88.021002"
    note: "Sections I and II, for Section A.13."
    optional: true
---

Units 2 and 3 met one disturbance after another: loss in a fibre, vacuum leaking in through a beam splitter, dark counts, and dephasing, energy loss and depolarising noise in memories. This unit shows that they are all the same kind of object, the quantum channel. It answers four questions. What is an open system? What is a channel, and which rules from sent state to received state are allowed? How do we write channels down, as Kraus operators or as one bigger reversible process with the surroundings thrown away (Stinespring)? And how do channels behave in a network: the common channels, how they combine along a path, how fast they act in time, and how to measure an unknown one?

## How to work through this unit

Allow about 6 hours.

1. Skim the slides once, quickly (20 minutes).
2. Read Part A slowly, one section at a time (3 hours). Do the “Check yourself” questions before reading their answers. Sections A.2 to A.8 are the heart of the unit: what a channel is, the two ways of writing one, and the common channels.
3. Do the exercises in Part B before reading the solutions (2 hours).
4. Read the short external reading listed above (30 minutes).

## What you will be able to do

1. Explain what an open quantum system is, and why ignoring the surroundings turns pure states into mixed ones.
2. State the three requirements on a quantum channel, and test whether a proposed rule is a channel.
3. Explain why “completely positive” is needed, using the transpose applied to half of a Bell pair.
4. Apply a channel from its Kraus operators, and check that a set of Kraus operators is complete.
5. Describe a channel as a reversible process on a bigger system (Stinespring), and say what the complementary channel is.
6. Draw what a qubit channel does to the Bloch ball.
7. Write down and use the bit-flip, phase-flip, depolarising, amplitude-damping, dephasing and erasure channels, and connect T₁ and T₂ to them.
8. Describe fibre loss as a channel, for single-rail and for dual-rail qubits, and say when a channel destroys all entanglement.
9. Combine channels along a network path, and explain when the order matters.
10. Explain the Lindblad equation in words, tell Markovian from non-Markovian noise, and describe how an unknown channel is measured through its Choi state.

## Before you start

Unit 1 (density matrices, the Bloch ball, Pauli matrices X, Y, Z, coherence and T₂), Unit 2 (two systems, Bell states, the partial trace, decoherence as the surroundings keeping a record, Werner states and fidelity) and Unit 3 (loss as a beam splitter, thermal light). Each is recalled briefly when it is used. New mathematics is re-taught in grey boxes:

| Maths refresher | Section |
| --- | --- |
| throwing away part of a system: the partial trace, recalled | A.1 |
| functions as machines, and what “linear” means | A.2 |
| the transpose of a matrix | A.3 |
| matrix products and the dagger (conjugate transpose) | A.4 |
| reading a 2 × 2 density matrix as a Bloch vector | A.6 |
| exponential decay, and why √(1 − γ) appears | A.8 |
| adding rates: why 1/T₂ is a sum | A.9 |
| applying functions one after another | A.12 |
| a rate equation and its solution | A.13 |

## What is in the notes

**Part A: one idea at a time.** Each section pairs an everyday picture with the quantum idea, and ends where the everyday picture breaks.

- A.1 Open systems
- A.2 What a channel is: state in, state out
- A.3 Why “completely” positive?
- A.4 Writing a channel down: Kraus operators
- A.5 Where the information goes: the Stinespring picture
- A.6 Seeing a channel: the Bloch-ball picture
- A.7 The Pauli channels and depolarising noise
- A.8 Losing energy: amplitude damping
- A.9 Losing phase: dephasing and T₂
- A.10 Loss and erasure: photons as channels
- A.11 Measuring is a channel too: entanglement-breaking channels
- A.12 Channels in a row and side by side
- A.13 Noise in time: the Lindblad equation and memory effects
- A.14 Testing a channel: process tomography and the Choi state
- A.15 Unit 4 in one page

**Part B: 24 exercises with full solutions, reading, a glossary and a symbol dictionary.**

## Looking ahead

This unit gave one language for every disturbance: the channel. But the disturbances come from very different physics. Some are classical: a laser’s power wobbles, a clock jitters, a fibre’s temperature drifts. Some are quantum: vacuum fluctuations, the shot noise of photons arriving at random. Some are both: a classical signal sharing a fibre creates quantum noise photons. Unit 5 sorts noise by where it comes from, and shows how each kind ends up as one of the channels of this unit.
