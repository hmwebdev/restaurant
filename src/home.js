// Home page content module
import pizzaOven from "./assets/pizza_oven.jpg";
import ingredients from "./assets/ingredients.jpg";

function makeHero(msg) {
  const ctn = document.getElementById("hero");
  ctn.classList.add("hero-home");
  ctn.innerHTML = msg;
}

function makeContentFirstSec() {
  const contentCtn = document.getElementById("content");
  const firstSection = document.createElement("section");
  const firstLeft = document.createElement("div");
  const firstRight = document.createElement("div");
  const img = document.createElement("img");
  const textFirstRight = document.createElement("p");

  contentCtn.classList.add("container");
  firstSection.classList.add("section-style");
  contentCtn.append(firstSection);
  firstSection.append(firstLeft, firstRight);
  img.src = pizzaOven;
  img.alt = "Picture of a Pizza oven";
  firstLeft.append(img);
  textFirstRight.innerHTML = `Welcome to Pizza Rital, where every slice tells a story of authentic Italian flavor and tradition.
  Nestled in the heart of Toronto, our restaurant captures the essence of Italy with every bite. From our handcrafted dough made
  with the finest Italian flour to our carefully selected ingredients bursting with freshness, each pizza embodies the rich culinary
  heritage of Italy. Join us on a gastronomic journey through Italy, one slice at a time. Buon appetito!`;
  firstRight.append(textFirstRight);
}

function makeContentSecondSec() {
  const contentCtn = document.getElementById("content");
  const secondSection = document.createElement("section");
  const secondLeft = document.createElement("div");
  const secondRight = document.createElement("div");
  const img = document.createElement("img");
  const textSecondLeft = document.createElement("p");

  contentCtn.classList.add("container");
  secondSection.classList.add("section-style");
  contentCtn.append(secondSection);
  secondSection.append(secondLeft, secondRight);
  img.src = ingredients;
  img.alt = "Picture of a Burrata Salad";
  secondRight.append(img);
  textSecondLeft.innerHTML = `At Pizza Rital, we take pride in sourcing only the freshest and finest ingredients, all locally grown and organic.
   Our commitment to quality begins with the soil of our local farms, where each tomato ripens under the warm Italian sun and every herb thrives
    with aromatic intensity. From the crisp bell peppers to the fragrant basil leaves, every ingredient embodies the essence of our region, ensuring
    that each bite is a celebration of local flavors. By supporting our local farmers and artisans, we not only uphold the principles of sustainability
    but also guarantee an unparalleled freshness that shines through in every mouthful. At Pizza Rital, we believe that great taste starts with the earth,
    and we invite you to savor the difference in every bite.`;
  secondLeft.append(textSecondLeft);
}

export { makeHero, makeContentFirstSec, makeContentSecondSec };
