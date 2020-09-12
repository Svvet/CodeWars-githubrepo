function primeNums(g, m, n) {
	let primes = [];
	let i, j;
	let result = [];
	for (i = m; i <= n; i++) {
		let flag = 0;
		for (j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
			if (i % j == 0) {
				flag = 1;
				break;
			}
		}
		if (flag == 0) primes.push(i);
	}

	label: for (i = 0; i < primes.length; i++) {
		for (j = i + 1; j < primes.length; j++) {
			if (primes[j] - primes[i] == g) {
				result.push(primes[i]);
				result.push(primes[j]);
				break label;
			}
		}
	}

	if (result.length == 0) return null;
	return result;
}
let arr = [];
console.log(primeNums(28, 1, 100));
function gap(g, m, n) {
	var lastPrime = 0;
	var isPrime = function (x) {
		for (var i = 2; i * i <= x; i++) {
			if (x % i == 0) return false;
		}
		return true;
	};

	for (var i = m; i <= n; i++)
		if (isPrime(i)) {
			if (i - lastPrime == g) return [lastPrime, i];
			else lastPrime = i;
		}

	return null;
}
console.log(gap(28, 1, 100));
