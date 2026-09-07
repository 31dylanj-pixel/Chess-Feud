# ♟️ Chess Feud

A browser-based **Family Feud-style game** made for the Chess Club.

Chess Feud is designed to be played during Chess Club meetings, with a host controlling the game while teams compete to guess the most popular answers to chess-related questions.

## 🎮 Features

* 🎯 Family Feud-style gameplay
* ♟️ Chess-themed questions and answers
* 🖥️ Full-screen presentation interface
* 🔢 6 answers per question
* ❌ 3-strike system
* 🔍 Answer matching with aliases
* ⌨️ Keyboard support — press **Enter** to submit an answer
* 🔄 Reset and navigation controls for the host
* 👀 Reveal individual answers or all answers
* ⏪ Previous/Next question navigation
* 💰 Manual scoring — no automatic score tracking
* 📱 Responsive layout for different screen sizes

## 🕹️ How to Play

### 1. Form Teams

Split players into teams.

### 2. Read the Question

The host displays a Family Feud-style question to the teams.

### 3. Guess an Answer

The host enters the team's answer into the answer box.

* If the answer matches one of the six answers, it is revealed.
* If it doesn't match, the team receives a **strike**.

### 4. Three Strikes

Teams can receive up to **3 strikes** during a round.

### 5. Keep Score Manually

Scores are intentionally **not tracked by the website**. The host can keep score using a whiteboard, paper, or another scoring system.

## 📂 Project Structure

```text
Chess-Feud/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the game's screens and layout, including:

* Title screen
* Instructions
* Rules
* Game board
* Answer cards
* Strike indicators
* Host controls

### `style.css`

Contains all visual styling and animations for the game.

### `script.js`

Handles:

* Questions and answers
* Answer matching
* Revealing answers
* Strike tracking
* Round resets
* Question navigation
* Correct/incorrect animations

## 🧠 Adding Questions

Questions are stored in `script.js` inside the `gameQuestions` array.

Each question contains a question and six possible answers:

```javascript
{
  question: "Name something chess players do before a game.",
  answers: [
    {
      text: "Study openings",
      aliases: ["study opening", "opening preparation"]
    },
    {
      text: "Warm up",
      aliases: ["practice", "do puzzles"]
    }
  ]
}
```

### Answer Aliases

Aliases allow different ways of saying the same answer to be accepted.

For example:

```javascript
aliases: [
  "castle",
  "castling",
  "king side castle",
  "kingside castling"
]
```

This makes the game more forgiving when teams give answers that are technically equivalent.

## ⚙️ Host Controls

| Button                | Function                      |
| --------------------- | ----------------------------- |
| **Submit**            | Checks the team's answer      |
| **Reveal**            | Manually reveals an answer    |
| **Reveal All**        | Reveals every answer          |
| **Reset Round**       | Resets the current question   |
| **Previous Question** | Goes to the previous question |
| **Next Question**     | Moves to the next question    |
| **Back to Rules**     | Returns to the rules screen   |

## 🛠️ Technologies

Chess Feud is built using simple web technologies:

* **HTML5**
* **CSS3**
* **JavaScript**
* **Google Fonts**

No frameworks, databases, or backend services are required.

## 🚀 Running the Game

Because Chess Feud is a static website, it can be run locally or hosted using services such as GitHub Pages.

### Local

Simply open:

```text
https://31dylanj-pixel.github.io/Chess-Feud/
```

in a web browser.

### GitHub Pages

Upload the project files to a GitHub repository and enable **GitHub Pages** in the repository settings.

## 🎨 Design

Chess Feud follows the visual style of the Chess Club's other presentation games:

* Dark indigo background
* Gold highlights
* Glass-style cards
* Large presentation-friendly typography
* Smooth transitions and animations

## ♟️ Made for Chess Club

Chess Feud was created as a Chess Club meeting activity to make learning and talking about chess more interactive and competitive.

**Think. Plan. Checkmate.**
