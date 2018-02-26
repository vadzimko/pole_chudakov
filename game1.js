var say = 'say';
var cit = 'cit';
var player = 'player';
var brb = 'brb';
var pimp = 'pimp';
var player1 = 'player1';
var brb1 = 'brb1';
var pimp1 = 'pimp1';
var button = 'next_button';
var score1 = 0;
var score2 = 0;
var sc1 = 'score1';
var sc2 = 'score2';
var q = 'question';

var k = 1;
var key = 'кот';
var field = 'field';
var pole = 'pole';
var letter_pressed = 'а';
var letters = '0000000000000';
var score = 0;
var who1 = 0;
var who2 = 0;
var hod = 1;

var indicator = 1;
var key_length = key.length; 
var k_cit = 0;
var k_say = 0;
var whosay = 12;
var kol = 0;
var n = 3;
var start = 0;
var key_activate = 0;
var arr = [0];
var papuas = 0;
var question = '';

var dialog_name = 'introduce';


function show (id) {
	setTimeout(function () { document.getElementById(id).style= ' display: block;';} , 0, id);
	setTimeout(function () { document.getElementById(id).style= ' display: block; opacity: 1;transform:';} , 1000, id);
}


function show_player () {
	setTimeout(function () { document.getElementById('player1').style= ' display: block;';} , 0);
	setTimeout(function () { document.getElementById('player1').style= ' display: block; opacity: 0.5;';} , 1000);
}

function hide (id) {
	setTimeout(function () { document.getElementById(id).style= ' display: block; opacity: 0;'; }, 0, id);
	setTimeout(function () { document.getElementById(id).style= ' display: none'; }, 1000, id);
}


function show_pole () {
	document.getElementById(pole).align = 'center';
	document.getElementById(pole).style = 'opacity: 1;';
}

function show_field () {
	document.getElementById(field).align = 'center';
	document.getElementById(field).style = 'opacity: 1; ';
}

function hide_pole () {
	document.getElementById(pole).align = 'center';
	document.getElementById(pole).style = 'opacity: 0;';
}

function hide_field () {
	document.getElementById(field).align = 'center';
	document.getElementById(field).style = 'opacity: 0; ';
}

function change () {
	if (key_activate == 2)
	{

		if (hod == 1)
		{
			document.getElementById(brb).style = 'display: block; opacity: 0.5;height: 150px;';
			document.getElementById(player1).style = 'display: block; opacity: 1;height: 250px;';
			hod=2;
		}
		else
		{
			document.getElementById(brb).style = 'display: block; opacity: 1;height: 250px;';
			document.getElementById(player1).style = 'display: block; opacity: 0.5;height: 150px;';
			hod=1;
		}
		var elem1 = document.getElementById('score1');
 	 	elem1.innerHTML = 'Score: ' + score1;
 		var elem2 = document.getElementById('score2');
 	 	elem2.innerHTML = 'Score: ' + score2;
 	 	key_activate = 1;
	}
}

function letter1 () {
	if (key_activate == 1)
	{
		if (arr[0] == 0)
		{
			arr[0] = 1;
			letter_pressed = 'а';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke1').style = 'opacity: 0;';				
		}
	}
}

function letter2 () {
	if (key_activate == 1)
	{
		if (arr[1] == 0)
		{
			arr[1] = 1;
			letter_pressed = 'б';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke2').style = 'opacity: 0;';				
		}
	}
}

function letter3 () {
	if (key_activate == 1)
	{
		if (arr[2] == 0)
		{
			arr[2] = 1;
			letter_pressed = 'в';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke3').style = 'opacity: 0;';				
		}
	}
}

function letter4 () {
	if (key_activate == 1)
	{
		if (arr[3] == 0)
		{
			arr[3] = 1;
			letter_pressed = 'г';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke4').style = 'opacity: 0;';				
		}
	}
}

function letter5 () {
	if (key_activate == 1)
	{
		if (arr[4] == 0)
		{
			arr[4] = 1;
			letter_pressed = 'д';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke5').style = 'opacity: 0;';				
		}
	}
}

function letter6 () {
	if (key_activate == 1)
	{
		if (arr[5] == 0)
		{
			arr[5] = 1;
			letter_pressed = 'е';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke6').style = 'opacity: 0;';				
		}
	}
}

