function dirReduc(arr) {
	let current;
	let next;
	let stop;
	let abc;
	for (let i = 0; i < arr.length; i++) {
		current = arr[i];
		next = arr[i + 1];
		if (
			(current == "EAST" && next == "WEST") ||
			(current == "WEST" && next == "EAST") ||
			(current == "NORTH" && next == "SOUTH") ||
			(current == "SOUTH" && next == "NORTH")
		) {
			arr.splice(i, 2);
			if (i > 0) i = i - 2;
			else i = i - 1;
		}
	}
	return arr;
}
let cbd;
let arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
dirReduc(arr);
console.log(arr);
