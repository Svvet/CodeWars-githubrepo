function decompose(n) {
	let square = Math.pow(n, 2);
	let left = square;
	let result = [];
	function findNext(left) {
		let k = Math.floor(Math.sqrt(left));
		return k == n ? k - 1 : k;
	}
	let flag = 0;
	function rec(left) {
		let k = findNext(left);
		for (let i = k; i > 0; i--) {
			if (i < result[0] || result.length == 0) {
				result.unshift(i);
				left -= Math.pow(i, 2);
				if (left != 0) {
					rec(left);
					if (flag == 0) left += Math.pow(result.shift(), 2);
				} else {
					flag = 1;
				}
			}
			if (flag == 1) break;
		}
		if (left == 0) console.log("success");
	}
	rec(square);
	console.log(result);
	if (flag == 0) result = null;
	return result;
}
console.log(decompose(8));
