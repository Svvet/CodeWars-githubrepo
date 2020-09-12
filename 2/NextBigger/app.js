function nextBigger(n) {
	let f = 0;
	let str = n.toString();
	str = str.split("");
	str = str.map((val) => Number(val));
	for (let i = 0; i < str.length - 1; i++) {
		if (str[i] < str[i + 1]) {
			f = 1;
			break;
		}
	}
	if (f == 0) return -1;
	f = 0;
	let str2;
	for (let i = str.length - 2; i >= 0; i--) {
		str2 = str.slice(i);
		let cur = str2[0];
		for (let j = 1; j < str2.length; j++) {
			if (str2[0] < str2[j] && f == 0) {
				let temp = str2[0];
				str2[0] = str2[j];
				str2[j] = temp;
				f = 1;
			}
			if (f == 1 && str2[j] > cur && str2[j] < str2[0]) {
				let temp = str2[0];
				str2[0] = str2[j];
				str2[j] = temp;
			}
		}
		console.log(str2);
		if (f == 1) {
			let temp = str2.slice(1).sort();
			str2 = str2.slice(0, 1).concat(temp);

			str = str.slice(0, i);
			str = str.concat(str2);
			console.log(str);

			break;
		}
	}

	return Number(str.join(""));
}

console.log(nextBigger(6543431));
