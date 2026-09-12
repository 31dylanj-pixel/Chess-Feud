// ==========================================
// CHESS CLUB FAMILY FEUD
// ==========================================


// ------------------------------------------
// QUESTIONS
// ------------------------------------------

const gameQuestions = [

  // 1 — GENERAL
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


  // 2 — OPENING
  {
    question: "Name a chess opening players often learn first.",

    answers: [

      {
        text: "Italian Game",
        aliases: [
          "italian",
          "italian game"
        ]
      },

      {
        text: "Sicilian Defense",
        aliases: [
          "sicilian",
          "sicilian defense"
        ]
      },

      {
        text: "Ruy Lopez",
        aliases: [
          "ruy",
          "ruy lopez",
          "spanish opening",
          "spanish game"
        ]
      },

      {
        text: "Queen's Gambit",
        aliases: [
          "queens gambit",
          "queen's gambit",
          "qg"
        ]
      },

      {
        text: "London System",
        aliases: [
          "london",
          "london system"
        ]
      },

      {
        text: "Four Knights Game",
        aliases: [
          "four knights",
          "4 knights",
          "four knights game"
        ]
      }

    ]
  },


  // 3 — GENERAL
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


  // 4 — ENDGAME
  {
    question: "Name something that becomes especially important in a chess endgame.",

    answers: [

      {
        text: "King activity",
        aliases: [
          "king",
          "active king",
          "king activity"
        ]
      },

      {
        text: "Passed pawns",
        aliases: [
          "passed pawn",
          "passed pawns"
        ]
      },

      {
        text: "Pawn promotion",
        aliases: [
          "promotion",
          "promote",
          "promoting"
        ]
      },

      {
        text: "Opposition",
        aliases: [
          "the opposition",
          "opposition"
        ]
      },

      {
        text: "Pawn structure",
        aliases: [
          "pawns",
          "pawn structure"
        ]
      },

      {
        text: "Tempo",
        aliases: [
          "tempos",
          "tempo"
        ]
      }

    ]
  },


  // 5 — GENERAL
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


  // 6 — OPENING
  {
    question: "Name something players try to accomplish in the opening.",

    answers: [

      {
        text: "Develop their pieces",
        aliases: [
          "develop",
          "development",
          "develop pieces",
          "piece development"
        ]
      },

      {
        text: "Control the center",
        aliases: [
          "center",
          "control center",
          "central control"
        ]
      },

      {
        text: "Castle",
        aliases: [
          "castling",
          "castle"
        ]
      },

      {
        text: "Protect the king",
        aliases: [
          "king safety",
          "protect king",
          "keep king safe"
        ]
      },

      {
        text: "Connect the rooks",
        aliases: [
          "connect rooks",
          "rooks",
          "connect the rook"
        ]
      },

      {
        text: "Gain space",
        aliases: [
          "space",
          "get space"
        ]
      }

    ]
  },


  // 7 — ENDGAME
  {
    question: "Name a common type of chess endgame.",

    answers: [

      {
        text: "King and pawn",
        aliases: [
          "king pawn",
          "king and pawn endgame",
          "pawn endgame"
        ]
      },

      {
        text: "Rook endgame",
        aliases: [
          "rook",
          "rook endgame",
          "rook endings"
        ]
      },

      {
        text: "Queen endgame",
        aliases: [
          "queen",
          "queen endgame"
        ]
      },

      {
        text: "Bishop endgame",
        aliases: [
          "bishop",
          "bishop endgame"
        ]
      },

      {
        text: "Knight endgame",
        aliases: [
          "knight",
          "knight endgame"
        ]
      },

      {
        text: "Queen versus pawn",
        aliases: [
          "queen vs pawn",
          "queen against pawn",
          "queen and pawn"
        ]
      }

    ]
  },


  // 8 — GENERAL
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


  // 9 — OPENING
  {
    question: "Name an opening mistake chess players often make.",

    answers: [

      {
        text: "Moving the same piece twice",
        aliases: [
          "same piece twice",
          "move piece twice",
          "moving same piece"
        ]
      },

      {
        text: "Moving the queen too early",
        aliases: [
          "early queen",
          "queen too early",
          "move queen early"
        ]
      },

      {
        text: "Ignoring development",
        aliases: [
          "dont develop",
          "don't develop",
          "no development",
          "ignore development"
        ]
      },

      {
        text: "Ignoring the center",
        aliases: [
          "ignore center",
          "not control center",
          "center"
        ]
      },

      {
        text: "Forgetting to castle",
        aliases: [
          "forget castle",
          "dont castle",
          "don't castle",
          "not castle"
        ]
      },

      {
        text: "Attacking too early",
        aliases: [
          "early attack",
          "attack too early",
          "attacking early"
        ]
      }

    ]
  },


  // 10 — GENERAL
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


  // 11 — ENDGAME
  {
    question: "Name something a player might try to do with their king in an endgame.",

    answers: [

      {
        text: "Activate it",
        aliases: [
          "active king",
          "king activity",
          "activate king",
          "bring king up"
        ]
      },

      {
        text: "Attack pawns",
        aliases: [
          "attack pawns",
          "take pawns",
          "capture pawns"
        ]
      },

      {
        text: "Support a pawn",
        aliases: [
          "support pawn",
          "help pawn",
          "protect pawn"
        ]
      },

      {
        text: "Reach the center",
        aliases: [
          "center",
          "king center",
          "centralize king"
        ]
      },

      {
        text: "Stop a passed pawn",
        aliases: [
          "stop pawn",
          "stop passed pawn",
          "block pawn"
        ]
      },

      {
        text: "Get in front of a pawn",
        aliases: [
          "in front of pawn",
          "block pawn"
        ]
      }

    ]
  },


  // 12 — GENERAL
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


  // 13 — OPENING
  {
    question: "Name a reason someone might choose a particular chess opening.",

    answers: [

      {
        text: "They know it well",
        aliases: [
          "know it",
          "familiar",
          "know the opening"
        ]
      },

      {
        text: "It fits their playing style",
        aliases: [
          "playing style",
          "style",
          "fits my style"
        ]
      },

      {
        text: "It is aggressive",
        aliases: [
          "aggressive",
          "attack",
          "attacking"
        ]
      },

      {
        text: "It is easy to learn",
        aliases: [
          "easy",
          "easy to learn",
          "simple"
        ]
      },

      {
        text: "They prepared it beforehand",
        aliases: [
          "prepared",
          "preparation",
          "studied it",
          "opening prep"
        ]
      },

      {
        text: "They want to surprise their opponent",
        aliases: [
          "surprise",
          "surprise opponent",
          "surprise them"
        ]
      }

    ]
  },


  // 14 — GENERAL
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
        text: "Getting too aggressive",
        aliases: [
          "too aggressive",
          "being aggressive",
          "aggressive",
          "playing too aggressively"
        ]
      }

    ]
  },


  // 15 — ENDGAME
  {
    question: "Name something a player tries to create in a pawn endgame.",

    answers: [

      {
        text: "A passed pawn",
        aliases: [
          "passed pawn",
          "pass pawn"
        ]
      },

      {
        text: "A promotion",
        aliases: [
          "promote",
          "promotion",
          "promote pawn"
        ]
      },

      {
        text: "A protected passed pawn",
        aliases: [
          "protected passed pawn",
          "protected pawn"
        ]
      },

      {
        text: "A pawn majority",
        aliases: [
          "majority",
          "pawn majority"
        ]
      },

      {
        text: "Opposition",
        aliases: [
          "opposition"
        ]
      },

      {
        text: "A breakthrough",
        aliases: [
          "breakthrough",
          "pawn break"
        ]
      }

    ]
  },


  // 16 — GENERAL
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


  // 17 — OPENING
  {
    question: "Name a chess opening move players commonly make as white.",

    answers: [

      {
        text: "e4",
        aliases: [
          "e4",
          "pawn e4",
          "e pawn"
        ]
      },

      {
        text: "d4",
        aliases: [
          "d4",
          "pawn d4",
          "d pawn"
        ]
      },

      {
        text: "Nf3",
        aliases: [
          "nf3",
          "knight f3",
          "knight to f3"
        ]
      },

      {
        text: "Nc3",
        aliases: [
          "nc3",
          "knight c3",
          "knight to c3"
        ]
      },

      {
        text: "c4",
        aliases: [
          "c4",
          "pawn c4",
          "c pawn"
        ]
      },

      {
        text: "g3",
        aliases: [
          "g3",
          "pawn g3",
          "g pawn"
        ]
      }

    ]
  },


  // 18 — ENDGAME
  {
    question: "Name something that can decide a close chess endgame.",

    answers: [

      {
        text: "King position",
        aliases: [
          "king",
          "king position",
          "king activity"
        ]
      },

      {
        text: "Pawn structure",
        aliases: [
          "pawns",
          "pawn structure"
        ]
      },

      {
        text: "Passed pawns",
        aliases: [
          "passed pawn",
          "passed pawns"
        ]
      },

      {
        text: "Calculation",
        aliases: [
          "calculate",
          "calculating",
          "calculation"
        ]
      },

      {
        text: "Time management",
        aliases: [
          "time",
          "clock",
          "time trouble"
        ]
      },

      {
        text: "Technique",
        aliases: [
          "endgame technique",
          "technique"
        ]
      }

    ]
  },


  // 19 — GENERAL
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


  // 20 — GENERAL
  {
    question: "Name something chess players do when they realize they are losing.",

    answers: [

      {
        text: "Look for a tactic",
        aliases: [
          "tactic",
          "look for tactics",
          "find a tactic",
          "look for a trick"
        ]
      },

      {
        text: "Play faster",
        aliases: [
          "faster",
          "move faster",
          "speed up",
          "play quickly"
        ]
      },

      {
        text: "Attack the opponent's king",
        aliases: [
          "attack king",
          "attack their king",
          "king attack",
          "go for the king"
        ]
      },

      {
        text: "Hope for a blunder",
        aliases: [
          "hope they blunder",
          "wait for blunder",
          "hope for mistake",
          "hope they make a mistake"
        ]
      },

      {
        text: "Trade pieces",
        aliases: [
          "trade",
          "trade pieces",
          "exchange pieces",
          "exchanges"
        ]
      },

      {
        text: "Resign",
        aliases: [
          "resign",
          "resigned",
          "give up"
        ]
      }

    ]
  }

];

