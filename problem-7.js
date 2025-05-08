// Encontrar el n numero primo.

function nthPrime(n) {
	let pos = 3,
		num = 5;

	if (n === 1) return 2;
	else if (n === 2) return 3;

	while (pos !== n) {
		let isPrime = true;
		num += 2;

		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime) pos++;
	}
	return num;
}


console.log(nthPrime(5));