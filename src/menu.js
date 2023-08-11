// Module to load MENU MODULE content
import beerImg from './Beer.png';
import coffeeImg from './Coffee.png';
import colaImg from './Joja_cola.png';
import saladImg from './Salad.png';
import breadImg from './Bread.png'
import spaghettiImg from './Spaghetti.png';
import pizzaImg from './Pizza.png';


export { menuPageLoad };


//DATA OBJECTS
const beverages = [
    {
        titleText : "Beer",
        bodyText: "Drink in moderation.",
        priceText:"400g",
        imgName: beerImg,
        imgAlt: "Stardew Valley Beer",
    },
    {
        titleText : "Coffee",
        bodyText: "It smells delicious. This is sure to give you a boost.",
        priceText:"300g",
        imgName: coffeeImg,
        imgAlt: "Stardew Valley Coffee",
    },
    {
        titleText : "Joja Cola",
        bodyText: "The flagship product of Joja corporation",
        priceText:"75g",
        ImgName: colaImg,
        imgAlt: "Stardew Valley Joja Cola",
    }
]

const meals = [
    {
        titleText: "Salad",
        bodyText: "A healthy garden salad.",
        priceText:"220g",
        imgName: saladImg,
        imgAlt: "Stardew Valley Salad",
    },
    {
        titleText : "Bread",
        bodyText: "A crusty baguette.",
        priceText: "120g",
        imgName: breadImg,
        imgAlt: "Stardew Valley Bread",
    },
    {
        titleText : "Spaghetti",
        bodyText: "An old favorite.",
        priceText: "240g",
        imgName: spaghettiImg,
        imgAlt: "Stardew Valley Spaghetti",
    },
    {
        titleText : "Pizza",
        bodyText: "It's popular for all the right reasons.",
        priceText: "600g",
        imgName: pizzaImg,
        imgAlt: "Stardew Valley Pizza",
    },

]
const subheadings = [beverages, meals]; //array of objects, array of objects 










//function that creates div, adds content and appends to dom
function menuPageLoad(){

    //CREATES THE DIV
    const content = document.createElement('div');
    content.id = "content";
    const footer = document.querySelector('footer');



    function createHeading(){
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
     
        let h1heading = document.createElement('h1');
        h1heading.textContent = "The Stardrop Saloon"
        wrapper.appendChild(h1heading);
        content.appendChild(wrapper);
    }
    createHeading();

    function createMainSections(arr){
        let sectionwrapper = document.createElement('section');
        sectionwrapper.classList.add('section');
     
        let sectionHeading = document.createElement('h2');
        sectionHeading.textContent = arr; //how to get variable name of array here
        sectionwrapper.appendChild(sectionHeading);
        
        //code to loop through objects in arr



        content.appendChild(sectionwrapper);
    }

    //calls createMainSections function on each array in subheadings (2 arrays)
     subheadings.forEach(createMainSections);
   
  
  






//APPENDS TO DOM
document.body.insertBefore(content,footer); 
  
}






function createItems(item){
    let itemWrapper = document.createElement('div');
    itemWrapper.classList.add('item');

    let title = document.createElement('h3');
    title.textContent = item.titleText;
    itemWrapper.appendChild(title);

    let text = document.createElement('p');
    text.textContent = item.bodyText;
    itemWrapper.appendChild(text);

    let price = document.createElement('span');
    price.textContent = item.priceText;
    itemWrapper.appendChild(price);

    let itemImage = document.createElement('img');
    itemImage.src = item.imgName;
    itemImage.alt = item.imgAlt;
    itemWrapper.appendChild(itemImage);

    document.querySelector('')
    sectionwrapper.appendChild(itemWrapper);
//for each item in array: 
    //create wrapper div class item
    //create tag elements
    //add content
    //add classes
    //append each item to wrapper div 
    //return created element
}






// //DATA OBJECTS
// const heading = {
//     titleTag: "h1",
//     titleText : "The Stardrop Saloon",
// }

// const subheadings = [beverages, meals];

// const beverages = [
//     {
//         titleTag : "h3",
//         titleText : "Beer",
//         textTag: "p",
//         bodyText: "Drink in moderation.",
//         priceTag: "span",
//         priceText:"400g",
//         imgSrc: "",
//         imgName: beerImg,
//         imgAlt: "Stardew Valley Beer",
//     },
//     {
//         titleTag : "h3",
//         titleText : "Coffee",
//         textTag: "p",
//         bodyText: "It smells delicious. This is sure to give you a boost.",
//         priceTag: "span",
//         priceText:"300g",
//         imgSrc: "",
//         imgName: coffeeImg,
//         imgAlt: "Stardew Valley Coffee",
//     },
//     {
//         titleTag : "h3",
//         titleText : "Joja Cola",
//         textTag: "p",
//         bodyText: "The flagship product of Joja corporation",
//         priceTag: "span",
//         priceText:"75g",
//         imgSrc: "",
//         ImgName: colaImg,
//         imgAlt: "Stardew Valley Joja Cola",
//     }
// ]

// const meals = [
//         {
//         titleTag : "h3",
//         titleText : "Salad",
//         textTag: "p",
//         bodyText: "	A healthy garden salad.",
//         priceTag: "span",
//         priceText:"$220",
//         imgSrc: "",
//         imgAlt: "",
//     },

// ]

