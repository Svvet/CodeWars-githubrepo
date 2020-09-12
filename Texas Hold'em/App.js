function hand(ownCards, communityCards) {
	const prepareCards = (oCards, cCards) => {
		let cards = oCards.concat(cCards);
		cards = cards.map((val) => {
			if (val.length === 3) val = [val.slice(0, 2), val[2]];
			else val = val.split("");
			val[0] = val[0].replace("J", "11");
			val[0] = val[0].replace("Q", "12");
			val[0] = val[0].replace("K", "13");
			val[0] = val[0].replace("A", "14");
			val[1] = val[1].replace("♥", "H");
			val[1] = val[1].replace("♦", "D");
			val[1] = val[1].replace("♣", "C");
			val[1] = val[1].replace("♠", "S");
			return val;
		});
		cards = cards.map((val) => {
			val[0] = Number(val[0]);
			return val;
		});

		// for (let i = 1; i < cards.length; i++) {
		// 	let j = i;
		// 	while (j > 0 && cards[j][0] > cards[j - 1][0]) {
		// 		let temp = cards[j][0];
		// 		cards[j][0] = cards[j - 1][0];
		// 		cards[j - 1][0] = temp;
		// 		j--;
		// 	}
		// }
		bubbleSort(cards);
		return cards;
	};
	const bubbleSort = (arr) => {
		for (let i = 1; i < arr.length; i++) {
			let j = i;
			while (j > 0 && arr[j][0] > arr[j - 1][0]) {
				let temp = arr[j][0];
				arr[j][0] = arr[j - 1][0];
				arr[j - 1][0] = temp;
				j--;
			}
		}
	};
	let cards = prepareCards(ownCards, communityCards);
	const checkFlush = (cards) => {
		let flush = [];
		let H = [];
		let D = [];
		let C = [];
		let S = [];
		cards.forEach((val) => {
			switch (val[1]) {
				case "H":
					H.push(val);
					break;
				case "D":
					D.push(val);
					break;
				case "C":
					C.push(val);
					break;
				case "S":
					S.push(val);
					break;
			}
		});
		if (H.length >= 5) {
			flush = H;
		} else if (D.length >= 5) {
			flush = D;
		} else if (C.length >= 5) {
			flush = C;
		} else if (S.length >= 5) {
			flush = S;
		}
		return flush;
	};
	const cleanFlush = (flush) => {
		if (!flush.length) return [];
		flush = flush.slice(0, 5);
		return ["flush", [flush[0][1]], []];
	};
	const checkStraight = (cards) => {
		let straight = [];
		cards.forEach((val, idx, arr) => {
			if (!straight.length) {
				straight.push(val);
			} else {
				if (val[0] == arr[idx - 1][0]) return;
				if (val[0] == arr[idx - 1][0] - 1) straight.push(val);
				else if (straight.length < 5) straight = [];
			}
		});

		if (straight.length < 5) straight = [];
		if (straight.length) return ["straight", [straight[0]], []];
		else return straight;
	};
	const checkPoker = (cards) => {
		let poker = [];
		let flush = checkFlush(cards);
		if (flush.length != 0) poker = checkStraight(flush);

		if (poker.length != 0 && poker[1][0][0] == 14)
			return ["royal poker", [poker[1][0][1]], []];
		if (poker.length != 0) return ["poker", [poker[1][0]], []];
		else return [];
	};
	const checkOthers = (cards) => {
		let figures = cards.map((val) => val[0]);
		console.log(figures);

		let pairs = [];
		let threes = [];
		let fours = [];
		for (let i = 0; i < figures.length - 1; i++) {
			if (
				i < figures.length - 3 &&
				figures[i] == figures[i + 1] &&
				figures[i + 1] == figures[i + 2] &&
				figures[i + 2] == figures[i + 3]
			) {
				fours.push(figures[i]);
				i += 3;
			} else if (
				i < figures.length - 2 &&
				figures[i] == figures[i + 1] &&
				figures[i + 1] == figures[i + 2]
			) {
				threes.push(figures[i]);
				i += 2;
			} else if (figures[i] == figures[i + 1]) {
				pairs.push(figures[i]);
				i++;
			}
		}
		if (fours.length) {
			figures = figures.filter((val) => val != fours[0]);
			return ["four", [fours[0]], [figures[0]]];
		}
		if (threes.length && pairs.length)
			return ["full", [threes[0], pairs[0]], []];
		if (threes.length > 1) return ["full", [threes[0], threes[1]], []];
		if (threes.length == 1) {
			figures = figures.filter((val) => val != threes[0]);
			return ["three", [threes[0]], [figures[0], figures[1]]];
		}
		if (pairs.length > 1) {
			figures = figures.filter((val) => val != pairs[0] && val != pairs[1]);
			return ["two pairs", [pairs[0], pairs[1]], [figures[0]]];
		}
		if (pairs.length == 1) {
			figures = figures.filter((val) => val != pairs[0]);
			return ["pair", [pairs[0]], [figures[0], figures[1], figures[2]]];
		}

		return [];
	};
	const checkType = (cards) => {
		let poker = checkPoker(cards);
		if (poker.length) return poker;
		let others = checkOthers(cards);
		if (others.length && (others[0] == "full" || others[0] == "four"))
			return others;
		let flush = cleanFlush(checkFlush(cards));
		if (flush.length) return flush;
		let straight = checkStraight(cards);
		if (straight.length) return straight;
		if (others.length) return others;
		return ["high card", cards.slice(0, 5), []];
	};
	let result = checkType(cards);
	console.log(result);
}

hand(["A♥", "A♣"], ["K♥", "J♥", "10♥", "Q♥", "3♦"]);
