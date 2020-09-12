function chooseBestSum(t, k, ls) {
	let temp = 0;
	let count = 0;
	let result = [];
	function add(start, tab, limit) {
		temp = temp + tab[start];
		count++;
		if (count < limit) {
			for (let i = start + 1; i < tab.length; i++) {
				add(i, tab, limit);
			}
		} else {
			result.push(temp);
			temp = temp - tab[start];
			count--;
			return;
		}
		count--;
		temp = temp - tab[start];
		// return result;
	}
	function add2(tab, limit) {
		for (let i = 0; i < tab.length - limit + 1; i++) add(i, tab, limit);
	}
	add2(ls, k);
	let best = 0;
	for (let i of result) {
		if (i > best && i <= t) best = i;
	}
	result = [];
	if (best == 0) return null;
	return best;
}
let tab = [10, 23, 4, 234, 21];

let res = chooseBestSum(200, 4, tab);
console.log(res);
