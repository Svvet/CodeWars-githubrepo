function getGeneration(cells, generations) {
	let arr = cells.slice();
	let flag = 0;
	let x = arr[0].length;
	let y = arr.length;
	let alive = 0;

	for (let q = 0; q < generations; q++) {
		let arr2 = [];
		for (let i = 0; i < y; i++) arr2.push([]);
		console.log(arr2);

		for (let i = 0; i < y; i++)
			for (let j = 0; j < x; j++) {
				let state = arr[i][j];
				for (let z = -1; z < 2; z++)
					for (let c = -1; c < 2; c++) {
						if (
							i + z >= 0 &&
							j + c >= 0 &&
							i + z < y &&
							j + c < x &&
							(c != 0 || z != 0)
						) {
							if (arr[i + z][j + c] == 1) {
								alive++;
							}
						}
					}

				if (state == 0) {
					if (alive == 3) arr2[i].push(1);
					else arr2[i].push(0);
				}
				if (state == 1) {
					if (alive < 2 || alive > 3) {
						arr2[i].push(0);
					} else arr2[i].push(1);
				}

				alive = 0;
			}
		let inx = [];
		arr[0].forEach(function (val, idx, ar) {
			if (val == 1 && ar[idx - 1] == 1 && ar[idx + 1] == 1) inx.push(idx);
		});
		if (inx.length > 0) {
			flag = 1;
			arr2.unshift([]);
			for (let i = 0; i < arr2[1].length; i++)
				if (inx.includes(i)) arr2[0].push(1);
				else arr2[0].push(0);
		}
		inx = [];
		arr[arr.length - 1].forEach(function (val, idx, ar) {
			if (val == 1 && ar[idx - 1] == 1 && ar[idx + 1] == 1) inx.push(idx);
		});

		if (inx.length > 0) {
			arr2.push([]);
			for (let i = 0; i < arr2[0].length; i++)
				if (inx.includes(i)) arr2[arr2.length - 1].push(1);
				else arr2[arr2.length - 1].push(0);
		}
		inx = [];
		arr.forEach(function (val, idx, ar) {
			if (idx > 0 && idx < arr.length - 1)
				if (val[0] == 1 && ar[idx - 1][0] == 1 && ar[idx + 1][0] == 1)
					inx.push(idx);
		});

		if (inx.length > 0) {
			if (flag != 1)
				arr2.forEach(function (val, idx) {
					if (inx.includes(idx)) arr2[idx].unshift(1);
					else arr2[idx].unshift(0);
				});
			else {
				arr2.forEach(function (val, idx) {
					if (inx.includes(idx - 1)) arr2[idx].unshift(1);
					else arr2[idx].unshift(0);
				});
			}
		}
		inx = [];
		arr.forEach(function (val, idx, ar) {
			if (idx > 0 && idx < arr.length - 1)
				if (
					val[arr[0].length - 1] == 1 &&
					ar[idx - 1][arr[0].length - 1] == 1 &&
					ar[idx + 1][arr[0].length - 1] == 1
				)
					inx.push(idx);
		});

		if (inx.length > 0) {
			if (flag != 1)
				arr2.forEach(function (val, idx) {
					if (inx.includes(idx)) arr2[idx].push(1);
					else arr2[idx].push(0);
				});
			else {
				arr2.forEach(function (val, idx) {
					if (inx.includes(idx - 1)) arr2[idx].push(1);
					else arr2[idx].push(0);
				});
			}
		}
		let acc = arr2[0].reduce(function (acc, val) {
			return acc + val;
		});
		while (acc == 0) {
			arr2.shift();
			acc = arr2[0].reduce(function (acc, val) {
				return acc + val;
			});
		}
		acc = arr2[arr2.length - 1].reduce(function (acc, val) {
			return acc + val;
		});
		while (acc == 0) {
			arr2.pop();
			acc = arr2[arr2.length - 1].reduce(function (acc, val) {
				return acc + val;
			});
		}
		acc = 0;
		arr2.forEach(function (val) {
			acc = acc + val[0];
		});

		while (acc == 0) {
			arr2.forEach(function (val, idx) {
				val.shift();
			});
			acc = 0;
			arr2.forEach(function (val) {
				acc = acc + val[0];
			});
		}
		acc = 0;
		arr2.forEach(function (val) {
			acc = acc + val[arr2[0].length - 1];
		});

		while (acc == 0) {
			arr2.forEach(function (val, idx) {
				val.pop();
			});
			acc = 0;
			arr2.forEach(function (val) {
				acc = acc + val[arr2[0].length - 1];
			});
		}
		// if (acc == 0) arr2.shift();

		arr = arr2.slice();
		x = arr[0].length;
		y = arr.length;
		flag = 0;
	}
	return arr;
}
console.log(
	getGeneration(
		[
			[1, 1, 1, 0, 0, 0, 1, 0],
			[1, 0, 0, 0, 0, 0, 0, 1],
			[0, 1, 0, 0, 0, 1, 1, 1],
		],
		16
	)
);