function letter7 () {
	if (key_activate == 1)
	{
		if (arr[6] == 0)
		{
			arr[6] = 1;
			letter_pressed = 'ё';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke7').style = 'opacity: 0;';				
		}
	}
}

function letter8 () {
	if (key_activate == 1)
	{
		if (arr[7] == 0)
		{
			arr[7] = 1;
			letter_pressed = 'ж';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke8').style = 'opacity: 0;';				
		}
	}
}

function letter9 () {
	if (key_activate == 1)
	{
		if (arr[8] == 0)
		{
			arr[8] = 1;
			letter_pressed = 'з';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke9').style = 'opacity: 0;';				
		}
	}
}

function letter10 () {
	if (key_activate == 1)
	{
		if (arr[9] == 0)
		{
			arr[9] = 1;
			letter_pressed = 'и';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke10').style = 'opacity: 0;';				
		}
	}
}

function letter11 () {
	if (key_activate == 1)
	{
		if (arr[10] == 0)
		{
			arr[10] = 1;
			letter_pressed = 'й';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke11').style = 'opacity: 0;';				
		}
	}
}

function letter12 () {
	if (key_activate == 1)
	{
		if (arr[11] == 0)
		{
			arr[11] = 1;
			letter_pressed = 'к';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke12').style = 'opacity: 0;';				
		}
	}
}

function letter13 () {
	if (key_activate == 1)
	{
		if (arr[12] == 0)
		{
			arr[12] = 1;
			letter_pressed = 'л';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke13').style = 'opacity: 0;';				
		}
	}
}

function letter14 () {
	if (key_activate == 1)
	{
		if (arr[13] == 0)
		{
			arr[13] = 1;
			letter_pressed = 'м';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke14').style = 'opacity: 0;';				
		}
	}
}

function letter15 () {
	if (key_activate == 1)
	{
		if (arr[14] == 0)
		{
			arr[14] = 1;
			letter_pressed = 'н';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke15').style = 'opacity: 0;';				
		}
	}
}

function letter16 () {
	if (key_activate == 1)
	{
		if (arr[15] == 0)
		{
			arr[15] = 1;
			letter_pressed = 'о';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke16').style = 'opacity: 0;';				
		}
	}
}

function letter17 () {
	if (key_activate == 1)
	{
		if (arr[16] == 0)
		{
			arr[16] = 1;
			letter_pressed = 'п';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke17').style = 'opacity: 0;';				
		}
	}
}

function letter18 () {
	if (key_activate == 1)
	{
		if (arr[17] == 0)
		{
			arr[17] = 1;
			letter_pressed = 'р';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke18').style = 'opacity: 0;';				
		}
	}
}

function letter19 () {
	if (key_activate == 1)
	{
		if (arr[18] == 0)
		{
			arr[18] = 1;
			letter_pressed = 'с';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke19').style = 'opacity: 0;';				
		}
	}
}

function letter20 () {
	if (key_activate == 1)
	{
		if (arr[19] == 0)
		{
			arr[19] = 1;
			letter_pressed = 'т';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke20').style = 'opacity: 0;';				
		}
	}
}

function letter21 () {
	if (key_activate == 1)
	{
		if (arr[20] == 0)
		{
			arr[20] = 1;
			letter_pressed = 'у';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke21').style = 'opacity: 0;';				
		}
	}
}

function letter22 () {
	if (key_activate == 1)
	{
		if (arr[21] == 0)
		{
			arr[21] = 1;
			letter_pressed = 'ф';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke22').style = 'opacity: 0;';				
		}
	}
}

function letter23 () {
	if (key_activate == 1)
	{
		if (arr[22] == 0)
		{
			arr[22] = 1;
			letter_pressed = 'х';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke23').style = 'opacity: 0;';				
		}
	}
}

function letter24 () {
	if (key_activate == 1)
	{
		if (arr[23] == 0)
		{
			arr[23] = 1;
			letter_pressed = 'ц';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke24').style = 'opacity: 0;';				
		}
	}
}

function letter25 () {
	if (key_activate == 1)
	{
		if (arr[24] == 0)
		{
			arr[24] = 1;
			letter_pressed = 'ч';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke25').style = 'opacity: 0;';				
		}
	}
}

