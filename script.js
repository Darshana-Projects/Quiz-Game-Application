const quiz = [
  {
    question: "Which language is used for web page structure?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "HTML"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Java"],
    answer: "CSS"
  },
  {
    question: "Which language is used to make web pages interactive?",
    options: ["Python", "C++", "JavaScript", "PHP"],
    answer: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const question = document.getElementById("question");
  const answers = document.getElementById("answers");

  question.innerText = quiz[currentQuestion].question;
  answers.innerHTML = "";

  quiz[currentQuestion].options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;

    button.onclick = function () {
      if (option === quiz[currentQuestion].answer) {
        score++;
      }

      currentQuestion++;

      if (currentQuestion < quiz.length) {
        loadQuestion();
      } else {
        document.querySelector(".quiz-container").innerHTML =
          "<h2>Quiz Completed!</h2>" +
          "<h3>Your Score: " + score + " / " + quiz.length + "</h3>";
      }
    };

    answers.appendChild(button);
  });
}

loadQuestion();

function nextQuestion() {
  // Questions change automatically after selecting an answer.
}