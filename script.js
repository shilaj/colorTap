$(".normal").click(function() {
    $(this).addClass("controlledNormalButtons");
    setTimeout(function() {
        $(".normal").removeClass("controlledNormalButtons");
    }, 150);
})

var colorTapGame = {
    colors: ["Red", "Blue", "Green", "Yellow", "Black"],
}
var score = 0;
var gameBoolean = true;

function randomNumberGenerator(numberOfRandomNumber) {
    return Math.floor(Math.random() * numberOfRandomNumber);
}

function changingColorHeading() {
    $("h1").text(colorTapGame["colors"][randomNumberGenerator(4)]);
    $("h1").css("color", colorTapGame["colors"][randomNumberGenerator(4)]);
}

function gamePlay() {
    $(".playReset").css("visibility", "hidden")
    changingColorHeading();
    $(".normal").click(function() {
        if ($("h1").css("color") === $(this).css("background-color")) {
            score++;
            $(".score").text(score);
            changingColorHeading();
        }
        // else if (($("h1").text() === $(this).text())) {

        // } 
        else {
            gameBoolean = false;
        }
    })

}
$(".play").click(function() {
    if (gameBoolean) {
        gamePlay();
    }
});