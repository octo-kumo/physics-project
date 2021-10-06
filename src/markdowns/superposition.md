<span></span>
# **Quantum Superposition**

It is a fundamental principle in quantum mechanics where it states that any two or more quantum states can be superposed and the result will be another valid quantum state. Alternatively, it states that every quantum state can be represented as a sum of two or more other distinct states.
In physical terms, lets take an electron. When we measure the spin of the electron it can either spin up (clockwise) or spin down (counterclockwise). Since due to quantum mechanics the electrons have a supposition when not measured, the electron is a superposition of spin up and down. It has a complex combination of both. 
Its physical system can be represented by this:
$$
C_1\mid\uparrow\rangle+C_2\mid\uparrow\rangle
$$
The coefficients represent the probability of the electron being spin up or down. The probability for a specified configuration is given by the square of the absolute value of the coefficient. So the probabilities should add up to 1. The electron is in one of those two states for sure.
$$
p_{up}= \mid c_1\mid ^2 \newline
p_{down}= \mid c_2\mid ^2\newline
p_{up or down} = p_{down}+p_{up}=1
$$
 As a whole a particle can have any position  so that there are different configurations which have any value of the position *x*. These are written:
$$
|x\rangle
$$
The principle of superposition guarantees that there are states which are arbitrary superpositions of all the positions with complex coefficients:
$$
\sum_{x}{} \psi(x)|x\rangle
$$
This sum is defined only if the index *x* is discrete. If the index is over $\R$, then the sum is replaced by an integral. The quantity ![\psi (x)](https://wikimedia.org/api/rest_v1/media/math/render/svg/a596a1fb4130a47f6b88c66150497338bd6cbccc) is called the wavefunction of the particle. If we consider a qubit with both position and spin, the state is a superposition of all possibilities for both:
$$
\sum_{x}{} \psi_+(x)|x,\uparrow\rangle+\psi_-(x)|x,\downarrow\rangle
$$


![img](https://lh3.googleusercontent.com/8DhPbzWOuVn8PUDI2f45E-Pbx57txC1CA4UBor-K3fsd8dD7o1N1uKUT6VQlf3Vg9C0RSWQJhpYRT95fNV7Wv7V21I3IXOiPRlGWRnZ9zXIOYPYAZAUlbKeCyRNlv2t1oIUrVEYj=s0)

# **Quantum Entanglement**

Quantum entanglement is a physical phenomenon that occurs when a group of particles are generated, interact, or share spatial proximity in a way such that the quantum state of each particle of the group cannot be described independently of the state of the others, including when the particles are separated by a large distance. Measurements of physical properties such as position, momentum, spin, polarization performed on entangled particles can, in some cases, be found to be perfectly correlated. 

For example,  two particles are in a single quantum state  such that when one is observed to be spin-up, the other one will always be observed to be spin-down and vice versa and their total spin is zero. According to quantum mechanics,it is impossible to predict which set of measurements will be observed. As a result, measurements performed on one system seem to be instantaneously influencing other systems entangled with it. Though quantum entanglement does not enable the transmission of classical information faster than the speed of light.

Up until now, nobody really knows quite how or why entanglement works. It even baffled Einstein, who famously described it as “spooky action at a distance.” But it’s key to the power of quantum computers. In a conventional computer, doubling the number of bits doubles its processing power. But thanks to entanglement, adding extra qubits to a quantum machine produces an exponential increase. Quantum entanglement has been demonstrated experimentally with photons,neutrinos, electrons,molecules and even small diamonds. However quantum entanglement is broken when the entangled particles decohere through interaction with the environment; for example, when a measurement is made.

![img](https://lh5.googleusercontent.com/gabF5W-YMfy8mT3DerGF_6qCCtNyrcY_J6VV1T8GGo3px3gszNquYbzr1EcwLBD2-tEoYzLwsiLoZPNgIDflv6IudtHJ025lom9z3UiQXrLNZ5o3JmvtusT1zPVxEu3h4a8I5BMh=s0)

For example, to display quantum entanglement the simplest system is of two qubits. These system of two entangled qubits can be represented $|\psi^+\rangle$ Bell State:
$$
|\psi\rangle = \frac{1}{\sqrt{2}}(|00\rangle+|11\rangle)
$$
In this state, called an *equal superposition*, there are equal probabilities of measuring either product state $|00\rangle $ or $|11\rangle$ as  $|\frac{1}{\sqrt{2}}|^2 = \frac{1}{2}$.In other words, there is no way to tell if the first qubit has value “0” or “1” and likewise for the second qubit.

Lets say we have two person, P1 and P2 and that these qubits are separated. When P1 makes a measurement of one of the qubit P2 must get the  same result as the qubits are entangled. So lets say, P1 measures |0> then P2 must measure|00>.If P1 measures |1> then P2 must measure |00>

# **Quantum** **Memory**

![2: Generic principle of a quantum memory. (a) At time t = 0, a qubit |Ψ in (or a more complex quantum state, as the case may be) arrives at the memory into which it is transferred. (b) The qubit remains stored in the memory for an arbitrary time. (c) At a later time t , when the user pushes a button, the quantum state is released out of the memory. The fidelity of the retrieved state (of density matrixˆρmatrixˆ matrixˆρ out ) to the input state F = Ψ in |ˆρ|ˆρ out |Ψ in measures the quality of the storage. The efficiency of the memory η is the probability to successfully retrieve the qubit. If the storage time t exceeds the memory lifetime τ , then these figures of merit start to decrease.](https://www.researchgate.net/profile/Adrien-Nicolas-4/publication/278827152/figure/fig3/AS:941209459625988@1601413230808/Generic-principle-of-a-quantum-memory-a-At-time-t-0-a-qubit-PS-in-or-a-more.ppm)



From the above figure illatrates a general idea of how a quantum memory works. Firstly  (a)At time t = 0, a qubit |Ψini (or a more complex quantum state, as the case may be) arrives at the memory into which it is transferred.  at (b)The qubit remains stored in the memory for an arbitrary time. (c)At a later time t 00, when the user pushes a button, the quantum state is released out of the memory. The fidelity of the retrieved state (of density matrix ρˆout) to the input state F = hΨin|ρˆout|Ψini measures the quality of the storage. The efficiency of the memory η is the probability to successfully retrieve the qubit. If the storage time t 00 exceeds the memory lifetime τ , then these figures of merit start to decrease.



