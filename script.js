const sendBtn = document.getElementById("sendBtn");
const messageIn = document.getElementById("messageIn");
const messageOut = document.getElementById("messageOut");

// add functionality on the send button to display message
function sendMessage() {
  let content = messageIn.value;
  if (content === "") {
    alert("Please Enter A Valid Message");
  } else {
    messageOut.innerHTML = content;
    messageIn.value = "";
  }
}

// event listener on the button
sendBtn.addEventListener("click", sendMessage);
