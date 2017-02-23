function filterUnique(data) {
	//Change this function
	return [];
}

function assertEqualArrays(expectedVal, actualVal, message) {
	if(arraysEqual(expectedVal, actualVal)) {
		console.log("+", message);
	}
	else {
		console.error("-", message, "(Expected:", expectedVal, "; Actual:", actualVal, ")");
	}
}

function arraysEqual(arr1, arr2) {
	if (arr1 === arr2) return true;
	if (arr1 == null || arr2 == null) return false;
	if (arr1.length != arr2.length) return false;

	for (var i = 0; i<arr1.length; ++i) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
}

function runTask2() {
	assertEqualArrays([0], filterUnique([0, 1, 1, 2, 2, 3, 3]), "Case #0");
	assertEqualArrays([22, 28, 62, 32], filterUnique([10, 22, 14, 10, 28, 10, 14, 62, 32]), "Case #1");
	assertEqualArrays([3, 14, 15, 92, 6, 5, 35], filterUnique([3, 14, 15, 92, 6, 5, 35]), "Case #2");
	assertEqualArrays([], filterUnique([8, 2, 2, 3, 8, 2, 2, 3]), "Case #3");
	assertEqualArrays([9, 3, 5, 1], filterUnique([9, 8, 3, 5, 10, 1, 10, 10, 10, 8]), "Case #4");
	assertEqualArrays([6, 7, 5], filterUnique([8, 6, 10, 0, 7, 0, 5, 8, 8, 10]), "Case #5");
	assertEqualArrays([2, 7, 9, 4], filterUnique([8, 2, 10, 8, 10, 7, 9, 1, 4, 1]), "Case #6");
	assertEqualArrays([3, 6, 9, 10], filterUnique([7, 7, 3, 0, 0, 6, 9, 0, 7, 10]), "Case #7");
	assertEqualArrays([3, 5, 0, 1, 8], filterUnique([10, 2, 2, 2, 3, 5, 0, 1, 8, 10]), "Case #8");
	assertEqualArrays(['D', 'E', '13', '11', 'F', 'A'], filterUnique(['12', '10', '14', 'C', 'D', 'C', '10', 'B', 'E', '13', '11', 'C', 'B', 'F', 'B', 'B', '10', '12', '14', 'A']), "Case #9");
	assertEqualArrays(['13', '14', '10', 'A'], filterUnique(['13', 'C', 'E', '11', 'D', '11', 'E', 'C', 'F', 'E', '11', '12', '14', 'D', '10', 'C', '12', 'A', 'E', 'F']), "Case #10");
	assertEqualArrays(['10', 'E', 'F'], filterUnique(['A', 'B', '13', 'B', 'A', 'B', 'B', '13', '10', 'B', 'E', 'D', 'C', 'D', '12', '14', 'F', '14', 'C', '12']), "Case #11");
	assertEqualArrays(['E', 'C', 'B'], filterUnique(['13', 'D', '12', '13', 'A', 'E', 'C', '12', '10', 'A', '14', 'D', 'A', '10', '14', 'F', 'F', 'D', '12', 'B']), "Case #12");
	assertEqualArrays(['13', 'F', 'B', '11'], filterUnique(['A', '13', 'D', '10', 'F', 'C', 'C', 'C', 'B', 'E', 'C', '11', 'A', '12', 'E', '10', '12', 'A', '12', 'D']), "Case #13");

	console.log("Done!");
}

runTask2();
