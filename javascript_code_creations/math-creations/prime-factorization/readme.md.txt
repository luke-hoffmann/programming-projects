The idea of this algorithm is as follows

Finds prime factorization
Create every possible combination of the prime factors
Multiply the combinations

For example
n = 52
prime factorization(52) -> 2,2,13

Every possible combination is
2,2,13
2,13
2,13
13
2,2
2

Multiply each combination
52
26
26
13
4
2

Those are the divisors of 52

Input: a number (n)

Prime Factorization Function (n)
Find the prime factors of n
create empty array [] named prime-factors
create variable first-prime
for loop from 2 -> sqrt(n); using variable i
	if n is evenly divisible by i
		if n/i is prime
			then set first-prime equal to n/i
				break;
push first-prime to prime-factors
call this function (prime factorization function) on the number (first-prime)
await response
push response to prime-factors

return prime-factors





	
		
