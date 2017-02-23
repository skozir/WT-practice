function calcSum(data) {
	//Change this function
	return 0;
}

function assertEqual(expectedVal, actualVal, message) {
	if(expectedVal == actualVal) {
		console.log("+", message);
	}
	else {
		console.error("-", message, "(Expected:", expectedVal, "; Actual:", actualVal, ")");
	}
}

function runTask1() {
	assertEqual(30, calcSum([0, 1, 2, 3, 4, 5]), "Case #0");
	assertEqual(30, calcSum([1, 3, 5]), "Case #1");
	assertEqual(36, calcSum([6]), "Case #2");
	assertEqual(0, calcSum([]), "Case #3");
	assertEqual(310, calcSum([2, 7, 10, 10, 9, 5, 10]), "Case #4");
	assertEqual(200, calcSum([1, 3, 7, 10, 2, 10, 10]), "Case #5");
	assertEqual(64, calcSum([1, 8, 4, 7, 7, 4, 4]), "Case #6");
	assertEqual(162, calcSum([8, 4, 4, 2, 9, 5, 6]), "Case #7");
	assertEqual(133, calcSum([2, 10, 2, 4, 8, 6, 7]), "Case #8");
	assertEqual(249, calcSum([8, 14, 14, 16, 5, 20, 4, 15, 19, 2, 9, 10, 8, 6, 15, 4, 1, 3]), "Case #9");
	assertEqual(1188, calcSum([13, 8, 9, 10, 19, 6, 6, 9, 4, 14, 9, 19, 18, 15, 15, 5, 15, 11]), "Case #10");
	assertEqual(642, calcSum([15, 4, 12, 19, 15, 8, 16, 8, 17, 19, 4, 12, 9, 7, 12, 20, 7, 6]), "Case #11");
	assertEqual(1666, calcSum([16, 6, 14, 2, 7, 17, 6, 5, 2, 17, 18, 9, 16, 20, 4, 7, 15, 17]), "Case #12");
	assertEqual(1820, calcSum([9, 16, 6, 5, 8, 3, 11, 20, 15, 14, 10, 17, 16, 11, 3, 9, 13, 20]), "Case #13");

	console.log("Done!");
}

runTask1();
