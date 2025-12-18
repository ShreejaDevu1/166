// ================= Scroll Reveal Animation =================
const revealElements = document.querySelectorAll("section");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

// Initial hidden state
revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(60px)";
  el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ================= Typing Effect (Hero Name) =================
const heroTitle = document.querySelector(".hero h1");
const text = heroTitle.textContent;
heroTitle.textContent = "";

let i = 0;
function typeWriter() {
  if (i < text.length) {
    heroTitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// ================= Project Card Hover Glow =================
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 10px 30px rgba(56, 189, 248, 0.4)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});

// ================= Button Click Ripple Effect =================
const heroButton = document.querySelector(".hero button");

heroButton.addEventListener("click", () => {
  heroButton.style.transform = "scale(0.95)";
  setTimeout(() => {
    heroButton.style.transform = "scale(1)";
  }, 150);
});

// ================= Auto Update Footer Year =================
const footer = document.querySelector("footer");
const year = new Date().getFullYear();
footer.innerHTML = `© ${year} Shreeja | All Rights Reserved`;
