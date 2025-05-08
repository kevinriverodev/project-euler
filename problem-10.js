// Suma de los numeros primos hasta n

function primeSummation(n) {
	let total = 2;

	for (let i = 3; i < n; i += 2) {
		let isPrime = true;

		for (let j = 2; j <= Math.sqrt(i); j++) {
			if (i % j === 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) total += i;
	}
	return total;
}


console.log(primeSummation(17));