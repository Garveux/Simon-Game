const array = ["green", "red", "yellow", "blue"];
var gamePattern = [];
const buttons = document.querySelectorAll(".btn");
var i = 1;
var k = 0;
document.addEventListener("keydown", function () {
    if (document.getElementById("level-title").innerHTML == "Press A Key to Start") {
        document.getElementById("level-title").innerHTML = "level " + i;
        rad = Math.floor(Math.random() * 3 + 1);
        gamePattern.push(array[rad]);
        animate(rad);   
    }
})

$(".btn").click(function () {
    if (this.id == gamePattern[k]) {
        k++;
    }
    else {
        document.getElementById("level-title").innerHTML = "Game over!";
    }
    if (k  == gamePattern.length) {
        i++;
        document.getElementById("level-title").innerHTML = "level " + i;
        rad = Math.floor(Math.random() * 3 + 1);
        gamePattern.push(array[rad]);
        animate(rad);
        k = 0;
    }
})

function animate(randomIndex) {
    const randomButton = buttons[randomIndex];
    randomButton.classList.add('animate');
    setTimeout(() => {
        randomButton.classList.remove('animate');
    }, 1000);
}

