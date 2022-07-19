function createTitle(){
    let titleDiv = document.createElement("div");
    titleDiv.setAttribute("id", "title");

    let title = document.createElement("p");
    title.setAttribute("id", "curry-house");
    title.innerHTML = "Curry House";

    let navDiv = document.createElement("div");
    navDiv.setAttribute("id", "nav");

    let home = document.createElement("p");
    home.setAttribute("id", "home");
    home.setAttribute("class", "p-nav");
    home.innerHTML = "Home";

    let menu = document.createElement("p");
    menu.setAttribute("id", "menu");
    menu.setAttribute("class", "p-nav");
    menu.innerHTML = "Menu";

    let contact = document.createElement("p");
    contact.setAttribute("id", "contact");
    contact.setAttribute("class", "p-nav");
    contact.innerHTML = "Contact";

    navDiv.append(home, menu, contact)
    titleDiv.append(title, navDiv);
    
    content.append(titleDiv);

    return;
};

export default createTitle;