function letter26 () {
	if (key_activate == 1)
	{
		if (arr[25] == 0)
		{
			arr[25] = 1;
			letter_pressed = 'ш';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke26').style = 'opacity: 0;';				
		}
	}
}

function letter27 () {
	if (key_activate == 1)
	{
		if (arr[26] == 0)
		{
			arr[26] = 1;
			letter_pressed = 'щ';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke27').style = 'opacity: 0;';				
		}
	}
}

function letter28 () {
	if (key_activate == 1)
	{
		if (arr[27] == 0)
		{
			arr[27] = 1;
			letter_pressed = 'ъ';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke28').style = 'opacity: 0;';				
		}
	}
}

function letter29 () {
	if (key_activate == 1)
	{
		if (arr[28] == 0)
		{
			arr[28] = 1;
			letter_pressed = 'ы';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke29').style = 'opacity: 0;';				
		}
	}
}

function letter30 () {
	if (key_activate == 1)
	{
		if (arr[29] == 0)
		{
			arr[29] = 1;
			letter_pressed = 'ь';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke30').style = 'opacity: 0;';				
		}
	}
}

function letter31 () {
	if (key_activate == 1)
	{
		if (arr[30] == 0)
		{
			arr[30] = 1;
			letter_pressed = 'э';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke31').style = 'opacity: 0;';				
		}
	}
}

function letter32 () {
	if (key_activate == 1)
	{
		if (arr[31] == 0)
		{
			arr[31] = 1;
			letter_pressed = 'ю';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke32').style = 'opacity: 0;';				
		}
	}
}

function letter33 () {
	if (key_activate == 1)
	{
		if (arr[32] == 0)
		{
			arr[32] = 1;
			letter_pressed = 'я';
			//key_activate = 0;
			kkk();	
			document.getElementById('ke33').style = 'opacity: 0;';				
		}
	}
}


function letter () {
	//setTimeout(change, 100);
}

var i = 0;
var x = "key"+i;
var y = "k" + i;
var t = 0;
var tik = 0;

function kkk (){  															//открытие буквы
if (key_activate == 1)
{ 
		key_activate=4;
		t = 0;
	if (letters[0] == letter_pressed)
		{
			setTimeout(kkk1, t);
			t=t+2000;
			score++;
			if (hod == 1)
				score1 = score1 + k;
			else score2 = score2 + k;
		}
	if (letters[1] == letter_pressed)
		{
			setTimeout(kkk2, t);	
			t=t+2000;
			score++;
			if (hod == 1)
				score1 = score1 + k;
			else score2 = score2 + k;
		}
	if (letters[2] == letter_pressed)
		{
			setTimeout(kkk3, t);	
			t=t+2000;
			score++;
			if (hod == 1)
				score1 = score1 + k;
			else score2 = score2 + k;
		}
	if (letters[3] == letter_pressed)
		{
			setTimeout(kkk4, t);	
			t=t+2000;
			score++;
			if (hod == 1)
				score1 = score1 + k;
			else score2 = score2 + k;
		}
	if (letters[4] == letter_pressed)
		{
			setTimeout(kkk5, t);	
			t=t+2000;
			score++;
			if (hod == 1)
				score1 = score1 + k;
			else score2 = score2 + k;
		}
	if (letters[5] == letter_pressed)
		{
			setTimeout(kkk6, t);	
			t=t+2000;
			score++;
			if (hod == 1)
				score1 = score1 + k;
			else score2 = score2 + k;
		}
	if (letters[6] == letter_pressed)
		{
			setTimeout(kkk7, t);	
			t=t+2000;score++;
			if (hod == 1)
				score1 = score1 + k;
			else score2 = score2 + k;
		}
	if (letters[7] == letter_pressed)
		{
			setTimeout(kkk8, t);	
			t=t+2000;
			score++;
			if (hod == 1)
				score1 = score1 + k;
			else score2 = score2 + k;
		}
	if (letters[8] == letter_pressed)
		{
			setTimeout(kkk9, t);	
			t=t+2000;
			score++;
			if (hod == 1)
				score1 = score1 + k;
			else score2 = score2 + k;
		}
	if (letters[9] == letter_pressed)
		{
			setTimeout(kkk10, t);	
			t=t+2000;
			score++;
			if (hod == 1)
				score1 = score1 + k;
			else score2 = score2 + k;
		}
	if (letters[10] == letter_pressed)
		{
			setTimeout(kkk11, t);	
			t=t+2000;
			score++;
			if (hod == 1)
				score1 = score1 + k;
			else score2 = score2 + k;
		}
	if (letters[11] == letter_pressed)
		{
			setTimeout(kkk12, t);	
			t=t+2000;
			score++;
			if (hod == 1)
				score1 = score1 + k;
			else score2 = score2 + k;
		}
	if (letters[12] == letter_pressed)
		{
			t=t+2000;
			setTimeout(kkk13, t);
			score++;
			if (hod == 1)
				score1 = score1 + k;
			else score2 = score2 + k;
		}
		
	setTimeout(function() {
		key_activate = 2;
		change();
	}, t+1);

	if (score == key_length)
		setTimeout(end, t);
}
}

