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

document.addEventListener("DOMContentLoaded", function () {
  // 1. Initialize the map without a fixed view
  var map = L.map("map");

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);

  function createCustomIcon(text, imgUrl) {
    return L.divIcon({
      className: "custom-div-icon",
      html: `<div class="icon-wrap" style="display: flex; flex-direction: column; align-items: center;">
              <img src="${imgUrl}" alt="image" style="width:50px;height:50px;border-radius:50%;border:2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">
              <div class="pin-text" style="background:white;padding:2px 5px;border-radius:5px;font-size:10px;margin-top:2px; font-weight: bold; white-space: nowrap;">${text}</div>
            </div>`,
      iconSize: [60, 70], // Matches the size of your wrapping div
      iconAnchor: [30, 50], // Centers the icon horizontally and anchors the bottom
    });
  }

  // 2. Define the coordinates
  var churchCoords = [14.91184, 120.56421];
  var receptionCoords = [14.92508, 120.5299];

  // 3. Add Church Marker
  var churchMarker = L.marker(churchCoords, {
    icon: createCustomIcon("Church", "/assets/img2/church.webp"),
  })
    .addTo(map)
    .on("click", function () {
      window.open(
        "https://www.google.com/maps/dir/?api=1&destination=" +
          churchCoords.join(","),
        "_blank",
      );
    });

  // 4. Add Reception Marker
  var receptionMarker = L.marker(receptionCoords, {
    icon: createCustomIcon("Reception", "/assets/img2/reception.webp"),
  })
    .addTo(map)
    .on("click", function () {
      window.open(
        "https://www.google.com/maps/dir/?api=1&destination=" +
          receptionCoords.join(","),
        "_blank",
      );
    });

  // 5. AUTO-CENTER LOGIC
  // Create a feature group to easily get the bounding box of all markers
  var group = new L.featureGroup([churchMarker, receptionMarker]);

  // Fit the map to the markers with some padding so they aren't touching the edges
  map.fitBounds(group.getBounds(), {
    padding: [50, 50], // 50px padding on all sides
  });
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

// Countdown to June 14, 2026
$(document).ready(function () {
  var targetDate = new Date("June 14, 2026 00:00:00").getTime() / 1000;

  var flipdown = new FlipDown(targetDate).start().ifEnded(function () {
    $("#flipdown").html("<h2>Event Started 🎉</h2>");
  });
});
