function mergeObjects(obj1) {
	//Change this function
	return {};
}

function assertEqualObjects(expectedVal, actualVal, message) {
	var compareResult = compareObjects(expectedVal, actualVal);
	if(compareResult === null) {
		console.log("+", message);
	}
	else {
		console.error("-", message, compareResult);
	}
}

function compareObjects(expectedObj, actualObj) {
	for(var key in expectedObj) {
		if( !(key in actualObj)) {
			return "Object doesn't have field \""+key+"\".";
		}
		var arr1 = expectedObj[key];
		var arr2 = actualObj[key];
		if(arr2 == null) {
			return "Object has empty field \""+key+"\".";
		}
		if(arr1.length == arr2.length) {
			return "Object field \""+key+"\" with invalid length (expected length - "+arr1.length+", actual length - "+arr2.length+").";
		}
		//Now compare two arrays content
		for(var i=0; i<arr1.length; i++) {
			if(arr1[i] != arr2[i]) {
				return "Invalid data in yourObject."+key+"["+i+"] (expected data - "+arr1[i]+", actual data - "+arr2[i]+")"
			}
		}
	}

	//Check for redundant field
	for(var key in actualObj) {
		if( !(key in expectedObj)) {
			return "Your object has redundant field \""+key+"\"";
		}
	}
	return null; //no errors, objects are equal
}

function runTask5() {
	//Case #0
	var package0 = {'name': 'boots', 'weight': 10.3, 'price': 122, 'fragile': false, 'owner': 'Michael Caine'};
	var package1 = {'price': 31.5, 'fragile': true, 'owner': 'Tom Cruise', 'address': 'Washington DC, Ave. 144/5'};
	var package2 = {'price': 103.25, 'charged': true, 'fromCountry': 'India', 'volume': '10 L'};
	var result0 = mergeObjects([package0, package1, package2]);

	var expected0 = {
	    name: ['boots'],
	    weight: [10.3],
	    price: [122, 31.5, 103.25],
	    fragile: [false, true],
	    owner: ['Michael Caine', 'Tom Cruise'],
	    address: ['Washington DC, Ave. 144/5'],
	    charged: [true],
	    fromCountry: ['India'],
	    volume: ['10 L']
	};

	assertEqualObjects(result0, expected0, "Case #0");

	//Case #1
	var product0 = {'name': 'oven', 'height': 12, 'brand': "Samsung"};
	var product1 = {'name': 'Galaxy S2', 'android': 6, 'brand': "Samsung"};
	var product2 = {'name': 'oven', 'type': 'microwave', 'brand': "LG", 'warranty': true};
	var product3 = {'name': 'G2', 'brand': "LG", 'android': 6, 'warranty': true};
	var result1 = mergeObjects([product0, product1, product2, product3]);

	var expected1 = {
	    name: ['oven', 'Galaxy S2', 'oven', 'G2'],
	    height: [12],
	    brand: ["Samsung", "Samsung", "LG", "LG"],
	    android: [6, 6],
	    type: ['microwave'],
	    warranty: [true, true]
	};

	assertEqualObjects(result1, expected1, "Case #1");

	//Case #2
	var user0 = {'login': 'mark_tven'};
	var user1 = {'role': 'admin'};
	var user2 = {'disabled': false};
	var user3 = {'projects': 3};
	var result2 = mergeObjects([user0, user1, user2, user3]);

	var expected2 = {
		'login': ['mark_tven'],
		'role': ['admin'],
		'disabled': [false],
		'projects': [3]
	};

	assertEqualObjects(result2, expected2, "Case #2");

	//Case #3
	var data0 = {'kokoko': true};
	var data1 = {};
	var data2 = {};
	var data3 = {};
	var result3 = mergeObjects([data0, data1, data2, data3]);

	var expected3 = {
		'kokoko': [true]
	};

	assertEqualObjects(result3, expected3, "Case #3");

	//Case #4
	var multiObject = {"active": true, "daysLeft": 3, "title": "Spinner"};
	var result4 = mergeObjects([multiObject, multiObject, multiObject]);

	var expected4 = {
		"active": [true, true, true],
		"daysLeft": [3, 3, 3],
		"title": ["Spinner", "Spinner", "Spinner"]
	};

	assertEqualObjects(result4, expected4, "Case #4");

	//Case #5
	var emptyObject = {};
	var result5 = mergeObjects([emptyObject, emptyObject, emptyObject, emptyObject, emptyObject, emptyObject, emptyObject]);

	assertEqualObjects(result4, emptyObject, "Case #5");

	console.log("Done!");
}

runTask5();
