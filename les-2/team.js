export default class Team {
  constructor(teamName, trainer) {
    this.teamName = "example teamName";
    this.trainer = "example trainer";
    this.roster = [];
  }
  describe() {
    return `team ${this.teamName} with trainer ${
      this.trainer
    } has the following pokemon: ${[this.roster]}`;
    // using [] at this.roster will force the pokemons to get pushed into an array.
  }
}