function end () {
	setTimeout(hide_field, 1000);
	setTimeout(hide_pole, 1000);
	setTimeout(hide, 1000, brb);
	setTimeout(hide, 1000, player1);
	setTimeout(hide, 2000, sc1);
	setTimeout(hide, 2000, sc2);
	setTimeout(hide, 1000, q);
	if (score1>score2)
		setTimeout(win_left, 3000);
	if (score1<score2)
		setTimeout(win_right, 3000);
	if (score1==score2)
		setTimeout(win_hikto, 3000);
}

function win_left () {
	document.getElementById(brb).style = 'display: block;';
	document.getElementById(brb).style = 'display: block; opacity: 1;height: 450px;position:absolute; left: 32%; top:100px;transition: all 1s ease;';
	show('xxx');
	show('kub1');
	show('kub2');
	show('id1');
}

function win_right () {
	document.getElementById(player1).style = 'display: block;';
	document.getElementById(player1).style = 'display: block; opacity: 1;height: 450px;position:absolute; left: 30%; top:100px;transition: all 1s ease;';
	show('xxx');
	show('kub1');
	show('kub2');
	show('id1');
}

function win_hikto () {
	
}

function kkk1(){
		var j = 1;
		var x = "key"+j;
		var y = "k" + j;
		document.getElementById(x).style = "transform: scale(1.3);";
		setTimeout(function() {
		if (letters[0] == letter_pressed)
		{
			var img = document.getElementById(y);
  			img.src = "letters/"+letter_pressed+".png";
  		}
  		document.getElementById(x).style = "transform: scale(1);";
	}, 1000);
}


function kkk2(){
		var j = 2;
		var x = "key"+j;
		var y = "k" + j;
		document.getElementById(x).style = "transform: scale(1.3);";
		setTimeout(function() {
		if (letters[1] == letter_pressed)
		{
			var img = document.getElementById(y);
  			img.src = "letters/"+letter_pressed+".png";
  		}
  		document.getElementById(x).style = "transform: scale(1);";
	}, 1000);
}

function kkk3(){
		var j = 3;
		var x = "key"+j;
		var y = "k" + j;
		document.getElementById(x).style = "transform: scale(1.3);";
		setTimeout(function() {
		if (letters[2] == letter_pressed)
		{
			var img = document.getElementById(y);
  			img.src = "letters/"+letter_pressed+".png";
  		}
  		document.getElementById(x).style = "transform: scale(1);";
	}, 1000);
}

function kkk4(){
		var j = 4;
		var x = "key"+j;
		var y = "k" + j;
		document.getElementById(x).style = "transform: scale(1.3);";
		setTimeout(function() {
		if (letters[3] == letter_pressed)
		{
			var img = document.getElementById(y);
  			img.src = "letters/"+letter_pressed+".png";
  		}
  		document.getElementById(x).style = "transform: scale(1);";
	}, 1000);
}

function kkk5(){
		var j = 5;
		var x = "key"+j;
		var y = "k" + j;
		document.getElementById(x).style = "transform: scale(1.3);";
		setTimeout(function() {
		if (letters[4] == letter_pressed)
		{
			var img = document.getElementById(y);
  			img.src = "letters/"+letter_pressed+".png";
  		}
  		document.getElementById(x).style = "transform: scale(1);";
	}, 1000);
}

