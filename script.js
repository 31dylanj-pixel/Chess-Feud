// ==========================================
// CHESS CLUB FAMILY FEUD
// ==========================================


// ------------------------------------------
// QUESTIONS
// ------------------------------------------

const gameQuestions = [

  {
    question: "Name something beginners often do in chess.",

    answers: [

      {
        text: "Move the queen too early",

        aliases: [
          "move queen",
          "queen too early",
          "bring queen out",
          "early queen"
        ]
      },

      {
        text: "Hang a piece",

        aliases: [
          "hang piece",
          "lose piece",
          "leave piece",
          "blunder piece"
        ]
      },

      {
        text: "Forget to castle",

        aliases: [
          "not castle",
          "dont castle",
          "don't castle",
          "forget castle"
        ]
      },

      {
        text: "Make random moves",

        aliases: [
          "random moves",
          "random move",
          "move randomly"
        ]
      },

      {
        text: "Ignore piece development",

        aliases: [
          "dont develop",
          "don't develop",
          "not develop",
          "ignore development"
        ]
      },

      {
        text: "Focus on only one attack",

        aliases: [
          "one attack",
          "single attack",
          "only attack"
        ]
      }

    ]

  },

  {
    question: "Name something chess players blame after losing.",

    answers: [

      {
        text: "Their opponent got lucky",

        aliases: [
          "luck",
          "lucky",
          "opponent lucky"
        ]
      },

      {
        text: "The clock",

        aliases: [
          "clock",
          "time"
        ]
      },

      {
        text: "A distraction",

        aliases: [
          "distraction",
          "distracted",
          "noise"
        ]
      },

      {
        text: "Their opening preparation",

        aliases: [
          "opening",
          "bad opening",
          "opening preparation"
        ]
      },

      {
        text: "A bad day",

        aliases: [
          "bad day",
          "off day"
        ]
      },

      {
        text: "Their mouse or internet",

        aliases: [
          "mouse",
          "internet",
          "connection",
          "lag"
        ]
      }

    ]

  },

  {
    question: "Name a chess piece that players hate losing.",

    answers: [

      {
        text: "Queen",

        aliases: [
          "queen",
          "my queen"
        ]
      },

      {
        text: "Rook",

        aliases: [
          "rook",
          "my rook"
        ]
      },

      {
        text: "Knight",

        aliases: [
          "knight",
          "horse"
        ]
      },

      {
        text: "Bishop",

        aliases: [
          "bishop"
        ]
      },

      {
        text: "A passed pawn",

        aliases: [
          "passed pawn",
          "pawn"
        ]
      },

      {
        text: "The king",

        aliases: [
          "king"
        ]
      }

    ]

  },


  {
    question: "Name something you might say after making a terrible move.",

    answers: [

      {
        text: "Oops!",

        aliases: [
          "oops",
          "oh no",
          "oh god"
        ]
      },

      {
        text: "I didn't see that!",

        aliases: [
          "didnt see",
          "didn't see",
          "i didnt see",
          "i didn't see"
        ]
      },

      {
        text: "Why did I do that?",

        aliases: [
          "why did i do that",
          "why",
          "what was i thinking"
        ]
      },

      {
        text: "I blundered!",

        aliases: [
          "blunder",
          "i blundered"
        ]
      },

      {
        text: "Can I take it back?",

        aliases: [
          "take it back",
          "undo",
          "can i undo"
        ]
      },

      {
        text: "GG",

        aliases: [
          "gg",
          "good game"
        ]
      }

    ]

  },


  {
    question: "Name something you should always check before making a move.",

    answers: [

      {
        text: "Your opponent's threats",

        aliases: [
          "opponent threats",
          "their threats",
          "opponents move",
          "opponent move"
        ]
      },

      {
        text: "Whether your king is safe",

        aliases: [
          "king safety",
          "king safe",
          "my king"
        ]
      },

      {
        text: "If a piece is hanging",

        aliases: [
          "hanging piece",
          "hanging pieces",
          "free piece"
        ]
      },

      {
        text: "Checks",

        aliases: [
          "check",
          "checks"
        ]
      },

      {
        text: "Captures",

        aliases: [
          "capture",
          "captures"
        ]
      },

      {
        text: "Threats",

        aliases: [
          "threat",
          "threats"
        ]
      }

    ]

  },


  {
    question: "Name a reason someone might lose a chess game.",

    answers: [

      {
        text: "They got checkmated",

        aliases: [
          "checkmate",
          "checkmated",
          "got checkmated"
        ]
      },

      {
        text: "They ran out of time",

        aliases: [
          "time",
          "ran out of time",
          "flagged",
          "flag"
        ]
      },

      {
        text: "They blundered",

        aliases: [
          "blunder",
          "blundered"
        ]
      },

      {
        text: "They resigned",

        aliases: [
          "resign",
          "resigned",
          "gave up"
        ]
      },

      {
        text: "They lost too much material",

        aliases: [
          "lost material",
          "lost pieces",
          "material"
        ]
      },

      {
        text: "They got distracted",

        aliases: [
          "distracted",
          "distraction"
        ]
      }

    ]

  },


  {
    question: "Name something chess players do while thinking.",

    answers: [

      {
        text: "Stare at the board",

        aliases: [
          "stare",
          "look at board",
          "staring"
        ]
      },

      {
        text: "Touch their face",

        aliases: [
          "touch face",
          "face",
          "hold chin"
        ]
      },

      {
        text: "Calculate variations",

        aliases: [
          "calculate",
          "calculation",
          "calculate moves"
        ]
      },

      {
        text: "Tap their fingers",

        aliases: [
          "tap fingers",
          "tap",
          "fidget"
        ]
      },

      {
        text: "Look around the room",

        aliases: [
          "look around",
          "look room"
        ]
      },

      {
        text: "Sit completely still",

        aliases: [
          "sit still",
          "still"
        ]
      }

    ]

  },


  {
    question: "Name something that can ruin a good chess position.",

    answers: [

      {
        text: "A blunder",

        aliases: [
          "blunder",
          "mistake"
        ]
      },

      {
        text: "A missed tactic",

        aliases: [
          "miss tactic",
          "missed tactic"
        ]
      },

      {
        text: "Poor time management",

        aliases: [
          "time management",
          "bad time",
          "time trouble"
        ]
      },

      {
        text: "Ignoring your opponent's threat",

        aliases: [
          "ignore threat",
          "miss threat",
          "opponent threat"
        ]
      },

      {
        text: "Moving the wrong piece",

        aliases: [
          "wrong piece",
          "move wrong piece"
        ]
      },

      {
        text: "Overextending",

        aliases: [
          "overextend",
          "overextending"
        ]
      }

    ]

  },


  {
    question: "Name something you might do before a chess tournament.",

    answers: [

      {
        text: "Practice chess",

        aliases: [
          "practice",
          "train",
          "training"
        ]
      },

      {
        text: "Study openings",

        aliases: [
          "study openings",
          "opening study",
          "study opening"
        ]
      },

      {
        text: "Solve puzzles",

        aliases: [
          "puzzles",
          "solve puzzles",
          "chess puzzles"
        ]
      },

      {
        text: "Check the schedule",

        aliases: [
          "schedule",
          "check schedule"
        ]
      },

      {
        text: "Get enough sleep",

        aliases: [
          "sleep",
          "rest"
        ]
      },

      {
        text: "Eat something",

        aliases: [
          "eat",
          "food",
          "meal"
        ]
      }

    ]

  },


  {
    question: "Name something that makes a chess player nervous.",

    answers: [

      {
        text: "Time pressure",

        aliases: [
          "time pressure",
          "time trouble",
          "low time"
        ]
      },

      {
        text: "Playing a stronger opponent",

        aliases: [
          "strong opponent",
          "better opponent",
          "higher rated"
        ]
      },

      {
        text: "A complicated position",

        aliases: [
          "complicated",
          "complex position"
        ]
      },

      {
        text: "Being in a losing position",

        aliases: [
          "losing",
          "losing position"
        ]
      },

      {
        text: "Tournament games",

        aliases: [
          "tournament",
          "competition"
        ]
      },

      {
        text: "Making a critical move",

        aliases: [
          "critical move",
          "important move"
        ]
      }

    ]

  },

];


