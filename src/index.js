import "./style.css";
import { homeEl } from "./home";
import { hero } from "./hero";
import { menuPage } from "./menus";
import { contactUs } from "./contact";

const content = document.querySelector("#content");
// content.appendChild(hero);
content.appendChild(homeEl);

const navBtns = document.querySelector(".nav-buttons");

navBtns.addEventListener("click", (e) => {
  if (!e.target.classList.contains("menu-btn")) return;
  document
    .querySelectorAll(".menu-btn")
    .forEach((btn) => btn.classList.remove("active"));
  e.target.classList.toggle("active");

  if (e.target.dataset.tab === "menu") {
    content.innerHTML = "";
    content.appendChild(menuPage);
  } else if (e.target.dataset.tab === "contact") {
    content.innerHTML = "";
    content.appendChild(contactUs);
  } else {
    content.innerHTML = "";
    content.appendChild(homeEl);
  }
});