// ==========================================
// GAME STATE
// ==========================================

let currentQuestionIndex = 0;

let revealedAnswers = [];

let strikes = 0;

// ==========================================
// TIMER
// ==========================================

let timerDuration = 60; // Default: 1 minute
let timerRunning = false;
let timerInterval = null;
let timerEndTime = null;
let timerRemainingMs = timerDuration * 1000;


// ------------------------------------------
// UPDATE TIMER DISPLAY
// ------------------------------------------

function updateTimerDisplay() {

  const timerDisplay =
    document.getElementById("timer-seconds");

  const timerBar =
    document.getElementById("timer-bar");

  const timerLabel =
    document.querySelector(".timer-label");

  const totalMs =
    timerDuration * 1000;

  const percentage =
    totalMs > 0
      ? (timerRemainingMs / totalMs) * 100
      : 0;


  if (timerDisplay) {

    const totalSeconds =
      Math.ceil(timerRemainingMs / 1000);

    if (totalSeconds > 60) {

      // Show MM:SS for times above 60 seconds

      const minutes =
        Math.floor(totalSeconds / 60);

      const seconds =
        totalSeconds % 60;

      timerDisplay.textContent =
        `${minutes}:${String(seconds).padStart(2, "0")}`;

      if (timerLabel) {
        timerLabel.textContent = "";
      }

    } else {

      // Show the original seconds format
      timerDisplay.textContent =
        totalSeconds;

      if (timerLabel) {
        timerLabel.textContent =
          "SECONDS";
      }
    }
  }


  if (timerBar) {

    timerBar.style.width =
      `${Math.max(0, percentage)}%`;

  }
}

