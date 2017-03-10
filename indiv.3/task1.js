function generateCounter(n) {
	function counter() {
		return 0;
	}

	return counter;
}

function assertEqual(expectedVal, actualVal, message) {
	if(expectedVal == actualVal) {
		console.log("+", message);
	}
	else {
		console.error("-", message, "(Expected:", expectedVal, "; Actual:", actualVal, ")");
	}
}

function task1() {
	var tripleCounter = generateCounter(3);
	assertEqual(0, tripleCounter(), "Case 'tripleCounter' - 0");
	assertEqual(3, tripleCounter(), "Case 'tripleCounter' - 1");
	assertEqual(6, tripleCounter(), "Case 'tripleCounter' - 2");
	assertEqual(9, tripleCounter(), "Case 'tripleCounter' - 3");

	var evenCounter1 = generateCounter(2);
	evenCounter1();// == 0;
	evenCounter1();// == 2;
	evenCounter1();// == 4;
	assertEqual(6, evenCounter1(), "Case 'evenCounter1'");

	var evenCounter2 = generateCounter(2);
	evenCounter2();// == 0;
	evenCounter2();// == 2;
	evenCounter2();// == 4;
	evenCounter2();// == 6;
	assertEqual(8, evenCounter2(), "Case 'evenCounter2'");

	evenCounter1();// == 8;
	assertEqual(10, evenCounter1(), "Case 'evenCounter1' - 10");

	var counter1WithHalf = generateCounter(1.5);
	for(var i=0; i<10; i++) {
		counter1WithHalf();
	}
	assertEqual(15, counter1WithHalf(), "Case 'counter1WithHalf'");

	var backCounter = generateCounter(-1);
	for(var j=0; j<20; j++) {
		backCounter();
	}
	assertEqual(-20, backCounter(), "Case 'backCounter'");
}

task1();
