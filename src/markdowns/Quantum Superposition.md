<!---->
Quantum Superposition is a fundamental principle in quantum mechanics where it states that any two or more quantum states can be superposed and the result will be another valid quantum state. Alternatively, it states that every quantum state can be represented as a sum of two or more other distinct states.
In physical terms, let's take an electron. When we measure the spin of the electron, it can either spin up (clockwise) or spin down (anticlockwise). According to quantum mechanics, the electrons can have a superpositionof spin up and down  when not measured. This means that it can have a complex combination of both spin up and down.
In mathematical terms state of this physical system can be represented by this:
$$
\begin{align*}
|\psi\rangle = C_1\mid\uparrow\rangle+C_2\mid\downarrow\rangle
\end{align*}
$$
The quantity $|\psi\rangle$ is called the quantum state of the system. The coefficients $C_1, C_2$ represent the probability of the electron being spin up or down. These coefficients can be complex numbers also. As you know from before, this system has a quantum state where it has a certain probability of being spin up or down. The probability for a specified configuration is given by the square of the absolute value of the coefficient. The probabilities should add up to 1. We know for sure that the electron has to be one of these states when measured.

$$
\begin{align*}
p_{up}&= \mid c_1\mid ^2 \newline
p_{down}&= \mid c_2\mid ^2\newline
p_{up or down} &= p_{down}+p_{up}=1

\end{align*}
$$
$p_{up}$ refers to the probability of the electron being spin up when measured and $p_{down}$ refers to the probability of the electron being spin up when measured. In this example we have consider 2 configurations, but there can be infinitely many. In general, by the principal of superposition, the state of the quantum state for infinitely many configurations is:	
$$
|\psi\rangle = \sum_{x}\rho(x)|x\rangle
$$
where $\rho(x)$ is the probability density function. $|x\rangle$ can represents the position of the particle. This quantum superposition plays a major role in quantum computing. In quantum computing, we can use the state of the qubits being superposition to filter out the unwanted states in superposition.  Eventually, we will obtain a state that describes our solution to the problem we are interested in. 





