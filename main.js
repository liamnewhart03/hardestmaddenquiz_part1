
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


	if (question1 == "Chicago Bears") {
		correct++;
}
	if (question2 == "Peyton Manning") {
		correct++;
}	
	if (question3 == "Jim Brown") {
		correct++;
}
	if (question4 == "0") {
		correct++;
}
	if (question5 == "Gale Sayers") {
		correct++;
}
	if (question6 == "34") {
		correct++;
}
	if (question7 == "1") {
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

	if (score>=1){
		window.open('liam.newhart@gmail.com');
	}
	}
	
