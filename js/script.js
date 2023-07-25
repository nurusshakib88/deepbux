const darkToggle = document.getElementById("dark-toggle");
const body = document.body;

// Function to toggle dark mode
function toggleDarkMode() {
  body.classList.toggle("dark-mode", darkToggle.checked);

  // Store the dark mode preference in local storage
  localStorage.setItem("darkModeEnabled", darkToggle.checked);
}

darkToggle.addEventListener("change", toggleDarkMode);

// Check the local storage on page load
window.addEventListener("load", () => {
  const darkModeEnabled = localStorage.getItem("darkModeEnabled");
  if (darkModeEnabled === "true") {
    darkToggle.checked = true;
    toggleDarkMode();
  }
});
