// Password Strength Tester
const passwordInput = document.getElementById("password-input");
const passwordResult = document.getElementById("password-result");
const passwordCheckBtn = document.getElementById("password-check-btn");

function estimatePasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  return score;
}

function strengthMessage(score, length) {
  if (!length) {
    return {
      text: "Type a pretend password to test it. Never use real passwords here.",
      className: "",
    };
  }

  if (length < 6) {
    return {
      text: "Very weak: this would be guessed almost instantly. Use more characters.",
      className: "bad",
    };
  }

  if (score <= 2) {
    return {
      text: "Weak: a computer could guess this in minutes to hours.",
      className: "bad",
    };
  }

  if (score === 3) {
    return {
      text: "Okay: this might last days. Try making it longer and more random.",
      className: "ok",
    };
  }

  if (score === 4) {
    return {
      text: "Strong: this could take months or years to guess.",
      className: "good",
    };
  }

  return {
    text: "Very strong: long, mixed characters. Great job keeping accounts safer.",
    className: "good",
  };
}

if (passwordCheckBtn && passwordInput && passwordResult) {
  const initial = strengthMessage(0, 0);
  passwordResult.textContent = initial.text;

  passwordCheckBtn.addEventListener("click", () => {
    const value = passwordInput.value;
    const score = estimatePasswordStrength(value);
    const message = strengthMessage(score, value.length);
    passwordResult.textContent = message.text;
    passwordResult.className = `result ${message.className}`;
  });
}

// Phishing Email Examples
const phishingExamples = [
  {
    text:
      "From: school-it-support@security-check.com\n" +
      "Subject: URGENT: Verify your school account now!\n\n" +
      "Hi student,\n\n" +
      "We noticed a problem with your school account. Click this link " +
      "in the next 10 minutes or your account will be deleted:\n" +
      "http://school-login-fix.example-login-check.com\n\n" +
      "Thanks,\nIT Help Desk",
    answer: "phishing",
    explanation:
      "The sender address and link are not an official school website, " +
      "and real IT staff do not usually threaten to delete accounts so quickly.",
  },
  {
    text:
      "From: librarian@yourmiddleschool.edu\n" +
      "Subject: Overdue library book reminder\n\n" +
      "Hello,\n\n" +
      "Our records show you still have 'Introduction to Robotics' checked out. " +
      "Please return it by Friday or talk to the librarian if you have questions.\n\n" +
      "Thank you,\nSchool Library",
    answer: "safe",
    explanation:
      "The address uses the real school domain and the message asks you " +
      "to come in person, not click strange links.",
  },
  {
    text:
      "From: free-prizes@super-giveaway.com\n" +
      "Subject: You won a new gaming laptop!!!\n\n" +
      "Congratulations!\n\n" +
      "You were randomly selected to win a gaming laptop. Just reply with your " +
      "full name, home address, and school password so we can confirm your identity.\n\n" +
      "Act fast or we will pick another winner!",
    answer: "phishing",
    explanation:
      "No real prize company needs your school password. Asking for passwords " +
      "or personal info is a big warning sign.",
  },
];

const phishingMessageEl = document.getElementById("phishing-message");
const phishingFeedbackEl = document.getElementById("phishing-feedback");
const phishingButtons = document.querySelectorAll(
  'button[data-answer="safe"], button[data-answer="phishing"]'
);
const nextPhishingBtn = document.getElementById("next-phishing");

let currentPhishingIndex = 0;

function showPhishingExample(index) {
  if (!phishingMessageEl) return;
  const example = phishingExamples[index];
  phishingMessageEl.textContent = example.text;
  if (phishingFeedbackEl) {
    phishingFeedbackEl.textContent = "";
    phishingFeedbackEl.className = "result";
  }
}

if (phishingExamples.length && phishingMessageEl) {
  showPhishingExample(currentPhishingIndex);
}

if (phishingButtons.length && phishingFeedbackEl) {
  phishingButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const guess = btn.getAttribute("data-answer");
      const correct = phishingExamples[currentPhishingIndex].answer;
      const explanation = phishingExamples[currentPhishingIndex].explanation;

      if (guess === correct) {
        phishingFeedbackEl.textContent = "Correct! " + explanation;
        phishingFeedbackEl.className = "result good";
      } else {
        phishingFeedbackEl.textContent = "Not quite. " + explanation;
        phishingFeedbackEl.className = "result bad";
      }
    });
  });
}

if (nextPhishingBtn) {
  nextPhishingBtn.addEventListener("click", () => {
    currentPhishingIndex =
      (currentPhishingIndex + 1) % phishingExamples.length;
    showPhishingExample(currentPhishingIndex);
  });
}

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
  },
  {
    text: "You want to make a strong password for a game.",
    options: [
      "Use your name and birth year so it is easy to remember.",
      "Use 'password123' so you never forget.",
      "Use a mix of random words, numbers, and symbols.",
    ],
    correctIndex: 2,
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
  },
];

const quizListEl = document.getElementById("quiz-list");
const gradeQuizBtn = document.getElementById("grade-quiz");
const quizResultEl = document.getElementById("quiz-result");

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

if (gradeQuizBtn && quizResultEl) {
  gradeQuizBtn.addEventListener("click", () => {
    let correctCount = 0;

    quizQuestions.forEach((q, questionIndex) => {
      const checked = document.querySelector(
        `input[name="question-${questionIndex}"]:checked`
      );
      if (!checked) return;
      const choice = parseInt(checked.value, 10);
      if (choice === q.correctIndex) correctCount++;
    });

    quizResultEl.textContent = `You got ${correctCount} out of ${quizQuestions.length} correct.`;

    if (correctCount === quizQuestions.length) {
      quizResultEl.className = "result good";
    } else if (correctCount >= 1) {
      quizResultEl.className = "result ok";
    } else {
      quizResultEl.className = "result bad";
    }
  });
}
