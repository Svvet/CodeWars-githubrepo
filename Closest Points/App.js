function dist(p1, p2) {
	return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}

function closestDistance(initialPoints) {
	let points = initialPoints;
	let n = points.length;
	let half = Math.floor(n / 2);
	let line = points[half][0];

	if (n == 1) return [Number.POSITIVE_INFINITY];
	if (n == 2) {
		return [dist(points[0], points[1]), points[0], points[1]];
	}
	let p1 = points.slice(0, half);
	let p2 = points.slice(half, points.length);
	let minPoints;
	let minPoints1 = closestDistance(p1);
	let minPoints2 = closestDistance(p2);
	let minPoints3 = [];
	let d1 = minPoints1[0];
	let d2 = minPoints2[0];

	let d3 = Number.POSITIVE_INFINITY;
	let d = Math.min(d1, d2);
	strip = points.filter((val) => val[0] >= line - d && val[0] < line + d);
	strip = strip.sort((a, b) => a[1] - b[1]);
	for (let i = 0; i < strip.length - 1; i++) {
		for (let j = 1; j < 7 && i + j < strip.length; j++) {
			distance = dist(strip[i], strip[i + j]);
			if (d3 > distance) {
				d3 = distance;
				minPoints3 = [d3, strip[i], strip[i + j]];
			}
		}
	}
	console.log(d3);
	d = Math.min(d1, d2, d3);
	if (d == d1) minPoints = minPoints1;
	if (d == d2) minPoints = minPoints2;
	if (d == d3) minPoints = minPoints3;
	return minPoints;
}
function finalDistFunc(points) {
	let result = closestDistance(points.sort((a, b) => a[0] - b[0]));
	result = [result[1], result[2]];
	return result;
}

console.log(
	finalDistFunc([
		[12, 5],
		[3, 8],
		[5, 32],
		[6, 30],
		[10, 42],
	])
);
