
$(document).ready(function(){

var counter = 0;





function counterfunc(){

	if ($("#userGuess").val('')){
		counter++;
	
 $("#totalGuess").val(counter);
}
};








function counterreset(){

	var counter = 0;
};









/*This hides userGuess2 which contains the randomnumber*/
$("#userGuess2").hide();



/* this plays the main song*/
function playhotcoldmusic () {
  $('#hotcoldmusic')[0].volume = 0.5;
  $('#hotcoldmusic')[0].load();
  $('#hotcoldmusic')[0].play();
};



/*This stops the main song once you win*/
function stophotcoldmusic () {
  $('#hotcoldmusic')[0].pause();
  
};


/*This is the win music */
function playhotcoldcorrect () {
  $('#hotcoldcorrect')[0].volume = 0.5;
  $('#hotcoldcorrect')[0].load();
  $('#hotcoldcorrect')[0].play();
};


/*if you win music function*/
function winmusic(){
var correctresponse = "Correct- You Win!!!";
	 if ($('#userAnswerArea').val(correctresponse)){
		stophotcoldmusic ();
		playhotcoldcorrect();
	}
};




/*displays a reponse in an alert box*/
function response(){

	var randomnumber = (Math.floor(Math.random() * 100));	
	var a = parseInt($("#userGuess").val());
	var b = parseInt($("#userGuess2").val());
	var firstresponse = "Hot";
	var secondresponse = "Warm";
	var thirdresponse = "Chilly";
	var fourthresponse= "Cold";
	var correctresponse = "Correct- You Win!!!";
	var x = 10;
	var y = 20;
	var z = 30;
	var zz= 40;
	var xx= 50;
	var yy= 60;
	var ww= 70;
	var vv= 80;
	var qq= 90;
	var uu= 100;
	


/* This is the response logic*/
	if (a==b){
		$("#userAnswerArea").val(correctresponse);
		winmusic();
	}

	else if (a>b-x && a<b+x){
		$("#userAnswerArea").val(firstresponse);
	}

 	else if (a>b-y && a<b+y){	
		$("#userAnswerArea").val(secondresponse);
	}

	else if (a>b-z && a<b+z){			
		$("#userAnswerArea").val(thirdresponse);
	}

	else if (a>b-zz && a<b+zz){		
		$("#userAnswerArea").val(fourthresponse);	
	}
	else if (a>b-xx && a<b+xx){		
		$("#userAnswerArea").val("ICE");	
	}
	else if (a>b-yy && a<b+yy){		
		$("#userAnswerArea").val("ICE");	
	}
	else if (a>b-ww && a<b+ww){		
		$("#userAnswerArea").val("ICE");	
	}
	else if (a>b-vv && a<b+vv){		
		$("#userAnswerArea").val("ICE");	
	}

	else if (a>b-qq && a<b+qq){		
		$("#userAnswerArea").val("ICE");	
	}
	else if (a>b-uu && a<b+uu){		
		$("#userAnswerArea").val("ICE");	
	}

};




/* Generates the random number onceyou click onn the new game button*/
function rannum(){
	var randomnumber = Math.floor(Math.random() * 100);
		//return (randomnumber);
		$("#userGuess2").val(randomnumber);

};






/*Clear function*/
function clearText(){
	 $("#userGuess").val("");
	 $("#guessList").val("");
	 $("#userAnswerArea").val("");
	 $("#totalGuess").val("");
	
};








/*Guess Button Function*/
$("#guessButton").click(function(){
	
	response();
	var answer= $("#userGuess").val('');
	var num = Number(answer);

	
if(!answer){
	alert("type your number in the box");
}


});






$("#guessButton").click(function(){
	counterfunc();


});









/*New Game function--- It also generates a random number and clears all text boxes*/
$(".new") .click(function(){
rannum();
clearText();
playhotcoldmusic();
counterreset();


});











	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


