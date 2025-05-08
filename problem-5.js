// Número positivo más pequeño que es divisible de manera exacta por todos los números del 1 a n.

function smallestMult(n) {
	let smallestNum = n;

	while (true) {
		let isValid = true;

		for (let i = 2; i < n; i++) {
			if (smallestNum % i !== 0) {
				isValid = false;
				break;
			}
		}

		if (isValid) return smallestNum;
		smallestNum++;
	}
}


console.log(smallestMult(10));