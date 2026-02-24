// Password Strength Tester
const passwordInput = document.getElementById("password-input");
const passwordResult = document.getElementById("password-result");
const passwordCheckBtn = document.getElementById("password-check-btn");
const nextActivityBtn = document.getElementById("next-activity-btn"); // Get the next activity button

// Function to save activity completion status
function saveCompletionStatus(activityId, isCompleted) {
  localStorage.setItem(activityId, isCompleted ? "completed" : "pending");
}

// Function to get activity completion status
function getCompletionStatus(activityId) {
  return localStorage.getItem(activityId) === "completed";
}

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
      isStrong: false
    };
  }

  if (length < 6) {
    return {
      text: "Very weak: this would be guessed almost instantly. Use more characters.",
      className: "bad",
      isStrong: false
    };
  }

  if (score <= 2) {
    return {
      text: "Weak: a computer could guess this in minutes to hours.",
      className: "bad",
      isStrong: false
    };
  }

  if (score === 3) {
    return {
      text: "Okay: this might last days. Try making it longer and more random.",
      className: "ok",
      isStrong: false
    };
  }

  if (score === 4) {
    return {
      text: "Strong: this could take months or years to guess.",
      className: "good",
      isStrong: false
    };
  }

  return {
    text: "Very strong: long, mixed characters. Great job keeping accounts safer.",
    className: "good",
    isStrong: true
  };
}

if (passwordCheckBtn && passwordInput && passwordResult) {
  const initial = strengthMessage(0, 0);
  passwordResult.textContent = initial.text;

  // Initialize button state
  if (nextActivityBtn) {
    const isCompleted = getCompletionStatus("password_strength");
    if (isCompleted) {
      nextActivityBtn.classList.remove("disabled");
      nextActivityBtn.removeAttribute("aria-disabled");
      nextActivityBtn.removeAttribute("tabindex");
    } else {
      nextActivityBtn.classList.add("disabled");
      nextActivityBtn.setAttribute("aria-disabled", "true");
      nextActivityBtn.setAttribute("tabindex", "-1");
    }
  }

  passwordCheckBtn.addEventListener("click", () => {
    const value = passwordInput.value;
    const score = estimatePasswordStrength(value);
    const message = strengthMessage(score, value.length);
    passwordResult.textContent = message.text;
    passwordResult.className = `result ${message.className}`;

    // If password is very strong, enable next activity and save completion
    if (message.isStrong && nextActivityBtn) {
      nextActivityBtn.classList.remove("disabled");
      nextActivityBtn.removeAttribute("aria-disabled");
      nextActivityBtn.removeAttribute("tabindex");
      saveCompletionStatus("password_strength", true);
    }
  });
}