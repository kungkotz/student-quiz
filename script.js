const startButtonEL = document.querySelector("#start-btn");
const questionContainerEl = document.querySelector("#box");
const questionContainer = document.querySelector("#answers");
const nextButtonEl = document.querySelector("#next-btn");
const scoreBoardEl = document.querySelector("#scoreboard");
const gameInfo = document.querySelector("#game-info");
const frontPage = document.querySelector("#front-page");

// Honest to god, idk where I should put this?
gameInfo.innerText = "How well do you know you're classmates?";

// Default students array that will not be modifed.
const students = [
  {
    name: "Adi Dzocaj",
    image: "assets/images/students/adi-dzocaj.jpg",
  },
  {
    name: "Alexander Bergquist",
    image: "assets/images/students/alexander-bergquist.jpg",
  },
  {
    name: "Alexander Kocman",
    image: "assets/images/students/alexander-kocman.jpg",
  },
  {
    name: "Benjamin Benson",
    image: "assets/images/students/benjamin-benson.jpg",
  },
  {
    name: "Benjamin Tsubarah",
    image: "assets/images/students/benjamin-tsubarah.jpg",
  },
  {
    name: "Calle Nilsson",
    image: "assets/images/students/calle-nilsson.jpg",
  },
  {
    name: "Chikage Takahashi Molander",
    image: "assets/images/students/chikage-takahashi-molander.jpg",
  },
  {
    name: "Daniel Be",
    image: "assets/images/students/daniel-be.jpg",
  },
  {
    name: "Daniel Carlsson",
    image: "assets/images/students/daniel-carlsson.jpg",
  },
  {
    name: "Elin Ahlgren",
    image: "assets/images/students/elin-ahlgren.jpg",
  },
  {
    name: "Emma Käck",
    image: "assets/images/students/emma-kack.jpg",
  },
  {
    name: "Eric Ståhl",
    image: "assets/images/students/eric-stahl.jpg",
  },
  {
    name: "Frans Gustavson Påsse",
    image: "assets/images/students/frans-gustavson-passe.jpg",
  },
  {
    name: "Glafira Veretennikova",
    image: "assets/images/students/glafira-veretennikova.jpg",
  },
  {
    name: "Gustaf Grönlund",
    image: "assets/images/students/gustaf-gronlund.jpg",
  },
  {
    name: "Hanna Håkanson",
    image: "assets/images/students/hanna-hakanson.jpg",
  },
  {
    name: "Heidi Sjöberg",
    image: "assets/images/students/heidi-sjoberg.jpg",
  },
  {
    name: "Hugo Carzborn",
    image: "assets/images/students/hugo-carzborn.jpg",
  },
  {
    name: "Jesper Kling",
    image: "assets/images/students/jesper-kling.jpg",
  },
  {
    name: "Johan Ranestam",
    image: "assets/images/students/johan-ranestam.jpg",
  },
  {
    name: "Johanna Bäckström",
    image: "assets/images/students/johanna-backstrom.jpg",
  },
  {
    name: "Johanna Jönsson",
    image: "assets/images/students/johanna-jonsson.jpg",
  },
  {
    name: "Jona Torsson",
    image: "assets/images/students/jona-torsson.jpg",
  },
  {
    name: "Josefine Ahlstedt",
    image: "assets/images/students/josefine-ahlstedt.jpg",
  },
  {
    name: "Julia Jespersdotter Högman",
    image: "assets/images/students/julia-jespersdotter-hogman.jpg",
  },
  {
    name: "Julia Nemell",
    image: "assets/images/students/julia-nemell.jpg",
  },
  {
    name: "Linus Lindberg",
    image: "assets/images/students/linus-lindberg.jpg",
  },
  {
    name: "Malin Olsson",
    image: "assets/images/students/malin-olsson.jpg",
  },
  {
    name: "Maria Haara-Lundhammar",
    image: "assets/images/students/maria-haara-lundhammar.jpg",
  },
  {
    name: "Maria Lövgren",
    image: "assets/images/students/maria-lovgren.jpg",
  },
  {
    name: "Nikola Dimitrijoski",
    image: "assets/images/students/nikola-dimitrijoski.jpg",
  },
  {
    name: "Paulina Kiendys",
    image: "assets/images/students/paulina-kiendys.jpg",
  },
  {
    name: "Raymond Lam",
    image: "assets/images/students/raymond-lam.jpg",
  },
  {
    name: "Robin Karlsson",
    image: "assets/images/students/robin-karlsson.jpg",
  },
  {
    name: "Sara Almqvist",
    image: "assets/images/students/sara-almqvist.jpg",
  },
  {
    name: "Tim Nilsson",
    image: "assets/images/students/tim-nilsson.jpg",
  },
  {
    name: "Tirapat Sukjit",
    image: "assets/images/students/tirapat-sukjit.jpg",
  },
  {
    name: "Tobias Silfverberg",
    image: "assets/images/students/tobias-silfverberg.jpg",
  },
  {
    name: "Wiktoria Dobrzewinska",
    image: "assets/images/students/wiktoria-dobrzewinska.jpg",
  },
];

