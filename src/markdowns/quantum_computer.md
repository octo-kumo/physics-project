<efe></efe>
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

6. Potential Applications of Quantum Computers

7. Where we are now?

# Quantum Computing


![Quantum](https://imgs.xkcd.com/comics/quantum.png)

# Introduction

A quantum computer solves computational problems by exploiting the properties of quantum mechanics. The main goal of quantum computers is to demonstrate quantum supremacy where quantum computers are able to perform tasks that classical computers would need to take millions of years to compute in under a few minutes.

# How Does it Work

### Overview

Quantum computing harnesses the phenomena of quantum mechanics to deliver a huge leap forward in computation to solve certain problems. In particular, it relies on physical phenomena such as quantum entanglement, interference and superposition. In other words, we are trying to use the universe itself to run compute results that we are interested in.

Note: Beyond this part of the guide, you will need some basic understanding on superposition and quantum entanglement, which are explained here.

### The Qubit

In quantum computers, we have these things called *qubits* which are analogous to the bits in a classical computer, but with a twist $-$ unlike ordinary bits which can only be in two states (1 or 0), a qubit can be in a superposition of both states. 

In ordinary computers, a bit is usually stored in a transistor where a high voltage (*eg. 5V*) represents a $1$ state and a low voltage (*eg. 0V*) represents a $0$ state. On the other hand, the state of $1$ and $0$ in a quantum computer is usually represented as some property of a particle that exhibits quantum properties such as the spin $m_s$ of an electron where $\frac{1}{2}$ and $-\frac{1}{2}$ corresponds to the $1$ and $0$ state respectively.

There are also other ways of representing qubit states, such as the polarization of a photon (horizontal or vertical), or the spin of a nuclei (1/2 or -1/2)

A single qubit which is in superposition will have 2 states :`1` or `0`

Two qubits that are in superposition will have 4 states :`00` `01` `10` `11` 

Three qubits that are in superposition will have 8 states: `000` `001` `010` `011` `100` `101` `110` `111`

Therefore, a quantum computer with $N$ qubits, will be able to represent $2^N$ states. This exponential increase in the possible represented states is key to enabling quantum computers to function. We will usually encode the information in our problems as these superposition states. Then, as the qubits are in a superposition state, applying one operation on the qubit will be equivalent to applying an operation on many possible inputs simultaneously. 

Hence, we can perform many operations in just a single step. However, how are we supposed to interpret the results? Recall that when we observe the qubits that are in a superposition state, it will immediately collapse into one of the possible states based on probability. Hence, we can only read a single state output from our quantum system. So then, how are we supposed to read the results form the collapsed state? 

### Quantum Algorithm

The answer lies in the quantum algorithm $\textendash$​ the instructions and operations that we have applied onto the quantum system. The algorithm is designed in a way such that all of the incorrect states (states representing the wrong answers) destructively interfere (just like how waves do) and "cancel" each other out. This leaves us with a high probability of observing the desired state (the state that represents the correct answer). 

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

# Applications Of Quantum Computer

### Grover's Algorithm

Problem: Were trying to check if an item is present in a list. Given that the items are randomly arranged in the list, we have no choice but to do a brute force and check every item in the list to see if it is the desired item. On a classical computer, this will take $\frac{N}{2}$ searches on average where $N$ is the number of items in the list.

We can use Grover's algorithm to solve the problem in about $\sqrt{N}$ searches. To put things in perspective, if we have two billions of items to be searched, our classical computer will need to search through a billion of them on average while Grover's Algorithm will only need to perform number of operations in the order of magnitude of ten thousands $-$ significantly faster than using a classical computer.

To put it very briefly, each possible state of the qubits such as `0010` will correspond to an item in the list. The algorithm creates a uniform superposition over all possibilities and repeatedly destructively interferes states that are not solutions. As a result, there is a high probability ($\ge 0.5$) that the state we observe when the superposition collapses is the state corresponding to the item we are searching for.

Note: Its much more complicated than that. Grover’s algorithm doesn’t search through lists, it searches through *function inputs*. Grover’s algorithm takes a function, searches through the *implicit* list of possible inputs to that function, and (with high probability) returns the *single* input that causes the function to return true. Hence, to use the algorithm, you will need to find a suitable function that will return true only for the item to be searched and false otherwise. There are also some restrictions on the function. Hence, in general, we might not be able to apply the algorithm to search all types of items unless they satisfy the required criteria.







References:

https://en.wikipedia.org/wiki/Timeline_of_quantum_computing_and_communication

https://qiskit.org/textbook/preface.html

https://www.ibm.com/topics/quantum-computing

https://www.youtube.com/playlist?list=PL50XnIfJxPDWDyea8EbbLe8GHfXkWU7W_

http://hyperphysics.phy-astr.gsu.edu/hbase/spin.html	

https://qiskit.org/documentation/qc_intro.html

https://en.wikipedia.org/wiki/Grover%27s_algorithm#Problem_description

https://medium.com/swlh/making-a-quantum-computer-at-home-bc59afe72d7d

http://twistedoakstudios.com/blog/Post2644_grovers-quantum-search-algorithm	
