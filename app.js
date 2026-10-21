// Tab Switching
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

// Register Service Worker for PWA installation
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then(() => console.log("Service Worker registered successfully."))
      .catch((err) => console.error("Service worker failed:", err));
  });
}