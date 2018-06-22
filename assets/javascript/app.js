// jQuery programming for the start button to display the questions in the "question-container" div,  and to start the timer in the div "timer-container"
$(".startbutton").on("click", function () {

    // Hiding the start button to begin the game.
    $(".startbutton").hide();

    // Establishing the variables "container" and "timer" and linking them to the appropriate divs in the HTML.
    var container = $("#question-container");
    var timer = $("#timer-container");

    // Start the timer!
    startTimer(timer);

    // Looping through the questions, displaying the options, and establishing the set-up of the form.
    for (var i = 0; i < questions.length; i++) {
        var oneQuestion = questions[i];
        var qValue = oneQuestion.Q;
        var ansValue = oneQuestion.ans;

        // Set-up of the one-by-one question variables along with the options
        var questionDivId = "questionNum" + i;
        var questiondiv = $('<div id="' + questionDivId + '">' + qValue + "</div>");
        var answerdiv = $("<div id=" + ansValue + "</div>");
        container.append(questiondiv);
        var ansForm = $("<form></form>");
        questiondiv.append(ansForm);
        for (var a = 0; a < ansValue.length; a++) {
            var radioId = questionDivId + "radio" + a;
            var ansSelection = $('<div class="radio"> <label class="radio-inline"><input type="radio" id="' + radioId + '" name="optradio">' + ansValue[a] + '</label></div>');
            ansForm.append(ansSelection);
        }
    }
    // Establishing the length of the timer, 30 seconds.
    setTimeout(endGame, 30000);


});

// The timer function
function startTimer(display) {
    var timer = 30;
    setInterval(function () {
        timer--;
        display.html("<h1>" + timer + "</h1>");;
    }, 1000);
}

// Establishing the endGame function, to define when to stop play, and show the scores.
function endGame() {

    var correctAns = 0;
    var incorrect = 0;
    var noAns = 0;
    for (var r = 0; r < questions.length; r++) {
        var checkedRadioNum = 99;
        var questionDivId = "questionNum" + r;
        for (var a = 0; a < 4; a++) {
            var radioId = questionDivId + "radio" + a;
            var isChecked = $("#" + radioId).prop("checked");
            if (isChecked) {
                checkedRadioNum = a;
                break;
            }
        }
        if (checkedRadioNum === questions[r].correct) {
            correctAns++;
        } else {
            incorrect++;
        }

    }
    
    // The scores variable set-up. Hides the questions once the game is done. With a little more time, instead of hiding them, I'd have included coding to show the right and wrong answers.
    var scores = $("#scores");
    $("#question-container").hide();
    $("#timer-container").hide();

    // The Scores, in an alert scoreboard at the footer.
    scores.append("<h3>Correct: " + correctAns + " Incorrect: " + incorrect + "</h3>");

}

// The coding of the questions. Go Jays Go!
var questions = [{
    Q: "What Blue Jay's Player Motto is 'Height Doesn't Measure Heart?'",
    ans: ["J.A. Happ", "Justin Smoak", "Marcus Stroman", "Russell Martin"],
    correct: 3
},
{
    Q: "Who is the only Blue Jay to have his number retired by the team?",
    ans: ["Roy Halladay", "Joe Carter", "Roberto Alomar", "Tony Fernandez"],
    correct: 1
},
{
    Q: "What is the name of the Blue Jay's Team Stadium?",
    ans: ["SkyDome", "Pepsico Field", "Shea Stadium", "Rogers Centre"],
    correct: 3
},
{
    Q: "Which of the following former Blue Jays' was a Cy Young Winner AS a Blue Jay??",
    ans: ["Pat Hentgen", "David Price", "David Wells", "Roger Clemens"],
    correct: 4
},
{
    Q: "Which of the following players was involved in the final play of both World Series wins??",
    ans: ["Roberto Alomar", "Joe Carter", "Mookie Wilson", "John Olerud"],
    correct: 2
}
]