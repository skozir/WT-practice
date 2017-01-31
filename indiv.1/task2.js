function getMinutes(n) {
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

function runTask2() {
	assert(getMinutes( 60 ) ==  1, "Case '60'");
	assert(getMinutes( 1800 ) ==  30, "Case '1800'");
	assert(getMinutes( 3600 ) ==  0, "Case '3600'");
	assert(getMinutes( 5400 ) ==  30, "Case '5400'");
	assert(getMinutes( 46683 ) ==  58, "Case '46683'");
	assert(getMinutes( 35841 ) ==  57, "Case '35841'");
	assert(getMinutes( 29575 ) ==  12, "Case '29575'");
	assert(getMinutes( 12284 ) ==  24, "Case '12284'");
	assert(getMinutes( 47008 ) ==  3, "Case '47008'");
	assert(getMinutes( 25303 ) ==  1, "Case '25303'");
	assert(getMinutes( 48554 ) ==  29, "Case '48554'");
	assert(getMinutes( 40585 ) ==  16, "Case '40585'");
	assert(getMinutes( 37407 ) ==  23, "Case '37407'");
	assert(getMinutes( 37594 ) ==  26, "Case '37594'");
	assert(getMinutes( 36014 ) ==  0, "Case '36014'");
	assert(getMinutes( 25023 ) ==  57, "Case '25023'");
	assert(getMinutes( 9083 ) ==  31, "Case '9083'");
	assert(getMinutes( 28950 ) ==  2, "Case '28950'");
	assert(getMinutes( 14519 ) ==  1, "Case '14519'");
	assert(getMinutes( 18581 ) ==  9, "Case '18581'");
	assert(getMinutes( 2163 ) ==  36, "Case '2163'");
	assert(getMinutes( 47313 ) ==  8, "Case '47313'");
	assert(getMinutes( 3678 ) ==  1, "Case '3678'");
	assert(getMinutes( 45695 ) ==  41, "Case '45695'");
	console.log("Done!");
}

runTask2();
