// Encryption Activity (Caesar Cipher)
const encryptionInput = document.getElementById("encryption-input");
const encryptionShift = document.getElementById("encryption-shift");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const encryptionOutput = document.getElementById("encryption-output");
const nextActivityBtn = document.getElementById("next-activity-btn");

const activityId = "encryption";

if (nextActivityBtn) {
  nextActivityBtn.classList.remove("disabled");
  nextActivityBtn.removeAttribute("aria-disabled");
  nextActivityBtn.removeAttribute("tabindex");
}

// ELI5: This function is like a secret code machine! 
// It takes your message and shifts each letter forward or backward 
// in the alphabet to hide or reveal the secret.
function caesarCipher(text, shift, encrypt) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let char = text.charCodeAt(i);

    // Uppercase letters (like A, B, C)
    if (char >= 65 && char <= 90) {
      if (encrypt) {
        char = char + shift;
        if (char > 90) char = char - 26; // If we go past Z, loop back to A
      } else {
        char = char - shift;
        if (char < 65) char = char + 26; // If we go before A, loop back to Z
      }
    }
    // Lowercase letters (like a, b, c)
    else if (char >= 97 && char <= 122) {
      if (encrypt) {
        char = char + shift;
        if (char > 122) char = char - 26; // If we go past z, loop back to a
      } else {
        char = char - shift;
        if (char < 97) char = char + 26; // If we go before a, loop back to z
      }
    }
    result += String.fromCharCode(char);
  }
  return result;
}

if (encryptionInput && encryptionShift && encryptBtn && decryptBtn && encryptionOutput) {
  encryptBtn.addEventListener("click", () => {
    const text = encryptionInput.value;
    const shift = parseInt(encryptionShift.value, 10);
    if (!isNaN(shift) && shift >= 1 && shift <= 25) {
      encryptionOutput.value = caesarCipher(text, shift, true);
      // Mark activity as complete after successful encryption
      if (nextActivityBtn) {
        nextActivityBtn.classList.remove("disabled");
        nextActivityBtn.removeAttribute("aria-disabled");
        nextActivityBtn.removeAttribute("tabindex");
        saveCompletionStatus(activityId, true);
      }
    } else {
      encryptionOutput.value = "Please enter a valid shift (1-25).";
    }
  });

  decryptBtn.addEventListener("click", () => {
    const text = encryptionInput.value; // Decrypting the original input for simplicity
    const shift = parseInt(encryptionShift.value, 10);
    if (!isNaN(shift) && shift >= 1 && shift <= 25) {
      encryptionOutput.value = caesarCipher(text, shift, false);
      // Mark activity as complete after successful decryption
      if (nextActivityBtn) {
        nextActivityBtn.classList.remove("disabled");
        nextActivityBtn.removeAttribute("aria-disabled");
        nextActivityBtn.removeAttribute("tabindex");
        saveCompletionStatus(activityId, true);
      }
    } else {
      encryptionOutput.value = "Please enter a valid shift (1-25).";
    }
  });
}