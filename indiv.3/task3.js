function getSongs(data) {
	return [];
}

function assertEqual(expectedVal, actualVal, message) {
	if (songsEqual(expectedVal, actualVal)) {
		console.log("+", message);
	}
	else {
		console.error("-", message, "(Expected:", expectedVal, "; Actual:", actualVal, ")");
	}
}

function songsEqual(arr1, arr2) {
	if (arr1 == null || arr2 == null) {
		return false;
	}
	if (arr1.length != arr2.length) {
		return false;
	}
	for(var i=0; i<arr1.length; i++) {
		var song1 = arr1[i];
		var song2 = arr2[i];
		if(song1[0]!=song2[0] || song1[1]!=song2[1]) {
			return false;
		}
	}
	return true;
}

function task3() {
	// Case #0
	var data0 = [{
			"filename": "sample - sample.mp3",
			"size": 10,
		}];
	var songs0 = getSongs(data0);
	assertEqual([["sample", "sample"]], songs0, "Case #0");

	// Case #1
	var data1 = [
		{
			"filename": "readme.txt",
			"size": 107,
		},
		{
			"filename": "Руки Вверх - Фотография.mp3",
			"size": 2504626,
		},
		{
			"filename": "Beyonce - Hello.MP3",
			"size": 4452393,
		}
	];
	var songs1 = getSongs(data1);
	assertEqual([["Руки Вверх","Фотография"], ["Beyonce","Hello"]], songs1, "Case #1");

	// Case #2
	var data2 = [
		{
			"filename": "readme.txt",
			"size": 107
		},
		{
			"filename": "Metallica - Nothing else matters.mp3.zip",
			"size": 410556
		},
		{
			"filename": "Artist - Track 3.amp3",
			"size": 46482
		},
		{
			"filename": "Matrix - Revolution.mp3",
			"size": 0
		}
	];
	var songs2 = getSongs(data2);
	assertEqual([], songs2, "Case #2");

	// Case #3
	var data3 = [
		{
			'filename': 'Океан Ельзи - Міра.mp3',
			'size': 39574497,
		},
		{
			'filename': 'Океан Ельзи - День У День.mp3',
			'size': 814662973,
		},
		{
			'filename': 'Океан Ельзи - Пташка.mp3',
			'size': 141539157,
		},
		{
			'filename': 'Океан Ельзи - Зелені Очі.mp3',
			'size': 357240846,
		},
		{
			'filename': 'Океан Ельзи - Коли Тобі Важко.mp3',
			'size': 296007146,
		},
		{
			'filename': 'Blues Saraceno - Last Train Out.mp3',
			'size': 112192118,
		},
		{
			'filename': 'Blues Saraceno - Elvis Talking (You Think It\'s Over But It\'s Not).mp3',
			'size': 109505830,
		},
		{
			'filename': 'Blues Saraceno - The Scratch.mp3',
			'size': 573342151,
		},
		{
			'filename': 'Blues Saraceno - Friday\'s Walk.mp3',
			'size': 45390979,
		},
		{
			'filename': 'Blues Saraceno - A Little More Cream, Please.mp3',
			'size': 1042572667,
		},
		{
			'filename': 'Blues Saraceno - Girth.mp3',
			'size': 560066069,
		},
		{
			'filename': 'Blues Saraceno - A Lighter Shade Of Plaid.mp3',
			'size': 383063657,
		},
		{
			'filename': 'Blues Saraceno - Cat\'s Squirrel.mp3',
			'size': 338800502,
		},
		{
			'filename': 'Blues Saraceno - L.A. Vignette.mp3',
			'size': 681287061,
		},
		{
			'filename': 'Blues Saraceno - Exit 21.mp3',
			'size': 501691817,
		},
		{
			'filename': 'Blues Saraceno - Tommy Gun.mp3',
			'size': 241251316,
		},
		{
			'filename': 'Eminem - Stan.mp3',
			'size': 768221364,
		},
		{
			'filename': 'Eminem - Hope.mp3',
			'size': 60974147,
		},
		{
			'filename': 'Eminem - Steve Burman.mp3',
			'size': 294946111,
		}
	];
	var songs3 = getSongs(data3);
	var answer3 = [['Океан Ельзи', 'Міра'], ['Океан Ельзи', 'День У День'], ['Океан Ельзи', 'Пташка'], ['Океан Ельзи', 'Зелені Очі'], ['Океан Ельзи', 'Коли Тобі Важко'], ['Blues Saraceno', 'Last Train Out'], ['Blues Saraceno', "Elvis Talking (You Think It's Over But It's Not)"], ['Blues Saraceno', 'The Scratch'], ['Blues Saraceno', "Friday's Walk"], ['Blues Saraceno', 'A Little More Cream, Please'], ['Blues Saraceno', 'Girth'], ['Blues Saraceno', 'A Lighter Shade Of Plaid'], ['Blues Saraceno', "Cat's Squirrel"], ['Blues Saraceno', 'L.A. Vignette'], ['Blues Saraceno', 'Exit 21'], ['Blues Saraceno', 'Tommy Gun'], ['Eminem', 'Stan'], ['Eminem', 'Hope'], ['Eminem', 'Steve Burman']];
	assertEqual(answer3, songs3, "Case #3");

	// Case #4
	var data4 = [
		{
			"filename": "All I know.docx",
			"size": 107,
		},
		{
			"filename": "Стругацкие - Трудно быть богом.Mp3",
			"size": 410556,
		},
		{
			"filename": "Blur - Song #2.MP3",
			"size": 0,
		},
		{
			"filename": "Julie London - Sway.ac3",
			"size": 5525840,
		}
	];
	var songs4 = getSongs(data4);
	assertEqual([["Стругацкие", "Трудно быть богом"]], songs4, "Case #4");

}

task3();