function kkk6(){
		var j = 6;
		var x = "key"+j;
		var y = "k" + j;
		document.getElementById(x).style = "transform: scale(1.3);";
		setTimeout(function() {
		if (letters[5] == letter_pressed)
		{
			var img = document.getElementById(y);
  			img.src = "letters/"+letter_pressed+".png";
  		}
  		document.getElementById(x).style = "transform: scale(1);";
	}, 1000);
}

function kkk7(){
		var j = 7;
		var x = "key"+j;
		var y = "k" + j;
		document.getElementById(x).style = "transform: scale(1.3);";
		setTimeout(function() {
		if (letters[6] == letter_pressed)
		{
			var img = document.getElementById(y);
  			img.src = "letters/"+letter_pressed+".png";
  		}
  		document.getElementById(x).style = "transform: scale(1);";
	}, 1000);
}

function kkk8(){
		var j = 8;
		var x = "key"+j;
		var y = "k" + j;
		document.getElementById(x).style = "transform: scale(1.3);";
		setTimeout(function() {
		if (letters[7] == letter_pressed)
		{
			var img = document.getElementById(y);
  			img.src = "letters/"+letter_pressed+".png";
  		}
  		document.getElementById(x).style = "transform: scale(1);";
	}, 1000);
}

function kkk9(){
		var j = 9;
		var x = "key"+j;
		var y = "k" + j;
		document.getElementById(x).style = "transform: scale(1.3);";
		setTimeout(function() {
		if (letters[8] == letter_pressed)
		{
			var img = document.getElementById(y);
  			img.src = "letters/"+letter_pressed+".png";
  		}
  		document.getElementById(x).style = "transform: scale(1);";
	}, 1000);
}

function kkk10(){
		var j = 10;
		var x = "key"+j;
		var y = "k" + j;
		document.getElementById(x).style = "transform: scale(1.3);";
		setTimeout(function() {
		if (letters[9] == letter_pressed)
		{
			var img = document.getElementById(y);
  			img.src = "letters/"+letter_pressed+".png";
  		}
  		document.getElementById(x).style = "transform: scale(1);";
	}, 1000);
}

function kkk11(){
		var j = 11;
		var x = "key"+j;
		var y = "k" + j;
		document.getElementById(x).style = "transform: scale(1.3);";
		setTimeout(function() {
		if (letters[10] == letter_pressed)
		{
			var img = document.getElementById(y);
  			img.src = "letters/"+letter_pressed+".png";
  		}
  		document.getElementById(x).style = "transform: scale(1);";
	}, 1000);
}

function kkk12(){
		var j = 12;
		var x = "key"+j;
		var y = "k" + j;
		document.getElementById(x).style = "transform: scale(1.3);";
		setTimeout(function() {
		if (letters[11] == letter_pressed)
		{
			var img = document.getElementById(y);
  			img.src = "letters/"+letter_pressed+".png";
  		}
  		document.getElementById(x).style = "transform: scale(1);";
	}, 1000);
}

function kkk13(){
		var j = 13;
		var x = "key"+j;
		var y = "k" + j;
		document.getElementById(x).style = "transform: scale(1.3);";
		setTimeout(function() {
		if (letters[12] == letter_pressed)
		{
			var img = document.getElementById(y);
  			img.src = "letters/"+letter_pressed+".png";
  		}
  		document.getElementById(x).style = "transform: scale(1);";
	}, 1000);
}





