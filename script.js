const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  primaryNav.classList.toggle("is-open", !isOpen);
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    primaryNav.classList.remove("is-open");
  }
});

const selectionCountdown = document.querySelector("[data-countdown]");

if (selectionCountdown) {
  const deadline = Date.parse(selectionCountdown.dataset.deadline);
  const countdownParts = [
    [selectionCountdown.querySelector("[data-countdown-days]"), 86400000],
    [selectionCountdown.querySelector("[data-countdown-hours]"), 3600000],
    [selectionCountdown.querySelector("[data-countdown-minutes]"), 60000],
    [selectionCountdown.querySelector("[data-countdown-seconds]"), 1000]
  ];
  const countdownNote = document.querySelector("[data-countdown-note]");

  const updateSelectionCountdown = () => {
    let remaining = Math.max(0, deadline - Date.now());

    for (const [element, duration] of countdownParts) {
      const value = Math.floor(remaining / duration);
      remaining %= duration;
      element.textContent = String(value).padStart(2, "0");
    }

    if (deadline <= Date.now()) {
      countdownNote.textContent = "Inscrições encerradas";
      selectionCountdown.setAttribute("aria-label", "Inscrições encerradas");
      window.clearInterval(countdownInterval);
    }
  };

  const countdownInterval = window.setInterval(updateSelectionCountdown, 1000);
  updateSelectionCountdown();
}