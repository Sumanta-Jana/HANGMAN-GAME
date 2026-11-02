let word = "";
let guessed = [];
let attempts = 6;
let status = "playing";

const wordElement = document.getElementById("word");
const attemptsElement = document.getElementById("attempts");
const guessedElement = document.getElementById("guessed");
const keyboard = document.getElementById("keyboard");
const message = document.getElementById("message");

const bodyParts = [
    "head",
    "body",
    "left-arm",
    "right-arm",
    "left-leg",
    "right-leg"
];


async function newGame() {

    const response = await fetch("/new-game");
    const data = await response.json();

    word = data.word;
    guessed = [];
    attempts = data.attempts;
    status = data.status;

    message.textContent = "";

    bodyParts.forEach(part => {
        document.getElementById(part).style.visibility = "hidden";
    });

    createKeyboard();
    updateGame();
}


function createKeyboard() {

    keyboard.innerHTML = "";

    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => {

        const button = document.createElement("button");

        button.textContent = letter;

        button.addEventListener("click", () => {
            makeGuess(letter, button);
        });

        keyboard.appendChild(button);

    });
}


async function makeGuess(letter, button) {

    if (status !== "playing") return;

    button.disabled = true;

    const response = await fetch("/guess", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            word: word,
            guessed: guessed,
            letter: letter,
            attempts: attempts
        })

    });

    const data = await response.json();

    if (!response.ok) {
        message.textContent = data.error;
        return;
    }

    guessed = data.guessed;
    attempts = data.attempts;
    status = data.status;

    updateGame();

}


function updateGame() {

    wordElement.innerHTML = "";

    word.split("").forEach(letter => {

        const span = document.createElement("span");

        span.className = "letter";

        span.textContent = guessed.includes(letter)
            ? letter
            : "_";

        wordElement.appendChild(span);

    });

    attemptsElement.textContent = attempts;

    guessedElement.textContent = guessed.join(", ");

    const wrongGuesses = 6 - attempts;

    bodyParts.forEach((part, index) => {

        if (index < wrongGuesses) {
            document.getElementById(part).style.visibility = "visible";
        }

    });

    if (status === "won") {
        message.textContent = "🎉 Congratulations! You Won!";
        disableKeyboard();
    }

    if (status === "lost") {
        message.textContent = "😢 Game Over! Word: " + word;
        disableKeyboard();
    }

}


function disableKeyboard() {

    document.querySelectorAll(".keyboard button").forEach(button => {
        button.disabled = true;
    });

}


document.getElementById("restart").addEventListener("click", newGame);

newGame();