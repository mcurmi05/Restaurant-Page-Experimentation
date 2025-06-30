import "./menu.css";
import {pageDiv, clearPage} from "./index.js"

import menuImgSrc from "../assets/menu.jpg";

function renderMenu(){
    clearPage();
    const menuImg = document.createElement('img');
    menuImg.id = 'menu';
    menuImg.classList.add("fade-in");


    setTimeout(() => {
    menuImg.classList.add("visible");
    }, 100);

    menuImg.src = menuImgSrc;
    pageDiv.appendChild(menuImg);
}

export {renderMenu};