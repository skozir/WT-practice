function sumDigits(n) {
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

function runTask5() {
	assert(sumDigits(717) == 15, "Case '717'");
	assert(sumDigits(115) == 7, "Case '115'");
	assert(sumDigits(918) == 18, "Case '918'");
	assert(sumDigits(5) == 5, "Case '5'");
	assert(sumDigits(52) == 7, "Case '52'");
	assert(sumDigits(0) == 0, "Case '0'");
	assert(sumDigits(103) == 4, "Case '103'");
	assert(sumDigits(188) == 17, "Case '188'");
	console.log("Done!");
}

runTask5();
