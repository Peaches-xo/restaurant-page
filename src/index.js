import { homePageLoad } from "./home.js";
import { menuPageLoad } from "./menu.js";
import { contactPageLoad } from "./contact.js";
import './style.css';


// Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.

function createHeader(){
    //create elements
    let header = document.createElement('header');
    const menu = document.createElement('ul');

    let menuItemsArray = ["Home", "Menu", "Contact"]; 

    for (let i = 0; i < menuItemsArray.length; i++){
        //create li, add array item as textContent of li, add id, add li as child of menu (ul)
        let listItem = document.createElement('li');
        listItem.textContent = menuItemsArray[i];
        listItem.id = menuItemsArray[i].toLowerCase();
        menu.appendChild(listItem);
    }
    header.appendChild(menu);
    header.addEventListener('click', eventHandler);
    return header;
}
document.body.appendChild(createHeader());

let content = document.querySelector('#content');


function eventHandler(e){
    switch (e.target.id){
        case 'home':
            clearContent();
            homePageLoad();
            break;
        case 'menu': 
            clearContent();
            menuPageLoad();
            break;
        case 'contact': 
            clearContent();
            contactPageLoad();
            break; 
    }
}

function clearContent(){
    const element = document.getElementById("content");
    if (element !== null){   
         element.remove();
    }
}





function createFooter(){
//create elements
let footer = document.createElement('footer');
const creditMenu = document.createElement('ul');

let creditMenuItemsArray = ["Credits", "The Odin Project", "Github"]; 

for (let i = 0; i < creditMenuItemsArray.length; i++){
    //create li, add array item as textContent of li, add id, add li as child of menu (ul)
    let listItem = document.createElement('li');
    listItem.textContent = creditMenuItemsArray[i];

    creditMenu.appendChild(listItem);
}
footer.appendChild(creditMenu);

return footer;
}
document.body.appendChild(createFooter());





