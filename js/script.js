const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  faders.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

const eventDate = new Date("April 20, 2026 11:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  document.getElementById("days").innerText = Math.floor(
    diff / (1000 * 60 * 60 * 24),
  );
  document.getElementById("hours").innerText = Math.floor(
    (diff / (1000 * 60 * 60)) % 24,
  );
  document.getElementById("minutes").innerText = Math.floor(
    (diff / (1000 * 60)) % 60,
  );
}, 1000);
