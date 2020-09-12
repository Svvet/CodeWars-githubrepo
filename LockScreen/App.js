function countPatternsFrom(firstPoint, length) {
	if (length == 0) return 0;
	if (length == 1) return 1;
	let steps = 1;
	let possibleSol = 0;
	let points = [
		["A", "B", "C"],
		["D", "E", "F"],
		["G", "H", "I"],
	];
	let position;
	points = points.map((val, idx) => {
		return val.map((val2, idx2) => {
			if (val2 == firstPoint) {
				position = [idx, idx2];
				return "0";
			} else return val2;
		});
	});

	function move(x, y, position, points, steps) {
		let xax = position[0] + x;
		let yax = position[1] + y;
		position = [xax, yax];
		let points2 = [];
		points.forEach((val, idx) => {
			points2.push([]);
			val.forEach((val2) => points2[idx].push(val2));
		});
		points2[xax][yax] = "0";
		steps++;

		return [position, points2, steps];
	}

	console.log(position, points);
	function reccurentMove(startPos, startPoints, startSteps) {
		for (let i = 0 - startPos[0]; i < 3 - startPos[0]; i++) {
			if (startPos[0] + i >= 0 && startPos[0] + i < 3)
				for (let j = 0 - startPos[1]; j < 3 - startPos[1]; j++) {
					if (
						startPos[1] + j >= 0 &&
						startPos[1] + j < 3 &&
						!(i == 0 && j == 0) &&
						startPoints[startPos[0] + i][startPos[1] + j] !== "0" &&
						!(
							(i * j == -4 || i * j == 4) &&
							startPoints[startPos[0] + i / 2][startPos[1] + j / 2] !== "0"
						) &&
						!(
							((Math.abs(i) == 2 && j == 0) || (Math.abs(j) == 2 && i == 0)) &&
							startPoints[startPos[0] + i / 2][startPos[1] + j / 2] !== "0"
						)
					) {
						let [cPos, cPoints, cSteps] = move(
							i,
							j,
							startPos,
							startPoints,
							startSteps
						);
						if (cSteps < length) reccurentMove(cPos, cPoints, cSteps);
						if (cSteps == length) {
							possibleSol++;
						}
					}
				}
		}
	}
	reccurentMove(position, points, steps);
	console.log(possibleSol);
	return possibleSol;
}
countPatternsFrom("A", 9);

function fEach(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i], i, arr);
	}
}
fEach([1, 2, 3], function abc(val, idx, arr) {
	console.log(val * 2, idx, arr);
});
