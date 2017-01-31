function getNumSquares(n) {
	//Change this function
	return 0;
}

function getFreeSpace(n) {
	//Change this function
	return 0;
}

function assert(expression, message) {
	if(expression) {
		console.log("+", message);
	}
	else {
		console.error("-", message);
	}
}

function runTask6() {
	assert(getNumSquares(62, 74, 12) ==  30, "Case #0 (a)");
	assert(getFreeSpace(62, 74, 12) ==  268, "Case #0 (b)");
	assert(getNumSquares(11, 62, 14) ==  0, "Case #1 (a)");
	assert(getFreeSpace(11, 62, 14) ==  682, "Case #1 (b)");
	assert(getNumSquares(81, 24, 12) ==  12, "Case #2 (a)");
	assert(getFreeSpace(81, 24, 12) ==  216, "Case #2 (b)");
	assert(getNumSquares(19, 89, 14) ==  6, "Case #3 (a)");
	assert(getFreeSpace(19, 89, 14) ==  515, "Case #3 (b)");
	assert(getNumSquares(37, 47, 10) ==  12, "Case #4 (a)");
	assert(getFreeSpace(37, 47, 10) ==  539, "Case #4 (b)");
	assert(getNumSquares(83, 90, 11) ==  56, "Case #5 (a)");
	assert(getFreeSpace(83, 90, 11) ==  694, "Case #5 (b)");
	assert(getNumSquares(31, 83, 20) ==  4, "Case #6 (a)");
	assert(getFreeSpace(31, 83, 20) ==  973, "Case #6 (b)");
	assert(getNumSquares(45, 35, 13) ==  6, "Case #7 (a)");
	assert(getFreeSpace(45, 35, 13) ==  561, "Case #7 (b)");
	assert(getNumSquares(94, 99, 13) ==  49, "Case #8 (a)");
	assert(getFreeSpace(94, 99, 13) ==  1025, "Case #8 (b)");
	assert(getNumSquares(98, 95, 12) ==  56, "Case #9 (a)");
	assert(getFreeSpace(98, 95, 12) ==  1246, "Case #9 (b)");
	assert(getNumSquares(90, 57, 19) ==  12, "Case #10 (a)");
	assert(getFreeSpace(90, 57, 19) ==  798, "Case #10 (b)");
	assert(getNumSquares(73, 20, 11) ==  6, "Case #11 (a)");
	assert(getFreeSpace(73, 20, 11) ==  734, "Case #11 (b)");
	assert(getNumSquares(24, 42, 10) ==  8, "Case #12 (a)");
	assert(getFreeSpace(24, 42, 10) ==  208, "Case #12 (b)");
	assert(getNumSquares(20, 38, 11) ==  3, "Case #13 (a)");
	assert(getFreeSpace(20, 38, 11) ==  397, "Case #13 (b)");
	assert(getNumSquares(61, 92, 10) ==  54, "Case #14 (a)");
	assert(getFreeSpace(61, 92, 10) ==  212, "Case #14 (b)");
	assert(getNumSquares(66, 81, 13) ==  30, "Case #15 (a)");
	assert(getFreeSpace(66, 81, 13) ==  276, "Case #15 (b)");
	assert(getNumSquares(69, 78, 15) ==  20, "Case #16 (a)");
	assert(getFreeSpace(69, 78, 15) ==  882, "Case #16 (b)");
	assert(getNumSquares(42, 51, 13) ==  9, "Case #17 (a)");
	assert(getFreeSpace(42, 51, 13) ==  621, "Case #17 (b)");
	assert(getNumSquares(87, 25, 16) ==  5, "Case #18 (a)");
	assert(getFreeSpace(87, 25, 16) ==  895, "Case #18 (b)");
	assert(getNumSquares(98, 97, 13) ==  49, "Case #19 (a)");
	assert(getFreeSpace(98, 97, 13) ==  1225, "Case #19 (b)");
	console.log("Done!");
}

runTask6();
