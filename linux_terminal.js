// Linux Terminal Simulation
const terminalOutput = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal-input");
const nextActivityBtn = document.getElementById("next-activity-btn");
const activityId = "linux_terminal";

// ELI5: This keeps track of whether you've completed this super cool terminal challenge!
let isActivityCompleted = getCompletionStatus(activityId);

if (nextActivityBtn) {
  nextActivityBtn.classList.remove("disabled");
  nextActivityBtn.removeAttribute("aria-disabled");
  nextActivityBtn.removeAttribute("tabindex");
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
          result = "documents/  photos/  notes.txt  assignments/  readme.txt";
          completedCommands.add('ls');
          break;
        case "pwd":
          // ELI5: 'pwd' tells you, "Where am I right now in the computer's filing system?"
          result = "/home/cyber_student";
          completedCommands.add('pwd');
          break;
        case "whoami":
          // ELI5: 'whoami' is like asking the computer, "Who is currently logged in and using me?"
          result = "cyber_student";
          completedCommands.add('whoami');
          break;
        case "help":
          // ELI5: 'help' is super useful! It's like asking for a cheat sheet of commands you can use.
          result = "Available commands: ls, pwd, whoami, cd, cat, mkdir, clear, help";
          completedCommands.add('help');
          break;
        case "clear":
          // ELI5: 'clear' is like wiping the whiteboard clean so you can start fresh!
          terminalOutput.innerHTML = "Welcome to the simulated Linux terminal. Type 'help' for commands.";
          return;
        case "":
          result = "";
          break;
        case "cat notes.txt":
        case "cat readme.txt":
          result = "Welcome, cyber_student! Keep exploring — type 'help' to see all commands.";
          break;
        case "mkdir":
          result = "mkdir: missing operand. Try: mkdir myfolder";
          break;
        default:
          if (command.startsWith("mkdir ")) {
            result = `mkdir: Directory '${command.slice(6)}' created (simulated).`;
          } else if (command.startsWith("cd ")) {
            result = `cd: Changed directory to '${command.slice(3)}' (simulated).`;
          } else if (command.startsWith("cat ")) {
            result = `cat: ${command.slice(4)}: No such file or directory`;
          } else {
            result = `bash: ${command}: command not found`;
          }
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