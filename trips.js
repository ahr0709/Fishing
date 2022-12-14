const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const nav = document.querySelector(".nav");

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    nav.classList.add("affix");
  } else {
    nav.classList.remove("affix");
  }
});