setTimeout(function () { 										//создание правильной таблицы ответов и присваивание закрытым буквам значений
	var gog = getRandomInt(max);
	key = answers[gog];
	question = questions[gog];
	var elem = document.getElementById('question');
 	elem.innerHTML = question;
 	key_activate = 1;
	key_length = key.length;

	if (key_length > 0)
	{
		document.getElementById('k7').style = "opacity: 1;";
	}
	if (key_length > 1)
	{
		document.getElementById('k6').style = "opacity: 1;";
	}
	if (key_length > 2)
	{
		document.getElementById('k8').style = "opacity: 1;";
	}
	if (key_length > 3)
	{
		document.getElementById('k5').style = "opacity: 1;";
	}
	if (key_length > 4)
	{
		document.getElementById('k9').style = "opacity: 1;";
	}
	if (key_length > 5)
	{
		document.getElementById('k4').style = "opacity: 1;";
	}
	if (key_length > 6)
	{
		document.getElementById('k10').style = "opacity: 1;";
	}
	if (key_length > 7)
	{
		document.getElementById('k3').style = "opacity: 1;";
	}
	if (key_length > 8)
	{
		document.getElementById('k11').style = "opacity: 1;";
	}
	if (key_length > 9)
	{
		document.getElementById('k2').style = "opacity: 1;";
	}
		if (key_length > 10)
	{
		document.getElementById('k12').style = "opacity: 1;";
	}
		if (key_length > 11)
	{
		document.getElementById('k1').style = "opacity: 1;";
	}
		if (key_length == 13)
	{
		document.getElementById('k13').style = "opacity: 1;";
		letters = key;
	}

	if (key_length == 12)
	{
		letters = key+'0';
	}

	if (key_length == 11)
	{
		letters = '0'+key+'0';
		papuas = 1;
	}

	if (key_length == 10)
	{
		letters = '0'+key+'00';
		papuas = 1;
	}

	if (key_length == 9)
	{
		letters = '00'+key+'00';
		papuas = 2;
	}

	if (key_length == 8)
	{
		letters = '00'+key+'000';
		papuas = 2;
	}

	if (key_length == 7)
	{
		letters = '000'+key+'000';
		papuas = 3;
	}

	if (key_length == 6)
	{
		letters = '000'+key+'0000';
		papuas = 3;
	}

	if (key_length == 5)
	{
		letters = '0000'+key+'0000';
		papuas = 4;
	}

	if (key_length == 4)
	{
		letters = '0000'+key+'00000';
		papuas = 4;
	}

	if (key_length == 3)
	{
		letters = '00000'+key+'00000';
		papuas = 5;
	}



	for (var i = 0; i < 32; i++)
		arr.push(0);




}, 100);

function start_conv () {
	setTimeout(show_field, 1000);
	setTimeout(show_pole, 1000);
	setTimeout(show, 1000, brb);
	setTimeout(show_player, 1000);
	setTimeout(show, 2000, sc1);
	setTimeout(show, 2000, sc2);
	setTimeout(show, 1000, q);


}

function chooseigrok1 () {
	if (who1 == 0)
	{
		who1 = 1;
		hide('ph1');
		var elem = document.getElementById('whatplayer');
 	 	elem.innerHTML = 'Выберите второго игрока';
 	 	var img = document.getElementById('brb');
  		img.src = "img_pers/1.png";
	}
	else if (who1!=1){
		who2 = 1;
		hide('ph1');
		hide('ph2');
		hide('ph3');
		hide('ph4');
		hide('ph5');
		hide('ph6');
		hide('ph7');
		hide('ph8');
		hide('ph9');
		hide('ph10');
		hide('ph11');
		hide('ph12');
		hide('whatplayer');
 	 	var img = document.getElementById('player1');
  		img.src = "img_perss/1.png";
  		start_conv();
	}

}

function chooseigrok2 () {
	if (who1 == 0)
	{
		who1 = 2;
		hide('ph2');
		var elem = document.getElementById('whatplayer');
 	 	elem.innerHTML = 'Выберите второго игрока';
 	 	var img = document.getElementById('brb');
  		img.src = "img_pers/2.png";
	}
	else  if(who1!=2){
		who2 = 2;
		hide('ph1');
		hide('ph2');
		hide('ph3');
		hide('ph4');
		hide('ph5');
		hide('ph6');
		hide('ph7');
		hide('ph8');
		hide('ph9');
		hide('ph10');
		hide('ph11');
		hide('ph12');
		hide('whatplayer');
 	 	var img = document.getElementById('player1');
  		img.src = "img_perss/2.png";
  		start_conv();
	}

}

function chooseigrok3 () {
	if (who1 == 0)
	{
		who1 = 3;
		hide('ph3');
		var elem = document.getElementById('whatplayer');
 	 	elem.innerHTML = 'Выберите второго игрока';
 	 	var img = document.getElementById('brb');
  		img.src = "img_pers/3.png";
	}
	else if(who1!=3){
		who2 = 3;
		hide('ph1');
		hide('ph2');
		hide('ph3');
		hide('ph4');
		hide('ph5');
		hide('ph6');
		hide('ph7');
		hide('ph8');
		hide('ph9');
		hide('ph10');
		hide('ph11');
		hide('ph12');
		hide('whatplayer');
 	 	var img = document.getElementById('player1');
  		img.src = "img_perss/3.png";
  		start_conv();
	}

}

