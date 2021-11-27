const startButtonEL = document.querySelector("#start-btn");
const questionContainerEl = document.querySelector("#box");
const questionContainer = document.querySelector("#answers");
const nextButtonEl = document.querySelector("#next-btn");
const scoreBoardEl = document.querySelector("#scoreboard");
const gameInfo = document.querySelector("#game-info");
const frontPage = document.querySelector("#front-page");
startButtonEL.addEventListener("click", startGame);

gameInfo.innerText = "How well do you know you're classmates?";

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
console.log(questions);

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

function startGame() {
  startButtonEL.classList.add("hide");

  questionContainerEl.classList.remove("hide");
  gameInfo.classList.add("hide");
  scoreBoardEl.innerText = `0 out of 0`;
}

// for loop that will generate 4 button elements, each with its own unique id(1-4).
for (let qid = 1; qid < 5; qid++) {
  questionContainer.innerHTML += `<button id="btn-${qid}" class="btn btn-primary m-1 col-11 btn-answers "></button>`;
}

shuffledArray = [...students]; // copying students array into shuffledArray.
console.log("shuffledArray before shuffle: ", shuffledArray);

shuffleArray(shuffledArray); // Shuffling shuffledarray.
console.log("shuffledArray after shuffle: ", shuffledArray);

shuffleArray(questions); // Shuffling questions array, (was [0, 1, 2, ... 39]).
console.log(questions);

function setNextQuestion() {
  questionId = questions.pop(); // removing the first element from questions array and declaring it into variable questionId.
  console.log("questionId is: ", questionId);

  student = students[questionId]; // Giving student variable the object from students array @ index "questionId".
  console.log(student.name);
  /* student = {
            name: "Hanna Håkanson",
            image: "assets/images/students/hanna-hakanson.jpg",
          },
          */
  let answers = shuffledArray.slice(0, 3); // Removing objects @ position 0, remove 3 objects.
  shuffleArray(shuffledArray);
  console.log("shuffledArray: ", shuffledArray);
  console.log("answers: ", answers);

  if (answers.includes(student)) {
    // Checking if spliced (removed from the array) objects includes student which is the correct answer, if true then answers will splice
    console.log("We are in if ");
    answers = shuffledArray.slice(0, 4);
  } else {
    console.log("We are in else ");
    answers = [student, ...answers];
  }
  shuffleArray(answers);
  console.log("shuffledArray: ", shuffledArray);

  const questionEl = document.querySelector("#question");
  questionEl.setAttribute("src", student.image);

  const buttonIds = ["#btn-1", "#btn-2", "#btn-3", "#btn-4"];

  for (i = 0; i < 4; i++) {
    const answerEl = document.querySelector(buttonIds[i]);
    answerEl.innerHTML = answers[i].name;
  }
}
questionContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    scoreBoardEl.innerText = `${score} out of ${question}`;
  }
});

setNextQuestion();

questionContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && e.target.innerText == student.name) {
    score++;
  }

  question++;

  console.log("score = ", score);

  if (questions.length == 0) {
    for (let i = 0; i < students.length; i++) {
      questions.push(i); // [0, 1, 2, ..., 38]
    }
    scoreBoardEl.classList.add("hide");
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
  setNextQuestion();
});
