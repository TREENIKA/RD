// Password Strength Tester
const passwordInput = document.getElementById("password-input");
const passwordResult = document.getElementById("password-result");
const passwordCheckBtn = document.getElementById("password-check-btn");
const nextActivityBtn = document.getElementById("next-activity-btn"); // Get the next activity button
const ruleLength = document.getElementById("rule-length");
const ruleCase = document.getElementById("rule-case");
const ruleNumber = document.getElementById("rule-number");
const ruleSymbol = document.getElementById("rule-symbol");

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

function updateRules(password) {
  const hasLength = password.length >= 12;
  const hasCase = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[^a-zA-Z0-9]/.test(password);

  if (ruleLength) ruleLength.textContent = `${hasLength ? "✅" : "❌"} At least 12 characters`;
  if (ruleCase) ruleCase.textContent = `${hasCase ? "✅" : "❌"} Includes uppercase and lowercase letters`;
  if (ruleNumber) ruleNumber.textContent = `${hasNumber ? "✅" : "❌"} Includes at least one number`;
  if (ruleSymbol) ruleSymbol.textContent = `${hasSymbol ? "✅" : "❌"} Includes at least one symbol`;
}

if (passwordCheckBtn && passwordInput && passwordResult) {
  const initial = strengthMessage(0, 0);
  passwordResult.textContent = initial.text;
  updateRules("");

  if (nextActivityBtn) {
    nextActivityBtn.classList.remove("disabled");
    nextActivityBtn.removeAttribute("aria-disabled");
    nextActivityBtn.removeAttribute("tabindex");
  }

  passwordCheckBtn.addEventListener("click", () => {
    const value = passwordInput.value;
    const score = estimatePasswordStrength(value);
    const message = strengthMessage(score, value.length);
    passwordResult.textContent = message.text;
    passwordResult.className = `result ${message.className}`;
    updateRules(value);

    // If password is very strong, enable next activity and save completion
    if (message.isStrong && nextActivityBtn) {
      nextActivityBtn.classList.remove("disabled");
      nextActivityBtn.removeAttribute("aria-disabled");
      nextActivityBtn.removeAttribute("tabindex");
      saveCompletionStatus("password_strength", true);
    }
  });
    passwordInput.addEventListener("input", () => {
      updateRules(passwordInput.value);
    });

}