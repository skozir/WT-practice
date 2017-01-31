function canBeTriangle(a, b, c) {
	//Change this function
	return false;
}

function assert(expression, message) {
	if(expression) {
		console.log("+", message);
	}
	else {
		console.error("-", message);
	}
}

function runTask1() {
	assert(canBeTriangle(3, 4, 5)==true, "Right triangle case");
	assert(canBeTriangle(2.3, 2.3, 2.3)==true, "Equilateral triangle case");
	assert(canBeTriangle(11.4, 0.8, 11)==true, "Third case");
	assert(canBeTriangle(15, 30, 15)==false, "Fourth case");
	assert(canBeTriangle(0, 4, 4)==false, "Zero side case`");
	console.log("Done!");
}

runTask1();
