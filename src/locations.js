import "./locations.css";
import {pageDiv, clearPage} from "./index.js"

import locationsImgSrc from "../assets/locations.png";

function renderLocations(){
    clearPage();
    const locationsImg = document.createElement('img');
    locationsImg.id = 'locations';
    locationsImg.classList.add("fade-in");


    setTimeout(() => {
    locationsImg.classList.add("visible");
    }, 100);

    locationsImg.src = locationsImgSrc;
    pageDiv.appendChild(locationsImg);
}

export {renderLocations};