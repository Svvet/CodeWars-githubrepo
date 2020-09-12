function solvePuzzle(clues) {
	let result = [[], [], [], []];
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			result[i].push([1, 2, 3, 4]);
		}
	}
	let allPossible = [];
	let nums = [1, 2, 3, 4];
	let a, b, c, d;
	for (let j = 0; j < nums.length; j++) {
		a = nums[j];
		nums.splice(j, 1);
		for (let j2 = 0; j2 < nums.length; j2++) {
			b = nums[j2];
			nums.splice(j2, 1);
			for (let j3 = 0; j3 < nums.length; j3++) {
				c = nums[j3];
				nums.splice(j3, 1);
				d = nums[0];
				allPossible.push([a, b, c, d]);
				nums.splice(j3, 0, c);
			}
			nums.splice(j2, 0, b);
		}
		nums.splice(j, 0, a);
	}
	for (let l = 0; l < 2; l++)
		for (let i = 0; i < clues.length; i++) {
			let possible = [];
			let possible2 = [];
			let current = clues[i];
			let count = 1;
			let flag = 0;
			let last;
			if (current != 0) {
				if (i < 4) {
					for (let j = 0; j < allPossible.length; j++) {
						for (let j2 = 0; j2 < allPossible[j].length; j2++) {
							if (j2 == 0) last = allPossible[j][0];
							if (j2 > 0) {
								if (last < allPossible[j][j2]) {
									count++;
									last = allPossible[j][j2];
								}
							}
						}
						if (count == current) possible.push(allPossible[j]);
						count = 1;
					}
					console.log(possible);
					for (let j = 0; j < possible.length; j++) {
						//sprawdzanie czy jest możliwa kombinacja na podstawie tabel możliwości, sprawdanie każdego possibla
						for (let j2 = 0; j2 < possible[j].length; j2++) {
							//przechodzenie po zawartości każdego possibla
							if (!result[j2][i].includes(possible[j][j2])) {
								possible.splice(j, 1);
								j--;
								break;
							}
						}
					}
					console.log(possible);

					for (let j = 0; j < 4; j++) {
						//miejsce
						for (let j2 = 1; j2 < 5; j2++) {
							//liczba

							flag = 0;
							for (let j3 = 0; j3 < possible.length; j3++) {
								//mozliwa kombinacja

								if (possible[j3][j] == j2) flag = 1;
							}

							if (flag == 0) {
								if (result[j][i].indexOf(j2) != -1)
									result[j][i].splice(result[j][i].indexOf(j2), 1);
							}
						}
					}
				} else if (i < 8) {
					for (let j = 0; j < allPossible.length; j++) {
						for (let j2 = 0; j2 < allPossible[j].length; j2++) {
							if (j2 == 0) last = allPossible[j][0];
							if (j2 > 0) {
								if (last < allPossible[j][j2]) {
									count++;
									last = allPossible[j][j2];
								}
							}
						}
						if (count == current) possible.push(allPossible[j]);
						count = 1;
					}
					console.log(possible);
					for (let j = 0; j < possible.length; j++) {
						//sprawdzanie czy jest możliwa kombinacja na podstawie tabel możliwości, sprawdanie każdego possibla
						for (let j2 = 0; j2 < possible[j].length; j2++) {
							//przechodzenie po zawartości każdego possibla
							if (!result[i % 4][3 - j2].includes(possible[j][j2])) {
								possible.splice(j, 1);
								j--;
								break;
							}
						}
					}
					console.log("Drugi if możliwe:");
					console.log(possible);

					for (let j = 0; j < 4; j++) {
						//miejsce
						for (let j2 = 1; j2 < 5; j2++) {
							//liczba

							flag = 0;
							for (let j3 = 0; j3 < possible.length; j3++) {
								//mozliwa kombinacja

								if (possible[j3][j] == j2) flag = 1;
							}

							if (flag == 0) {
								if (result[i % 4][3 - j].indexOf(j2) != -1)
									result[i % 4][3 - j].splice(
										result[i % 4][3 - j].indexOf(j2),
										1
									);
							}
						}
					}
				} else if (i < 12) {
					for (let j = 0; j < allPossible.length; j++) {
						for (let j2 = 0; j2 < allPossible[j].length; j2++) {
							if (j2 == 0) last = allPossible[j][0];
							if (j2 > 0) {
								if (last < allPossible[j][j2]) {
									count++;
									last = allPossible[j][j2];
								}
							}
						}
						if (count == current) possible.push(allPossible[j]);
						count = 1;
					}
					console.log(possible);
					for (let j = 0; j < possible.length; j++) {
						//sprawdzanie czy jest możliwa kombinacja na podstawie tabel możliwości, sprawdanie każdego possibla
						for (let j2 = 0; j2 < possible[j].length; j2++) {
							//przechodzenie po zawartości każdego possibla
							if (!result[3 - j2][3 - (i % 4)].includes(possible[j][j2])) {
								possible.splice(j, 1);
								j--;
								break;
							}
						}
					}
					console.log(possible);

					for (let j = 0; j < 4; j++) {
						//miejsce
						for (let j2 = 1; j2 < 5; j2++) {
							//liczba

							flag = 0;
							for (let j3 = 0; j3 < possible.length; j3++) {
								//mozliwa kombinacja

								if (possible[j3][j] == j2) flag = 1;
							}

							if (flag == 0) {
								if (result[3 - j][3 - (i % 4)].indexOf(j2) != -1)
									result[3 - j][3 - (i % 4)].splice(
										result[3 - j][3 - (i % 4)].indexOf(j2),
										1
									);
							}
						}
					}
				} else if (i < 16) {
					for (let j = 0; j < allPossible.length; j++) {
						for (let j2 = 0; j2 < allPossible[j].length; j2++) {
							if (j2 == 0) last = allPossible[j][0];
							if (j2 > 0) {
								if (last < allPossible[j][j2]) {
									count++;
									last = allPossible[j][j2];
								}
							}
						}
						if (count == current) possible.push(allPossible[j]);
						count = 1;
					}
					console.log(possible);
					for (let j = 0; j < possible.length; j++) {
						//sprawdzanie czy jest możliwa kombinacja na podstawie tabel możliwości, sprawdanie każdego possibla
						for (let j2 = 0; j2 < possible[j].length; j2++) {
							//przechodzenie po zawartości każdego possibla
							if (!result[3 - (i % 4)][j2].includes(possible[j][j2])) {
								possible.splice(j, 1);
								j--;
								break;
							}
						}
					}

					console.log(possible);

					for (let j = 0; j < 4; j++) {
						//miejsce
						for (let j2 = 1; j2 < 5; j2++) {
							//liczba

							flag = 0;
							for (let j3 = 0; j3 < possible.length; j3++) {
								//mozliwa kombinacja

								if (possible[j3][j] == j2) flag = 1;
							}

							if (flag == 0) {
								if (result[3 - (i % 4)][j].indexOf(j2) != -1)
									result[3 - (i % 4)][j].splice(
										result[3 - (i % 4)][j].indexOf(j2),
										1
									);
							}
						}
					}
				}
				// for (let x = 0; x < 4; x++)
				// 	for (let y = 0; y < 4; y++) {
				// 		if (result[x][y].length == 1) {
				// 			for (let z = 0; z < 4; z++) {
				// 				if (z != x && result[z][y].includes(result[x][y][0]))
				// 					result[z][y].splice(result[z][y].indexOf(result[x][y][0]), 1);
				// 			}
				// 			for (let z = 0; z < 4; z++) {
				// 				if (z != y && result[x][z].includes(result[x][y][0]))
				// 					result[x][z].splice(result[x][z].indexOf(result[x][y][0]), 1);
				// 			}
				// 		}
				// 	}
			}
		}
	let res = [];
	for (let i = 0; i < 4; i++) {
		res.push([]);
		for (let j = 0; j < 4; j++) {
			res[i].push(result[i][j][0]);
		}
	}

	// for (let x = 0; x < 4; x++)
	// 	for (let y = 0; y < 4; y++) {
	// 		if (result[x][y].length == 1) {
	// 			for (let z = 0; z < 4; z++) {
	// 				if (z != x && result[z][y].includes(result[x][y][0]))
	// 					result[z][y].splice(result[z][y].indexOf(result[x][y][0]), 1);
	// 			}
	// 			for (let z = 0; z < 4; z++) {
	// 				if (z != y && result[x][z].includes(result[x][y][0]))
	// 					result[x][z].splice(result[x][z].indexOf(result[x][y][0]), 1);
	// 			}
	// 		}
	// 	}

	console.log(result);
	console.log(res);
	return res;
}
solvePuzzle([3, 1, 2, 3, 3, 2, 2, 1, 1, 2, 4, 2, 2, 1, 3, 2]);

// let possible = [];
// let nums = [1, 2, 3, 4];
// let temp = [];
// let a, b, c, d;
// // for (let j = 0; j < nums.length; j++) {
// // 	a = nums[j];
// // 	nums.splice(j, 1);
// // 	for (let j2 = 0; j2 < nums.length; j2++) {
// // 		b = nums[j2];
// // 		nums.splice(j2, 1);
// // 		for (let j3 = 0; j3 < nums.length; j3++) {
// // 			c = nums[j3];
// // 			nums.splice(j3, 1);
// // 			d = nums[0];
// // 			console.log(a, b, c, d);
// // 			nums.splice(j3, 0, c);
// // 		}
// // 		nums.splice(j2, 0, b);
// // 	}
// // 	nums.splice(j, 0, a);
// // }
