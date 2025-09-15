// ---------------------------
// PART 2: JavaScript Functions
// ---------------------------

// Global variable
let box = document.getElementById("animatedBox");

// Function to trigger bounce animation
function animateBox(element) {
  // Local variable
  const animationClass = "bounce";

  element.classList.add(animationClass);

  // Remove the animation class after it's done (so it can be reused)
  setTimeout(() => {
    element.classList.remove(animationClass);
  }, 600);
}

// Function with parameters and return value
function calculateScale(base, multiplier) {
  return base * multiplier;
}

// Function to apply scale transform using return value
function scaleBox(factor) {
  const newScale = calculateScale(1, factor);
  box.style.transform = `scale(${newScale})`;
}

// Event listener for button
document.getElementById("magicButton").addEventListener("click", () => {
  animateBox(box);
  scaleBox(1.2);
});

// ---------------------------
// PART 3: Combining CSS + JS
// ---------------------------

// Modal Toggle Function
function toggleModal() {
  const modal = document.getElementById("modal");

  if (modal.classList.contains("show")) {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 400); // Wait for fade out
  } else {
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.add("show");
    }, 10); // Slight delay to allow transition
  }
}
