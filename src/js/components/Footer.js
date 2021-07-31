const todaysDate = new Date(Date.now());

export default function Footer(){
    return `

    &copy; ${todaysDate.getFullYear()}
    <a href="https://pokeapi.co/" target= "_blank">Pokemon API</a>
    `;
}