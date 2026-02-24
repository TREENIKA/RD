// Quiz Questions
const quizQuestions = [
  {
    text: "You get a friend request from someone you do not know.",
    options: [
      "Accept it so you have more followers.",
      "Ignore it or ask a trusted adult before accepting.",
      "Send them your phone number to see who they are.",
    ],
    correctIndex: 1,
    explanation: "If you don't know someone, it's safest not to accept their request. They might not be who they say they are, or they could be trying to get your personal information. Always ask a trusted adult if you're unsure!"
  },
  {
    text: "You want to make a strong password for a game.",
    options: [
      "Use your name and birth year so it is easy to remember.",
      "Use 'password123' so you never forget.",
      "Use a mix of random words, numbers, and symbols.",
    ],
    correctIndex: 2,
    explanation: "Strong passwords are like super-secret codes! The more mixed-up they are with different letters (big and small), numbers, and symbols, the harder they are for bad guys to guess. Never use easy-to-guess info like your name or birthday!"
  },
  {
    text:
      "A pop-up says your computer is infected and tells you to click a link.",
    options: [
      "Click the link right away so it can start fixing things.",
      "Close the pop-up and tell a parent or teacher.",
      "Download the first 'fix' app you find online.",
    ],
    correctIndex: 1,
    explanation: "Fake pop-ups are a common trick! They try to scare you into clicking something dangerous. If you see one, close it immediately (often by closing the browser tab or window) and tell a trusted adult. They can help check if your computer is really okay."
  },
];

const quizListEl = document.getElementById("quiz-list");
const gradeQuizBtn = document.getElementById("grade-quiz");
const quizResultEl = document.getElementById("quiz-result");
const nextActivityBtn = document.getElementById("next-activity-btn");

const activityId = "secure_or_not_quiz";

if (quizListEl) {
  quizQuestions.forEach((q, questionIndex) => {
    const li = document.createElement("li");
    li.textContent = q.text;

    const optionsWrapper = document.createElement("div");
    optionsWrapper.className = "quiz-options";

    q.options.forEach((option, optionIndex) => {
      const id = `q${questionIndex}-o${optionIndex}`;
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${questionIndex}`;
      input.value = optionIndex.toString();
      input.id = id;
      label.setAttribute("for", id);
      label.textContent = option;
      label.prepend(input);
      optionsWrapper.appendChild(label);
    });

    li.appendChild(optionsWrapper);
    quizListEl.appendChild(li);
  });
}

// Initialize button state
if (nextActivityBtn) {
  if (getCompletionStatus(activityId)) {
    nextActivityBtn.classList.remove("disabled");
    nextActivityBtn.removeAttribute("aria-disabled");
    nextActivityBtn.removeAttribute("tabindex");
  } else {
    nextActivityBtn.classList.add("disabled");
    nextActivityBtn.setAttribute("aria-disabled", "true");
    nextActivityBtn.setAttribute("tabindex", "-1");
  }
}

if (gradeQuizBtn && quizResultEl) {
  gradeQuizBtn.addEventListener("click", () => {
    let correctCount = 0;
    let allAnswered = true;

    quizQuestions.forEach((q, questionIndex) => {
      const checked = document.querySelector(
        `input[name="question-${questionIndex}"]:checked`
      );
      if (!checked) {
        allAnswered = false;
        return;
      }
      const choice = parseInt(checked.value, 10);
      if (choice === q.correctIndex) {
        correctCount++;
      }
    });

    if (!allAnswered) {
      quizResultEl.textContent = "Please answer all questions!";
      quizResultEl.className = "result bad";
      return;
    }

    quizResultEl.textContent = `You got ${correctCount} out of ${quizQuestions.length} correct!`;

    if (correctCount === quizQuestions.length) {
      quizResultEl.className = "result good";
      if (nextActivityBtn) {
        nextActivityBtn.classList.remove("disabled");
        nextActivityBtn.removeAttribute("aria-disabled");
        nextActivityBtn.removeAttribute("tabindex");
        saveCompletionStatus(activityId, true);
        quizResultEl.textContent += " Amazing! You've aced the quiz! Next challenge unlocked!";
      }
    } else if (correctCount >= 1) {
      quizResultEl.className = "result ok";
    } else {
      quizResultEl.className = "result bad";
    }
  });
}