// ==========================================
// GAME STATE
// ==========================================

let currentQuestionIndex = 0;

let revealedAnswers = [];

let strikes = 0;

let timerSeconds = 60;
let timerInterval = null;
let timerRunning = false;


function updateTimerDisplay() {

  const timerDisplay =
    document.getElementById("timer-seconds");

  const timerBar =
    document.getElementById("timer-bar");


  // Update number

  if (timerDisplay) {
    timerDisplay.textContent = timerSeconds;
  }


  // Update shrinking bar

  if (timerBar) {

    const percentage =
      (timerSeconds / 60) * 100;

    timerBar.style.width = `${percentage}%`;

  }

}


function startTimer() {

  // Don't start another timer
  // if one is already running

  if (timerRunning) {
    return;
  }


  // Don't start if timer is finished

  if (timerSeconds <= 0) {
    return;
  }


  timerRunning = true;


  const pauseButton =
    document.getElementById("timer-pause");


  if (pauseButton) {
    pauseButton.textContent = "Pause";
  }


  timerInterval = setInterval(() => {

    timerSeconds--;

    updateTimerDisplay();


    // Timer reached zero

    if (timerSeconds <= 0) {

      timerSeconds = 0;

      updateTimerDisplay();

      stopTimer();

    }

  }, 1000);

}


