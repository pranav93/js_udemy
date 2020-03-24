(function () {
    var score, playing, randQ;

    score = 0;
    playing = true;

    function printScore() {
        console.log("Your score is " + score);
    }

    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.showOptions = function () {
        for (i = 0; i < this.answers.length; i++) {
            console.log(i + ' : ' + this.answers[i]);
        }
    }

    Question.prototype.ask = function () {
        console.log(this.question);
        this.showOptions();

        answer = prompt(this.question);
        console.log(answer);
        if (answer == this.correctAnswer) {
            console.log("Correct Answer!!")
            score += 1;
        } else if (answer === 'exit'){
            console.log('exiting');
            playing = false;
            return
        } else {
            console.log("Wrong Answer!! Please try again.")
        }
    }

    q1 = new Question(
        'Which is the awesomest club on the planet?',
        ['City', 'Liverpool', 'United', 'Chelsea'],
        2
    );

    q2 = new Question(
        'Which is the awesomest player on the planet?',
        ['Messi', 'Ronaldo', 'Both', 'None'],
        2
    );

    questions = [q1, q2];

    while (playing) {
        console.log('----------------------------');
        randQ = Math.floor(Math.random() * questions.length)
        questions[randQ].ask();
        printScore();
        console.log('----------------------------');
    }

})();