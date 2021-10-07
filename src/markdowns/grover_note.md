<!---->

It's much more complicated than that. Grover’s algorithm doesn’t
            search through lists, it searches through *function inputs*.
            Grover’s algorithm takes a function, searches through the *implicit*
            list of possible inputs to that function, and (with high
            probability) returns the *single* input that causes the function to
            return true. Hence, to use the algorithm, you will need to find a
            suitable function that will return true only for the item to be
            searched and false otherwise. There are also some restrictions on
            the function. Hence, in general, we might not be able to apply the
            algorithm to search all types of items unless they satisfy the
            criteria mentioned.