function stopTimer() {

  if (timerInterval !== null) {

    clearInterval(timerInterval);

    timerInterval = null;

  }


  timerRunning = false;


  const pauseButton =
    document.getElementById("timer-pause");


  if (pauseButton) {
    pauseButton.textContent = "Resume";
  }

}


function toggleTimer() {

  if (timerRunning) {

    stopTimer();

  } else {

    startTimer();

  }

}


function restartTimer() {

  stopTimer();

  timerSeconds = 60;

  updateTimerDisplay();

  startTimer();

}


function resetTimer() {

  stopTimer();

  timerSeconds = 60;

  updateTimerDisplay();


  const pauseButton =
    document.getElementById("timer-pause");


  if (pauseButton) {
    pauseButton.textContent = "Pause";
  }

}


updateTimerDisplay();

// ==========================================
// AUDIO
// ==========================================

const backgroundMusic =
  document.getElementById("background-music");

const correctSound =
  document.getElementById("correct-sound");

const strikeSound =
  document.getElementById("strike-sound");

const musicToggle =
  document.getElementById("music-toggle");

const musicVolume =
  document.getElementById("music-volume");


// ------------------------------------------
// INITIAL SETTINGS
// ------------------------------------------

backgroundMusic.volume = 0.35;

musicVolume.value = 0.35;

correctSound.volume = 1;

strikeSound.volume = 1;


// ------------------------------------------
// UPDATE MUSIC BUTTON
// ------------------------------------------

function updateMusicButton() {

  if (backgroundMusic.paused) {

    musicToggle.textContent = "🔇";

    musicToggle.setAttribute(
      "aria-label",
      "Start music"
    );

    musicToggle.title = "Start music";

  }

  else {

    if (backgroundMusic.volume === 0) {

      musicToggle.textContent = "🔇";

    }

    else if (backgroundMusic.volume < 0.5) {

      musicToggle.textContent = "🔉";

    }

    else {

      musicToggle.textContent = "🔊";

    }

    musicToggle.setAttribute(
      "aria-label",
      "Pause music"
    );

    musicToggle.title = "Pause music";

  }

}


// ------------------------------------------
// TOGGLE MUSIC
// ------------------------------------------

