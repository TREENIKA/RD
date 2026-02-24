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
