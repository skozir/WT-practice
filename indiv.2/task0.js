function getStats(data) {
	//Change this function
	return [0, 0, 0];
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

function runTask0() {
	assertEqualArrays([0, 0, 0], getStats([0]), "Case #0");
	assertEqualArrays([0, 0, 0], getStats([]), "Case #1");
	assertEqualArrays([2, 2, 2], getStats([2, 2, 2]), "Case #2");
	assertEqualArrays([98, 2, 42.4], getStats([3, 37, 45, 80, 1, 50, 36, 75, 77, 26]), "Case #3");
	assertEqualArrays([86, 10, 47], getStats([86, 30, 70, 19, 68, 75, 10, 49, 26, 37]), "Case #4");
	assertEqualArrays([46, -48, 5.15], getStats([1, 46, 29, 7, -24, -48, -5, -46, 5, 36, 43, 13, -32, -15, 21, 46, -23, 33, -10, 26]), "Case #5");
	assertEqualArrays([50, -47, 12.75], getStats([7, 50, -3, 36, 21, -21, 18, 7, -3, 24, 25, 17, -16, 49, 17, 6, 33, 16, 19, -47]), "Case #6");
	assertEqualArrays([45, -46, -0.25], getStats([-25, 45, 43, 26, -41, -46, -34, 30, 4, -7, 34, -23, 22, -42, 26, 41, -40, -6, -18, 6]), "Case #7");
	assertEqualArrays([50, -41, 1.95], getStats([-21, 20, -26, 44, -36, 36, 22, -17, -24, -25, -41, 46, 50, 44, 13, -18, 6, -41, -32, 39]), "Case #8");
	assertEqualArrays([40, -32, 5.75], getStats([-1, 9, 38, 26, -22, 17, -25, -32, 16, 11, 2, 30, 40, 20, 19, 24, -8, -17, -14, -18]), "Case #9");
	assertEqualArrays([44, -50, 2.58], getStats([33, -18, -12, 37, 14, 41, 26, -4, -19, -26, -38, -15, -11, 1, 1, 42, -13, -32, -27, 42, -47, -50, -30, -19, 3, 37, 38, 6, 26, -40, 3, 10, -32, 38, -18, 44, 22, 19, -7, -7, 33, 25, 36, 38, -40, -35, -1, 30, 41, -16]), "Case #10");
	assertEqualArrays([48, -49, 4.76], getStats([39, 30, 37, -23, 16, -49, 31, -45, -23, 27, -14, -8, 11, 23, -11, 27, 16, -34, -5, 3, 14, -41, -29, 44, 2, 48, 7, -9, -19, 36, 36, 40, 25, 17, -7, -17, 39, -20, 44, 4, -25, -49, -23, 47, -23, -17, 35, 11, -10, 30]), "Case #11");
	assertEqualArrays([49, -50, -0.7], getStats([-16, -21, -41, 25, -16, -47, -50, -10, -44, 41, 48, 34, -36, 0, -36, -40, 39, -15, 17, -49, -37, 30, 20, -15, -33, -28, 47, -2, -21, 24, -13, -23, 21, -39, -27, 46, 31, 25, -18, 49, -5, 16, 29, 39, 21, -5, 29, -5, 23, 3]), "Case #12");
	assertEqualArrays([49, -48, -1.24], getStats([-30, 23, -43, 24, -37, 0, -41, -39, 13, 36, -34, 5, -5, -30, -5, -23, -36, 1, 48, -8, -1, -29, -48, -20, 12, -24, -2, 28, -22, 49, 37, -31, -41, 49, 29, -42, 43, 12, 31, -42, 27, -16, 34, 4, 20, 8, 39, -34, 24, 25]), "Case #13");
	assertEqualArrays([50, -50, -3.42], getStats([50, 34, -50, 15, -49, -12, -37, -38, 5, -12, 44, -20, 38, 20, -33, 50, -15, -13, -41, 33, 4, -48, -6, -20, -23, -7, -1, -48, 10, -1, -35, 26, 21, -30, -7, 23, 21, -7, -44, 49, -20, 30, -9, 3, 44, 11, -43, -27, 23, -29]), "Case #14");

	console.log("Done!");
}

runTask0();
