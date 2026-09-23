const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

burger?.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

document.querySelectorAll(".mobile-nav a").forEach((a) => {
  a.addEventListener("click", () => mobileNav.classList.remove("open"));
});

const form = document.querySelector("#booking-form");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.querySelector('[name="name"]').value.trim();
  const toast = document.querySelector(".toast");
  toast.textContent = `${name || "Спасибо"}, заявка отправлена. Администратор перезвонит в течение 15 минут.`;
  toast.classList.add("show");
  form.reset();
  setTimeout(() => toast.classList.remove("show"), 4200);
});