async function toggleMusic() {

  // If music is currently playing, pause it

  if (!backgroundMusic.paused) {

    backgroundMusic.pause();

    updateMusicButton();

    return;

  }


  // Otherwise start/resume it

  try {

    await backgroundMusic.play();

    updateMusicButton();

  }

  catch (error) {

    // Ignore AbortError caused by a rapid click

    if (error.name !== "AbortError") {

      console.error(
        "Could not play background music:",
        error
      );

    }

  }

}


// ------------------------------------------
// VOLUME
// ------------------------------------------

musicVolume.addEventListener(
  "input",
  () => {

    backgroundMusic.volume =
      Number(musicVolume.value);

    updateMusicButton();

  }
);


// ------------------------------------------
// AUDIO EVENTS
// ------------------------------------------

backgroundMusic.addEventListener(
  "play",
  updateMusicButton
);

backgroundMusic.addEventListener(
  "pause",
  updateMusicButton
);

backgroundMusic.addEventListener(
  "ended",
  updateMusicButton
);


// ------------------------------------------
// SOUND EFFECTS
// ------------------------------------------

function playSound(sound) {

  if (!sound) {

    return;

  }


  sound.currentTime = 0;


  sound.play().catch((error) => {

    console.warn(
      "Sound effect could not play:",
      error
    );

  });

}


updateMusicButton();

// ==========================================
// SLIDE NAVIGATION
// ==========================================

function goSlide(id) {

  document.querySelectorAll(".slide").forEach((slide) => {

    slide.classList.remove("active");

  });


  const target =
    document.getElementById(id);


  if (target) {

    target.classList.add("active");

  }

}

// ==========================================
// START GAME
// ==========================================

function startGame() {

  currentQuestionIndex = 0;

  goSlide("slide-game");

  loadQuestion();

}


// ==========================================
// LOAD QUESTION
// ==========================================

function loadQuestion() {

  resetTimer();
  startTimer();
  
  const currentQuestion =
    gameQuestions[currentQuestionIndex];


  // Reset round state

  revealedAnswers = [];

  strikes = 0;


  // Update question number

  document.getElementById(
    "question-number"
  ).textContent =
    `QUESTION ${currentQuestionIndex + 1} / ${gameQuestions.length}`;


  // Update question

  document.getElementById(
    "feud-question"
  ).textContent =
    currentQuestion.question;


  // Clear strikes

  updateStrikes();


  // Clear input

  document.getElementById(
    "answer-input"
  ).value = "";


  // Build answer board

  buildAnswerBoard();


  // Focus input

  setTimeout(() => {

    document.getElementById(
      "answer-input"
    ).focus();

  }, 300);

}


// ==========================================
// BUILD ANSWER BOARD
// ==========================================

function buildAnswerBoard() {

  const board =
    document.getElementById("answer-board");


  board.innerHTML = "";


  const currentQuestion =
    gameQuestions[currentQuestionIndex];


  currentQuestion.answers.forEach((answer, index) => {

    const card =
      document.createElement("div");


    card.className = "answer-card";


    card.dataset.index = index;


    card.innerHTML = `

      <div class="answer-inner">

        <div class="answer-front">

          <span class="answer-number">
            ${index + 1}
          </span>

        </div>


        <div class="answer-back">

          <span class="answer-number">
            ${index + 1}
          </span>

          <span class="answer-text">
            ${answer.text}
          </span>

        </div>

      </div>

    `;


    board.appendChild(card);

  });

}


// ==========================================
// NORMALIZE ANSWERS
// ==========================================

function normalizeAnswer(answer) {

  return answer

    .toLowerCase()

    .replace(/[^a-z0-9\s]/g, "")

    .replace(/\s+/g, " ")

    .trim();

}


// ==========================================
// SUBMIT ANSWER
// ==========================================

