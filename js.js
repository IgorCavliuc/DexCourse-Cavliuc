const block = document.querySelector('.block')

function work() {
  showCircle(150, 150, 100, (block) => {
    block.classList.add("message-ball");
    block.append("Hello, world!");
  });
}

function showCircle(left, right, radius, callback) {
  block.style.width = 0;
  block.style.height = 0;
  block.style.left = left + "px";
  block.style.top = right + "px";
  block.className = "circle";
  document.body.append(block);

  setTimeout(() => {
    block.style.width = radius *2 + "px";
    block.style.height = radius *2 + "px";

    block.addEventListener("transitionend", function handler() {
      block.removeEventListener("transitionend", handler);
      callback(block);
    });
  });
}