let questions = []; // Creating an  empty array.
// Adding indexes to questions array matching the length of students array.
for (let i = 0; i < students.length; i++) {
  questions.push(i); // [0, 1, 2, ..., 38]
}

// Code to shuffle an array.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let score = 0;
let question = 1;
let student;
let shuffledArray;
let questionId;

// for loop that will generate 4 button elements, each with its own unique id(1-4).
for (let qid = 1; qid < 5; qid++) {
  questionContainer.innerHTML += `<button id="btn-${qid}" class="btn btn-primary m-1 col-11 col-lg-4 mt-lg-3 py-lg-3  w-100 btn-answers "></button>`;
}

function prepareQuestions() {
  shuffledArray = [...students]; // copying students array into shuffledArray.
  shuffleArray(shuffledArray); // Shuffling shuffledarray.
  shuffleArray(questions); // Shuffling questions array, (was [0, 1, 2, ... 39]).
}
function setNextQuestion() {
  questionId = questions.pop(); // removing the first element from questions array and declaring it into variable questionId.
  student = students[questionId]; // Giving student variable the object from students array @ index "questionId".
  let answers = shuffledArray.slice(0, 3); // Removing objects @ position 0, remove 3 objects.

  if (answers.includes(student)) {
    // Checking if spliced (removed from the array) objects includes student which is the correct answer, if true then answers will splice
    answers = shuffledArray.slice(0, 4);
  } else {
    answers = [student, ...answers];
  }
  shuffleArray(shuffledArray);
  shuffleArray(answers);
  const questionEl = document.querySelector("#question");
  questionEl.setAttribute("src", student.image);
  const buttonIds = ["#btn-1", "#btn-2", "#btn-3", "#btn-4"];
  for (i = 0; i < 4; i++) {
    const answerEl = document.querySelector(buttonIds[i]);
    answerEl.innerHTML = answers[i].name;
  }
}
function startGame() {
  score = 0;
  question = 1;
  startButtonEL.classList.add("hide");
  gameInfo.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  scoreBoardEl.innerText = `${score} out of ${question}`;
  prepareQuestions();
  setNextQuestion();
}

function startNewGame() {
  startButtonEL.innerText = `You scored ${score} out of ${questions.length} points. Press to try again.`;
  score = 0;
  question = 1;
  student = undefined;
  startButtonEL.classList.remove("hide");
  questionContainerEl.classList.add("hide");
  shuffledArray = [...students];
  shuffleArray(shuffledArray);
  shuffleArray(questions); // Shuffling questions array, (was [0, 1, 2, ... 39]).
}

questionContainer.addEventListener("click", (e) => {
  // If answer is correct, score will increase, update scoreboard, if questions array is empty, fill it up with numbers matching the size of students array.
  if (e.target.tagName === "BUTTON" && e.target.innerText == student.name) {
    score++;
    question++;
    scoreBoardEl.innerText = `${score} out of ${question}`;
    if (questions.length == 0) {
      for (let i = 0; i < students.length; i++) {
        questions.push(i); // [0, 1, 2, ..., 38]
      }

      startNewGame();
    }

    setNextQuestion();
    // If answer is not correct, increase question counter, update scoreboard, if questions array is empty fill it up with numbers matching the size of students array.
  } else if (e.target.tagName === "BUTTON") {
    question++;
    scoreBoardEl.innerText = `${score} out of ${question}`;
    if (questions.length == 0) {
      for (let i = 0; i < students.length; i++) {
        questions.push(i); // [0, 1, 2, ..., 38]
      }

      startNewGame();
    }
    setNextQuestion();
  }
});
startButtonEL.addEventListener("click", startGame);
