function solution(roman) {
	roman = roman.split("");
	let tab = [];
	let result = 0;
	roman.forEach(function(i) {
		switch (i) {
			case "I":
				i = 1;
				break;
			case "V":
				i = 5;
				break;
			case "X":
				i = 10;
				break;
			case "L":
				i = 50;
				break;
			case "C":
				i = 100;
				break;
			case "D":
				i = 500;
				break;
			case "M":
				i = 1000;
				break;
		}
		tab.push(i);
	});
	console.log(tab);
	tab.forEach(function(value, ind, list) {
		if (value < list[ind + 1]) result = result - value;
		else result = result + value;
	});

	return result;
}
console.log(solution("XLVI"));
