// Module to load HOME MODULE content

//export this function below
export { homePageLoad };

//function that creates div, adds content and appends to dom
function homePageLoad(){

    //CREATES THE DIV
    const content = document.createElement('div');
    content.id = "content";

    //ADDS CONTENT
    //function that creates section
    //appends to content
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


//a way to create each section object then append them all to one element and return that element

/* create function, pass in array of objects,
for each object: 
    create div with class of wrapper
    Create heading element using value of titleTag
    Set text of heading using TitleText 
    append heading to wrapper
    Create p element (if req)
    Set text of p 
    append p to wrapper
    Create img element (if req)
    Set src of img
    append img to wrapper
    append wrapper to content
*/



const heading = {
    titleTag: "h1",
    titleText : "The Stardrop Saloon",
}

const about = {
    titleTag: "h2",
    titleText: "About",
    textTag: "p",
    bodyText: "The Stardrop Saloon is owned by Gus, and is located in the center of Pelican Town. It's a meeting place for many villagers, and hosts a variety of entertainment, including fully playable arcade machines, a jukebox, and a Joja Cola soda machine.",
    imgSrc: "/src/saloon.png",
    imgAlt: "Stardw Valley Stardrop Saloon",
    style: "width: 250px",
}

const hours = {
    titleTag: "h2",
    titleText: "Hours",
    textTag: "p",
    bodyText: "12:00pm - 12:00am",
}

const location = {
    titleTag: "h2",
    titleText: "Location",
    textTag: "p",
    bodyText: "The Stardrop Saloon is located in the center of Pelican Town.",
    imgSrc : "/src/Map.png",
    imgAlt: "Stardew Valley Map",
}

let contentArrayofObjects = [heading, about, hours, location];

