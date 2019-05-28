const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('Should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('Should generate a greeting with provided name', () => {
    const result = generateGreeting('Tom');
    expect(result).toBe('Hello Tom!')
});

test('Should generate a greeting with default name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!')
});