function submitAnswer() {

  const input =
    document.getElementById("answer-input");


  const userAnswer =
    normalizeAnswer(input.value);


  // Don't submit empty answers

  if (!userAnswer) {

    return;

  }


  const currentQuestion =
    gameQuestions[currentQuestionIndex];


  let correctIndex = -1;


  currentQuestion.answers.forEach((answer, index) => {

    // Skip already revealed answers

    if (revealedAnswers.includes(index)) {

      return;

    }


    const possibleAnswers = [

      answer.text,

      ...answer.aliases

    ];


    possibleAnswers.forEach((possible) => {

      const normalizedPossible =
        normalizeAnswer(possible);


      // Match exact answer

      if (userAnswer === normalizedPossible) {

        correctIndex = index;

      }


      // Allow longer matching

      if (
        normalizedPossible.includes(userAnswer) &&
        userAnswer.length > 3
      ) {

        correctIndex = index;

      }


      if (
        userAnswer.includes(normalizedPossible) &&
        normalizedPossible.length > 3
      ) {

        correctIndex = index;

      }

    });

  });


  // CORRECT ANSWER

  if (correctIndex !== -1) {

    revealAnswer(correctIndex);

    playSound(correctSound);

    showCorrectAnimation();

  }


  // WRONG ANSWER

  else {

    strikes++;

    updateStrikes();

    playSound(strikeSound);

    showWrongAnimation();

  }


  // Clear input

  input.value = "";

  input.focus();

}


// ==========================================
// REVEAL ANSWER
// ==========================================

function revealAnswer(index) {

  if (revealedAnswers.includes(index)) {

    return;

  }


  revealedAnswers.push(index);


  const card =
    document.querySelector(
      `.answer-card[data-index="${index}"]`
    );


  if (card) {

    card.classList.add("revealed");

  }

}


// ==========================================
// REVEAL ALL ANSWERS
// ==========================================

function revealAllAnswers() {

  const currentQuestion =
    gameQuestions[currentQuestionIndex];


  currentQuestion.answers.forEach((answer, index) => {

    revealAnswer(index);

  });

}


// ==========================================
// STRIKES
// ==========================================

function updateStrikes() {

  for (let i = 1; i <= 3; i++) {

    const strike =
      document.getElementById(`strike-${i}`);


    if (i <= strikes) {

      strike.classList.add("active");

    }

    else {

      strike.classList.remove("active");

    }

  }

}


// ==========================================
// WRONG ANSWER
// ==========================================

function showWrongAnimation() {

  const overlay =
    document.getElementById("wrong-overlay");


  // Reset animation

  overlay.classList.remove("show");


  void overlay.offsetWidth;


  overlay.classList.add("show");


  setTimeout(() => {

    overlay.classList.remove("show");

  }, 2000);

}


// ==========================================
// CORRECT ANSWER
// ==========================================

function showCorrectAnimation() {

  const overlay =
    document.getElementById("correct-overlay");


  overlay.classList.remove("show");


  void overlay.offsetWidth;


  overlay.classList.add("show");


  setTimeout(() => {

    overlay.classList.remove("show");

  }, 2000);

}


// ==========================================
// RESET ROUND
// ==========================================

function resetRound() {

  revealedAnswers = [];

  strikes = 0;


  updateStrikes();


  buildAnswerBoard();


  document.getElementById(
    "answer-input"
  ).value = "";


  document.getElementById(
    "answer-input"
  ).focus();

}


// ==========================================
// NEXT QUESTION
// ==========================================

function nextQuestion() {

  if (
    currentQuestionIndex <
    gameQuestions.length - 1
  ) {

    currentQuestionIndex++;

    loadQuestion();

  }

}


// ==========================================
// PREVIOUS QUESTION
// ==========================================

function previousQuestion() {

  if (currentQuestionIndex > 0) {

    currentQuestionIndex--;

    loadQuestion();

  }

}


// ==========================================
// ENTER KEY
// ==========================================

document.addEventListener("keydown", (event) => {

  const gameSlide =
    document.getElementById("slide-game");


  // Submit with Enter

  if (
    event.key === "Enter" &&
    gameSlide.classList.contains("active")
  ) {

    submitAnswer();

  }


  // Escape returns to rules

  if (
    event.key === "Escape" &&
    gameSlide.classList.contains("active")
  ) {

    goSlide("slide-rules");

  }

});
