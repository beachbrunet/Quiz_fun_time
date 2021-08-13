// MVP (Minimum Viable Product)
// Shows a user a question with possible answers
// Choices are clickable
// When choice is clicked app determines if it is correct or not
// Show next question --- let them do it again
// Showing the user it's score at end


// FEATURES (bonus which just makes it better)
// Start button
// When hitting the start timer starts
// Deducting time when someone answers wrong
// Storing high scores
// Displays high scores

// Questions Provided, mutiple answers to choose from, and answer string. 
var trivaQuestions = [
    {
        question: "Which one of these is a Charectors you can play in Overwatch?",
        possibles: ["Reaper", "Deathstroke", "Axion", "Sergeant-Barrister Jane Doe"],
        answer: "Reaper",
    },
    {
        question: "In Bungie's Destiny game series, what raid appeared in both Destiny and Destiny 2?",
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

// Timer
var time = 60
var timePenalty = -20
var score = 0;
var currentQuestion = 0;

function handleResponse(event) {
    var response = event.target.textContent;
    if(response == trivaQuestions[currentQuestion].answer) {
        score = score + 1;
    }

    if(currentQuestion < trivaQuestions.length - 1) {
        showQuestion(currentQuestion + 1);
    } else {
        alert("Your score: " + score);
    }
}

// TO show questions and answers
function showQuestion(indexOfQuestionToShow) {
    currentQuestion = indexOfQuestionToShow;

    var questionElement = document.querySelector('#question');
    var theQuestion = trivaQuestions[indexOfQuestionToShow];
    questionElement.textContent = theQuestion.question;
    var choices = document.querySelector('#choices');
    choices.innerHTML = "";

    for (let i = 0; i < theQuestion.possibles.length; i++) {
        var choiceButton = document.createElement('button')
        choiceButton.textContent = theQuestion.possibles[i]
        // add a class so that you can make event listener later
        choices.appendChild(choiceButton);
        choiceButton.addEventListener("click", handleResponse);
    }
}

// Function opperations.
// -Show me Question
// -Select the answer
// -Show next question/function
// -Show done screen


function startGame () {
    score = 0;
    document.getElementById('intro').style.display = "none";
    showQuestion(0);
}

document.getElementById('start-button').addEventListener("click", startGame);




