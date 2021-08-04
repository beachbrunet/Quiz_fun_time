// This outline is for the game and will be written in JavaScript mostly.
// The overall goal is a timed quiz that stores high scores.
// First a homepage will appear with greeting and instructions and more importantly a start button to start it all off.
// When hitting the start button: Shows the first question, timmer starts.
// Second: After selecting the answer it will move onto the next question.
// Last: Quiz ends when all the questions have been answered or the timmer reaches zero.

// Basic outline for questions - addEventListener
// When user selects an answer
// Check if it was correct
// Inform them if they got it right or wrong


function handleFormSubmit(event) {
event.preventDefault();
 }

 var score = 0;

// Questions

var trivaQuestions = [
    {
        question: "Which one of these is a Charectors you can play in Overwatch?",
        possibles: ["Reaper", "Deathstroke", "Axion", "Sergeant-Barrister Jane Doe"],
        answer: ["Reaper"],
    },
    {
        question: "In Bungie's Destiny game series raid appeared in both Destiny and Destiny 2?",
        possibles: ["Wrath of the Machine", "Last Wish", "Vault of Glass", "Kings Fall"],
        answer: ["Vault of Glass"],
    },
    {
        question: "In what Series where Dracula and The Grim Reaper recurring Villians",
        possibles: ["Halo", "Dark Souls", "Soul Reaver", "Castlevania"],
        answer: ["CastleVania"],
    },
    {
        question: "Which one of these is not a Rockstar developed game?",
        possibles: ["Grand Theft Auto (GTA)", "Assassin's Creed", "Bully", "Red Dead Redemption 2"],
        answer: ["Assassin's Creed"],
    },
    {
        question: "Kratos is the main Charecter of which game?",
        possibles: ["God Hand", "Assassin's Creed", "God of War", "Prince of Persia"],
        answer: ["God of War"],
    },

];
    
        
        // 
        // 
        // Assasin's Creed
        // God of War
        // Prince of Persia











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


