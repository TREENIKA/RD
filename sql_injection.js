// SQL Injection Activity
const sqlUsernameInput = document.getElementById("sql-username");
const sqlPasswordInput = document.getElementById("sql-password");
const sqlLoginBtn = document.getElementById("sql-login-btn");
const sqlResultEl = document.getElementById("sql-result");
const nextActivityBtn = document.getElementById("next-activity-btn");

const activityId = "sql_injection";

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

if (sqlLoginBtn && sqlResultEl && sqlUsernameInput && sqlPasswordInput) {
  sqlLoginBtn.addEventListener("click", () => {
    const username = sqlUsernameInput.value;
    const password = sqlPasswordInput.value;

    // Simulate SQL Injection vulnerability
    // ELI5: We're checking if you typed a special secret code that tricks the login system!
    if (
      username === "admin" &&
      (password === "password" || password === "' OR '1'='1'")
    ) {
      sqlResultEl.textContent = "Login successful! You've bypassed the system using SQL Injection! You earned a star!";
      sqlResultEl.className = "result good";
      if (nextActivityBtn) {
        nextActivityBtn.classList.remove("disabled");
        nextActivityBtn.removeAttribute("aria-disabled");
        nextActivityBtn.removeAttribute("tabindex");
        saveCompletionStatus(activityId, true);
      }
    } else {
      sqlResultEl.textContent = "Login failed. Keep trying! Hint: The secret code for the password is \' OR \'1\'=\'1'.";
      sqlResultEl.className = "result bad";
    }
  });
}
