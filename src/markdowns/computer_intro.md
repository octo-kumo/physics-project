<span></span>

# Quantum Computing


![Quantum](https://imgs.xkcd.com/comics/quantum.png)

# Introduction

A quantum computer solves computational problems by exploiting the properties of quantum mechanics. The main goal of quantum computers is to demonstrate quantum supremacy where quantum computers are able to perform tasks that classical computers would need to take millions of years to compute in under a few minutes.

# How Does it Work

### Overview

Quantum computing harnesses the phenomena of quantum mechanics to deliver a huge leap forward in computation to solve certain problems. In particular, it relies on physical phenomena such as quantum entanglement, interference and superposition. In other words, we are trying to use the universe itself to run compute results that we are interested in.

Note: Beyond this part of the guide, you will need some basic understanding on superposition and quantum entanglement, which are explained [here](https://octo-kumo.github.io/physics-project/cat).

### The Qubit

In quantum computers, we have these things called *qubits* which are analogous to the bits in a classical computer, but with a twist $-$ unlike ordinary bits which can only be in two states (1 or 0), a qubit can be in a superposition of both states. 

In ordinary computers, a bit is usually stored in a transistor where a high voltage (*eg. 5V*) represents a $1$ state and a low voltage (*eg. 0V*) represents a $0$ state. On the other hand, the state of $1$ and $0$ in a quantum computer is usually represented as some property of a particle that exhibits quantum properties such as the spin $m_s$ of an electron where $\frac{1}{2}$ and $-\frac{1}{2}$ corresponds to the $1$ and $0$ state respectively.

There are also other ways of representing qubit states, such as the polarization of a photon (horizontal or vertical), or the spin of a nuclei (1/2 or -1/2)

A single qubit which is in superposition will have 2 states :`1` or `0`

Two qubits that are in superposition will have 4 states :`00` `01` `10` `11` 

Three qubits that are in superposition will have 8 states: `000` `001` `010` `011` `100` `101` `110` `111`

Therefore, a quantum computer with $N$ qubits, will be able to represent $2^N$ states. This exponential increase in the possible represented states is key to enabling quantum computers to function. We will usually encode the information in our problems as these superposition states. Then, as the qubits are in a superposition state, applying one operation on the qubit will be equivalent to applying an operation on many possible inputs simultaneously. 

Hence, we can perform many operations in just a single step. However, how are we supposed to interpret the results? Recall that when we observe the qubits that are in a superposition state, it will immediately collapse into one of the possible states based on probability. Hence, we can only read a single state output from our quantum system. So then, how are we supposed to read the results form the collapsed state? 

<br />
<br />

<figure align="center">
<img src="https://miro.medium.com/max/1400/0*xllJMzdAuDlba2xL" alt="drawing" width="900" />

</figure>

<br />
<br />


### Quantum Algorithm

The answer lies in the quantum algorithm $\textendash$​ the instructions and operations that we have applied onto the quantum system. The algorithm is designed in a way such that all of the incorrect states (states representing the wrong answers) destructively interfere (just like how waves do) and "cancel" each other out. This leaves us with a high probability of observing the desired state (the state that represents the correct answer). 

Due to its randomness nature, quantum computation is inherently error prone. Hence, what we do is that we run the same algorithm multiple times, collect the results and tabulate them to obtain the correct answer with high confidence and low uncertainty. 

It should also be noted that quantum computers are often used to solve a class of problems known as NP-problems. The solutions to these problems can be easily verified using classical computers in polynomial time. However, the time required to find these solutions will be exponential, which will take millions of years for a classical computer to solve, but only a few minutes for quantum computers. Since they are easily verifiable, we can check with certainty if the solution we obtain from the quantum computer is correct. For example integer factorization is a NP-problem. Checking if some numbers are a factor of a number is easy: we just need to multiply them. However, finding the factors for a number is generally *very* difficult. 


<br />
<br />

# Anatomy of A *Simplified* Quantum Computer

There are many setups for a quantum computer. Here's the *dilution refrigerator* setup, which is quite commonly used.

