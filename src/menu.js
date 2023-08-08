// Module to load MENU MODULE content

export { menuPageLoad };

//function that creates div, adds content and appends to dom
function menuPageLoad(){
    console.log("menuPageLoad is loaded");

    //CREATES THE DIV
    const content = document.createElement('div');
    content.id = "content";

    function createSection(obj){
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
     
        let heading = document.createElement(obj.titleTag);
        heading.textContent = obj.titleText;
        wrapper.appendChild(heading);
        
        if(obj.textTag){
            let text = document.createElement(obj.textTag);
            text.textContent = obj.bodyText;
            wrapper.appendChild(text);
        }

        if(obj.imgSrc){
            let img = document.createElement('img');
            img.setAttribute('src', obj.imgSrc);
            img.setAttribute('alt', obj.imgAlt);
            img.setAttribute('style', obj.style);
            wrapper.appendChild(img);        
        }

        content.appendChild(wrapper);
     }
     contentArrayofObjects.forEach(createSection);


//APPENDS TO DOM
document.body.appendChild(content);
  
}

//DATA OBJECTS
const heading = {
    titleTag: "h1",
    titleText : "The Stardrop Saloon",
}

const subheadings = {
    titleTag: "h2",
    titleText : ["Beverages", "Meals"],
}

const beverages = {
    titleTag : "h3",
    titleText : "Beer",
    textTag: "p",
    bodyText: "",
    priceTag: "span",
    priceText:"$400",
    imgSrc: "",
    imgAlt: "",
}

const meals = {
    titleTag : "h3",
    titleText : "Salad",
    textTag: "p",
    bodyText: "",
    priceTag: "span",
    priceText:"$500",
    imgSrc: "",
    imgAlt: "",
}

let contentArrayofObjects = [heading, subheadings, beverages, meals];