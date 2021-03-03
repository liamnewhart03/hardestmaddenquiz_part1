
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var correct = 0;


	if (question1 == "Lamar Jackson") {
		correct++;
}
	if (question2 == "Patrick Mahomes") {
		correct++;
}	
	if (question3 == "August") {
		correct++;
}
	if (question4 == "50") {
		correct++;
}
	if (question5 == "?") {
		correct++;
}
	if (question6 == "?") {
		correct++;
}
	if (question7 == "?") {
		correct++;

}
	if (question8 == "77") {
		correct++;

}

	var str = "Level 2";
  	var result = str.link("https://www.chess.com");

	var messages = ["You should never come back. EVER.","Great job!", "That's just okay", "You really need to do better", result, "hi", "no", "boooo"];
	var score;

	if (correct == 0) {
		score = 0;
	}

	if (correct == 1) {
		score = 1;
	}

	if (correct == 2) {
		score = 2;
	}

	if (correct == 3){
		score = 3;
	}

	if (correct == 4){
		score = 4;
	}

	if (correct == 5){
		score = 5;
	}

	if (correct == 6){
		score = 6;
	}

	if (correct == 7){
		score = 7;
	}

	if (score>=15){
		location.replace("https://www.w3schools.com")
	}
	}
	
