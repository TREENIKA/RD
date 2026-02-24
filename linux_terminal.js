// Linux Terminal Simulation
const terminalOutput = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal-input");
const nextActivityBtn = document.getElementById("next-activity-btn");
const activityId = "linux_terminal";

// ELI5: This keeps track of whether you've completed this super cool terminal challenge!
let isActivityCompleted = getCompletionStatus(activityId);

// ELI5: If you haven't finished this challenge yet, the 'Next Activity' button will be a bit sleepy.
if (!isActivityCompleted) {
  nextActivityBtn.classList.add("disabled");
  nextActivityBtn.setAttribute("aria-disabled", "true");
  nextActivityBtn.setAttribute("tabindex", "-1");
}

// ELI5: We'll count how many correct commands you've entered to see if you're a terminal pro!
let correctCommandsCount = 0;
const commandsToComplete = ['ls', 'pwd', 'whoami', 'help']; // ELI5: These are the secret commands you need to find!
let completedCommands = new Set(); // ELI5: This remembers which secret commands you've already found.

if (terminalOutput && terminalInput) {
  terminalInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const command = terminalInput.value.trim();
      terminalInput.value = "";
      
      const outputLine = document.createElement("div");
      outputLine.innerHTML = `<span class="prompt">$</span> ${command}`;
      terminalOutput.appendChild(outputLine);

      let result = '';
      switch (command) {
        case "ls":
          // ELI5: 'ls' is like asking the computer, "What files and folders are in this drawer?"
          result = "activities.html common.js careers.html cybersecurity.html index.html sectors.html styles.css";
          completedCommands.add('ls');
          break;
        case "pwd":
          // ELI5: 'pwd' tells you, "Where am I right now in the computer's filing system?"
          result = "/home/user/roadshow";
          completedCommands.add('pwd');
          break;
        case "whoami":
          // ELI5: 'whoami' is like asking the computer, "Who is currently logged in and using me?"
          result = "cyber_student";
          completedCommands.add('whoami');
          break;
        case "help":
          // ELI5: 'help' is super useful! It's like asking for a cheat sheet of commands you can use.
          result = "Available commands: ls, pwd, whoami, clear, help";
          completedCommands.add('help');
          break;
        case "clear":
          // ELI5: 'clear' is like wiping the whiteboard clean so you can start fresh!
          terminalOutput.innerHTML = "Welcome to the simulated Linux terminal. Type 'help' for commands.";
          return;
        case "":
          result = "";
          break;
        default:
          // ELI5: Uh oh! The computer doesn't understand that command. Maybe a typo or a secret command it doesn't know yet?
          result = `command not found: ${command}`;
      }
      const resultLine = document.createElement("div");
      resultLine.textContent = result;
      terminalOutput.appendChild(resultLine);
      terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to bottom

      // ELI5: Have you found all the secret commands? If so, you're a terminal master!
      if (commandsToComplete.every(cmd => completedCommands.has(cmd)) && !isActivityCompleted) {
        isActivityCompleted = true;
        saveCompletionStatus(activityId, true);
        nextActivityBtn.classList.remove("disabled");
        nextActivityBtn.removeAttribute("aria-disabled");
        nextActivityBtn.removeAttribute("tabindex");
        // ELI5: Great job! You've learned all the basic commands. Now you can move on to the next adventure!
        const completionMessage = document.createElement("div");
        completionMessage.classList.add("result", "good");
        completionMessage.textContent = "Congratulations! You've successfully explored the basic Linux commands!";
        terminalOutput.appendChild(completionMessage);
      }
    }
  });
}