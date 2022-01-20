const nextBTN = document.getElementById("next-btn");
const prevBTN = document.getElementById("prev-btn");
const line = document.getElementById("line");
const steps = document.querySelectorAll(".circle");

let index = 0;
nextBTN.addEventListener("click", () => {
  index++;
  if (index >= steps.length) {
    index = steps.length;
  }
  changeState();
});

prevBTN.addEventListener("click", () => {
  index--;
  if (index <= 0) {
    index = 0;
  }
  changeState();
});

function changeState() {
  steps.forEach((item, i) => {
    if (i < index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  const activeSteps = document.querySelectorAll(".active");
  line.style.width =
    ((activeSteps.length - 1) / (steps.length - 1)) * 100 + "%";

  // call pages to iframe
  const pages = document.getElementById("pages");
  const modelContainer = document.getElementById("model");

  if (index == 0 || index == 1) {
    pages.setAttribute("src", "stage-one.html");
  } else if (index == 2) {
    pages.setAttribute("src", "stage-two.html");
  } else if (index == 3) {
    pages.setAttribute("src", "stage-three.html");
  } else {
    modelContainer.style.visibility = "visible";
  }
  const btn = document.getElementById("btn");

  modelContainer.addEventListener("click", () => {
    modelContainer.style.visibility = "hidden";
  });
}
