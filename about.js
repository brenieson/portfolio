document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleCvBtn");
  const cvContent = document.getElementById("fullCvContent");

  if (toggleBtn && cvContent) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = cvContent.classList.toggle("hidden");

      if (isHidden) {
        toggleBtn.querySelector("span").textContent = "Show Full Visual CV";
        toggleBtn.innerHTML = `<span>Show Full Visual CV</span> ↓`;
      } else {
        toggleBtn.innerHTML = `<span>Hide Full Visual CV</span> ↑`;
      }
    });
  }
});