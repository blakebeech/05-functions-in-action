function greetUser(name) {
  return `Hello, welcome back ${name}!`;
}

const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

function showGreeting() {
  const name = nameInput.value.trim();

  if (name === '') {
    greetingMessage.textContent = 'Please enter your name.';
    return;
  }

  greetingMessage.textContent = greetUser(name);
}

greetButton.addEventListener('click', showGreeting);