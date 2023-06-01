const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEL = document.querySelector(`ul#ingredients`);

      ingredients.map(function (ingredient) { 
       const itemEl = document.createElement('li');
       itemEl.textContent = (`${ingredient}`);
       itemEl.classList.add('item');
      //  console.log(itemEl);
       ingredientsEL.append(itemEl);
     
        });
       
        // console.log(ingredientsEL);