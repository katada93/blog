const sum = (a: number, b: number) => a + b;

describe('Button', () => {
  test('true is true', () => {
    expect(true).toBe(true);
  });
  test('true sum fn', () => {
    expect(sum(2, 3)).toBe(5);
  });
});