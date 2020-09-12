function pathFinder(maze) {
	const start = [0, 0];
	let current;
	let arr = maze.split("");
	let arra = [[]];
	arr.forEach(function (val) {
		if (val == "\n") arra.push([]);
		else arra[arra.length - 1].push(val == "." ? 0 : 1);
	});
	const size = arra.length;
	console.log(size);
	function move(x, y) {
		if (x >= size || y >= size) return;
		move(x + 1, y);
		move(x, y + 1);
		move(x - 1, y);
		move(x, y - 1);
	}
	move(0, 0);
}

pathFinder(`...
...
...`);
