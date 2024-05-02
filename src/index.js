import "./style.css";
import { makeHero, makeContentFirstSec, makeContentSecondSec } from "./home.js";
import { makeFirstSectionMenu } from "./menu.js";
import { makeFirstSectionContact } from "./contact.js";
const ctn = document.getElementById("content");

// Event listener for the menu
document
  .getElementById("nav-home-button")
  .addEventListener("click", function () {
    clearDom();
    makeHero("Best Pizza north of Italia");
    makeContentFirstSec();
    makeContentSecondSec();
  });

document
  .getElementById("nav-menu-button")
  .addEventListener("click", function () {
    clearDom();
    makeHero("Menu");
    makeFirstSectionMenu();
  });

document
  .getElementById("nav-contact-button")
  .addEventListener("click", function () {
    clearDom();
    makeHero("Contact");
    makeFirstSectionContact();
  });

function clearDom() {
  ctn.replaceChildren();
}

makeHero("Best Pizza north of Italia");
makeContentFirstSec();
makeContentSecondSec();
