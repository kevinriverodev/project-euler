// Diferencia entre la raíz cuadrada de la suma de 1 a n y la suma de la raíz cuadrada de 1 hasta n.

function sumSquareDifference(n) {
	let sum = 0, sumOfSqrt = 0;

	for (let i = 1; i <= n; i++) {
		sum += i;
		sumOfSqrt += i ** 2;
	}
	return sum ** 2 - sumOfSqrt;
}


console.log(sumSquareDifference(10));