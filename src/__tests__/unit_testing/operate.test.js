import operate from '../../logic/operate';

describe('testing operations', () => {
  const operandOne = '5';
  const operandTwo = '9';

  test('test addition', () => {
    const result = operate(operandOne, operandTwo, '+');
    expect(result).toBe('14');
  });
  test('test subtraction', () => {
    const result = operate(operandOne, operandTwo, '-');
    expect(result).toBe('-4');
  });
  test('test multiplication', () => {
    const result = operate(operandOne, operandTwo, 'x');
    expect(result).toBe('45');
  });
  test('test division', () => {
    const result = operate(operandOne, operandTwo, '÷');
    expect(result).toBe('0.55555555555555555556');
  });
  test('test Mod', () => {
    const result = operate(operandOne, operandTwo, '%');
    expect(result).toBe('5');
  });
});
