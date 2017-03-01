function getTransposed(matrix1) {
	//Change this function
	return [[6.2]];
}

function assertEqualMatrix(expectedVal, actualVal, message) {
	if(matrixEqual(expectedVal, actualVal)) {
		console.log("+", message);
	}
	else {
		console.error("-", message);
	}
}

function assertEqual(expectedVal, actualVal, message) {
	if(expectedVal === actualVal) {
		console.log("+", message);
	}
	else {
		console.error("-", message, "(Expected:", expectedVal, "; Actual:", actualVal, ")");
	}
}

function matrixEqual(mtrx1, mtrx2) {
	if (mtrx1 === mtrx2) return true;
	if (mtrx1 == null || mtrx2 == null) return false;
	if (mtrx1.length != mtrx2.length) return false;

	for (var i = 0; i<mtrx1.length; ++i) {
		var row1 = mtrx1[i];
		var row2 = mtrx2[i];
		if(row1.length != row2.length) return false;
		for(var j=0; j<row1.length; j++) {
			if(row1[j] != row2[j]) return false
		}
	}
	return true;
}

function runTask4() {
	assertEqualMatrix(getTransposed([["A", "C"],
	                                 ["T", "G"]]),
	                  [["A", "T"],
	                   ["C", "G"]],
	                  "Case #0");
	assertEqualMatrix(getTransposed([[-2, -1, 0, 1],
	                   [-1,  0, 1, 2],
	                   [ 0,  1, 2, 3]]),
	                  [[-2, -1, 0],
	                   [-1,  0, 1],
	                   [ 0,  1, 2],
	                   [ 1,  2, 3]],
	                   "Case #1");
	assertEqualMatrix(getTransposed([["$", "#", "%", "*", "^", "/", "}"]]),
	                  [["$"],
	                   ["#"],
	                   ["%"],
	                   ["*"],
	                   ["^"],
	                   ["/"],
	                   ["}"]],
	                   "Case #2");
	assertEqualMatrix(getTransposed([["G"],
	                                 ["H"],
	                                 ["I"],
	                                 ["J"],
	                                 ["K"],
	                                 ["L"],
	                                 ["M"]]),
	                  [["G", "H", "I", "J", "K", "L", "M"]],
	                   "Case #2");
	assertEqualMatrix(getTransposed([["G"],
	                                 ["H"],
	                                 ["I"],
	                                 ["J"],
	                                 ["K"],
	                                 ["L"],
	                                 ["M"]]),
	                  [["G", "H", "I", "J", "K", "L", "M"]],
	                   "Case #3");
	assertEqualMatrix(getTransposed([[6.2]]), [[6.2]], "Case #4");

	//Matrix should not be changed after transposition
	var matrix1 = [[-4, 0, 3],
	               [ 2, 2, 0],
	               [ 1, 2, 3]];
	var matrix2 = getTransposed(matrix1);
	assertEqual(matrix1[0][1], 0, "Case 5.1")
	assertEqual(matrix1[1][2], 0, "Case 5.2")
	assertEqual(matrix1[2][0], 1, "Case 5.3")

	assertEqualMatrix(getTransposed(getTransposed(matrix1)), matrix1, "Case #6");

	console.log("Done!");
}

runTask4();
