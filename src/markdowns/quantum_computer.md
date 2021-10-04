
# What is Quantum Computing?

Table of Content

1. Introduction

2. History

3. Why Quantum Computers?

4. Basics of Quantum Computing

   a. Quantum Entanglement

   b. Superposition

   1. Quantum Supremacy

5. The Anatomy of A Quantum Computer

6. Potential Applications of Quantum Computers'

7. Where we are now?



# Quantum Computing

![IBM &#39;super-fridge&#39; aims to solve quantum computer cooling problem -](https://techhq.com/wp-content/uploads/2019/09/40645906341_c38b22d693_k.jpg)

History

1980 Physicist Paul Benioff proposed a quantum mechanical model of the Turing machine

1981  Richard Feynman and Paul Benioff proposed a basic model for a quantum computer

![Remembering Richard Feynman | www.caltech.edu](https://caltech-prod.s3.amazonaws.com/main/images/feynman01-NEWS-WEB.width-600_tSwRQP5.jpg)

1985 David Deutsch proposed the first universal quantum Turing machine and paved the way to the quantum circuit model

1994 Peter Shor developed a quantum algorithm for factoring integers with the potential to decrypt RSA-encrypted communications

![What is Shor&#39;s factoring algorithm? - YouTube](https://i.ytimg.com/vi/hOlOY7NyMfs/maxresdefault.jpg)

1996 Lov Grover, at Bell Labs, invents the quantum database search algorithm (Grover's Algorithm).

2019 IBM unveils its first commercial quantum computer, the IBM Q System One with 27 qubits.

![IBM&#39;s new quantum computer is a symbol, not a breakthrough - The Verge](https://cdn.vox-cdn.com/thumbor/xANXGDNHPq0lYOh0hmEPFndU3ZY=/0x0:4000x4000/1400x933/filters:focal(1686x1939:2326x2579):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62805283/46602874791_c009b3def8_o.0.jpg)



# Foreword

Before we delve into the topic of quantum computing:computer:, we feel that it is important that we bring up the objectives of the article, so that you as the reader will be able to better appreciate what will be covered. The article is written for **physics** and **computer science** high school students. Our main goal for the article is:

1. To give the readers a basic understanding of the essence of quantum computers in the most simplistic and intuitive way possible (Don't worry there's no complex math :grinning:)
2. To provide interested readers with a *really* brief overview on quantum computing so that they can decide if they want to delve deeper into the subject

![Quantum](https://imgs.xkcd.com/comics/quantum.png)

# Introduction

A quantum computer solves computational problems by exploiting the properties of quantum mechanics. The main goal of quantum computers is to demonstrate quantum supremacy where quantum computers are able to perform tasks that classical computers would need to take millions of years to compute in under a few minutes.

# How Does it Work

### Overview

Quantum computing harnesses the phenomena of quantum mechanics to deliver a huge leap forward in computation to solve certain problems. In particular, it relies on physical phenomena such as quantum entanglement, interference and superposition. In other words, we are trying to use the universe itself to run compute results that we are interested in.

Note: Beyond this part of the guide, you will need some basic understanding on superposition and quantum entanglement, which are explained here.

### The Qubit

In quantum computers, we have these things called *qubits* which are analogous to the bits in a classical computer, but with a twist $\textendash$ unlike ordinary bits which can only be in two states (1 or 0), a qubit can be in a superposition of both states. 

In ordinary computers, a bit is usually stored in a transistor where a high voltage (*eg. 5V*) represents a $1$ state and a low voltage (*eg. 0V*) represents a $0$ state. On the other hand, the state of $1$ and $0$ in a quantum computer is usually represented as some property of a particle that exhibits quantum properties such as the spin $m_s$ of an electron where $\frac{1}{2}$ and $-\frac{1}{2}$ corresponds to the $1$ and $0$ state respectively.

<div class="hover-state">There are also other ways of representing qubit states, such as the polarization of a photon (horizontal or vertical), or the spin of a nuclei (1/2 or -1/2)</div>

A single qubit which is in superposition will have 2 states :`1` or `0`

Two qubits that are in superposition will have 4 states :`00` `01` `10` `11` 

Three qubits that are in superposition will have 8 states: `000` `001` `010` `011` `100` `101` `110` `111`

Therefore, a quantum computer with $N$ qubits, will be able to represent $2^N$ states. This exponential increase in the possible represented states is key to enabling quantum computers to function. We will usually encode the information in our problems as these superposition states. Then, as the qubits are in a superposition state, applying one operation on the qubit will be equivalent to applying an operation on many possible inputs simultaneously. 

Hence, we can perform many operations in just a single step. However, how are we supposed to interpret the results? Recall that when we observe the qubits that are in a superposition state, it will immediately collapse into one of the possible states based on probability. Hence, we can only read a single state output from our quantum system. So then, how are we supposed to read the results form the collapsed state? 

### Quantum Algorithm

The answer lies in the quantum algorithm $\textendash$​ the instructions and operations that we have applied onto the quantum system. The algorithm is designed in a way such that all of the incorrect states (states representing the wrong answers) destructively interfere and "cancel" each other out. This leaves us with a high probability of observing the desired state (the state that represents the correct answer). 

Due to its randomness nature, quantum computation is inherently error prone. Hence, what we do is that we run the same algorithm multiple times, collect the results and tabulate them to obtain the correct answer with high confidence and low uncertainty. 

It should also be noted that quantum computers are often used to solve a class of problems known as NP-problems. The solutions to these problems can be easily verified using classical computers in polynomial time. However, the time required to find these solutions will be exponential, which will take millions of years for a classical computer to solve, but only a few minutes for quantum computers. Since they are easily verifiable, we can check with certainty if the solution we obtain from the quantum computer is correct. For example integer factorization is a NP-problem. Checking if some numbers are a factor of a number is easy: we just need to multiply them. However, finding the factors for a number is generally *very* difficult. 

![The Math behind Quantum Computing — Qubits and Superposition | by Ryan Lam  | DataDrivenInvestor](https://miro.medium.com/max/1400/0*xllJMzdAuDlba2xL)

# Anatomy of A *Simplified* Quantum Computer

There are many setups for a quantum computer. Here's the *dilution refrigerator* setup, which is quite commonly used.

![img](https://miro.medium.com/max/945/1*6DDQIebhDbbzopuWcNe5mQ.png)

**Shell** It is installed to isolate the system from the rest of the environment. It helps to maintain the low temperature and shield the internal components from any stray electromagnetic waves

**Plates** The plates hold all the components in place so that they can decrease in temperature. From top to bottom, the plates decrease in temperature from ~4 Kelvin at the topmost plate to ~0.15K at the bottom most plate (Colder than the temperature in outer space)

**Mixing Chamber** In the chamber, helium-3 and helium-4 are mixed together, such that they act as a cooling system to conduct heat away from the processor to allow it to operate at temperatures as low as 0.15 K.

**Cables and Connectors** These cables carries signals that are read from the quantum processor, they are cooled to superconducting states in order to minimize energy loss while transmitting data

**Cryoperm Shield** The shield houses the quantum processor and also blocks any external electromagnetic radiation from interfering with the processor

References:

https://en.wikipedia.org/wiki/Timeline_of_quantum_computing_and_communication

https://qiskit.org/textbook/preface.html

https://www.ibm.com/topics/quantum-computing

https://www.youtube.com/playlist?list=PL50XnIfJxPDWDyea8EbbLe8GHfXkWU7W_

http://hyperphysics.phy-astr.gsu.edu/hbase/spin.html	

https://qiskit.org/documentation/qc_intro.html

https://medium.com/swlh/making-a-quantum-computer-at-home-bc59afe72d7d