(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    findNames(n) {
      // Your code here.
      return fetch("https://pokeapi.co/api/v2/pokemon?limit=" + n)
        .then((response) => response.json())
        .then((json) => {
          let pokemonNames = json.results.map((pokemon) => pokemon.name);
          return pokemonNames;
        })
        .catch((err) => {
          console.log("Try again!");
        });
    }

    // This should return an array of all the Pokemon that are under a particular weight.

    findUnderWeight(weight) {
      //   // Your code here.

      return fetch("https://pokeapi.co/api/v2/pokemon?limit=" + 10)
        .then((response) => response.json())
        .then((json) => {
          return Promise.all(json.results.map((path) => fetch(path["url"])));
        })
        .then((resps) => {
          return Promise.all(resps.map((res) => res.json()));
        })
        .then((pokemons) => {
          return pokemons.filter((pokemon) => pokemon.weight < weight);
        })
        .catch((err) => {
          console.log("Try again!");
        });
      // ** LIMIT TO THE FIRST 10 POKEMON
      // We don't want to make too many unnecessary calls to the Pokemon API
    }
  }

  window.Pokemonager = Pokemonager;
})();
