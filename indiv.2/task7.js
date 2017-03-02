function getSafePawns(pawns) {
  //Change this function
  return 0;
}

function assertEqual(actualVal, expectedVal, message) {
	if(expectedVal === actualVal) {
		console.log("+", message);
	}
	else {
		console.error("-", message, "(Expected:", expectedVal, "; Actual:", actualVal, ")");
	}
}

function runTask7() {
  assertEqual(getSafePawns(new Set(['b4', 'd4', 'f4', 'c3', 'e3', 'g5', 'd2'])), 6, "Case #1");
  assertEqual(getSafePawns(new Set(['b4', 'd4', 'f4', 'c3', 'e3', 'g5', 'd2'])), 6, "Case #1");
  assertEqual(getSafePawns(new Set(['b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'e5'])), 1, "Case #2");
  assertEqual(getSafePawns(new Set(['e4'])), 0, "Case #3");
  assertEqual(getSafePawns(new Set(['e8'])), 0, "Case #4");
  assertEqual(getSafePawns(new Set(['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'])), 7, "Case #5");
  assertEqual(getSafePawns(new Set(['a8', 'b7', 'c6', 'd5', 'e4', 'f3', 'g2', 'h1'])), 7, "Case #6");
  assertEqual(getSafePawns(new Set(['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'])), 7, "Case #7");
  assertEqual(getSafePawns(new Set(['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'])), 0, "Case #8");
  assertEqual(getSafePawns(new Set(['a1', 'a2', 'a3', 'a4', 'h1', 'h2', 'h3', 'h4'])), 0, "Case #9");
  assertEqual(getSafePawns(new Set(['b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'e3'])), 2, "Case #10");
  assertEqual(getSafePawns(new Set(['e7', 'e6', 'd5', 'f5', 'c4', 'e4', 'g4', 'e8'])), 3, "Case #11");
  assertEqual(getSafePawns(new Set(['a2', 'b4', 'c6', 'd8', 'e1', 'f3', 'g5', 'h8'])), 0, "Case #12");
  assertEqual(getSafePawns(new Set(['b6', 'a7', 'b8', 'c7', 'g1', 'f2', 'h2', 'g3'])), 6, "Case #13");

	console.log("Done!");
}

runTask7();
