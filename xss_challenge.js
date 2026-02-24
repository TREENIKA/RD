const xssInput = document.getElementById("xss-input");
const xssDisplayBtn = document.getElementById("xss-display-btn");
const xssOutput = document.getElementById("xss-output");
const nextActivityBtn = document.getElementById("next-activity-btn");

const activityId = "xss_challenge";

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

if (xssInput && xssDisplayBtn && xssOutput) {
  // Override alert to detect XSS attempt without blocking the page
  const originalAlert = window.alert;
  window.alert = function(message) {
    if (message === 'XSS') {
      xssOutput.innerHTML = `<p class="result good">XSS Successful! You triggered an alert. This shows how dangerous XSS can be!</p>`;
      if (nextActivityBtn) {
        nextActivityBtn.classList.remove("disabled");
        nextActivityBtn.removeAttribute("aria-disabled");
        nextActivityBtn.removeAttribute("tabindex");
        saveCompletionStatus(activityId, true);
      }
    } else {
      originalAlert(message);
    }
  };

  xssDisplayBtn.addEventListener("click", () => {
    const message = xssInput.value;
    // WARNING: Do NOT do this in real applications. This is for demonstration only.
    // In a real app, always sanitize user input before displaying it.
    xssOutput.innerHTML = `<p>Your message: </p>${message}`;

    // Check if the input contains a script tag that would trigger an alert
    if (message.toLowerCase().includes("<script>alert('xss')</script>")) {
      // This is a simulated success for demonstration purposes if the alert was not actually triggered by innerHTML
      // If the alert was triggered by the override, the completion is handled there.
      // This provides a fallback for direct detection.
      if (!getCompletionStatus(activityId)) { // Only if not already completed by the alert override
        xssOutput.innerHTML = `<p class="result good">XSS Successful! You found a way to inject code! This shows how dangerous XSS can be!</p>`;
        if (nextActivityBtn) {
          nextActivityBtn.classList.remove("disabled");
          nextActivityBtn.removeAttribute("aria-disabled");
          nextActivityBtn.removeAttribute("tabindex");
          saveCompletionStatus(activityId, true);
        }
      }
    } else if (!getCompletionStatus(activityId)) {
      xssOutput.innerHTML += `<p class="result ok">Try typing: &lt;script&gt;alert('XSS')&lt;/script&gt;</p>`;
    }
  });

  // Restore original alert on page unload to prevent interference with other activities
  window.addEventListener('beforeunload', () => {
    window.alert = originalAlert;
  });
}