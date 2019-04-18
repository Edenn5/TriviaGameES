var panel = $("#quiz-area");

var countStartNumber = 30;

// Question Set
var questions = [
  
    {
        question: "Who won the first world cup?" , 
        answers: ["Argentina", "Italy", "Uruguay", "Brazil"],
        correctAnswer: "Uruguay" , 
        image: "assests\Uruguay.gif"
    },

    {
        question: "Who is the top goal scorer in world cup history?" , 
        answers: ["Just Fontaine", "Muller", "Klose", "Ronaldo"],
        correctAnswer: "Klose" , 
        image: "assests\klose.gif"
    },

]

// Variable to hold out setInterval
var timer;

var game = {

    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function() {
        game.counter--;
         $("#counter-number").html(game.counter);
         if (game.counter === 0) {
             console.log("TIME UP");
             game.timeUp();
         }
    },

    loadQuestion: function() {
        timer = setInterval(game.countdown, 1000);
        panel.html("<h2>" +  questions[this.currentQuestion].question + "</h2>" );
        for (var i = 0; i < question[this.currentQuestion].answers.length; i++)
        {
            panel.append("<button class='answer-button' id='button' data name= ''" + 
            questions[this.currentQuestion].answers[i] + "'>"+
            questions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function() {
        game.counter = countStartNumber;
        $("#counter-number").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function() {

    }

}