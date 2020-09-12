var recoverSecret = function (triplets) {
	let result = "";
	let tab = [];
	for (let i = 0; i < triplets.length; i++) {
		for (let j = i; j >= 0; j--) {
			let a = triplets[j][0];
			let b = triplets[j][1];
			let c = triplets[j][2];
			let ina = tab.indexOf(a);
			let inb = tab.indexOf(b);
			let inc = tab.indexOf(c);
			if (ina == -1) {
				tab.push(a);
				ina = tab.indexOf(a);
			}

			if (ina > inb) {
				if (inb != -1) {
					tab.splice(ina + 1, 0, b);
					tab.splice(inb, 1);
				} else {
					tab.splice(ina + 1, 0, b);
				}
				inb = tab.indexOf(b);
				inc = tab.indexOf(c);
			}

			if (inb > inc) {
				if (inc != -1) {
					tab.splice(inb + 1, 0, c);
					tab.splice(inc, 1);
				} else {
					tab.splice(inb + 1, 0, c);
				}
			}
		}
	}
	result = tab.join("");

	return result;
};
secret1 = "whatisup";
triplets1 = [
	["t", "u", "p"],
	["w", "h", "i"],
	["t", "s", "u"],
	["a", "t", "s"],
	["h", "a", "p"],
	["t", "i", "s"],
	["w", "h", "s"],
];
let arr = ["abc", "c", "d"];
arr.splice(1, 0, "ddd");
console.log(arr);
console.log(recoverSecret(triplets1));
