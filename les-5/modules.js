// import fs from "fs/promises";

// try {
//   let result = await fs.readFile("boardgames.json");
//   console.log(result);
//   let data = JSON.parse(result);
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

import * as fs from "fs/promises";

let result = await fs.readFile("boardgames.json");

let data = JSON.parse(result);
console.log(data);
let student = {
  name: 'Cansu',
  age: 32
}

let list = [1, 2, 3, 4, 5]
for (let i of list) {    // dit is een loop zoals i in development 1
  console.log(i);
}

for (let id in data) {
  console.log(data[id]);
}









// let list = [1, 2, 3, 4, 5]
// for (let i of list) {    // dit is een loop zoals i in development 1
//   console.log(i);
// }
