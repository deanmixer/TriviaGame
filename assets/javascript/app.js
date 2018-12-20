

let tryitout = $(document).ready(function() {

let correctAns = 0;
let incorrectAns = 0;
let unanswered = 0;
let initialTime = 9;
let currentQuestion = 0;
let quesAnswer;
let countdown;


const q1 = {
	question: "How many U.S. National Parks exist today?",
	correctAns: "answer4",
	correctText: "59",
	answer1: "48",
	answer2: "77",
	answer3: "40",
	answer4: "59",
	funFact: "The National Park Service protects over 84 million acres of wild landscapes and historic sites.",
	image: "assets/images/zion.jpg"
}

const q2 = {
	question: "Founded in 1872, this is the oldest U.S. National Park.",
	correctAns: "answer3",
	correctText: "Yellowstone",
	answer1: "Acadia",
	answer2: "Sequoia",
	answer3: "Yellowstone",
	answer4: "Yosemite",
	funFact: "The founding of Yellowstone in 1872 began a worldwide national park movement. Today more than 100 nations contain some 1,200 national parks or equivalent preserves.",
	image: "assets/images/yellowstone.jpg"
}
const q3 = {
	question: "With over 11 million visitors annually, this is the most visited national park.",
	correctAns: "answer2",
	correctText: "Great Smoky Mountains",
	answer1: "Grand Canyon",
	answer2: "Great Smoky Mountains",
	answer3: "Rocky Mountain",
	answer4: "Yosemite",
	funFact: "Great Smoky Mountains National Park draws is almost twice as many visitors as the second most popular park (Grand Canyon at 6M).",
	image: "assets/images/gsm.jpg"
}

const q4 = {
	question: "Which state has the most National Parks?",
	correctAns: "answer2",
	correctText: "California",
	answer1: "Alaska",
	answer2: "California",
	answer3: "Colorado",
	answer4: "Utah",
	funFact: "California has nine national parks, including Death Valley, Joshua Tree, Redwood, Sequoia, and Yosemite. Alaska is in a close second with eight.",
	image: "assets/images/cali.jpg"
}

const q5 = {
	question: "This park is home to the largest concentration on brown bears in the world",
	correctAns: "answer1",
	correctText: "Katmai",
	answer1: "Katmai",
	answer2: "Kenai Fjords",
	answer3: "Denali",
	answer4: "Gates of the Arctic",
	funFact: "More bears than people are estimated to live on the Alaska Peninsula.",
	image: "assets/images/katmai.jpg"
}

const q6 = {
	question: "Which type of volcano can't be found at Lassen Volcanic National Park?",
	correctAns: "answer3",
	correctText: "Basalt Sheet",
	answer1: "Shield",
	answer2: "Composite",
	answer3: "Basalt Sheet",
	answer4: "Cinder Cone",
	funFact: "Until Mount St. Helens in 1980, Lassen's 1921 eruption was the most recent volcanic explosion in the lower 48 states.",
	image: "assets/images/lassen.jpg"
}

const q7 = {
	question: "This park features the deepest lake in the United States.",
	correctAns: "answer4",
	correctText: "Crater Lake (Crater Lake)",
	answer1: "Ross Lake (North Cascades)",
	answer2: "Bear Lake (Rocky Mountain)",
	answer3: "Wonder Lake (Denali)",
	answer4: "Crater Lake (Crater Lake)",
	funFact: "Lying in the caldera of an ancient volcano, Crater Lake is 1,932 feet deep--around five times the height of the Statue of Liberty.",
	image: "assets/images/crater.jpg"
}

let potentialQuestions = [q1, q2, q3, q4, q5, q6, q7]


$(".start").hover(function() {
	$(event.currentTarget).css('cursor','pointer');
})

$(".restart").hover(function() {
	$(event.currentTarget).css('cursor','pointer');
})

$(".response").hover(function() {
	$(event.currentTarget).css('cursor','pointer');
})

$(".start").click(function() {
	$(".start").parent().addClass("hide");
	$(".game").removeClass("hide");
	$("#questiontext").text(potentialQuestions[currentQuestion].question);
	$("#answer1").text(potentialQuestions[currentQuestion].answer1);
	$("#answer2").text(potentialQuestions[currentQuestion].answer2);
	$("#answer3").text(potentialQuestions[currentQuestion].answer3);
	$("#answer4").text(potentialQuestions[currentQuestion].answer4);
	quesAnswer = potentialQuestions[currentQuestion].correctAns
	countdown = setInterval(timer, 1000);
})

$(".restart").click(function() {
	correctAns = 0;
	incorrectAns = 0;
	unanswered = 0;
	initialTime = 9;
	currentQuestion = 0;
	$(".over").addClass("hide");
	$(".game").removeClass("hide");
	$("#questiontext").text(potentialQuestions[currentQuestion].question);
	$("#answer1").text(potentialQuestions[currentQuestion].answer1);
	$("#answer2").text(potentialQuestions[currentQuestion].answer2);
	$("#answer3").text(potentialQuestions[currentQuestion].answer3);
	$("#answer4").text(potentialQuestions[currentQuestion].answer4);
	$(".timeLeft").removeClass("runningOut");
	$(".timeLeft").text(10);
	quesAnswer = potentialQuestions[currentQuestion].correctAns
	countdown = setInterval(timer, 1000);
})

$(".response").click(function() {
	clearInterval(countdown);
	if (this.id === quesAnswer) {
		correctResponse();
	} else incorrectResponse();
})

let correctResponse = function() {
	$("#answerStat").text("Correct!");
	$("#answerStat").css('color','#768d2c');
	$("#imageTest").html("<img src=" + potentialQuestions[currentQuestion].image+ ">")
	$("#imageTest").removeClass("grayscale");
	$("#realAns").text("");
	$("#funFact").text(potentialQuestions[currentQuestion].funFact);
	$(".game").addClass("hide");
	$(".status").removeClass("hide");
	correctAns++;
	currentQuestion++;
	setTimeout(nextQuestion, 5000);
}

let incorrectResponse = function() {
	$("#answerStat").text("Nope!");
	$("#answerStat").css('color','red');
	$("#imageTest").html("<img src=" + potentialQuestions[currentQuestion].image+ ">")
	$("#imageTest").addClass("grayscale");
	$("#realAns").text("Correct Answer: " + potentialQuestions[currentQuestion].correctText);
	$("#funFact").text(potentialQuestions[currentQuestion].funFact);
	$(".game").addClass("hide");
	$(".status").removeClass("hide");
	incorrectAns++;
	currentQuestion++;
	setTimeout(nextQuestion, 5000);
}

let timesUp = function() {
	clearInterval(countdown);
	$("#answerStat").text("Time's up!");
	$("#answerStat").css('color','red');
	$("#imageTest").html("<img src=" + potentialQuestions[currentQuestion].image+ ">")
	$("#imageTest").addClass("grayscale");
	$("#realAns").text("Correct Answer: " + potentialQuestions[currentQuestion].correctText);
	$("#funFact").text(potentialQuestions[currentQuestion].funFact);
	$(".game").addClass("hide");
	$(".status").removeClass("hide");
	unanswered++;
	currentQuestion++;
	setTimeout(nextQuestion, 5000);
}

let nextQuestion = function() {
	if (currentQuestion == potentialQuestions.length) {
		clearInterval(countdown);
		$(".status").addClass("hide");
		$(".over").removeClass("hide");	
		$("#totCorrect").text("Correct Answers: " + correctAns);
		$("#totIncorrect").text("Incorrect Answers: " + incorrectAns);
		$("#totUnanswered").text("Unanswered: " + unanswered);	
	} else {quesAnswer = potentialQuestions[currentQuestion].correctAns;
	initialTime = 9;
	$("#questiontext").text(potentialQuestions[currentQuestion].question);
	$("#answer1").text(potentialQuestions[currentQuestion].answer1);
	$("#answer2").text(potentialQuestions[currentQuestion].answer2);
	$("#answer3").text(potentialQuestions[currentQuestion].answer3);
	$("#answer4").text(potentialQuestions[currentQuestion].answer4);
	$(".timeLeft").removeClass("runningOut");
	$(".timeLeft").text(10);
	$(".game").removeClass("hide");
	$(".status").addClass("hide");
	countdown = setInterval(timer, 1000);
	}
}

let timer = function() {
	if (initialTime < 1) {
		timesUp();
	} else if (initialTime < 5) {
		$(".timeLeft").addClass("runningOut");
	} 
	{$(".timeLeft").text(initialTime);
	initialTime--;
	}
}

})

