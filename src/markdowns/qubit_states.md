<span />

<br />

A single qubit which is in superposition will have 2 states :`1` or `0`

Two qubits that are in superposition will have 4 states :`00` `01` `10` `11` 

Three qubits that are in superposition will have 8 states: `000` `001` `010` `011` `100` `101` `110` `111`

Therefore, a quantum computer with $N$ qubits, will be able to represent $2^N$ states. This exponential increase in the possible represented states is key to enabling quantum computers to function. We will usually encode the information in our problems as these superposition states. Then, as the qubits are in a superposition state, applying one operation on the qubit will be equivalent to applying an operation on many possible inputs simultaneously. With this, we can perform many operations in just a single step.

<br /> 
<br />

<figure align="center">
<img src="https://miro.medium.com/max/1400/0*xllJMzdAuDlba2xL" alt="drawing" width="900" />

</figure>

<br />

# Applying Operations on Qubits
How do we make a qubit to exhibit superposition? How do we entangle two qubits together? Well, firstly we need to understand how to prepare the qubits first. Initially, all the qubits must be prepared in the down state. A superconductor is used to produce a strong magnetic field to align the qubits in the down state. Since we want to ensure that no electron qubits have sufficient energy to change their spin to an up state, we will need to remove energy from the system via by cooling the setup to temperatures below 0.15K.

<figure align="center">
<img src="../assets/spin.gif" alt="drawing" width="500" />
</figure>

To change a qubit to an up state, we expose it to a pulse of microwave with a specific frequency (resonace frequency of the electron around 45GHz).

<figure align="center">
<img src="../assets/spin_radio.gif" alt="drawing" width="500" />
</figure>

While the electron is transitioning from the down state to the up state, we can stop it at any position, and that would create a superposition state for the qubit, with different phases for the states $0$ and $1$. Entanglement works similarly but exposing two or more qubits to microwaves at the same time.

All in all, the qubits must be handled in a very isolated environment that is cooled to temperatures less than 1 Kelvin and isolated from any electromagnetic radiation.
