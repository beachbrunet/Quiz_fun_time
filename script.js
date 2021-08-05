// This outline is for the game and will be written in JavaScript mostly.
// The overall goal is a timed quiz that stores high scores.
// First a homepage will appear with greeting and instructions and more importantly a start button to start it all off.
// When hitting the start button: Shows the first question, timmer starts.
// Second: After selecting the answer it will move onto the next question.
// Last: Quiz ends when all the questions have been answered or the timmer reaches zero.

// MVP (Minimum Viable Product)
// // Shows a user a question with possible answers
// Choices are clickable
// When choice is clicked app determines if it is correct or not
// Show next question and let them do it again
// Showing the user it's score at end


// FEATURES (bonus which just makes it better)
// start button
// When hitting the start timer starts
// deducting time when someone answers wrong
// showing other peoples high scores
// storing high scores


// Questions

var trivaQuestions = [
    {
        question: "Which one of these is a Charectors you can play in Overwatch?",
        possibles: ["Reaper", "Deathstroke", "Axion", "Sergeant-Barrister Jane Doe"],
        answer: "Reaper",
    },
    {
        question: "In Bungie's Destiny game series raid appeared in both Destiny and Destiny 2?",
        possibles: ["Wrath of the Machine", "Last Wish", "Vault of Glass", "Kings Fall"],
        answer: "Vault of Glass",
    },
    {
        question: "In what Series where Dracula and The Grim Reaper recurring Villians",
        possibles: ["Halo", "Dark Souls", "Soul Reaver", "Castlevania"],
        answer: "Castlevania",
    },
    {
        question: "Which one of these is not a Rockstar developed game?",
        possibles: ["Grand Theft Auto (GTA)", "Assassin's Creed", "Bully", "Red Dead Redemption 2"],
        answer: "Assassin's Creed",
    },
    {
        question: "Kratos is the main Charecter of which game?",
        possibles: ["God Hand", "Assassin's Creed", "God of War", "Prince of Persia"],
        answer: "God of War",
    },
    {
        question: "Did you enjoy this Quiz?",
        possibles: ["Yes", "No"],
        answer: "Yes",
    },

];

// TO show questions and answers
var indexOfQuestionToShow = 1

document.querySelector('#question').textContent = trivaQuestions[indexOfQuestionToShow].question

for (let i = 0; i < trivaQuestions[indexOfQuestionToShow].choices.length; i++) {
	var choiceButton = document.createElement('button')
	choiceButton.textContent = trivaQuestions[indexOfQuestionToShow].choices[i]
	// add a class so that you can make event listener later
	document.querySelector('#choices').appendChild(choiceButton)
}


// Function opperations. 
// -Show me Question
// -Select the answer
// -Show next question/function
// -Show done screen 

// function showQuestion(question) {}

// function nextQuestion (){}

// function selectAnswer (){}

function startGame () {
    startButton.destroy();
    // addEventListener("click", "Start-Button").style.display = "hidden";

// Run game
document.getElementById('Start-Button');
startButton.addEventListener("click", startGame)

}




// Timer
var time = 60
var timePenalty = -20



 function quiz (){}

 function showScore (){}
 




// functions: the timmer decreases when the wrong answer is sleceted.
// Save the inital score



// var count = 15
// var interval = setInterval(function(){
//     document.getElementById('count').innerHTML=count;
//     count--;
//     if (count === 0){
//       clearInterval(interval);
//       document.getElementById('count').innerHTML='Done';
//       // alerts when out of time
//       alert("You're out of time!");
//     }
//   }, 1000);

// submitButton.addEventListener ('click', showScore)
