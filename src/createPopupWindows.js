function createPopupWindows(){
    let popupDiv = document.createElement("div");
    popupDiv.setAttribute("id", "popup");

    let popupHomeDiv = document.createElement("div");
    popupHomeDiv.setAttribute("id", "popup-home");
    popupHomeDiv.setAttribute("class", "popups");

    let popupHomeParagraph = document.createElement("p");
    popupHomeParagraph.innerHTML = "Where the Curries of Thailand and India Coalesce";
    
    popupHomeDiv.append(popupHomeParagraph);

    let popupMenuDiv = document.createElement("div");
    popupMenuDiv.setAttribute("id", "popup-menu");

    let popupMenuImage = document.createElement("img");
    popupMenuImage.setAttribute("src", "Restaurant Page Menu.png");
    popupMenuImage.setAttribute("alt", "Curry House Menu");

    popupMenuDiv.appendChild(popupMenuImage);

    let popupContactDiv = document.createElement("div");
    popupContactDiv.setAttribute("id", "popup-contact");
    
    let operationHours = document.createElement("h2");
    operationHours.innerHTML = "Hours of Operation";

    let operationDays = document.createElement("p");
    operationDays.innerHTML = "Mon-Sat:  11:00 AM - 10:00 PM" + "<br>" + "Sunday: 11:00 AM - 9:00 PM" + "<br>" +"Contact Us: 555-555-5555";

    popupContactDiv.append(operationHours, operationDays);

    popupDiv.append(popupHomeDiv, popupMenuDiv, popupContactDiv);

    content.append(popupDiv);

    return;
};

export default createPopupWindows;