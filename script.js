// Assign variable to each ID for us to tap it
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
// circles variable will have a list of circle class
const circles = document.querySelectorAll(".circle");

// Declare an initiator variable to start the progress steps. Since step will be always start at 1
let currentActive = 1;

// On clicking the prev button, current active will be decrease.
// Progress step will not be decrease further when reaching 1
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

// On clicking the next button, current active will be increase.
// Progress step will not be increase further once reach the end, this will be determine by determining
// the length of circles
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

// This function will add or remove the active class on each element of circles
// If index is less than the current active then adding of classlit will be triggered
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  //Variable to tap active classes
  const actives = document.querySelectorAll(".active");

  //The width of progress element will be change to declared computation below (in %)
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //Turning on and off the disable depending on the number of currentActive
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
