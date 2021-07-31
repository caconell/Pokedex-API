import MoveDetails from "./MoveDetails";

export default{

Pokedex,
setUp,
moveDetail
}

function Pokedex(){
    return `
    
    <form id="searchForm">
    <label for="pName">Name/Id</label>
    <input type="text" id="pName" name="pName" required />
    <input type="submit" id="submit" name="submit" />
    </form>

    <div id="pokemonImage"></div>
    <div id="pokemonId"></div>
    <div id="pokemonName"></div>
    <div id="pokemonType"></div>
    <div id="pokemonHeight"></div>
    <div id="pokemonWeight"></div>
    <div id="pokemonMoves"></div>
    `;
}

function setUp(){
addSearchListener();

}

function addSearchListener(){

    const form = document.getElementById("searchForm");
    form.addEventListener('submit', function(event){
        event.preventDefault();

const number = document.getElementById("pName");
        
        search(number.value);
    });
}

function addMoveListener(){
    const title = document.getElementById("moveListTitle");
    title.addEventListener('click', function(){
        const moves = document.getElementById("moveList");
        moves.toggleAttribute("hidden");
    });
}

function search(value){
fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
.then(response => response.json())
.then(pokemon=>{
setId(pokemon.id);
setName(pokemon.name);
setHeight(pokemon.height)
setWeight(pokemon.weight);
setType(pokemon.types);
setImage(pokemon.sprites);
setMoves(pokemon.moves);
})
.catch(err => console.log(err));
}

function setId(id){
    const element = document.getElementById("pokemonId");
    element.innerHTML = "Dex Number: " + id;
}

function setName(name){
    const element = document.getElementById("pokemonName");
    element.innerHTML = "Name: " + name.charAt(0).toUpperCase() + name.slice(1);
}

function setType(types){
    const element = document.getElementById("pokemonType");
    element.innerHTML = "Type: " + types.map(type =>{ 
        let name =type.type.name;
        return name.charAt(0).toUpperCase() + name.slice(1);
    }).join(',');
}

function setHeight(height){
    const element = document.getElementById("pokemonHeight");
    element.innerHTML = "Height: " + (height/3.048).toFixed(2) +"ft";
}

function setWeight(weight){
    const element = document.getElementById("pokemonWeight");
    element.innerHTML = "Weight: " + (weight/4.536).toFixed(2) +"lbs";
}

function setImage(sprites){
    const element = document.getElementById("pokemonImage");
    element.innerHTML = `<img src= "${sprites.front_default}" />`;  
}

function setMoves(moves){
    const element = document.getElementById("pokemonMoves");
    element.innerHTML = `
    <span id="moveListTitle"><i class="fas fa-caret-down"></i>Moves List</span>
    <ul id="moveList" hidden>
    ${moves.map(move => {
        return`
        <li class='moveName' id='${move.move.name}'>
                    ${move.move.name}
                    </li>
        `;
    }).join('')}   
    </ul> `;
    addMoveListener();
    addMoveDetailListeners(moves);
}

function addMoveDetailListeners(moves){
moves.map(move => {
    const element = document.getElementById(move.move.name);
    element.addEventListener('click', ()=>moveDetail(move.move.url));
})
}

function moveDetail(url){
    const appDiv = document.getElementById("app");
    appDiv.innerHTML = MoveDetails.MoveDetail();
    MoveDetails.setUp(url);
  
}