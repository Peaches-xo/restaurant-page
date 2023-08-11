// Module to load CONTACT MODULE content
import gusDialog from './gus-dialog.png';
import emilyDialog from './emily-dialog.png';

export { contactPageLoad };

//function that creates div, adds content and appends to dom
function contactPageLoad(){
    console.log("contactPageLoad is loaded");

        const content = document.createElement('div');
        content.id = "content";
        const footer = document.querySelector('footer');

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


                const myImage = new Image();
                myImage.src = obj.imgName;

                //let img = document.createElement('img');
                //img.setAttribute('src', obj.imgSrc);
                myImage.setAttribute('alt', obj.imgAlt);
                //myImage.setAttribute('style', obj.style);
                myImage.classList.add(obj.titleText)
                wrapper.appendChild(myImage);        
            }
    
            content.appendChild(wrapper);
         }
         contentArrayofObjects.forEach(createSection);

         //APPENDS TO DOM
         document.body.insertBefore(content,footer); 
}






//DATA OBJECTS
const heading = {
    titleTag: "h1",
    titleText : "Contact Us",
}

const gus = {
    titleTag: "h2",
    titleText : "Gus",
    textTag: "p",
    bodyText: "Drink in moderation.",
    imgName: gusDialog,
    imgSrc: "./gus-dialog.png",
    imgAlt: "Gus Dialog Box Image",
}

const emily = {
    titleTag: "h2",
    titleText : "Emily",
    textTag: "p",
    bodyText: "Drink in moderation.",
    imgName: emilyDialog,
    imgSrc: "./emily-dialog.png",
    imgAlt: "Emily Dialog Box Image",
}



let contentArrayofObjects = [heading, gus, emily];