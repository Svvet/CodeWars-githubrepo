function tribonacci(signature, n) {
	if (n == 0) return [];
	let tab = [];
	let [sig1, sig2, sig3] = signature;
	let next;
	for (let i = 0; i < 3 && i < n; i++) tab.push(signature[i]);
	for (let i = 3; i < n; i++) {
		// next = sig1 + sig2 + sig3;
		// sig1 = sig2;
		// sig2 = sig3;
		// sig3 = next;
		[sig1, sig2, sig3] = [sig2, sig3, sig1 + sig2 + sig3];
		tab.push(sig3);
	}
	return tab;
}

console.log(tribonacci([1, 4, 6], 10));
