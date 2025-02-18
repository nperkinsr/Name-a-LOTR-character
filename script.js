const pupil = document.querySelector(".pupil");
const eye = document.querySelector(".top");
const input = document.querySelector("input");
const button = document.querySelector("button");
const popup = document.querySelector(".popup");

window.addEventListener("mousemove", (e) => {

  const rect = eye.getBoundingClientRect();

  const x = (e.clientX - rect.left - rect.width / 2) / 10;
  const y = (e.clientY - rect.top - rect.height / 2) / 10;

  const pupilX = Math.max(-10, Math.min(10, x));
  const pupilY = Math.max(-10, Math.min(10, y));

  pupil.style.transform = `translate(-50%, -50%) translate3d(${pupilX}px, ${pupilY}px, 0)`;
});

var lotrNames = ["Frodo", "Gandalf", "Aragorn", "Legolas", "Samwise", "Gollum", "Boromir", "Saruman", "Sauron", "Elrond", "Galadriel", "Eowyn", "Bilbo", "Merry", "Pippin", "Faramir", "Theoden", "Gimli"];

button.addEventListener("click", () => {
  var nameInput = input.value.trim();
  if (nameInput === "") return;

  var firstLetter = nameInput.slice(0, 1).toUpperCase();
  var theRest = nameInput.slice(1).toLowerCase();
  nameInput = firstLetter + theRest;

  if (lotrNames.includes(nameInput)) {
    showPopup("You chad", "success");
  } else {
    showPopup("Nope", "error");
  }
});

function showPopup(message, type) {
  popup.textContent = message;
  popup.className = `popup ${type}`;
  popup.style.visibility = "visible";
  popup.style.opacity = "1";

  setTimeout(() => {
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
  }, 2000);
}