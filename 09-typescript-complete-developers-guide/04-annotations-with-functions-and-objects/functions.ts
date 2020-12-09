/*

Type annotations for functions 
- Code we we add to tell TS hat type of arguments a function will receive and what type of values it will return.

Type inference for functions
- TypeScript tries to figure out what type of value a function will return

*/

// should always use return annotations so that TS knows we intend to return something
// if we forget to use return keyword, no error without return annotation
const add = (a: number, b: number) => {
  a + b;
};

const subtract = (a: number, b: number): number => {
  return a + b;
};

// alternative syntax...
function divide(a: number, b: number): number {
  return a / b;
}

// works for anonymous functions too...
const multiply = function(a: number, b: number): number {
  return a * b;
};

// void type used when function doesn't return anything (it can return null or undefined)
const logger = (message: string): void => {
  console.log(message);
};

// never type used when we absolutely never ever expect anything to return
const throwError = (message: string): never => {
  throw new Error(message);
};

// destructuring...
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
