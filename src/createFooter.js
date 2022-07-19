function createFooter(){
    let footerDiv = document.createElement("div");
    footerDiv.setAttribute("id", "footer");
    footerDiv.innerHTML = "Copyright J-Ruiz";
    content.append(footerDiv);
    return;
}

export default createFooter;