// ------------------------------------------
// TIMER TICK
// ------------------------------------------

function timerTick() {

  if (!timerRunning || !timerEndTime) {
    return;
  }

  timerRemainingMs =
    Math.max(
      0,
      timerEndTime - performance.now()
    );

  updateTimerDisplay();

  if (timerRemainingMs <= 0) {

    timerRemainingMs = 0;

    updateTimerDisplay();

    stopTimer();

    return;
  }

  timerInterval =
    requestAnimationFrame(timerTick);
}


// ------------------------------------------
// START TIMER
// ------------------------------------------

function startTimer() {

  if (timerRunning) {
    return;
  }

  if (timerRemainingMs <= 0) {
    return;
  }

  timerRunning = true;

  timerEndTime =
    performance.now() + timerRemainingMs;

  const pauseButton =
    document.getElementById("timer-pause");

  if (pauseButton) {
    pauseButton.textContent = "Pause";
  }

  timerInterval =
    requestAnimationFrame(timerTick);
}


// ------------------------------------------
// STOP / PAUSE TIMER
// ------------------------------------------

function stopTimer() {

  if (timerInterval !== null) {

    cancelAnimationFrame(timerInterval);

    timerInterval = null;
  }

  if (timerRunning && timerEndTime) {

    timerRemainingMs =
      Math.max(
        0,
        timerEndTime - performance.now()
      );
  }

  timerRunning = false;
  timerEndTime = null;

  updateTimerDisplay();

  const pauseButton =
    document.getElementById("timer-pause");

  if (pauseButton) {
    pauseButton.textContent = "Resume";
  }
}


