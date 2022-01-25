// Login SignOut Model
const showModel = document.getElementById("show-model");
const showModelSignout = document.getElementById("show-model-signup");
const modelContainer = document.getElementById("model");
const ifram = document.getElementById("ifram");

modelContainer.style.visibility = "hidden";

showModel.addEventListener("click", () => {
  ifram.setAttribute("src", "login.html");

  modelContainer.style.visibility = "visible";
});
showModelSignout.addEventListener("click", () => {
  ifram.setAttribute("src", "signup.html");
  modelContainer.style.visibility = "visible";
});
modelContainer.addEventListener("click", () => {
  modelContainer.style.visibility = "hidden";
});

// Book Model For Details Page
const showModelTwo = document.getElementById("show-model-2");
const modelContainerTwo = document.getElementById("model-2");
const endBtn = document.getElementById("btn");

modelContainerTwo.style.visibility = "hidden";

showModelTwo.addEventListener("click", () => {
  modelContainerTwo.style.visibility = "visible";
});

endBtn.addEventListener("click", () => {
  modelContainerTwo.style.visibility = "hidden";
});
