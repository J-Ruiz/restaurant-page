function showClickedContent(clickedElement){
    let id = "popup-" + clickedElement;
    let targetContent = document.getElementById(`${id}`)
    targetContent.style.visibility = "visible";
    return;
};

export default showClickedContent;