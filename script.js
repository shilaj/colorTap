function colorButtonClickAnimation() {
    $(".normal").click(function() {
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

function randomNumberGenerator(numberOfRandomNumber) {
    return Math.floor(Math.random() * numberOfRandomNumber);
}

function changingColorHeading() {
    $("h1").text(colorTapGame["colors"][randomNumberGenerator(4)]);
    $("h1").css("color", colorTapGame["colors"][randomNumberGenerator(5)]);
}

function gameOverCheck() {
    if (gameOverBoolean) {
        $("h1").text("Game Over !");
        $(".normal").click(colorButtonClickAnimation);
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

function gamePlay(dateStored) {
    $(".play").css("display", "none")
    changingColorHeading();
    $(".normal").click(function() {
        if (Date.now() - dateStored < levelCheck(score)) {
            $("button").blur(); // removes blue outline of button 
            // checking rgb values of heading and buttons
            if (!gameOverBoolean) {
                if (($("h1").css("color") === $(this).css("background-color")) || ($("h1").text() === $(this).text())) {

                    score++;
                    $(".playReset").text("Press button within " + (levelCheck(score) / 1000) + " sec !")
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

$(".play").click(function() {
    var started = Date.now();
    gamePlay(started);

})

// console.log(Date.now());