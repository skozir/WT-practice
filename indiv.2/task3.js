function getTopLetter(text) {
    //Change this function
    return text[0];
}

function assertAnswerInArray(expectedArray, actualVal, message) {
    if(expectedArray.indexOf(actualVal) >= 0) {
        console.log("+", message);
    }
    else {
        console.error("-", message, "(Expected values:", expectedArray, "; Actual:", actualVal, ")");
    }
}

function runTask3() {

    assertAnswerInArray(["A"], getTopLetter("CAATGCCATA"), "Case #0");
    assertAnswerInArray(["R", "V"], getTopLetter("M7X72DRLlhMBHJzcTROVhy2xPYfVVoyWp9djVkR3FDYo4vsvRUyaq8WBKEk9Igdx"), "Case #1");

    var song = "I'm gonna fight 'em off\n" +
               "A seven nation army couldn't hold me back\n" +
               "They're gonna rip it off\n" +
               "Taking their time right behind my back\n" +

               "And I'm talking to myself at night\n" +
               "Because I can't forget\n" +
               "Back and forth through my mind\n" +
               "Behind a cigarette\n" +

               "And the message coming from my eyes\n" +
               "Says leave it alone";

    song = song.replace(/ /g, ''); //Уберём все пробелы
    assertAnswerInArray(["e"], getTopLetter(song), "Case #3");
    assertAnswerInArray([" "], getTopLetter("z Z z Z z"), "Case #4");
	assertAnswerInArray(['8'], getTopLetter("3,14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823"), "Case #5");
	assertAnswerInArray(['r', 'x'], getTopLetter("tux.cj630.h8fbpv3g4m9kvxrf2lhcv.,3ccsk97,nso9nogdurv.hr5yrahroixgd24eqz0o x9xz12"), "Case #6");
	assertAnswerInArray(['d', '7', 'e'], getTopLetter("0bhees.5zdu,c7jiw4kulqpf8,4mh3ua7vmib86 7xpe0cgzdw0s dmstr7a5.,q7a8d.dhe9frclt9e"), "Case #7");
	assertAnswerInArray(['k'], getTopLetter("j4qjuspsz 570j.dc35ym8ttlkk6fgp.fvl207.ke05h3,ep2k7i6usww0d, 4fimr4k.rlin 1mrfjq"), "Case #8");
	assertAnswerInArray([' ', 'k'], getTopLetter("nkfkc9,9gx1 7n7554b iyjtk zvm8k6kodepcnt7gmld7caaih6n5,2arq.v mraefuth4u8u0 gpu3"), "Case #9");
	assertAnswerInArray(['7', ','], getTopLetter("70c1y24, y,ojdj8tcfiz36i.oiw2l1wy38ask,r47le zld3w1zwpncz3.fgma7,9qadnl,,qhp7877"), "Case #10");
	assertAnswerInArray(['m', 'f'], getTopLetter("qur8 ctxaqwd8m1mzf0fmyy8ajefl3. 8ztld0u8y. m02ur le0xp1.p9jf7q7wmmfgaluws44o6qfx"), "Case #11");
	assertAnswerInArray(['p'], getTopLetter("zdz8ktwnqefjpk6j33t.1lcz3di5ea2gmwh0.za,.0g2yrp9pmvnbo312q9pvk8pl,kn4xfh5txpa,n,"), "Case #12");
	assertAnswerInArray(['1'], getTopLetter("so1l0cc61xdo.1vi51v4183q3k wybaos2tjadlwk4,4qmbn9ze4jaumqdc.21rdnmmf2jm8up5 b9wr"), "Case #13");
	assertAnswerInArray(['e'], getTopLetter("8te,fi3ekd0f913ph5z2a3me bqtbpfp61nz705nopvg6rvus.yey,s42inmvo6q3sjeqc9rqm4ywng2"), "Case #14");
	assertAnswerInArray(['a'], getTopLetter("2adhk3daorqvjz,d49khcm9u1,lc8 umqagwa6 ,rhl.64z2,agnay3nf96lszpdee589c8ng1.gxfc5"), "Case #15");

    console.log("Done!");
}

runTask3();
