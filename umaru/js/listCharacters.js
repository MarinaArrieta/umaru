import { conexionAPI } from "./conexionAPI.js";

const listCharacters = document.querySelector("[data-lista]");

function createCard(nombre, nombreJapones, tipo, descripcion, imagen) {
    const liCharacter = document.createElement("li");
    Object.assign(liCharacter.style, {
        width: "80%",
        padding: "15px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap: "20px",
        borderRadius: "20px",
        background: "linear-gradient(132deg, #FF9800 17%, #faadff99 51%, #ffecd2 94%)",
        border: "1px solid white"
    });
    liCharacter.onmouseenter = () =>{
        liCharacter.style.border = "2px solid #4d3630";
        liCharacter.style.cursor = "pointer";
    } 
    liCharacter.onmouseleave = () =>{
        liCharacter.style.border = "1px solid white";
        liCharacter.style.cursor = "default";
    } 
    liCharacter.className = "character__item";
    liCharacter.innerHTML = `
        <figure style="width: 147px; height: 140px; border-radius: 70px; overflow: hidden; filter: drop-shadow(2px 4px 3px black);">
            <img src="${imagen}" alt="nombre" style="width: 100%; height: 100%">
        </figure>
        <article style="padding: 15px; display: flex; flex-direction: column; gap: 13px;">
            <h2 style="text-align:center; color:#4d3630">${nombreJapones} <br><br> ${nombre}</h2>
            <h3 style="width:100%; color:#4d3630">Tipo</h3>
            <p style="width:100%; color:#4d3630; font-family:monospace; font-size:1rem">${tipo}</p>
            <h3 style="width:100%; color:#4d3630">Descripcion</h3>
            <p style="width:100%; color:#4d3630; font-family:monospace; font-size:1rem">${descripcion}</p>
        </article>
    `;

    return liCharacter;
}

async function characters() {
    const listAPI = await conexionAPI.umaruChan();

    listAPI.forEach(character => {
        listCharacters.appendChild(createCard(character.nombre, character.nombreJapones, character.tipo, character.descripcion, character.imagen));
    });
}

characters();