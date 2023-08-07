import { homePageLoad } from "./home.js";


//write initial page load function that will create each div and append to div.content
function pageLoad() {
    window.addEventListener("DOMContentLoaded", (event) => {
        // console.log("DOM fully loaded and parsed");

        // const content = document.querySelector('div#content');

        // //create elements
        // const header = document.createElement('header');
        // const menu = document.createElement('ul');

        // let menuItemsArray = ["Home", "Menu", "Contact"]; 

        // for (let i = 0; i < menuItemsArray.length; i++){
        //     //create li, add array item as textContent of li, add id, add li as child of menu (ul)
        //     let listItem = document.createElement('li');
        //     listItem.textContent = menuItemsArray[i];
        //     listItem.id = menuItemsArray[i].toLowerCase();
        //     menu.appendChild(listItem);
        // }
       
        // header.appendChild(menu);

        // //append to content div - can this be a loop that checks if elements exist and if so, append them?
        // content.appendChild(header);
        
        // return content;
    })
};


//document.body.appendChild(pageLoad());
document.body.appendChild(homePageLoad());




// create component class or factory to be able to create each component 
// header and footer could be the same 
// each of the wrappers could be the same 