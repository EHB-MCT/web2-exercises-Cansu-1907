"use strict";

const list = [];
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

  setTimeout(buildList, 4000);

  function buildList() {
    let html = `<div>
    <img class="img" src="" alt="">
    <div class="card-body">
        <h5 class="name"></h5>
        <p class="type"></p>
        <a href="" class="button">add to team</a>
    </div>
</div>`;
  }
};

//-------SHORTCUT-------//
// async function getDataV2() {
//     let resp = await fetch('');
//     return await resp.json
// }

// export default class Pokemon {
//   constructor(name) {
//     this.name = name;
//   }
// }
