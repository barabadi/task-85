import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
});

const pokemonCount = 10;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}`;
const pokemonList = document.getElementById("pokemon-list");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((pokemon) => {
      const pokemonItem = document.createElement("li");
      pokemonItem.innerText = pokemon.name;
      pokemonList.appendChild(pokemonItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching Pokemons:", error);
  });
