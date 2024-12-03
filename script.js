
const words = [
    { word: "javascript", hint: "Programming language for the web" },
    { word: "puzzle", hint: "Something you solve for fun or learning" },
    { word: "developer", hint: "Someone who writes code" },
    { word: "function", hint: "A reusable block of code" },
    { word: "browser", hint: "Where websites run" },
  ];
  
  let currentWord = {};
  let scrambled = "";
  let score = 0;
  let timer = 60;
  let interval;
  
  const hintElement = document.getElementById("hint");
  const scrambledElement = document.getElementById("scrambled-word");
  const inputElement = document.getElementById("user-input");
  const submitButton = document.getElementById("submit-btn");
  const timerElement = document.getElementById("timer");
  const scoreElement = document.getElementById("score");
  const restartButton = document.getElementById("restart-btn");
  
  function shuffleWord(word) {
    return word.split("").sort(() => 0.5 - Math.random()).join("");
  }
  
  function setNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambled = shuffleWord(currentWord.word);
    hintElement.textContent = currentWord.hint;
    scrambledElement.textContent = scrambled;
    inputElement.value = "";
  }
  
  function startTimer() {
    timer = 60;
    timerElement.textContent = timer;
    interval = setInterval(() => {
      timer--;
      timerElement.textContent = timer;
      if (timer === 0) {
        clearInterval(interval);
        endGame();
      }
    }, 1000);
  }
  
  function checkAnswer() {
    const userAnswer = inputElement.value.trim().toLowerCase();
    if (userAnswer === currentWord.word) {
      score += 10;
      scoreElement.textContent = score;
      setNewWord();
    } else {
      alert("Wrong answer! Try again.");
    }
  }
  
  function endGame() {
    alert(`Game Over! Your score is ${score}`);
    submitButton.disabled = true;
    inputElement.disabled = true;
    restartButton.classList.remove("hidden");
  }
  
  function restartGame() {
    score = 0;
    scoreElement.textContent = score;
    submitButton.disabled = false;
    inputElement.disabled = false;
    restartButton.classList.add("hidden");
    setNewWord();
    startTimer();
  }
  
  submitButton.addEventListener("click", checkAnswer);
  restartButton.addEventListener("click", restartGame);
  
  window.onload = () => {
    setNewWord();
    startTimer();
  };
  