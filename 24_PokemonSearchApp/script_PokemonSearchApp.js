const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchForm = document.getElementById("search-form");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const pokemonImage = document.getElementById("pokemon-img");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const getPokemon = async () => {
    try {
        const pokemonNameOrId = searchInput.value.toLowerCase();
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
        const data = await res.json();

        // Set Pokémon info
        pokemonName.textContent = `${data.name.toUpperCase()}`;
        pokemonId.textContent = `#${data.id}`;
        height.textContent = `Height: ${data.height}`;
        weight.textContent = `Weight: ${data.weight}`;
        pokemonImage.innerHTML = `
            <img id="img" src="${data.sprites.front_default}" alt="${data.name}">
        `;

        //Set Stats
        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;

        //Set types
        types.innerHTML = data.types
            .map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`)
            .join('');
    } catch (err) {
        resetDisplay();
        alert('Pokémon not found')
        console.log(`Pokémon not found: ${err}`);
    }
};

const resetDisplay = () => {
    const img = document.getElementById("img");
    if (img) img.remove();

    pokemonName.textContent = '';
    pokemonId.textContent = '';
    types.innerHTML = '';
    height.textContent = '';
    weight.textContent = '';
    hp.textContent = '';
    attack.textContent = '';
    defense.textContent = '';
    specialAttack.textContent = '';
    specialDefense.textContent = '';
    speed.textContent = '';
};

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    getPokemon();
});