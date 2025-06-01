let jokeIndex = 0;
const jokes = [
  ["What did 0 say to 8?", "Nice belt."],
  ["Americans will say 'It was a flop' Nigerians will be like E don cast", "Almighty Ghanaians, e make beans"],
  ["Want to know why the Cedi is appreciating?", "Because Ato is Forson"],
  ["A Ghanaian wants to express how funny something is?", "'Atear' for the win"],
  ["I'm so Ghanaian", "my blood type is 'O' for 'Oh charley'"]
];
const chatContent = document.querySelector(".chat-content");
const jokeButton = document.getElementById("requestJokeButton");

function appendBotMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";

  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;

  messageDiv.append(avatar, contentDiv);
  chatContent.appendChild(messageDiv);

  chatContent.scrollTop = chatContent.scrollHeight;
}

function appendUserMessage() {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = "Tell me a joke!";
  messageDiv.append(contentDiv, avatar);
  chatContent.appendChild(messageDiv);
}
appendBotMessage(
  "Hello! I am Comedian Bot from Ghana, here to make you laugh.",
);

function requestJoke() {
  appendUserMessage();
  if (jokeIndex >= jokes.length) {
    appendBotMessage("Sorry, I'm out of jokes for now!");
    return;
  }
  jokeButton.style.display = "none";
  setTimeout(function () {
    appendBotMessage("Ok, got one.");
  }, 1000);

  setTimeout(function () {
    appendBotMessage(jokes[jokeIndex][0]);
  }, 1500);

  setTimeout(function () {
    appendBotMessage(jokes[jokeIndex][1]);
    jokeIndex++;
    jokeButton.style.display = "inline-block";
  }, 2000);
}
