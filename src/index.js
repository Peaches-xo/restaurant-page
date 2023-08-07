import { homePageLoad } from "./home.js";
import { menuPageLoad } from "./menu.js";
import { contactPageLoad } from "./contact.js";


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
        case 'home': console.log('home btn clicked');
        //code to unappend children


        //if div#content exists in document.body.childNodes, remove it from dom
        let mynodeList = document.body.childNodes;
console.log(mynodeList);
        if (mynodeList.includes("div#content")){
            console.log("document body includes div#content");
        }
       //console.log(document.body.children);
       console.log(document.body.childNodes);

        homePageLoad();
        //console.log(document.body.children);
        console.log(document.body.childNodes);

        break;
        case 'menu': console.log('menu btn clicked');
        //code to unappend children


        menuPageLoad();
        break;

        case 'contact': console.log('contact btn clicked');
        //code to unappend children

        contactPageLoad();
        break; 
    }
}




function createFooter(){

}




