function makeFirstSectionMenu() {
  const contentCtn = document.getElementById("content");
  const firstSection = document.createElement("section");
  const firstRight = document.createElement("div");
  const textFirstRight = document.createElement("p");
  const appetizersList = document.createElement("ul");
  const pastasList = document.createElement("ul");
  const pizzaList = document.createElement("ul");
  const dessertsList = document.createElement("ul");
  const beveragesList = document.createElement("ul");
  const titleAppetizers = document.createElement("h2");
  const titlePastas = document.createElement("h2");
  const titlePizzas = document.createElement("h2");
  const titleDesserts = document.createElement("h2");
  const titleBeverages = document.createElement("h2");

  const appetizers = [
    [
      "Bruschetta al Pomodoro",
      " Toasted bread topped with diced tomatoes, garlic, basil, and extra virgin olive oil.",
      8,
    ],
    [
      "Caprese Salad",
      "Slices of fresh mozzarella, ripe tomatoes, and basil leaves drizzled with balsamic glaze.",
      10,
    ],
    [
      "Arancini",
      "Crispy risotto balls filled with mozzarella cheese and served with marinara sauce.",
      11,
    ],
  ];
  const pastas = [
    [
      "Spaghetti Carbonara",
      "Pasta tossed in a creamy sauce with pancetta, egg, Parmesan cheese, and black pepper.",
      18,
    ],
    [
      "Fettuccine Alfredo",
      "Ribbon pasta coated in a rich Alfredo sauce made with cream, butter, and Parmesan cheese.",
      20,
    ],
    [
      "Ravioli di Ricotta e Spinaci",
      "Homemade ravioli stuffed with ricotta cheese and spinach, served with marinara sauce.",
      21,
    ],
  ];

  const pizzas = [
    [
      "Margherita",
      "Traditional pizza topped with San Marzano tomatoes, fresh mozzarella, basil, and a drizzle of olive oil.",
      20,
    ],
    [
      "Quattro Stagioni",
      "Pizza divided into four sections with artichokes, mushrooms, ham, and olives representing the four seasons.",
      20,
    ],
    [
      "Prosciutto e Rucola",
      "Pizza topped with thinly sliced prosciutto, arugula, cherry tomatoes, and Parmesan shavings.",
      22,
    ],
  ];

  const desserts = [
    [
      "Tiramisu",
      "Classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.",
      12,
    ],
    [
      "Cannoli Siciliani",
      "Crispy pastry tubes filled with sweetened ricotta cheese, chocolate chips, and candied fruit.",
      10,
    ],
    [
      "Gelato",
      "Selection of homemade Italian ice creams and sorbets in various flavors.",
      8,
    ],
  ];

  const beverages = [
    ["Espresso", " Strong black coffee served in a small cup.", 3],
    [
      "Limoncello",
      "Digestive liqueur made from lemon zest, sugar, and alcohol.",
      4,
    ],
    [
      "Chianti Classico",
      "Red wine from the Chianti region of Tuscany, known for its fruity flavor and dry finish.",
      13,
    ],
  ];

  contentCtn.classList.add("container");
  firstSection.classList.add("section-style");
  contentCtn.append(firstSection);
  firstSection.append(firstRight);
  textFirstRight.innerHTML = `Indulge in the flavors of Italy with our carefully curated menu at Pizza Rital. From the first bite of our authentic bruschetta to the last spoonful of creamy tiramisu, each dish is crafted with love and tradition. We take pride in using the freshest locally sourced ingredients, ensuring that every meal is a true celebration of Italian cuisine. Whether you're craving a classic pasta dish, a mouthwatering pizza, or a decadent dessert, our menu offers a culinary journey through the diverse regions of Italy. Join us and experience the warmth of Italian hospitality right here at Pizza Rital.`;
  firstRight.append(textFirstRight);

  // Appetizers
  firstRight.append(appetizersList);
  appetizersList.setAttribute("id", "appetizers-list");
  titleAppetizers.innerHTML = "Appetizers";
  appetizersList.append(titleAppetizers);

  appetizers.forEach((appetizer) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
      <strong>${appetizer[0]}</strong>: ${appetizer[1]} - $${appetizer[2]}
    `;
    appetizersList.appendChild(liElement);
  });

  // Pastas
  firstRight.append(pastasList);
  pastasList.setAttribute("id", "pastas-list");
  titlePastas.innerHTML = "Pastas";
  pastasList.append(titlePastas);

  pastas.forEach((pastas) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
      <strong>${pastas[0]}</strong>: ${pastas[1]} - $${pastas[2]}
    `;
    pastasList.appendChild(liElement);
  });

  // Pizzas

  firstRight.append(pizzaList);
  pizzaList.setAttribute("id", "pizza-list");
  titlePizzas.innerHTML = "Pizzas";
  pizzaList.append(titlePizzas);

  pizzas.forEach((pizza) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
      <strong>${pizza[0]}</strong>: ${pizza[1]} - $${pizza[2]}
    `;
    pizzaList.appendChild(liElement);
  });

  // Desserts

  firstRight.append(dessertsList);
  dessertsList.setAttribute("id", "desserts-list");
  titleDesserts.innerHTML = "Desserts";
  dessertsList.append(titleDesserts);

  desserts.forEach((dessert) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
        <strong>${dessert[0]}</strong>: ${dessert[1]} - $${dessert[2]}
      `;
    dessertsList.appendChild(liElement);
  });

  // Beverages

  firstRight.append(beveragesList);
  beveragesList.setAttribute("id", "beverages-list");
  titleBeverages.innerHTML = "Beverages";
  beveragesList.append(titleBeverages);

  beverages.forEach((beverage) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
          <strong>${beverage[0]}</strong>: ${beverage[1]} - $${beverage[2]}
        `;
    beveragesList.appendChild(liElement);
  });
}

export { makeFirstSectionMenu };
