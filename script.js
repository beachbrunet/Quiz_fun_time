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

// // Function opperations. 
// // -Show me Question
// // -Select the answer
// // -Show next question/function
// // -Show done screen 

// Need to start game via button
function startGame (){
addEventListener("click", "Start-Button").style.display = "hidden";
}

// Show questions
function showQuestions (){
    triviaQuestionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // loops questions through the array above
    for (let i = 0; i < question.possibles.length; i++) {
    let choiceButton = document.createElement('button')
    choiceButton.textContent = question.possibles[i]
    // add a class so that you can make event listener later
    target.appendChild(choiceButton)
}}

// make an event listener for the choices
// one event listener that when clicked can identify which button was clicked (event)
// event.target.textContent
// if condition to see if you are right








function compare (event) {
    let element = event.target;
    if(element.matches("li")) {
let newDiv = document.createElement("div");


    }


}








Timer.addEventListener("click",function(){
 if()
}











// Timer
//var time = 60
// var timePenalty = -20

//  var count = 15
//  var interval = setInterval(function(){
//    document.getElementById('count').innerHTML=count;
//  count--;
//    if (count === 0){
// clearInterval(interval);
// document.getElementById('count').innerHTML='Done';
//  alerts when out of time
//  alert("You're out of time!");
// }
// }, 1000);


// var count = 15
// var interval = setInterval(function(){
//    document.getElementById('count').innerHTML=count;
// count--;
//  if (count === 0){
// clearInterval(interval);
// document.getElementById('count').innerHTML='Done';
//  alerts when out of time
//  alert("You are out of time!");
//  }
// }, 1000);

// submitButton.addEventListener ('click', showScore)
