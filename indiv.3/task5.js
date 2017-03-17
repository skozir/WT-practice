function runMarsohod(commands) {
	return [0, 0];
}

function assertEqual(expectedVal, actualVal, message) {
	if (coordsEqual(expectedVal, actualVal)) {
		console.log("+", message);
	}
	else {
		console.error("-", message, "(Expected:", expectedVal, "; Actual:", actualVal, ")");
	}
}

function coordsEqual(obj1, obj2) {
	if (obj1 == null || obj2 == null) {
		return false;
	}

	return obj1[0] == obj2[0] &&
	       obj1[1] == obj2[1];
}

function task5() {
	// Case #0
	var data0 = [];
	assertEqual([0, 0], runMarsohod(data0), "Case #0");

	// Case #1
	var data1 = [
		{
			"ORDER": 3, //Третья по счёту команда
			"COMMAND": "GO 1" //Ехать прямо на 1 метр
		},
		{
			"ORDER": 4, //Четвёртая по счёту команда
			"COMMAND": "TURN RIGHT" //Повернуть направо
		},
		{
			"ORDER": 1, //Первая команда
			"COMMAND": "GO 2" //Ехать прямо 2 метра
		},
		{
			"ORDER": 6, //Шестая команда
			"COMMAND": "GO 3" //Ехать вперёд на 3 метра
		},
		{
			"ORDER": 5, //Пятая команда
			"COMMAND": "DIGG 4" //Непонятно что. Игнорировать
		},
		{
			"ORDER": 2, //Вторая команда
			"COMMAND": "TURN LEFT" //Повернуть налево
		}
	];
	var coords1 = runMarsohod(data1);
	var answer1 = [-1, 5];
	assertEqual(answer1, coords1, "Case #1");

	// Case #2
	var data2 = [
		{
			"ORDER": 5,
			"COMMAND": "DANCE NOW"
		},
		{
			"ORDER": 4,
			"COMMAND": "RELAX SLOW"
		},
		{
			"ORDER": 3,
			"COMMAND": "FLY 100"
		},
		{
			"ORDER": 1,
			"COMMAND": "PUSH BACK"
		},
		{
			"ORDER": 2,
			"COMMAND": "SLOW DOWN"
		}
	];
	var coords2 = runMarsohod(data2);
	var answer2 = [0, 0];
	assertEqual(answer2, coords2, "Case #2");

	// Case #3
	var data3 = [
		{'COMMAND': 'TURN RIGHT', 'ORDER': 3},
		{'COMMAND': 'GO 2', 'ORDER': 1},
		{'COMMAND': 'GO 3', 'ORDER': 9},
		{'COMMAND': 'GO 1', 'ORDER': 4},
		{'COMMAND': 'GO 7', 'ORDER': 6},
		{'COMMAND': 'TURN LEFT', 'ORDER': 8},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 0},
		{'COMMAND': 'TURN LEFT', 'ORDER': 7},
		{'COMMAND': 'TURN LEFT', 'ORDER': 2},
		{'COMMAND': 'GO 7', 'ORDER': 5}
	];
	var coords3 = runMarsohod(data3);
	var answer3 = [14, 0];
	assertEqual(answer3, coords3, "Case #3");

	// Case #4
	var data4 = [
		{'COMMAND': 'TURN LEFT', 'ORDER': 8},
		{'COMMAND': 'GO 3', 'ORDER': 6},
		{'COMMAND': 'TURN LEFT', 'ORDER': 0},
		{'COMMAND': 'GO 1', 'ORDER': 9},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 5},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 2},
		{'COMMAND': 'GO 10', 'ORDER': 7},
		{'COMMAND': 'GO 7', 'ORDER': 1},
		{'COMMAND': 'GO 3', 'ORDER': 3},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 4}
	];
	var coords4 = runMarsohod(data4);
	var answer4 = [-6, -10];
	assertEqual(answer4, coords4, "Case #4");

	// Case #5
	var data5 = [
		{'COMMAND': 'GO 9', 'ORDER': 1},
		{'COMMAND': 'GO 6', 'ORDER': 2},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 8},
		{'COMMAND': 'GO 9', 'ORDER': 4},
		{'COMMAND': 'TURN LEFT', 'ORDER': 6},
		{'COMMAND': 'GO 3', 'ORDER': 7},
		{'COMMAND': 'TURN LEFT', 'ORDER': 3},
		{'COMMAND': 'GO 5', 'ORDER': 9},
		{'COMMAND': 'TURN LEFT', 'ORDER': 0},
		{'COMMAND': 'GO 6', 'ORDER': 5}
	];
	var coords5 = runMarsohod(data5);
	var answer5 = [-12, -20];
	assertEqual(answer5, coords5, "Case #5");

	// Case #6
	var data6 = [
		{'COMMAND': 'TURN RIGHT', 'ORDER': 4},
		{'COMMAND': 'GO 7', 'ORDER': 7},
		{'COMMAND': 'GO 6', 'ORDER': 5},
		{'COMMAND': 'GO 6', 'ORDER': 3},
		{'COMMAND': 'GO 3', 'ORDER': 1},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 0},
		{'COMMAND': 'GO 8', 'ORDER': 2},
		{'COMMAND': 'GO 3', 'ORDER': 6},
		{'COMMAND': 'GO 5', 'ORDER': 8},
		{'COMMAND': 'GO 8', 'ORDER': 9}
	];
	var coords6 = runMarsohod(data6);
	var answer6 = [17, -29];
	assertEqual(answer6, coords6, "Case #6");

	// Case #7
	var data7 = [
		{'COMMAND': 'GO 4', 'ORDER': 29},
		{'COMMAND': 'GO 8', 'ORDER': 21},
		{'COMMAND': 'GO 8', 'ORDER': 2},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 19},
		{'COMMAND': 'GO 6', 'ORDER': 0},
		{'COMMAND': 'GO 5', 'ORDER': 26},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 23},
		{'COMMAND': 'GO 8', 'ORDER': 15},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 8},
		{'COMMAND': 'GO 6', 'ORDER': 3},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 17},
		{'COMMAND': 'GO 1', 'ORDER': 14},
		{'COMMAND': 'TURN LEFT', 'ORDER': 28},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 1},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 13},
		{'COMMAND': 'GO 4', 'ORDER': 24},
		{'COMMAND': 'GO 6', 'ORDER': 12},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 6},
		{'COMMAND': 'GO 4', 'ORDER': 18},
		{'COMMAND': 'GO 4', 'ORDER': 16},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 5},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 7},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 20},
		{'COMMAND': 'GO 2', 'ORDER': 9},
		{'COMMAND': 'GO 10', 'ORDER': 25},
		{'COMMAND': 'GO 6', 'ORDER': 22},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 27},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 11},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 4},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 10}
	];
	var coords7 = runMarsohod(data7);
	var answer7 = [50, 20];
	assertEqual(answer7, coords7, "Case #7");

	// Case #8
	var data8 = [
		{'COMMAND': 'GO 6', 'ORDER': 13},
		{'COMMAND': 'TURN LEFT', 'ORDER': 9},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 27},
		{'COMMAND': 'GO 6', 'ORDER': 6},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 26},
		{'COMMAND': 'TURN LEFT', 'ORDER': 7},
		{'COMMAND': 'GO 9', 'ORDER': 21},
		{'COMMAND': 'TURN LEFT', 'ORDER': 2},
		{'COMMAND': 'TURN LEFT', 'ORDER': 20},
		{'COMMAND': 'GO 2', 'ORDER': 5},
		{'COMMAND': 'TURN LEFT', 'ORDER': 25},
		{'COMMAND': 'GO 8', 'ORDER': 1},
		{'COMMAND': 'TURN LEFT', 'ORDER': 24},
		{'COMMAND': 'GO 3', 'ORDER': 28},
		{'COMMAND': 'GO 1', 'ORDER': 0},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 14},
		{'COMMAND': 'TURN LEFT', 'ORDER': 29},
		{'COMMAND': 'GO 1', 'ORDER': 17},
		{'COMMAND': 'GO 10', 'ORDER': 8},
		{'COMMAND': 'TURN LEFT', 'ORDER': 22},
		{'COMMAND': 'GO 5', 'ORDER': 10},
		{'COMMAND': 'GO 8', 'ORDER': 19},
		{'COMMAND': 'GO 6', 'ORDER': 4},
		{'COMMAND': 'GO 10', 'ORDER': 12},
		{'COMMAND': 'GO 7', 'ORDER': 23},
		{'COMMAND': 'TURN LEFT', 'ORDER': 15},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 11},
		{'COMMAND': 'GO 4', 'ORDER': 16},
		{'COMMAND': 'GO 6', 'ORDER': 3},
		{'COMMAND': 'TURN LEFT', 'ORDER': 18}
	];
	var coords8 = runMarsohod(data8);
	var answer8 = [-17, -13];
	assertEqual(answer8, coords8, "Case #8");

	// Case #9
	var data9 = [
		{'COMMAND': 'TURN LEFT', 'ORDER': 33},
		{'COMMAND': 'GO 3', 'ORDER': 49},
		{'COMMAND': 'GO 1', 'ORDER': 19},
		{'COMMAND': 'TURN LEFT', 'ORDER': 65},
		{'COMMAND': 'TURN LEFT', 'ORDER': 99},
		{'COMMAND': 'GO 6', 'ORDER': 52},
		{'COMMAND': 'TURN LEFT', 'ORDER': 96},
		{'COMMAND': 'GO 10', 'ORDER': 55},
		{'COMMAND': 'GO 8', 'ORDER': 10},
		{'COMMAND': 'GO 5', 'ORDER': 59},
		{'COMMAND': 'GO 9', 'ORDER': 12},
		{'COMMAND': 'GO 5', 'ORDER': 62},
		{'COMMAND': 'GO 5', 'ORDER': 21},
		{'COMMAND': 'GO 10', 'ORDER': 15},
		{'COMMAND': 'GO 6', 'ORDER': 88},
		{'COMMAND': 'GO 2', 'ORDER': 83},
		{'COMMAND': 'TURN LEFT', 'ORDER': 42},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 0},
		{'COMMAND': 'TURN LEFT', 'ORDER': 6},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 25},
		{'COMMAND': 'GO 6', 'ORDER': 16},
		{'COMMAND': 'GO 2', 'ORDER': 72},
		{'COMMAND': 'GO 6', 'ORDER': 84},
		{'COMMAND': 'GO 4', 'ORDER': 50},
		{'COMMAND': 'GO 9', 'ORDER': 38},
		{'COMMAND': 'GO 5', 'ORDER': 26},
		{'COMMAND': 'GO 9', 'ORDER': 85},
		{'COMMAND': 'GO 9', 'ORDER': 54},
		{'COMMAND': 'GO 9', 'ORDER': 1},
		{'COMMAND': 'GO 1', 'ORDER': 87},
		{'COMMAND': 'GO 10', 'ORDER': 30},
		{'COMMAND': 'GO 9', 'ORDER': 48},
		{'COMMAND': 'GO 6', 'ORDER': 76},
		{'COMMAND': 'GO 7', 'ORDER': 75},
		{'COMMAND': 'GO 5', 'ORDER': 61},
		{'COMMAND': 'TURN LEFT', 'ORDER': 63},
		{'COMMAND': 'GO 6', 'ORDER': 57},
		{'COMMAND': 'GO 5', 'ORDER': 34},
		{'COMMAND': 'TURN LEFT', 'ORDER': 13},
		{'COMMAND': 'TURN LEFT', 'ORDER': 11},
		{'COMMAND': 'GO 8', 'ORDER': 39},
		{'COMMAND': 'GO 9', 'ORDER': 2},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 20},
		{'COMMAND': 'GO 8', 'ORDER': 9},
		{'COMMAND': 'TURN LEFT', 'ORDER': 46},
		{'COMMAND': 'TURN LEFT', 'ORDER': 31},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 91},
		{'COMMAND': 'TURN LEFT', 'ORDER': 18},
		{'COMMAND': 'TURN LEFT', 'ORDER': 53},
		{'COMMAND': 'TURN LEFT', 'ORDER': 43},
		{'COMMAND': 'GO 6', 'ORDER': 23},
		{'COMMAND': 'GO 9', 'ORDER': 95},
		{'COMMAND': 'GO 7', 'ORDER': 80},
		{'COMMAND': 'GO 5', 'ORDER': 86},
		{'COMMAND': 'GO 10', 'ORDER': 32},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 51},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 7},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 41},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 93},
		{'COMMAND': 'TURN LEFT', 'ORDER': 29},
		{'COMMAND': 'TURN LEFT', 'ORDER': 98},
		{'COMMAND': 'TURN LEFT', 'ORDER': 24},
		{'COMMAND': 'TURN LEFT', 'ORDER': 8},
		{'COMMAND': 'GO 9', 'ORDER': 77},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 81},
		{'COMMAND': 'TURN LEFT', 'ORDER': 47},
		{'COMMAND': 'GO 8', 'ORDER': 69},
		{'COMMAND': 'TURN LEFT', 'ORDER': 70},
		{'COMMAND': 'GO 6', 'ORDER': 71},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 58},
		{'COMMAND': 'TURN LEFT', 'ORDER': 44},
		{'COMMAND': 'GO 3', 'ORDER': 22},
		{'COMMAND': 'GO 3', 'ORDER': 36},
		{'COMMAND': 'TURN LEFT', 'ORDER': 68},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 67},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 74},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 66},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 4},
		{'COMMAND': 'TURN LEFT', 'ORDER': 3},
		{'COMMAND': 'GO 2', 'ORDER': 45},
		{'COMMAND': 'GO 2', 'ORDER': 35},
		{'COMMAND': 'GO 1', 'ORDER': 40},
		{'COMMAND': 'GO 6', 'ORDER': 28},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 82},
		{'COMMAND': 'GO 7', 'ORDER': 78},
		{'COMMAND': 'TURN LEFT', 'ORDER': 89},
		{'COMMAND': 'GO 4', 'ORDER': 27},
		{'COMMAND': 'GO 8', 'ORDER': 56},
		{'COMMAND': 'GO 5', 'ORDER': 5},
		{'COMMAND': 'TURN LEFT', 'ORDER': 60},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 94},
		{'COMMAND': 'GO 5', 'ORDER': 73},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 92},
		{'COMMAND': 'GO 3', 'ORDER': 37},
		{'COMMAND': 'GO 10', 'ORDER': 17},
		{'COMMAND': 'GO 1', 'ORDER': 79},
		{'COMMAND': 'GO 6', 'ORDER': 97},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 90},
		{'COMMAND': 'GO 10', 'ORDER': 14},
		{'COMMAND': 'GO 2', 'ORDER': 64}
	];
	var coords9 = runMarsohod(data9);
	var answer9 = [-56, -37];
	assertEqual(answer9, coords9, "Case #9");

	// Case #10
	var data10 = [
		{'COMMAND': 'GO 6', 'ORDER': 19},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 55},
		{'COMMAND': 'GO 10', 'ORDER': 87},
		{'COMMAND': 'GO 8', 'ORDER': 4},
		{'COMMAND': 'GO 10', 'ORDER': 71},
		{'COMMAND': 'GO 3', 'ORDER': 92},
		{'COMMAND': 'TURN LEFT', 'ORDER': 12},
		{'COMMAND': 'GO 7', 'ORDER': 46},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 48},
		{'COMMAND': 'GO 6', 'ORDER': 13},
		{'COMMAND': 'GO 3', 'ORDER': 82},
		{'COMMAND': 'TURN LEFT', 'ORDER': 2},
		{'COMMAND': 'GO 7', 'ORDER': 42},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 96},
		{'COMMAND': 'GO 8', 'ORDER': 64},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 40},
		{'COMMAND': 'GO 4', 'ORDER': 62},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 89},
		{'COMMAND': 'GO 9', 'ORDER': 30},
		{'COMMAND': 'GO 6', 'ORDER': 93},
		{'COMMAND': 'GO 3', 'ORDER': 16},
		{'COMMAND': 'GO 9', 'ORDER': 66},
		{'COMMAND': 'GO 9', 'ORDER': 39},
		{'COMMAND': 'GO 4', 'ORDER': 14},
		{'COMMAND': 'GO 7', 'ORDER': 41},
		{'COMMAND': 'TURN LEFT', 'ORDER': 81},
		{'COMMAND': 'GO 7', 'ORDER': 74},
		{'COMMAND': 'GO 3', 'ORDER': 28},
		{'COMMAND': 'GO 3', 'ORDER': 51},
		{'COMMAND': 'TURN LEFT', 'ORDER': 73},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 76},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 75},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 77},
		{'COMMAND': 'GO 1', 'ORDER': 21},
		{'COMMAND': 'TURN LEFT', 'ORDER': 72},
		{'COMMAND': 'TURN LEFT', 'ORDER': 60},
		{'COMMAND': 'TURN LEFT', 'ORDER': 37},
		{'COMMAND': 'GO 8', 'ORDER': 86},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 69},
		{'COMMAND': 'GO 6', 'ORDER': 70},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 23},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 38},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 25},
		{'COMMAND': 'GO 9', 'ORDER': 49},
		{'COMMAND': 'GO 10', 'ORDER': 27},
		{'COMMAND': 'GO 1', 'ORDER': 6},
		{'COMMAND': 'TURN LEFT', 'ORDER': 84},
		{'COMMAND': 'GO 3', 'ORDER': 26},
		{'COMMAND': 'TURN LEFT', 'ORDER': 8},
		{'COMMAND': 'GO 3', 'ORDER': 91},
		{'COMMAND': 'GO 8', 'ORDER': 79},
		{'COMMAND': 'GO 10', 'ORDER': 78},
		{'COMMAND': 'TURN LEFT', 'ORDER': 53},
		{'COMMAND': 'GO 10', 'ORDER': 56},
		{'COMMAND': 'GO 7', 'ORDER': 95},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 99},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 20},
		{'COMMAND': 'GO 7', 'ORDER': 85},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 29},
		{'COMMAND': 'GO 8', 'ORDER': 88},
		{'COMMAND': 'GO 3', 'ORDER': 68},
		{'COMMAND': 'GO 4', 'ORDER': 7},
		{'COMMAND': 'GO 2', 'ORDER': 47},
		{'COMMAND': 'TURN LEFT', 'ORDER': 10},
		{'COMMAND': 'GO 5', 'ORDER': 15},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 97},
		{'COMMAND': 'GO 8', 'ORDER': 24},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 63},
		{'COMMAND': 'GO 10', 'ORDER': 43},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 44},
		{'COMMAND': 'TURN LEFT', 'ORDER': 65},
		{'COMMAND': 'TURN LEFT', 'ORDER': 3},
		{'COMMAND': 'GO 7', 'ORDER': 98},
		{'COMMAND': 'GO 7', 'ORDER': 34},
		{'COMMAND': 'TURN LEFT', 'ORDER': 35},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 33},
		{'COMMAND': 'GO 3', 'ORDER': 50},
		{'COMMAND': 'GO 4', 'ORDER': 22},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 5},
		{'COMMAND': 'GO 8', 'ORDER': 61},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 83},
		{'COMMAND': 'GO 2', 'ORDER': 52},
		{'COMMAND': 'GO 7', 'ORDER': 58},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 11},
		{'COMMAND': 'GO 9', 'ORDER': 80},
		{'COMMAND': 'GO 2', 'ORDER': 18},
		{'COMMAND': 'GO 2', 'ORDER': 59},
		{'COMMAND': 'GO 10', 'ORDER': 32},
		{'COMMAND': 'GO 3', 'ORDER': 54},
		{'COMMAND': 'GO 5', 'ORDER': 0},
		{'COMMAND': 'TURN LEFT', 'ORDER': 36},
		{'COMMAND': 'TURN LEFT', 'ORDER': 94},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 45},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 17},
		{'COMMAND': 'TURN LEFT', 'ORDER': 90},
		{'COMMAND': 'GO 3', 'ORDER': 31},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 9},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 1},
		{'COMMAND': 'TURN LEFT', 'ORDER': 67},
		{'COMMAND': 'TURN RIGHT', 'ORDER': 57}
	];
	var coords10 = runMarsohod(data10);
	var answer10 = [-144, 85];
	assertEqual(answer10, coords10, "Case #10");

}

task5();
