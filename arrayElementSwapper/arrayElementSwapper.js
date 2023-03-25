function arraySwapper(array, indexOf1, indexOf2) {
	let hold = array[indexOf1];

	array[indexOf1] = array[indexOf2];

	array[indexOf2] = hold;

	return array;
}

let array = [1, 2, 3, 4];
console.log(arraySwapper(array, 0, 3));