const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const allIngredients = ingredients.map((element) => {
  const item = document.createElement("li");
  item.textContent = element;
  item.classList.add("item");
  
  return item;
});

list.append(...allIngredients);



