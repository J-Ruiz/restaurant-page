import "./style.css";
import clearContent from "./clearContent";
import showClickedContent from "./showClickedContent";

let buttons = Array.from(document.querySelectorAll(".p-nav"))

function clickListener(){
    buttons.forEach(button=>{
    button.addEventListener("click", ()=>{  
        clearContent();
        showClickedContent(button.id)
    })
})}

clickListener();