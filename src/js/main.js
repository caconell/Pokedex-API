import Header from "./components/Header";
import Footer from "./components/Footer";
import pokedex from "./components/pokedex";


export default() => {
setupPage();

navPokedex();
}

function setupPage(){
    const headerElement = document.querySelector(".header");
    headerElement.innerHTML = Header();

    const footerElement = document.querySelector(".footer");
    footerElement.innerHTML = Footer();
    addNavPokedexListener();
}

function addNavPokedexListener(){
    const pokedexNavButton = document.querySelector(".nav_pokedex");
    pokedexNavButton.addEventListener('click', function(){
        navPokedex();
      
    });
}

function navPokedex(){
    const appDiv = document.getElementById("app");
    appDiv.innerHTML = pokedex.Pokedex();
    pokedex.setUp();
}