// ------------------------------------------
// PAUSE / RESUME
// ------------------------------------------

function toggleTimer() {

  if (timerRunning) {

    stopTimer();

  } else {

    startTimer();

  }
}


// ------------------------------------------
// SELECT TIMER DURATION
// ------------------------------------------

function selectTimer(seconds) {

  // Stop the current timer
  stopTimer();

  // Change duration
  timerDuration = seconds;

  // Reset remaining time
  timerRemainingMs =
    timerDuration * 1000;

  // Update selected button
  document
    .querySelectorAll(".timer-option")
    .forEach((button) => {

      button.classList.toggle(
        "active",
        Number(button.dataset.duration) === seconds
      );

    });

  // Update display
  updateTimerDisplay();

  // Automatically start the new timer
  startTimer();
}


// ------------------------------------------
// RESTART CURRENT TIMER
// ------------------------------------------

function restartTimer() {

  stopTimer();

  timerRemainingMs =
    timerDuration * 1000;

  const timerBar =
    document.getElementById("timer-bar");

  if (timerBar) {

    timerBar.classList.add("restarting");

    timerBar.style.width = "100%";
  }

  updateTimerDisplay();

  setTimeout(() => {

    if (timerBar) {
      timerBar.classList.remove("restarting");
    }

    startTimer();

  }, 350);
}


// ------------------------------------------
// RESET TIMER WITHOUT STARTING
// ------------------------------------------

function resetTimer() {

  stopTimer();

  timerRemainingMs =
    timerDuration * 1000;

  updateTimerDisplay();

  const pauseButton =
    document.getElementById("timer-pause");

  if (pauseButton) {
    pauseButton.textContent = "Pause";
  }
}


// ------------------------------------------
// INITIALIZE TIMER
// ------------------------------------------

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
