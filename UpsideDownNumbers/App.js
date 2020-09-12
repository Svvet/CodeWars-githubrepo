function upsideDown(x, y) {
	let allNumbers = 0;
	const pairable = [0, 1, 6, 8, 9];
	const autoPair = [0, 1, 8];
	const pairPair = [6, 9];
	function calculateSum(n) {
		let sum = 4 * ((1 - Math.pow(5, n)) / (1 - 5));
		return sum;
	}
	function numbersForN(n) {
		if (n % 2) {
			return 3 + 4 * calculateSum((n - 1) / 2);
		} else {
			return 3 + 4 * calculateSum((n - 2) / 2) + Math.pow(5, n / 2 - 1) * 4;
		}
	}
	function numbersBetween(a, b) {
		if (a == b) return 0;
		return numbersForN(b - 1) - numbersForN(a);
	}
	function isPairable(x) {
		return pairable.includes(x, 0);
	}
	function isAutoPairable(x) {
		return autoPair.includes(x, 0);
	}
	function hasPair(arr, i) {
		let length = arr.length;
		let val = arr[i];
		let pair = arr[length - (i + 1)];
		if (autoPair.includes(val, 0) && val == pair) return true;
		if ((val == 6 && pair == 9) || (val == 9 && pair == 6)) return true;
		return false;
	}
	function possiblePair(arr, i) {
		let length = arr.length;
		let val = arr[i];
		let pair = arr[length - (i + 1)];
		if (autoPair.includes(val, 0) && val >= pair) return true;
		if ((val == 6 && pair <= 9) || (val == 9 && pair <= 6)) return true;
		return false;
	}
	function numOfPossiblePairs(x) {
		return pairable.filter((val) => val >= x).length;
	}
	function numOfPossiblePairsInCenter(x) {
		return autoPair.filter((val) => val >= x).length;
	}
	let amountOfNumsBetween = numbersBetween(x.length, y.length);
	console.log("NumsBetween: " + amountOfNumsBetween);
	let xArr = x.split("").map((val) => Number(val));
	let yArr = y.split("").map((val) => Number(val));

	function numsAbove(tab) {
		let arr = tab.slice();
		let length = arr.length;
		let nums = 0;
		console.log("special case:" + specialCase(arr));
		if (specialCase(arr)) nums--;
		let position = 0;
		let i = 0;
		if (length % 2) {
			while (i < Math.floor(arr.length / 2) && isPairable(arr[i])) i++;

			position = i;

			for (let i = position; i >= 0; i--) {
				let current;
				if (i == Math.floor(arr.length / 2))
					current = numOfPossiblePairsInCenter(arr[i]);
				else current = numOfPossiblePairs(arr[i]) * 3;
				for (let j = i + 2; j <= Math.floor(arr.length / 2); j++) {
					current *= 5;
				}
				nums += current;

				if (i > 0) arr[i - 1]++;
			}
		} else {
			while (i < Math.floor(arr.length / 2) - 1 && isPairable(arr[i])) i++;

			position = i;

			for (let i = position; i >= 0; i--) {
				let current;
				current = numOfPossiblePairs(arr[i]);
				for (let j = i + 1; j < Math.floor(arr.length / 2); j++) {
					current *= 5;
				}
				nums += current;

				if (i > 0) arr[i - 1]++;
			}
		}

		return nums;
	}
	function specialCase(arr) {
		for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
			if (!isPairable(arr[i])) {
				console.log("tu");
				return false;
			}
		}
		if (arr.length % 2 && !isAutoPairable(arr[Math.floor(arr.length / 2)]))
			return false;
		for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
			if (!hasPair(arr, i)) {
				console.log(i + "to tu jednak");
				if (possiblePair(arr, i)) return false;
				else return true;
			}
			if (i == 0 && hasPair(arr, i)) return false;
		}
	}
	function incrementArray(tab) {
		let allNines = 1;
		let arr = tab.slice();
		arr.forEach((val) => {
			if (val != 9) allNines = 0;
		});
		if (allNines) return arr;
		if (arr[arr.length - 1] != 9) {
			arr[arr.length - 1]++;
			return arr;
		} else {
			arr[arr.length - 1] = 0;
			arr[arr.length - 2]++;
			for (let i = arr.length - 2; i >= 0; i--) {
				if (arr[i] == 10) {
					arr[i] = 0;
					arr[i - 1]++;
				}
			}
			return arr;
		}
	}
	let incrementedYArr = incrementArray(yArr);
	if (xArr.length == yArr.length) {
		let allNumbers = numsAbove(xArr) - numsAbove(incrementedYArr);
		return allNumbers;
	}
	let additionalNums =
		numsAbove(xArr) +
		(numbersBetween(yArr.length - 1, yArr.length + 1) -
			numsAbove(incrementedYArr));

	// console.log("NumsAboveX: " + numsAbove(xArr));
	// console.log(
	// 	"NumsUnderY: " +
	// 		(numbersBetween(yArr.length - 1, yArr.length + 1) -
	// 			numsAbove(incrementedYArr))
	// );
	allNumbers = amountOfNumsBetween + additionalNums;

	return allNumbers;
}

console.log(upsideDown("102", "110"));