function chooseigrok4 () {
	if (who1 == 0)
	{
		who1 = 4;
		hide('ph4');
		var elem = document.getElementById('whatplayer');
 	 	elem.innerHTML = 'Выберите второго игрока';
 	 	var img = document.getElementById('brb');
  		img.src = "img_pers/4.png";
	}
	else if(who1!=4){
		who2 = 4;
		hide('ph1');
		hide('ph2');
		hide('ph3');
		hide('ph4');
		hide('ph5');
		hide('ph6');
		hide('ph7');
		hide('ph8');
		hide('ph9');
		hide('ph10');
		hide('ph11');
		hide('ph12');
		hide('whatplayer');
 	 	var img = document.getElementById('player1');
  		img.src = "img_perss/4.png";
  		start_conv();
	}

}

function chooseigrok5 () {
	if (who1 == 0)
	{
		who1 = 5;
		hide('ph5');
		var elem = document.getElementById('whatplayer');
 	 	elem.innerHTML = 'Выберите второго игрока';
 	 	var img = document.getElementById('brb');
  		img.src = "img_pers/5.png";
	}
	else if(who1!=5){
		who2 = 5;
		hide('ph1');
		hide('ph2');
		hide('ph3');
		hide('ph4');
		hide('ph5');
		hide('ph6');
		hide('ph7');
		hide('ph8');
		hide('ph9');
		hide('ph10');
		hide('ph11');
		hide('ph12');
		hide('whatplayer');
 	 	var img = document.getElementById('player1');
  		img.src = "img_perss/5.png";
  		start_conv();
	}

}

function chooseigrok6 () {
	if (who1 == 0)
	{
		who1 = 6;
		hide('ph6');
		var elem = document.getElementById('whatplayer');
 	 	elem.innerHTML = 'Выберите второго игрока';
 	 	var img = document.getElementById('brb');
  		img.src = "img_pers/6.png";
	}
	else if(who1!=6){
		who2 = 6;
		hide('ph1');
		hide('ph2');
		hide('ph3');
		hide('ph4');
		hide('ph5');
		hide('ph6');
		hide('ph7');
		hide('ph8');
		hide('ph9');
		hide('ph10');
		hide('ph11');
		hide('ph12');
		hide('whatplayer');
 	 	var img = document.getElementById('player1');
  		img.src = "img_perss/6.png";
  		start_conv();
	}

}

function chooseigrok7 () {
	if (who1 == 0)
	{
		who1 = 7;
		hide('ph7');
		var elem = document.getElementById('whatplayer');
 	 	elem.innerHTML = 'Выберите второго игрока';
 	 	var img = document.getElementById('brb');
  		img.src = "img_pers/7.png";
	}
	else if(who1!=7){
		who2 = 7;
		hide('ph1');
		hide('ph2');
		hide('ph3');
		hide('ph4');
		hide('ph5');
		hide('ph6');
		hide('ph7');
		hide('ph8');
		hide('ph9');
		hide('ph10');
		hide('ph11');
		hide('ph12');
		hide('whatplayer');
 	 	var img = document.getElementById('player1');
  		img.src = "img_perss/7.png";
  		start_conv();
	}

}

function chooseigrok8 () {
	if (who1 == 0)
	{
		who1 = 8;
		hide('ph8');
		var elem = document.getElementById('whatplayer');
 	 	elem.innerHTML = 'Выберите второго игрока';
 	 	var img = document.getElementById('brb');
  		img.src = "img_pers/8.png";
	}
	else if(who1!=8){
		who2 = 8;
		hide('ph1');
		hide('ph2');
		hide('ph3');
		hide('ph4');
		hide('ph5');
		hide('ph6');
		hide('ph7');
		hide('ph8');
		hide('ph9');
		hide('ph10');
		hide('ph11');
		hide('ph12');
		hide('whatplayer');
 	 	var img = document.getElementById('player1');
  		img.src = "img_perss/8.png";
  		start_conv();
	}

}

