const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter(letter, shift) {
  const index = alphabet.indexOf(letter.toLowerCase());
  if (index === -1) return letter;
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}

function decryptLetter(letter, shift) {
  const index = alphabet.indexOf(letter.toLowerCase());
  if (index === -1) return letter;
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}

function encrypt() {
  const msg = document.getElementById("message").value;
  const shift = parseInt(document.getElementById("shift").value);
  let result = "";
  for (let char of msg) {
    result += encryptLetter(char, shift);
  }
  document.getElementById("output").innerText = "Encrypted: " + result;
}

function decrypt() {
  const msg = document.getElementById("message").value;
  const shift = parseInt(document.getElementById("shift").value);
  let result = "";
  for (let char of msg) {
    result += decryptLetter(char, shift);
  }
  document.getElementById("output").innerText = "Decrypted: " + result;
}