// Interactive Save button functionality
const saveBtn = document.getElementById("saveOfferBtn");
if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    if (saveBtn.textContent === "Save") {
      saveBtn.textContent = "Saved ✓";
      saveBtn.style.background = "#ffffff";
      saveBtn.style.color = "#007458";
    } else {
      saveBtn.textContent = "Save";
      saveBtn.style.background = "#a9e8d4";
      saveBtn.style.color = "#003e2f";
    }
  });
}

// Bottom nav tab switching effect
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  });
}