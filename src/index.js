import "./style.css";
import clearContent from "./clearContent";
import showClickedContent from "./showClickedContent";
import createTitle from "./createTitle";
import createPopupWindows from "./createPopupWindows";
import createFooter from "./createFooter";

let content = document.getElementById("content");

createTitle();
createPopupWindows();
createFooter();

function clickListener(){
    let buttons = Array.from(document.querySelectorAll(".p-nav"));
    buttons.forEach(button=>{
    button.addEventListener("click", ()=>{  
        clearContent();
        showClickedContent(button.id)
    })
})};

clickListener();