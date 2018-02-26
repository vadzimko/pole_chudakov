var cur_img = 2;
var cur_back = 1;
var cur_trans = 1;


 var timerId1 = setInterval(function() {
	if (cur_img == 2)
	{
		document.getElementById('polek').className = 'img1'; 
		cur_img = 1;
	}
	else {
		document.getElementById('polek').className = 'img2'; 
		cur_img = 2;
	}
}, 1001);



 var timerId3 = setInterval(function() {
	if (cur_back == 2)
	{
		document.body.style= 'background-image: url(images/back_1.png); transition: all 1.5s linear;'; 
		cur_back = 1;
	}
	else {
		document.body.style= 'background-image: url(images/back_2.png); transition: all 1.5s linear;';  
		cur_back = 2;
	}
}, 2000);
