function sudoku(puzzle) {
	let sudoku = puzzle.map((val) => {
		return val.map((val) => {
			if (val == 0) val = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			return val;
		});
	});

	const checkRow = (row, arr) => {
		row.forEach((val) => {
			if (!Array.isArray(val)) {
				arr.forEach((arrVal) => {
					if (arrVal == val) arr.splice(arr.indexOf(val), 1);
				});
			}
		});
	};

	const checkColumn = (idx, arr) => {
		for (let i = 0; i < 9; i++) {
			val = sudoku[i][idx];
			if (!Array.isArray(val)) {
				arr.forEach((arrVal) => {
					if (arrVal == val) arr.splice(arr.indexOf(val), 1);
				});
			}
		}
	};

	const checkSquare = (idx1, idx2, arr) => {
		pos1 = Math.floor(idx1 / 3) * 3;
		pos2 = Math.floor(idx2 / 3) * 3;
		for (let i = pos1; i < pos1 + 3; i++)
			for (let j = pos2; j < pos2 + 3; j++) {
				val = sudoku[i][j];
				if (!Array.isArray(sudoku[i][j])) {
					arr.forEach((arrVal) => {
						if (arrVal == val) arr.splice(arr.indexOf(val), 1);
					});
				}
			}
	};

	const cleanArrays = (fullSudoku) => {
		fullSudoku = fullSudoku.map((val) => {
			return val.map((val) => {
				if (Array.isArray(val) && val.length == 1) val = val[0];
				return val;
			});
		});
		return fullSudoku;
	};
	const checkArr = (arr) => {
		let f = false;
		arr.forEach((val) => {
			val.forEach((val) => {
				if (Array.isArray(val)) f = true;
			});
		});
		return f;
	};

	let count = 0;

	while (checkArr(sudoku) && count < 20) {
		sudoku = sudoku.map((val1, idx1) => {
			return val1.map((val2, idx2) => {
				if (Array.isArray(val2)) {
					checkRow(val1, val2);
					checkColumn(idx2, val2);
					checkSquare(idx1, idx2, val2);
				}
				return val2;
			});
		});
		sudoku = cleanArrays(sudoku);
		count++;
		console.log(sudoku);
	}
	console.log(count);

	console.log(sudoku);
	return sudoku;
}

sudoku([
	[5, 3, 0, 0, 7, 0, 0, 0, 0],
	[6, 0, 0, 1, 9, 5, 0, 0, 0],
	[0, 9, 8, 0, 0, 0, 0, 6, 0],
	[8, 0, 0, 0, 6, 0, 0, 0, 3],
	[4, 0, 0, 8, 0, 3, 0, 0, 1],
	[7, 0, 0, 0, 2, 0, 0, 0, 6],
	[0, 6, 0, 0, 0, 0, 2, 8, 0],
	[0, 0, 0, 4, 1, 9, 0, 0, 5],
	[0, 0, 0, 0, 8, 0, 0, 7, 9],
]);
sudoku([
	[0, 0, 0, 0, 0, 0, 2, 0, 0],
	[0, 8, 0, 0, 0, 7, 0, 9, 0],
	[6, 0, 2, 0, 0, 0, 5, 0, 0],
	[0, 7, 0, 0, 6, 0, 0, 0, 0],
	[0, 0, 0, 9, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 2, 0, 0, 4, 0],
	[0, 0, 5, 0, 0, 0, 6, 0, 3],
	[0, 9, 0, 4, 0, 0, 0, 7, 0],
	[0, 0, 6, 0, 0, 0, 0, 0, 0],
]);
