// A class is a blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'

// modifiers:
// 1) public: Method can be called ny where, any time
// 2) private: Method can only be called by other methods in this class
// 3) protected: Method can only be called by other methods in this class, or by other methods on child classes

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep, beep!');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('Vroooom!');
  }

  startDrivingMethod(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('silver');
console.log(vehicle.color);

const car = new Car(4, 'blue');
car.startDrivingMethod();
