
$(document).ready(function(){



/*displays a reponse in an alert box*/
function response(){

	var randomnumber = Math.floor(Math.random() * 100);	
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
	


/* This is the response logic*/

	
	if (a==b){
		$("#test").val(correctresponse);
	}

	else if (a>b-x && a<b+x){
		$("#test").val(firstresponse);
	}

 	else if (a>b-y && a<b+y){	
		$("#test").val(secondresponse);
	}

	else if (a>b-z && a<b+z){			
		$("#test").val(thirdresponse);
	}

	else if (a>b-zz && a<b+zz){		
		$("#test").val(fourthresponse);	
	}

	

};











/*Random number function-----places this random number in a userGuess2 box*/
function rannum(){
	var randomnumber = Math.floor(Math.random() * 100);
		/*return (randomnumber);*/
		$("#userGuess2").val(randomnumber);

};



/*Clear function*/
function clearText(){
	 $("#userGuess").val("");
	 $("#guessList").val("");
	 $("#test").val("");
	
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



/*New Game function--- It also generates a random number and clears all text boxes*/

$(".new") .click(function(){
rannum();
clearText();


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


