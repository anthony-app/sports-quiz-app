/*
Author: Anthony A----------

Javascript for the sports quiz app
*/

window.onload = function() { 

	/**
	 * The score of the player for the quiz
	 *
	 * @type Number
	 */
	var score = 0;

	/**
	 * Quiz board where the app exists
	 *
	 * @type undefined
	 */
	var quizCard = document.getElementById("quizCard");

	/**
	 * Question for the quiz
	 *
	 * @type string
	 */
	var questionAsked = document.getElementById("question");

	/**
	 * The current question the user is seeing
	 *
	 * @type Number
	 */
	var currentQuestion = 0;

	/**
	 * Length of the array - Number of questions in quiz
	 *
	 * @type Number
	 */
	var questionAmount = quizAppArray.length;

	/**
	 * Variables for each answer option of the question
	 *
	 * @type Number
	 */
	var option1 = document.getElementById("option1");
	var option2 = document.getElementById("option2");
	var option3 = document.getElementById("option3");
	var option4 = document.getElementById("option4");

	/**
	 * Submit button for when user answers a question
	 *
	 * @type undefined
	 */
	var submitBtn = document.getElementById("submitBtn");

	/**
	 * Container for user feedback
	 *
	 * @type undefined
	 */
	var feedbackContainer = document.getElementById("feedbackContainer");

	/**
	 * Feedback for how well the user did on the quiz
	 *
	 * @type String
	 */
	var feedback = document.getElementById("feedback");

	/**
	 * Button to display image
	 *
	 * @type undefined
	 */
	var imageBtn = document.getElementById("imageBtn");

	/**
	 * Image being displayed
	 *
	 * @type undefined
	 */
	var imageDisplay = document.getElementById("imageDisplay");

	/**
	 * Provides user with first question and then cycles through the quiz app array
	 * to achieve the next set of questions and display it and the possible answers
	 *
	 * @param (Number) index of current question
	 * returns (undefined)
	 */
	function quizStart (quizAppArrayIndex) {
		var temp = quizAppArray[quizAppArrayIndex];
		questionAsked.innerHTML = "<span class='qStyle'>Question " + (quizAppArrayIndex + 1) + ":</span> " + temp.question;
		option1.innerHTML = temp.option1;
		option2.innerHTML = temp.option2;
		option3.innerHTML = temp.option3;
		option4.innerHTML = temp.option4;
	};

	/**
	 * Function to determine if the user's choice was correct, incorrect, or did not occur (no choice).
	 * It also determines if the user is on the final question and when to display the results
	 *
	 * @returns (undefined)
	 */
	submitBtn.onclick = function() {

		var userChoice = document.querySelector("input[type=radio]:checked");

		var error = document.getElementById("error");
		// if the user does not choose an option, alert them to choose one
		if (!userChoice) {
			error.innerHTML = "Please choose an option before you move on";
			return;
		}
		error.innerHTML = "";	// remove error message

		var answer = userChoice.value;
		// if the user gets the correct answer, increase their score by 1
		if (quizAppArray[currentQuestion].answer === answer) {
			score++;
		}

		userChoice.checked = false;

		currentQuestion++;		// move to next question

		// if they are on the last question, change the button to "Results" because we will display them their score next click
		if (currentQuestion === questionAmount - 1) {
			submitBtn.innerHTML = "results";
		}

		// if they are done the quiz, display their results - hide quizCard and display the feedback container
		if (currentQuestion === questionAmount) {
			document.getElementById("welcome").innerHTML = "results"
			document.getElementById("request").style.display = "none";
			quizCard.style.display = "none";
			feedbackContainer.style.display = "block";
			feedback.innerHTML = "You achieved a score of <span class='scoreNumber'>" + score + "/8</span> on the Sports Quiz!";

			var checkmarks = document.getElementById("checkmarks");
			var performance = document.getElementById("performance");

			if (score === 0) {
				checkmarks.innerHTML = "Sorry, you did not get any answer correct";
				performance.innerHTML = "<span class='poor'>[ Poor ]</span>";
			}
			else if (score === 1) {
				checkmarks.innerHTML = "&#9989";
				performance.innerHTML = "<span class='poor'>[ Poor ]</span>";
			}
			else if (score === 2) {
				checkmarks.innerHTML = "&#9989 &#9989";
				performance.innerHTML = "<span class='poor'>[ Poor ]</span>";
			}
			else if (score === 3) {
				checkmarks.innerHTML = "&#9989 &#9989 &#9989";
				performance.innerHTML = "<span class='soso'>[ Mediocre ]</span>";
			}
			else if (score === 4) {
				checkmarks.innerHTML = "&#9989 &#9989 &#9989 &#9989";
				performance.innerHTML = "<span class='soso'>[ Mediocre ]</span>";
			}
			else if (score === 5) {
				checkmarks.innerHTML = "&#9989 &#9989 &#9989 &#9989 &#9989";
				performance.innerHTML = "<span class='good'>[ Good ]</span>";
			}
			else if (score === 6) {
				checkmarks.innerHTML = "&#9989 &#9989 &#9989 &#9989 &#9989 &#9989";
				performance.innerHTML = "<span class='good'>[ Good ]</span>";
			}
			else if (score === 7) {
				checkmarks.innerHTML = "&#9989 &#9989 &#9989 &#9989 &#9989 &#9989 &#9989";
				performance.innerHTML = "<span class='excellent'>[ EXCELLENT ]</span>";
			}
			else if (score === 8) {
				checkmarks.innerHTML = "&#9989 &#9989 &#9989 &#9989 &#9989 &#9989 &#9989 &#9989";
				performance.innerHTML = "<span class='excellent'>[ EXCELLENT ]</span>";
			}
			return;
		}

		quizStart(currentQuestion);
	}

	quizStart(currentQuestion);

	/**
	 * Fuction to display an image (based off the result of the users test) on a 3 second delay to the user
	 *
	 * @returns (undefined)
	 */
	imageBtn.onclick = function() {

		if (score === 0) {
			imageDisplay.style.display = "block";
			imageBtn.style.display = "none";
		}
		else if (score === 1) {
			imageDisplay.style.display = "block";
			imageBtn.style.display = "none";
		}
		else if (score === 2) {
			imageDisplay.style.display = "block";
			imageBtn.style.display = "none";
		}
		else if (score === 3) {
			imageDisplay.src = "images/soso.gif";
			imageBtn.style.display = "none";
			imageDisplay.style.display = "block";
		}
		else if (score === 4) {
			imageDisplay.src = "images/soso.gif";
			imageBtn.style.display = "none";
			imageDisplay.style.display = "block";
		}
		else if (score === 5) {
			imageDisplay.src = "images/good.gif";
			imageBtn.style.display = "none";
			imageDisplay.style.display = "block";
		}
		else if (score === 6) {
			imageDisplay.src = "images/good.gif";
			imageBtn.style.display = "none";
			imageDisplay.style.display = "block";
		}
		else if (score === 7) {
			imageDisplay.src = "images/excellent.gif";
			imageBtn.style.display = "none";
			imageDisplay.style.display = "block";
		}
		else if (score === 8) {
			imageDisplay.src = "images/excellent.gif";
			imageBtn.style.display = "none";
			imageDisplay.style.display = "block";
		}
	}
}