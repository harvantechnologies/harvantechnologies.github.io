// INIT WOW
new WOW().init();

// SMOOTH SCROLL
$('a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    800
  );
});

// HERO TEXT ANIMATION
anime({
  targets: "#hero-title",
  opacity: [0, 1],
  translateY: [50, 0],
  duration: 1500,
  easing: "easeOutExpo",
});

// CANVAS BACKGROUND (particles)
const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.y += 0.5;
    if (p.y > canvas.height) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();

// FORM VALIDATION
$("#contactForm").submit(function (e) {
  e.preventDefault();
  alert("Message Sent!");
});
