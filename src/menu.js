// Module to load MENU MODULE content
import beerImg from './Beer.png';
import coffeeImg from './Coffee.png';
import colaImg from './Joja_cola.png';
import saladImg from './Salad.png';
import breadImg from './Bread.png'
import spaghettiImg from './Spaghetti.png';
import pizzaImg from './Pizza.png';

export { menuPageLoad };

class Item {
    constructor(name, description, price, imgName, imgAlt){
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgName = imgName;
        this.imgAlt = imgAlt;
    }

    createItem(){
        let wrapper = document.createElement('div');
        wrapper.classList.add('itemWrapper');

        let leftwrap = document.createElement('div');
        leftwrap.classList.add('leftwrap');
        let rightwrap = document.createElement('div');
        rightwrap.classList.add('rightwrap');

        wrapper.appendChild(leftwrap);
        wrapper.appendChild(rightwrap);

        let itemName = document.createElement('h2');
        itemName.textContent = this.name;
        leftwrap.appendChild(itemName);

        let itemDesc = document.createElement('p');
        itemDesc.textContent = this.description;
        leftwrap.appendChild(itemDesc);

        let itemPrice = document.createElement('span');
        itemPrice.textContent = this.price;
        leftwrap.appendChild(itemPrice);

        let itemImage = document.createElement('img');
        itemImage.src = this.imgName;
        itemImage.alt = this.imgAlt;
        rightwrap.appendChild(itemImage);
        
        return wrapper;
    }
}

//create instances of class for all food and bev items
let salad = new Item('Salad', 'A healthy garden salad', '220g', saladImg, 'Stardew Valley Salad');
let bread = new Item('Bread', 'A crusty baguette', '120g', breadImg, 'Stardew Valley Bread');
let spaghetti = new Item('Spaghetti', 'An old favourite', '240g', spaghettiImg, 'Stardew Valley Spaghetti');
let pizza = new Item('Pizza', "Popular for all the right reasons", '600g', pizzaImg, 'Stardew Valley Pizza');


let beer = new Item('Beer', 'Drink in moderation', '400g', beerImg, 'Stardew Valley Beer');
let coffee = new Item('Coffee', 'It smells delicious. This is sure to give you a boost.', '300g', coffeeImg, 'Stardew Valley Coffee');
let cola = new Item('Joja Cola', 'The flagship product of Joja corporation.', '75g', colaImg, 'Stardew Valley Joja Cola');


// add instances to array
let mealsArray = [salad, bread, spaghetti, pizza];
let bevArray = [beer, coffee, cola];


//function that creates div, adds content and appends to dom
function menuPageLoad(){
    //CREATES THE DIV
    const content = document.createElement('div');
    content.id = "content";
    const footer = document.querySelector('footer');

//APPENDS TO DOM
document.body.insertBefore(content,footer); 


    function createHeading(){
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
     
        let h1heading = document.createElement('h1');
        h1heading.textContent = "The Stardrop Saloon Menu"
        wrapper.appendChild(h1heading);
        content.appendChild(wrapper);
    }
    createHeading();

    function createMainSections(arrItem){
        let sectionwrapper = document.createElement('section');
        sectionwrapper.classList.add('section');
        sectionwrapper.classList.add(arrItem.toLowerCase());
     
        let sectionHeading = document.createElement('h2');
        sectionHeading.textContent = arrItem; 
        
        sectionwrapper.appendChild(sectionHeading);
        content.appendChild(sectionwrapper);
    }
    let sectionNames = ["Beverages", "Meals"];
    sectionNames.forEach(createMainSections);

   let mealsSection = document.querySelector('.meals');
   let bevSection = document.querySelector('.beverages');

//loop through meals array and call meal.createItem on each meal
mealsArray.forEach((food) => {
    mealsSection.appendChild(food.createItem());
});

bevArray.forEach((drink) => {
    bevSection.appendChild(drink.createItem());
});


//APPENDS TO DOM
//document.body.insertBefore(content,footer); 
  
}










