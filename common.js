// Binary background animation
const binaryBg = document.querySelector(".binary-bg");

// Function to save activity completion status
function saveCompletionStatus(activityId, isCompleted) {
  localStorage.setItem(activityId, isCompleted ? "completed" : "pending");
}

// Function to get activity completion status
function getCompletionStatus(activityId) {
  return localStorage.getItem(activityId) === "completed";
}

// Highlight the current page's nav link
(function highlightActiveNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === current) link.classList.add("active");
  });
})();

// Theme Toggle
(function initThemeToggle() {
  const navInner = document.querySelector(".top-nav-inner");
  if (!navInner) return;

  const isLight = () => document.documentElement.classList.contains("light-mode");
  const makeLabel = (light) =>
    `<span class="toggle-label">${light ? "\u{1F319} Dark Mode" : "\u2600\uFE0F Light Mode"}</span><span class="toggle-knob" aria-hidden="true"></span>`;

  const btn = document.createElement("button");
  btn.id = "theme-toggle";
  btn.className = "theme-toggle-btn";
  btn.setAttribute("aria-label", "Toggle light/dark mode");
  btn.innerHTML = makeLabel(isLight());
  navInner.appendChild(btn);

  btn.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-mode");
    const nowLight = isLight();
    localStorage.setItem("theme", nowLight ? "light" : "dark");
    btn.innerHTML = makeLabel(nowLight);
  });
})();

// ELI5 accordion toggle
document.addEventListener("click", (e) => {
  const toggle = e.target.closest(".eli5-toggle");
  if (!toggle) return;
  const body = toggle.nextElementSibling;
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", !expanded);
  body.classList.toggle("open", !expanded);
});

// J. Code Mascot
(function injectJCode() {
  const tip = document.body.dataset.jcode;
  if (!tip) return;

  const wrap = document.createElement("div");
  wrap.className = "jcode-bubble-wrap";
  wrap.innerHTML = `
    <div class="jcode-bubble" id="jcode-bubble">
      <button class="jcode-close" id="jcode-close" aria-label="Dismiss J. Code tip">&times;</button>
      <div class="jcode-label">&#x1F4AC; J. Code says&hellip;</div>
      <div class="jcode-text">${tip}</div>
    </div>
    <img class="jcode-sprite" src="jsprite.png" alt="J. Code mascot" aria-hidden="true" />
  `;
  document.body.appendChild(wrap);

  document.getElementById("jcode-close").addEventListener("click", () => {
    document.getElementById("jcode-bubble").style.display = "none";
  });
})();

// Binary rain background
if (binaryBg) {
  const columns = 32;
  const rows = 26;
  const characters = ["0", "1"];

  for (let i = 0; i < columns; i++) {
    const column = document.createElement("div");
    column.className = "binary-column";
    const left = (i / columns) * 100;
    column.style.left = `${left}%`;

    const duration = 10 + Math.random() * 10;
    const delay = -Math.random() * duration;
    column.style.animationDuration = `${duration}s`;
    column.style.animationDelay = `${delay}s`;

    let text = "";
    for (let r = 0; r < rows; r++) {
      text += characters[Math.floor(Math.random() * characters.length)];
      text += "\n";
    }
    column.textContent = text;
    binaryBg.appendChild(column);
  }
}