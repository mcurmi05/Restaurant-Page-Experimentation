import './index.css';

import {renderHome} from "./home.js";
import {renderMenu} from "./menu.js";
import {renderLocations} from "./locations.js";
import {renderGallery} from "./gallery.js";
import {renderOrder} from "./order.js";

const pageDiv = document.querySelector("#page");
const homeBtn = document.querySelector("#homeBtn")
const menuBtn = document.querySelector("#menuBtn");
const locationsBtn = document.querySelector("#locationsBtn");
const galleryBtn = document.querySelector("#galleryBtn")
const orderBtn = document.querySelector("#orderBtn")
export {pageDiv, homeBtn, menuBtn, locationsBtn, galleryBtn, orderBtn};

function clearPage() {
    pageDiv.innerHTML = '';
}
export {clearPage};


//renderHome();

homeBtn.addEventListener('click', renderHome);
menuBtn.addEventListener('click', renderMenu);
locationsBtn.addEventListener('click', renderLocations);
