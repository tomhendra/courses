/* Decorators
  - functions that can be used to modify/change/anything different properties/methods in a class
  - not the same as JavaScript decorators
  - used inside/on classes only
  - understanding the order in which decorators are ran is the key to understanding them
  - experimental!
*/

@classDecorator
class Boat {
  @propertyDecorator
  color: string = 'red';

  @propertyDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError('Oops, the boat has sunk!')
  pilot(
    @parameterDecorator speed: string, // index 0
    @parameterDecorator generateWake: boolean // index 1
  ): void {
    if (speed === 'fast') {
      console.log('chugga chugga chugga');
    } else {
      console.log('....silence');
    }

    if (generateWake === true) {
      console.log('swooosh');
    } else {
      console.log('...silence');
    }
  }
}

/* Decorators on a property, method or accessor 
  - first argument is the prototype of the object
  - second argument is the key of the property/method/accessor 
  - third argument is the property descriptor
  - decorators are applied once, when the code for the class is ran, NOT when an instance is created
  - can also apply to static properties, methods and accessors too
*/

/* Decorators used on classes
  - only argument is constructor function
  - can annotate with typeof which is a reference to the constructor function of the class
*/

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

/* Property descriptor for properties 
  - decorators will never be able to access any instance properties on a instance, ever
  - prototype only stores reference to methods
  - decorator is being executed executed before instance is created
*/

function propertyDecorator(target: any, key: string) {
  console.log(key);
}

/* Decorators used on parameters
  - can apply decorators to parameters
  - gives access to index for each parameter passed
*/

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

/* Property descriptor for methods 
  - writable --whether or not this property can be changed
  - enumerable --whether or not this property can be looped over by 'for...in'
  - value --current value
  - configurable --property definition can be changed, and property can be deleted
*/

// decorator factory is a normal function that returns our decorator function
function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
