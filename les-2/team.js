export default class Team {
  constructor(teamName, trainer) {
    this.teamName = teamName;
    this.trainer = trainer;
    this.roster = [];
  }
  describe() {
    return `team ${this.teamName} with trainer ${
      this.trainer
    } has the following pokemon: ${[this.roster]}`;
    // using [] at this.roster will force the pokemons to get pushed into an array.
  }

  addPokemon(pokemon) {
    if (this.roster.length <= 6) {
      if (!this.roster.includes(pokemon)) {
        alert(`The pokemon ${pokemon} has been succesfully added to the team!`);
      } else {
        alert("This pokemon is already part of your roster");
      }
      // this.roster.push(pokemon);
    } else {
      alert("The roster is full");
    }
  }
}
