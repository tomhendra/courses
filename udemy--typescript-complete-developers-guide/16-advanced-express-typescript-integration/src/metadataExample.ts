import 'reflect-metadata';

// const plane = {
//   color: 'purple'
// };

// params... (key, value, object, property)
// Reflect.defineMetadata('note', 'meta know better', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);

// Reflect.defineMetadata('note', 'I am the meta mofo', plane);
// Reflect.defineMetadata('height', 100, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);

@printMetadata
class Plane {
  color: string = 'mauve';

  @markFunction('shhhhhh')
  fly(): void {
    console.log('vrrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}
