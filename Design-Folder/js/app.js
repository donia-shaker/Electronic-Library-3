// Login Logout Model
const showModel = document.getElementById("show-model");
const showModelSignout = document.getElementById("show-model-signup");
const modelContainer = document.getElementById("model");
const signup = document.getElementById("signup");

modelContainer.style.visibility = "hidden";

showModel.addEventListener("click", () => {
  signup.setAttribute("src", "Pages/login.html");

  modelContainer.style.visibility = "visible";
});
showModelSignout.addEventListener("click", () => {
  signup.setAttribute("src", "Pages/signup.html");
  modelContainer.style.visibility = "visible";
});
modelContainer.addEventListener("click", () => {
  modelContainer.style.visibility = "hidden";
});

// Timer
const countDown = () => {
  const upperDate = new Date("Jan25, 2022,00:00:00").getTime(s);
  const currentDate = new Date().getTime();
  const diffDate = upperDate - currentDate;

  const second = 1000;
  const minuts = second * 60;
  const hours = minuts * 60;
  const days = hours * 24;

  const remainDays = Math.floor(diffDate / days);
  const remainHours = Math.floor((diffDate % days) / hours);
  const remainMinuts = Math.floor((diffDate % hours) / minuts);
  const remainSecond = Math.floor((diffDate % minuts) / second);

  var d = document.getElementById("days");
  var h = document.getElementById("hours");
  var m = document.getElementById("minuts");
  var s = document.getElementById("second");

  d.innerHTML = remainDays + "d";
  h.innerHTML = remainHours + "h";
  m.innerHTML = remainMinuts + "m";
  s.innerHTML = remainSecond + "s";
};
setInterval(countDown, 1000);

// Book Model
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
