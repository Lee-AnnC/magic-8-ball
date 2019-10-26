$(document).ready(function(){

  var magic8Ball= {};
magic8Ball.listOfAnswers = ["Yes", "No", "Think about it", "Run"];

  magic8Ball.askQuestion = function (question) {
   $("#8ball").effect("shake");
	//change image to answer screen
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").fadeIn(4000);  

var randomNumber = Math.random();
var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberForListOfAnswers);
var answer = this.listOfAnswers[randomIndex];
    
 $("#answer").text( answer);
    
console.log(question);
console.log(answer);
};

	var oneClick = function() {
    $("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

	//wait half a second before showing prompt
	setTimeout(
		function () {
  var question = prompt("ASK A YES/NO QUESTION");
	 magic8Ball.askQuestion(question);
      }, 500);

};
  $("#questionButton").click( oneClick );
 
});

	