function chooseigrok9 () {
	if (who1 == 0)
	{
		who1 = 9;
		hide('ph9');
		var elem = document.getElementById('whatplayer');
 	 	elem.innerHTML = 'Выберите второго игрока';
 	 	var img = document.getElementById('brb');
  		img.src = "img_pers/9.png";
	}
	else if(who1!=9){
		who2 = 9;
		hide('ph1');
		hide('ph2');
		hide('ph3');
		hide('ph4');
		hide('ph5');
		hide('ph6');
		hide('ph7');
		hide('ph8');
		hide('ph9');
		hide('ph10');
		hide('ph11');
		hide('ph12');
		hide('whatplayer');
 	 	var img = document.getElementById('player1');
  		img.src = "img_perss/9.png";
  		start_conv();
	}

}

function chooseigrok10 () {
	if (who1 == 0)
	{
		who1 = 10;
		hide('ph10');
		var elem = document.getElementById('whatplayer');
 	 	elem.innerHTML = 'Выберите второго игрока';
 	 	var img = document.getElementById('brb');
  		img.src = "img_pers/10.png";
	}
	else if(who1!=10){
		who2 = 10;
		hide('ph1');
		hide('ph2');
		hide('ph3');
		hide('ph4');
		hide('ph5');
		hide('ph6');
		hide('ph7');
		hide('ph8');
		hide('ph9');
		hide('ph10');
		hide('ph11');
		hide('ph12');
		hide('whatplayer');
 	 	var img = document.getElementById('player1');
  		img.src = "img_perss/10.png";
  		start_conv();
	}

}

function chooseigrok11 () {
	if (who1 == 0)
	{
		who1 = 11;
		hide('ph11');
		var elem = document.getElementById('whatplayer');
 	 	elem.innerHTML = 'Выберите второго игрока';
 	 	var img = document.getElementById('brb');
  		img.src = "img_pers/11.png";
	}
	else if(who1!=11){
		who2 = 11;
		hide('ph1');
		hide('ph2');
		hide('ph3');
		hide('ph4');
		hide('ph5');
		hide('ph6');
		hide('ph7');
		hide('ph8');
		hide('ph9');
		hide('ph10');
		hide('ph11');
		hide('ph12');
		hide('whatplayer');
 	 	var img = document.getElementById('player1');
  		img.src = "img_perss/11.png";
  		start_conv();
	}

}

function chooseigrok12 () {
	if (who1 == 0)
	{
		who1 = 12;
		hide('ph12');
		var elem = document.getElementById('whatplayer');
 	 	elem.innerHTML = 'Выберите второго игрока';
 	 	var img = document.getElementById('brb');
  		img.src = "img_pers/12.png";
	}
	else if(who1!=12){
		who2 = 12;
		hide('ph1');
		hide('ph2');
		hide('ph3');
		hide('ph4');
		hide('ph5');
		hide('ph6');
		hide('ph7');
		hide('ph8');
		hide('ph9');
		hide('ph10');
		hide('ph11');
		hide('ph12');
		hide('whatplayer');
 	 	var img = document.getElementById('player1');
  		img.src = "img_perss/12.png";
  		start_conv();
	}

}

function getRandomInt(max)
{
  	return Math.round(Math.random() * max);
}
 var max = 12;

var questions = ["Железная дорога с канатной тягой, устраиваемая на крутых подьемах", "Белый нагрудник на мужской сорочке", 
"Минута смеха так же полезна, как один килограмм … чего?", "Назовите слово, в котором пять букв е", "Единственное ядовитое млекопитающее в мире", 
"Приспособление для массового производства граффити", "С японского это слово переводится как «Божественный ветер»", 
"Склонный к употреблению одних и тех же фраз чаще, чем хотелось бы", "Обязательный элемент женского и парного фигурного катания", "Вечер накануне Рождества, первый день святок", 
"Любимое хобби Ленина В.И.", "Какое блюдо подавали на стол последним в прощеное воскресение", "Яблоками чего называли баклажаны в Др. Риме и Др. Греции?"];
var answers = ["фуникулёр", "манишка", "морковь", "переселенец", "утконос", 
"трафарет", "камикадзе", "попугай", "спираль", "сочельник", "шахматы", "яичница", "бешенство"];



