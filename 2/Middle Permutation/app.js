function middlePermutation(s) {
  let letters = s.split("").sort();
  let permutations = [];
  let perm = "";

  if (letters.length % 2 == 0) {
    permutations.push(letters[letters.length / 2 - 1]);
    letters.splice(letters.length / 2 - 1, 1);
    letters.reverse().forEach((val) => {
      permutations.push(val);
    });
  } else {
    permutations.push(letters[Math.floor(letters.length / 2)]);
    letters.splice(Math.floor(letters.length / 2), 1);
    permutations.push(letters[letters.length / 2 - 1]);
    letters.splice(Math.floor(letters.length / 2 - 1), 1);
    letters.reverse().forEach((val) => {
      permutations.push(val);
    });
  }

  return permutations.join("");
}
console.log(middlePermutation("fgbayzwq"));

// function recuPerm(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		perm = perm + arr[i];
// 		let clone = arr.slice();
// 		clone.splice(i, 1);
// 		if (arr.length > 1) {
// 			recuPerm(clone);
// 			perm = perm.slice(0, perm.length - 1);
// 		} else {
// 			permutations.push(perm);
// 			perm = perm.slice(0, perm.length - 1);
// 		}
// 	}
// }
// recuPerm(letters);

// let res = permutations[permutations.length / 2 - 1];
// console.log(res);

// res = res.split("").map((val) => {
// 	return letters.indexOf(val);
// });
