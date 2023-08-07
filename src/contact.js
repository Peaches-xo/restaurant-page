// Module to load contact page content

//export this function below
export { contactPageLoad };

//function that creates div, adds content and appends to dom
function contactPageLoad(){
    console.log("contactPageLoad is loaded");

        // const content = document.createElement('div');
        // content.id = "content";

    //create elements
    const header = document.createElement('header');
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

    //append to content div - can this be a loop that checks if elements exist and if so, append them?
    content.appendChild(header);
    
    return content;
}


// create component class or factory to be able to create each component 
// header and footer could be the same 
// each of the wrappers could be the same 