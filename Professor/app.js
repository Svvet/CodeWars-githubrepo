function doubles(maxk, maxn) {
	let acc = 0;
	function forceAt(k, n) {
		return 1 / (k * (n + 1) ** (2 * k));
	}
	// function sum(start, stop, func) {
	// 	let result = 0;
	// 	for (let i = start; i <= stop; i++) {
	// 		result = result + func(i);
	// 	}
	// 	return result;
	// }
	// acc = sum(1, maxk, (k) => {
	// 	return sum(1, maxn, (n) => {
	// 		return forceAt(k, n);
	// 	});
	// });
	for (let i = 1; i <= maxk; i++)
		for (let j = 1; j <= maxn; j++) acc += forceAt(i, j);
	return acc;
}
console.log(doubles(10, 100));
