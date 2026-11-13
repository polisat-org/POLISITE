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

const eventCountdown = document.querySelector("[data-countdown]");

if (eventCountdown) {
  const deadline = Date.parse(eventCountdown.dataset.deadline);
  const countdownParts = [
    [eventCountdown.querySelector("[data-countdown-days]"), 86400000],
    [eventCountdown.querySelector("[data-countdown-hours]"), 3600000],
    [eventCountdown.querySelector("[data-countdown-minutes]"), 60000],
    [eventCountdown.querySelector("[data-countdown-seconds]"), 1000]
  ];
  const countdownNote = document.querySelector("[data-countdown-note]");

  const updateEventCountdown = () => {
    let remaining = Math.max(0, deadline - Date.now());

    for (const [element, duration] of countdownParts) {
      const value = Math.floor(remaining / duration);
      remaining %= duration;
      element.textContent = String(value).padStart(2, "0");
    }

    if (deadline <= Date.now()) {
      const endedText = eventCountdown.dataset.endedText || "Contagem encerrada";
      if (countdownNote) countdownNote.textContent = endedText;
      eventCountdown.setAttribute("aria-label", endedText);
      window.clearInterval(countdownInterval);
    }
  };

  const countdownInterval = window.setInterval(updateEventCountdown, 1000);
  updateEventCountdown();
}