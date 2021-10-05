"use strict";

// import team from "./team.js";

let list = [];
let pokemon = [];
function dataAPI() {
  fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then((response) => response.json())
    .then((data) => {
      list = data.results;
      console.log(data);
      //loop over the list for each pokemon
      for (let element of list) {
        fetch(element.url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            pokemon.push(data);
          });
      }
    });
}
dataAPI();

window.onload = function () {
  dataAPI();

  setTimeout(buildList, 1000);

  function buildList() {
    console.log(pokemon);
    let html = "";
    pokemon.forEach((e) => {
      html += `<div>
      <img class="img" src="${e.sprites.back_default}" alt="">
      <div class="card-body">
          <h5 class="name">${e.name}</h5>
          <p class="type">${e.types}</p>
          <a href="" class="button">add to team</a>
      </div>
  </div>`;
    });
    document.getElementById("list").innerHTML = html;
  }
};

//-------SHORTCUT-------//
// async function getDataV2() {
//     let resp = await fetch('');
//     return await resp.json
// }
