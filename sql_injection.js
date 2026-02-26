// SQL Injection Activity
const sqlUsernameInput = document.getElementById("sql-username");
const sqlPasswordInput = document.getElementById("sql-password");
const sqlLoginBtn = document.getElementById("sql-login-btn");
const sqlHintBtn = document.getElementById("sql-hint-btn");
const sqlHintEl = document.getElementById("sql-hint");
const sqlResultEl = document.getElementById("sql-result");
const nextActivityBtn = document.getElementById("next-activity-btn");

const activityId = "sql_injection";

if (nextActivityBtn) {
  nextActivityBtn.classList.remove("disabled");
  nextActivityBtn.removeAttribute("aria-disabled");
  nextActivityBtn.removeAttribute("tabindex");
}

// Reveal / hide hint toggle
if (sqlHintBtn && sqlHintEl) {
  sqlHintBtn.addEventListener("click", () => {
    const hidden = sqlHintEl.style.display === "none";
    sqlHintEl.style.display = hidden ? "block" : "none";
    sqlHintBtn.textContent = hidden ? "Hide Hint" : "💡 Reveal Hint";
  });
}

if (sqlLoginBtn && sqlResultEl && sqlUsernameInput && sqlPasswordInput) {
  sqlLoginBtn.addEventListener("click", () => {
    const username = sqlUsernameInput.value.trim();
    const password = sqlPasswordInput.value;

    // Accepted injection strings — match hint exactly, with minor spacing tolerance
    const injectionStrings = [
      "' OR '1'='1",
      "' OR '1' = '1",
      "' or '1'='1",
      "' or '1' = '1'",
      "' OR '1'='1'",
    ];

    const isInjection = injectionStrings.some(s => password === s);

    if (username === "admin" && isInjection) {
      sqlResultEl.textContent = "⭐ Login bypassed! You used SQL Injection to trick the login system. Hackers use tricks like this on real websites — that's why secure code is so important!";
      sqlResultEl.className = "result good";
      if (nextActivityBtn) {
        nextActivityBtn.classList.remove("disabled");
        nextActivityBtn.removeAttribute("aria-disabled");
        nextActivityBtn.removeAttribute("tabindex");
        saveCompletionStatus(activityId, true);
      }
    } else if (password === "") {
      sqlResultEl.textContent = "Type something in the password field! Need a hint? Click the hint button.";
      sqlResultEl.className = "result ok";
    } else {
      sqlResultEl.textContent = "❌ Login failed. The system didn't recognize that password. Try clicking the hint button!";
      sqlResultEl.className = "result bad";
    }
  });
}
