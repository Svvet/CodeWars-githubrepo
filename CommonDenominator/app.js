function convertFrac(lst) {
	let denoms = [];
	let ints = [];
	let comFrac;
	let result = "";
	let flag = 0;

	for (let i = 0; i < lst.length; i++) {
		for (let j = lst[i][0]; j >= 2; j--) {
			if (lst[i][0] % j == 0 && lst[i][1] % j == 0) {
				ints.push(lst[i][0] / j);
				denoms.push(lst[i][1] / j);
				flag = 1;
				break;
			}
		}
		if (flag == 0) {
			ints.push(lst[i][0]);
			denoms.push(lst[i][1]);
		}
		if (i == 0) comFrac = lst[0][1];
		flag = 0;
		for (let j = denoms[i] < comFrac ? denoms[i] : comFrac; j >= 2; j--) {
			if (denoms[i] % j == 0 && comFrac % j == 0) {
				comFrac = (comFrac / j) * denoms[i];

				flag = 1;
				break;
			}
		}
		if (i != 0 && flag == 0) comFrac = comFrac * denoms[i];
		console.log(i, comFrac);

		flag = 0;
	}
	for (let i = 0; i < ints.length; i++) {
		ints[i] = (comFrac / denoms[i]) * ints[i];
		result = result + `(${ints[i]},${comFrac})`;
	}
	console.log(ints, denoms);

	console.log(comFrac);

	return result;
}
var lst = [
	[5, 21],
	[15, 25],
	[5, 25],
	[20, 100],
];
console.log(convertFrac(lst));
