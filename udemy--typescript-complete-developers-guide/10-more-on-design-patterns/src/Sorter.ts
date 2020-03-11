// Abstract class
// 1) can not be used to instantiate an object directly
// 2) can only be used as a parent class
// 3) can contain real implementation for some methods
// 4) the implemented methods can refer to other methods that don't actually exist yet
//    (we still have to provide names and types for the unimplemented methods)
// 5) can make child classes promise to implement some other method

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  // real implementation
  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

// Interfaces vs Abstract classes
// interfaces...
// - sets up contract between different classes
// - use when we have very different objects that we want to work together
// - promotes loose coupling
// Abstract classes
// - sets up contract between different classes
// - use when  are trying to build up a definition of an object
// - strongly couples classes together
