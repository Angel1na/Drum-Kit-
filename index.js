// document.querySelector(".set").addEventListener("click", function () {
//     alert("I got clicked");
// });

// Detecting Button Press
let numberOfDrumButton = document.querySelectorAll(".drum");

for (let i = 0; i < numberOfDrumButton.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // this.style.color = 'yellow';

        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
};

// Detecting Keydown Press

document.addEventListener("keydown", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {

        case "w":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "a":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "s":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "j":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "k":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add('pressed');

    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100);
}

// function add(n1, n2) {
//     return n1 + n2;
// }

// function subtract(n1, n2) {
//     return n1 - n2;
// }

// function multiple(n1, n2) {
//     return n1 * n2;
// }

// function divide(n1, n2) {
//     return n1 / n2;
// }

// function calculation(n1, n2, operator) {
//     return operator(n1, n2);
// }