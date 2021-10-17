const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Filter Projects

const filterBtn = document.querySelector(".filter-btns");
const spans = [...document.querySelectorAll(".filter-btns span")];
const items = [...document.querySelectorAll(".projects .item")];

filterBtn.addEventListener("click", (e) => {
  const filter = e.target.closest("span");
  if (!filter) return;
  const id = filter.dataset.id;
  spans.forEach((span) => span.classList.remove("active"));
  filter.classList.add("active");

  items.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("active");
    const targetId = item.dataset.id;

    if (targetId === id) {
      item.classList.remove("hide");
      item.classList.add("active");
    } else if (id === "all") {
      item.classList.remove("hide");
    }
  });
});