
const message = document.getElementById("message");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  message.textContent = "Your app works!";
  button.textContent = "Success!";
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .catch(error => {
        console.error("Service worker failed:", error);
      });
  });
}
