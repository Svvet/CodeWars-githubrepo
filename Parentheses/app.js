function validParentheses(parens) {
	if (parens.length > 100) return;
	let tab = parens.split("");
	// let countOpen;
	// let countClosed;
	let count = 0;
	for (let i of tab) {
		if (i == "(") count++;
		else count--;
		if (count < 0) return false;
	}
	return count == 0;
}

console.log(validParentheses("()((()))"));
