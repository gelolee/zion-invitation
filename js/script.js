$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    smartSpeed: 1500,
    responsive: {
      0: { items: 1.5 },
      600: { items: 3 },
      1000: { items: 4 },
    },
  });
  // target section
  var target = document.querySelector(".section.fade-in");
  // observer
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          owl.trigger("play.owl.autoplay", [4000]); // resume autoplay
        } else {
          owl.trigger("stop.owl.autoplay"); // stop autoplay
        }
      });
    },
    {
      threshold: 0.5, // 50% visible before triggering
    },
  );
  observer.observe(target);
});

$("#viewDetails").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#next").offset().top,
    },
    1000, // speed in ms
  );
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

$(document).ready(function () {
  $(".envelope").click(function () {
    $(this).addClass("open");

    // fade out after animation
    setTimeout(() => {
      $("#envelope-screen").fadeOut(800);
    }, 1200);
  });
});

$("#main-content").addClass("show");
