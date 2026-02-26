const xssInput = document.getElementById("xss-input");
const xssDisplayBtn = document.getElementById("xss-display-btn");
const xssOutput = document.getElementById("xss-output");
const nextActivityBtn = document.getElementById("next-activity-btn");

const activityId = "xss_challenge";

if (nextActivityBtn) {
  nextActivityBtn.classList.remove("disabled");
  nextActivityBtn.removeAttribute("aria-disabled");
  nextActivityBtn.removeAttribute("tabindex");
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
    const lowerMsg = message.toLowerCase();

    // Detect script tag — browser strips it silently, so we catch it here
    const hasScriptTag = lowerMsg.includes("<script");
    const isExactXss = lowerMsg.includes("<script>alert('xss')</script>") ||
                       lowerMsg.includes('<script>alert("xss")</script>');

    if (isExactXss) {
      // Classic XSS payload — show educational success message
      xssOutput.innerHTML = `<p class="result good">⭐ XSS Detected! Your script tag was injected! On a real (vulnerable) website, this could pop an alert or steal data. This shows why developers always sanitize user input!</p>`;
      if (nextActivityBtn && !getCompletionStatus(activityId)) {
        nextActivityBtn.classList.remove("disabled");
        nextActivityBtn.removeAttribute("aria-disabled");
        nextActivityBtn.removeAttribute("tabindex");
        saveCompletionStatus(activityId, true);
      }
    } else if (hasScriptTag) {
      // Script tag present but not the exact payload — explain what happened
      xssOutput.innerHTML = `<p class="result ok">🛡️ Your &lt;script&gt; tag was blocked! The browser stripped it before it could run. This is what a sanitizer does — it removes dangerous code to protect users. Try typing: <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code> for the full demo!</p>`;
    } else if (message.trim() === "") {
      xssOutput.innerHTML = `<p class="result ok">Type something first! Try: <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code></p>`;
    } else {
      // Harmless text — show it safely using textContent, then suggest XSS
      const safe = document.createElement("span");
      safe.textContent = message;
      xssOutput.innerHTML = `<p>Your message: </p>`;
      xssOutput.querySelector("p").appendChild(safe);
      if (!getCompletionStatus(activityId)) {
        xssOutput.innerHTML += `<p class="result ok">That's safe text! Now try injecting code: <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code></p>`;
      }
    }
  });

  // Restore original alert on page unload to prevent interference with other activities
  window.addEventListener('beforeunload', () => {
    window.alert = originalAlert;
  });
}