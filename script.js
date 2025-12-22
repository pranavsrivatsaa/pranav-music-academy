/* ================= CURSOR GLOW ================= */
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});

/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((el) => observer.observe(el));

/* ================= PARALLAX HERO ================= */
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (hero) {
    hero.style.backgroundPositionY = window.scrollY * 0.35 + "px";
  }
});

/* ================= FORM SAVE ================= */
function saveData() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (!name || !email || !message) return;

  if (!name.value || !email.value || !message.value) {
    alert("Please fill all fields");
    return;
  }

  const data =
    `Name: ${name.value}\n` +
    `Email: ${email.value}\n` +
    `Message: ${message.value}`;

  const blob = new Blob([data], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "contact.txt";
  link.click();
}
