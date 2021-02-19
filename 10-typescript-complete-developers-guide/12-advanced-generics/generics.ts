class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// generic class
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// type inference
const arr = new ArrayOfAnything(['a', 'b', 'c']);

// Example of generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);

// Generic constraints

class Car {
  print() {
    console.log('I am a Car');
  }
}

class House {
  print() {
    console.log('I am a House');
  }
}

interface Printable {
  print(): void;
}

function printCarsOrHouses<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printCarsOrHouses<Car>([new Car(), new Car()]);
printCarsOrHouses<House>([new House(), new House()]);
