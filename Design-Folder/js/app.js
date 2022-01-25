// Login Signout Model
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
  const upperDateOne = new Date("Jan31, 2022,00:00:00").getTime();
  const upperDateTwo = new Date("Feb1, 2022,00:00:00").getTime();
  const upperDateThree = new Date("Feb2, 2022,00:00:00").getTime();
  const upperDateFour = new Date("Feb3, 2022,00:00:00").getTime();
  const upperDateFive = new Date("Feb4, 2022,00:00:00").getTime();

  const currentDate = new Date().getTime();

  const diffDateOne = upperDateOne - currentDate;
  const diffDateTwo = upperDateTwo - currentDate;
  const diffDateThree = upperDateThree - currentDate;
  const diffDateFour = upperDateFour - currentDate;
  const diffDateFive = upperDateFive - currentDate;

  const second = 1000;
  const minuts = second * 60;
  const hours = minuts * 60;
  const days = hours * 24;

  const remainDaysOne = Math.floor(diffDateOne / days);
  const remainDaysTwo = Math.floor(diffDateTwo / days);
  const remainDaysThree = Math.floor(diffDateThree / days);
  const remainDaysFour = Math.floor(diffDateFour / days);
  const remainDaysFive = Math.floor(diffDateFive / days);

  // const remainHours = Math.floor((diffDate % days) / hours);
  // const remainMinuts = Math.floor((diffDate % hours) / minuts);
  // const remainSecond = Math.floor((diffDate % minuts) / second);

  var firstBook = document.getElementById("days-book-1");
  var secondBook = document.getElementById("days-book-2");
  var thirdBook = document.getElementById("days-book-3");
  var fourthBook = document.getElementById("days-book-4");
  var fifthBook = document.getElementById("days-book-5");

  // var d = document.getElementById("days-book-1");
  // var h = document.getElementById("hours");
  // var m = document.getElementById("minuts");
  // var s = document.getElementById("second");

  firstBook.innerHTML = remainDaysOne + "days";
  secondBook.innerHTML = remainDaysTwo + "days";
  thirdBook.innerHTML = remainDaysThree + "days";
  fourthBook.innerHTML = remainDaysFour + "days";
  fifthBook.innerHTML = remainDaysFive + "days";
};
setInterval(countDown, 1000);
