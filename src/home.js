import './home.css';
import {pageDiv, clearPage} from "./index.js"

function renderHome() {

    clearPage();

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    const homeTitle = document.createElement("h1");
    homeTitle.id = "home-title";
    homeTitle.textContent = 'OKAMI JAPANESE';
    homeContainer.appendChild(homeTitle);

    const homeSubtitle = document.createElement("h2");
    homeSubtitle.id = "home-subtitle";
    homeSubtitle.textContent = 'All you can eat for 42.80 PP';
    homeContainer.appendChild(homeSubtitle);

    pageDiv.appendChild(homeContainer);
    
}

export {renderHome};

    

    






















