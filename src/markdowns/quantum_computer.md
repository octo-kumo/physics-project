<span></span>
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

History

![img](https://cdn.discordapp.com/attachments/886807281369497622/893833908548935700/quantum.jpg)

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



What to cover:



# How Does it Work

Quantum computing harnesses the phenomena of quantum mechanics to deliver a huge leap forward in computation to solve certain problems. In particular, it relies on concepts such as quantum entanglement, interference and superposition. In a nutshell, we are trying to use the universe itself to run compute results that we are interested in.

In quantum computers, we have these things called *qubits* which are analogous to the bits in a classical computer, but with a twist --- unlike ordinary bits which can only be in two states (1 or 0) a qubit can be in a superposition of both states. 



![The Math behind Quantum Computing — Qubits and Superposition | by Ryan Lam  | DataDrivenInvestor](https://miro.medium.com/max/1400/0*xllJMzdAuDlba2xL)

Furthermore, these qubits are *entangled* with one another. But what do we mean that qubits are entangled? 

<Explanation on Quantum Entanglement + Superposition>

In ordinary computers, a bit is usually stored in a transistor where a high voltage (*eg. 5V*) represents a $1$ state and a low voltage (*eg. 0V*) represents a $0$ state. On the other hand, the state of $1$ and $0$ in a quantum computer is usually represented as some property of a particle that exhibits quantum properties such as the spin $m_s$ of an electron where $\frac{1}{2}$ and $-\frac{1}{2}$ corresponds to the $1$ and $0$ state respectively.

<div class="hover-state">There are also other ways of representing qubit states, such as the polarization of a photon (horizontal/vertical)</div>

 Therefore, a quantum computer with $N$ qubits, will be able to represent $2^N$ states thanks to quantum entanglement. This exponential increase in the possible represented states is key to enabling quantum computers to function.



Okay, we are now equipped with the necessary knowledge to understand how quantum computers work. Let's see how we can use a quantum computer to search for a 

Quantum algorithms use interference effects to make the wrong answers cancel out quickly and give us a high probability of measuring the right answer.

It would be inappropriate to compare a quantum computer with a classical computer, as their operating mechanisms are fundamentally different. 





References:

https://en.wikipedia.org/wiki/Timeline_of_quantum_computing_and_communication

https://qiskit.org/textbook/preface.html

https://www.ibm.com/topics/quantum-computing

https://www.youtube.com/playlist?list=PL50XnIfJxPDWDyea8EbbLe8GHfXkWU7W_

http://hyperphysics.phy-astr.gsu.edu/hbase/spin.html	

https://qiskit.org/documentation/qc_intro.html



<style> 
    .hover-text {   display: none; }  
    .hover-text:hover {   display: block; // or inline-block }
</style>

