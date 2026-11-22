---
title: "One quantum system"
summary: "Qubits, measurement, phase and evolution: how to describe one particle of light, and what we can do with it."
icon: globe-simple
readingsIntro: "Read after finishing the notes (about 30 to 45 minutes)."
downloads:
  - label: "Detailed notes (65 pages)"
    file: unit01-notes.pdf
  - label: "Slides (89 pages)"
    file: unit01-slides.pdf
readings:
  - title: "The Feynman Lectures on Physics, Volume III, Chapter 1: Quantum behavior"
    authors: "Richard P. Feynman, Robert B. Leighton and Matthew Sands"
    source: "Caltech, free online"
    url: "https://www.feynmanlectures.caltech.edu/III_01.html"
    note: "Bullets, water waves and electrons through two slits: the clearest account of interference ever written. Chapter 3, on probability amplitudes, is the natural next step."
  - title: "Quantum Mechanics: The Theoretical Minimum"
    authors: "Leonard Susskind and Art Friedman"
    source: "Basic Books"
    year: 2014
    note: "Lectures 1 to 3. A gentle, careful introduction to spin states, measurement and the principles of Part A."
  - title: "Quantum Computation and Quantum Information"
    authors: "Michael A. Nielsen and Isaac L. Chuang"
    source: "Cambridge University Press, 10th anniversary edition"
    year: 2010
    note: "Section 1.2 (quantum bits), Section 2.2 (the postulates of quantum mechanics) and the start of Section 2.4 (the density operator). This is the standard reference for the rest of the course."
  - title: "Optics"
    authors: "Eugene Hecht"
    note: "For the polarisation pictures: the chapter on polarisation, for Malus’s law, Stokes parameters and the Poincaré sphere."
  - title: "Quantum Computing Since Democritus"
    authors: "Scott Aaronson"
    source: "Cambridge University Press"
    year: 2013
    note: "Chapter 9, which presents quantum mechanics as “probability with minus signs”, the idea behind Exercise 15."
    optional: true
---

How do we describe one small quantum system, such as one particle of light, and what can we do with it? This unit answers in fifteen short steps. Every step starts from something you already know, such as sunglasses, shadows, clocks, waves and runners on a track, and ends at the exact point where the everyday picture stops working. Everything in the later units is built on these ideas, so the unit goes slowly.

## How to work through this unit

Allow about 6 hours.

1. Skim the slides once, quickly (20 minutes).
2. Read Part A slowly, one section at a time (3 hours). Do the “Check yourself” questions before reading their answers. Sections A.1 to A.4 need no symbols beyond school maths; take your time there, because everything else rests on them.
3. Do the exercises in Part B before reading the solutions (2 hours).
4. Read the short external reading listed above (30 minutes).

## What you will be able to do

1. Explain, with the sunglasses experiment, how smooth fractions of light become probabilities for single photons, and why asking a photon a question changes it.
2. Describe a qubit state as an arrow, find the odds of an answer as a squared shadow, and explain why the numbers must be complex.
3. Place any qubit state on the Bloch sphere, and read off which question it answers with certainty.
4. Read Dirac notation as experiments: a ket as a preparation, a bra as a test, a bracket as an amplitude, an outer product as a device, a matrix as a table of conversions.
5. Explain interference as the adding of amplitudes over unrecorded routes, and compute the output of a Mach–Zehnder interferometer.
6. Use the Born rule for any question, say how measurement changes the state, and explain why unknown states cannot be copied.
7. Explain coherence and dephasing with runners on a track, and compute how much coherence survives a random phase.
8. Tell the two kinds of uncertainty apart, and describe a noisy source with a density matrix and a Bloch vector.
9. Describe undisturbed change as a rotation driven by energy, and decoherence as irreversible.
10. For each idea, give the everyday picture and say exactly where it breaks.

## Before you start

Only school mathematics: arithmetic, a little trigonometry (sine and cosine), and squaring. Everything else is re-taught in a grey box at the point where it is first used:

| Maths refresher | Section |
| --- | --- |
| cosine and its square | A.1 |
| arrows (vectors), shadows (components) and Pythagoras | A.4 |
| complex numbers as clock hands; e^iφ; the conjugate | A.5 |
| rows, columns and their product | A.7 |
| a matrix acting on a column | A.8 |
| reading probabilities off a density matrix | A.13 |

## What is in the notes

**Part A: one idea at a time.** Each section pairs an everyday picture with the quantum idea, and ends where the everyday picture breaks.

- A.1 Light through sunglasses
- A.2 Asking changes the answer
- A.3 What a qubit is
- A.4 Arrows and shadows: putting numbers on a state
- A.5 Clock hands: why the numbers are complex
- A.6 A globe of states: the Bloch sphere
- A.7 Writing experiments down: kets, bras and brackets
- A.8 Devices as symbols: filters, converters and matrices
- A.9 Interference: when possibilities cancel
- A.10 Measurement: one question, one answer
- A.11 Keeping in step: phase and coherence
- A.12 Two kinds of uncertainty: pure and mixed states
- A.13 The density matrix: describing a noisy source
- A.14 Change: turning, spinning and stirring
- A.15 Summary of Part A

**Part B: 22 exercises with full solutions, reading, a glossary and a symbol dictionary.**

## Looking ahead

Twice in this unit we pointed forward: a qubit can be mixed because it is part of something bigger, and real qubits lose purity by interacting with things we do not track. Both lead to the same idea, entanglement. Unit 2 builds the description of two or more qubits, shows how to find the state of one part, defines entanglement and the four Bell states, explains decoherence as entanglement with the environment, and ends with fidelity and trace distance. In network terms, Unit 2 is where entangled pairs, the commodity every quantum network produces, enter the course.
