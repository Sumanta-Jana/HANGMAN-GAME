# 🎯 Number Guessing Game

A beginner-friendly number guessing game built with **Java**, **HTML**, **CSS**, and **JavaScript**.

The computer randomly selects a secret number between **1 and 100**. Your goal is to guess the number in **7 attempts**.

## ✨ Project Versions

This project contains two versions:

1. **Java Console Version** – Play the game in a terminal or command prompt.
2. **Web Version** – Play the game in a browser using HTML, CSS, and JavaScript.

## 📁 Project Structure

```text
number-guessing-game/
│
├── java/
│   └── NumberGuessingGame.java
│
└── website/
    ├── html/
    │   └── index.html
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

## 🎮 How to Play

- The computer chooses a random number from **1 to 100**.
- You get **7 valid attempts** to guess the number.
- If your guess is too high, the game asks you to choose a smaller number.
- If your guess is too low, the game asks you to choose a bigger number.
- If you guess correctly, you win.
- If you use all 7 attempts, the game reveals the correct number.
- Invalid input and numbers outside the 1–100 range do not use an attempt in the Java version.

## ☕ Run the Java Console Version

### Requirements

- Java Development Kit (JDK) installed.
- A terminal or command prompt.

### Steps

1. Open a terminal in the project folder.
2. Go to the Java folder:

   ```bash
   cd java
   ```

3. Compile the program:

   ```bash
   javac NumberGuessingGame.java
   ```

4. Run the game:

   ```bash
   java NumberGuessingGame
   ```

> **Important:** The source file must be named `NumberGuessingGame.java`, and the Java code must not be commented out. If every line starts with `//`, remove those comment markers before compiling.

## 🌐 Run the Website Version

1. Open the `website/html` folder.
2. Open `index.html` in your web browser.
3. Enter a number between 1 and 100.
4. Click **Guess** to submit your answer.
5. Select **Play Again** to start a new round.

No separate installation is needed for the website version if all project files are present and linked correctly.

## 🧠 Concepts Used

### Java
- Variables and data types
- `Random` class
- `Scanner` class
- `if`, `else if`, and `else`
- `for` loop
- Boolean variables
- Input validation

### Web Development
- **HTML** – Creates the webpage structure.
- **CSS** – Adds styling and layout.
- **JavaScript** – Handles the game logic and user interactions.

## 🚀 Possible Improvements

- Add difficulty levels.
- Add a score system.
- Add a timer.
- Store the player's best score.
- Add sound effects and animations.

## 👨‍💻 Author

**Sumanta Jana**

## 📄 License

This project is created for learning and educational purposes.
