document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const items = document.querySelectorAll(".item-card");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons and add to clicked button
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      // Show/hide cards based on selected filter category
      items.forEach(item => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
});