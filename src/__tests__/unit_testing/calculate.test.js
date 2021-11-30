import calculate from '../../logic/calculate';

describe('testing the calculate function ', () => {
  const obj = { total: null, next: null, operation: null };
  test('test addition', () => {
    let result = calculate(obj, '4');
    result = calculate(result, '+');
    result = calculate(result, '7');
    result = calculate(result, '=');
    expect(result.total).toBe('11');
  });
  test('test subtraction', () => {
    let result = calculate(obj, '8');
    result = calculate(result, '-');
    result = calculate(result, '3');
    result = calculate(result, '=');
    expect(result.total).toBe('5');
  });
  test('test division', () => {
    let result = calculate(obj, '9');
    result = calculate(result, '÷');
    result = calculate(result, '3');
    result = calculate(result, '=');
    expect(result.total).toBe('3');
  });
  test('test mod', () => {
    let result = calculate(obj, '9');
    result = calculate(result, '%');
    result = calculate(result, '4');
    result = calculate(result, '=');
    expect(result.total).toBe('1');
  });
  test('test multiplication', () => {
    let result = calculate(obj, '2');
    result = calculate(result, 'x');
    result = calculate(result, '7');
    result = calculate(result, '=');
    expect(result.total).toBe('14');
  });
});
