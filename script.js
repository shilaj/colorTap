function colorButtonClickAnimation() {
    $(".normal").click(function() {
        success.play();
        $(this).addClass("controlledNormalButtons");
        setTimeout(function() {
            $(".normal").removeClass("controlledNormalButtons");
        }, 150);
    })
}

var colorTapGame = {
    colors: ["Red", "Blue", "Green", "Yellow", "Black"],
}
var score = 0;
var gameOverBoolean = false;
var success = new Audio("select.wav");
var wrong = new Audio("wrong.mp3");
var spaceCheck = false;

function randomNumberGenerator(numberOfRandomNumber) {
    return Math.floor(Math.random() * numberOfRandomNumber);
}

function changingColorHeading() {
    $("h1").text(colorTapGame["colors"][randomNumberGenerator(4)]);
    $("h1").css("color", colorTapGame["colors"][randomNumberGenerator(5)]);
}

function gameOverCheck() {
    if (gameOverBoolean) {
        $("h1").css("color", "black")
        $("h1").text("Game Over !");
        $(".normal").click(colorButtonClickAnimation);
        $("body").addClass("gameOverbody");
        setTimeout(function() {
            $("body").removeClass("gameOverbody");
        }, 150)
        wrong.play();
        $(".playReset").css("font-size", "3vw")
        $(".playReset").text("Refresh the page to play Again !! ")
    }
}

function levelCheck(scoreNow) {
    if (scoreNow <= 10) {

        return 2000;
    } else if (scoreNow > 10 && scoreNow <= 20) {
        return 1500;
    } else {
        return 1000;
    }
}

function textCheck(button) {
    if ($("h1").css("color") === 'rgb(0, 0, 0)') {
        if ($("h1").text() === $(button).text()) {
            return true;
        }
    }
}

function playGame() {
    $(".play").click(function() {
        var started = Date.now();
        gamePlay(started);

    })
}



function gamePlay(dateStored) {
    $(".play").css("display", "none")
    changingColorHeading();
    $(".normal").click(function() {
        if (Date.now() - dateStored < levelCheck(score)) {
            $("button").blur();
            // checking rgb values of heading and buttons
            if (!gameOverBoolean) {
                if (($("h1").css("color") === $(this).css("background-color")) || textCheck(this)) {

                    score++;
                    $(".message").text("Press button within " + (levelCheck(score) / 1000) + " sec !").fadeIn(100).fadeOut(100).fadeIn(100)
                    success.play();
                    $(".score").text(score);
                    changingColorHeading();
                    dateStored = Date.now();

                } else {
                    gameOverBoolean = true;
                }
            }
        } else {
            gameOverBoolean = true;
        }
        gameOverCheck();
    })

}
colorButtonClickAnimation();
playGame();