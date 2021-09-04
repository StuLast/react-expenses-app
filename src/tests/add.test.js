
const add = (a, b) => a + b

test('It adds two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
})