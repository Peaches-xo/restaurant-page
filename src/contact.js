// Module to load CONTACT MODULE content

export { contactPageLoad };

//function that creates div, adds content and appends to dom
function contactPageLoad(){
    console.log("contactPageLoad is loaded");

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


// create component class or factory to be able to create each component 
// header and footer could be the same 
// each of the wrappers could be the same 



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
    imgSrc: "",
    imgAlt: "",
}

const emily = {
    titleTag: "h2",
    titleText : "Emily",
    textTag: "p",
    bodyText: "Drink in moderation.",
    imgSrc: "",
    imgAlt: "",
}



let contentArrayofObjects = [heading, gus, emily];