
from flask import Flask, render_template, jsonify, request
from words import WORDS
import random

# Create Flask application
app = Flask(__name__)

MAX_ATTEMPTS = 6


# Home page
@app.route("/")
def home():
    return render_template("index.html")


# Start new game
@app.route("/new-game")
def new_game():
    word = random.choice(WORDS)

    return jsonify({
        "word": word,
        "display": ["_" for _ in word],
        "attempts": MAX_ATTEMPTS,
        "guessed": [],
        "status": "playing"
    })


# Check guessed letter
@app.route("/guess", methods=["POST"])
def guess():
    data = request.get_json()

    word = data["word"].upper()
    guessed = [letter.upper() for letter in data["guessed"]]
    letter = data["letter"].upper()
    attempts = int(data["attempts"])

    if len(letter) != 1 or not letter.isalpha():
        return jsonify({"error": "Enter one valid letter"}), 400

    if letter in guessed:
        return jsonify({"error": "Letter already guessed"}), 400

    guessed.append(letter)

    if letter not in word:
        attempts -= 1

    display = [
        char if char in guessed else "_"
        for char in word
    ]

    if "_" not in display:
        status = "won"
    elif attempts <= 0:
        status = "lost"
    else:
        status = "playing"

    return jsonify({
        "display": display,
        "guessed": guessed,
        "attempts": attempts,
        "status": status,
        "word": word
    })


# Run application
if __name__ == "__main__":
    app.run(debug=True)
