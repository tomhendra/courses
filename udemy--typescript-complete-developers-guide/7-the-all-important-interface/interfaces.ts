// An interface creates a new type, describing he property names and value types of an object

// general strategy for reusable code in TS:
// 1) Create functions that accept arguments that are typed with interfaces
// 2) Objects / Classes can decide to 'implement'  given interface to work with a function

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
