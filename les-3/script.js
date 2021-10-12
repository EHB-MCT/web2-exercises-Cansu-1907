function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = function () {
  //   let form = document.getElementById("form");
  let randoNr = 0;
  let input = document.getElementById("inputfield");
  //button
  let button = document.getElementById("button");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let userNr = parseInt(input.value);
    randoNr = randomNumber(1, 20);
    console.log(randoNr);
    // console.log("button works");
    console.log(userNr);

    if (userNr > 20) {
      alert("That is not a valid number");
    } else if (userNr < randoNr) {
      alert("The mystery number is higher. Guess again!");
    } else if (userNr > randoNr) {
      alert("The mystery number is lower. Guess again!");
    } else if ((userNr = randoNr)) {
      alert("you have guessed the mystery number");
    }
  });
};
