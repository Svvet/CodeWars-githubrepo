function scramble(str1, str2) {
	let flag = 0;
	str1 = str1.split("");
	str2 = str2.split("");
	for (let i = 0; i < str2.length; i++) {
		for (let j = 0; j < str1.length; j++) {
			if (str1[j] == str2[i]) {
				str1.splice(j, 1);
				flag = 1;
				break;
			}
		}
		if (flag == 0) return false;
		flag = 0;
	}
	return true;
}
let str = "katas";
console.log(scramble(str, "steak"));
console.log(str);
