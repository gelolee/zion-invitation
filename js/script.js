$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    items: 4,
  });
});

// const faders = document.querySelectorAll(".fade-in");
// window.addEventListener("scroll", () => {
//   faders.forEach((el) => {
//     const top = el.getBoundingClientRect().top;
//     if (top < window.innerHeight - 100) {
//       el.classList.add("show");
//     }
//   });
// });

const eventDate = new Date("June 14, 2026 11:00:00").getTime();

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

var markers = [L.marker([14.91184, 120.56421]), L.marker([14.92508, 120.5299])];

var group = L.featureGroup(markers);
map.fitBounds(group.getBounds(), {
  padding: window.innerWidth <= 768 ? [20, 20] : [50, 50],
});
