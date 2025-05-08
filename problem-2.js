// Suma de los números pares de la secuencia Fibonacci hasta n.

function fiboEvenSum(n) {
	let total = 2, currentNum = 2, previusNum = 1, fiboNum = 0;

	while (fiboNum <= n) {
		fiboNum = currentNum + previusNum;
		previusNum = currentNum;
		currentNum = fiboNum;

		if (fiboNum % 2 === 0) total += fiboNum;
	}
	return total;
}


console.log(fiboEvenSum(10));