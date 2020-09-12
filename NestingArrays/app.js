Array.prototype.sameStructureAs = function (other) {
	if (this.length == other.length) {
		for (let i = 0; i < this.length; i++) {
			if (Array.isArray(this[i]) == true && Array.isArray(other[i]) == true) {
				return this[i].sameStructureAs(other[i]);
			} else {
				if (Array.isArray(this[i]) != Array.isArray(other[i])) {
					return false;
				}
			}
		}
		return true;
	} else return false;
};
let tab = [1, 6, 10, [12, []], []];
let tab2 = [3, 3, 5, [12, [], []], []];
console.log(tab.sameStructureAs(tab2));
