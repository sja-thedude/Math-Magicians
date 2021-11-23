import React, { useState } from 'react';
import View from './View';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (value) => {
    const results = calculate({ total, next, operation }, value);
    setTotal(results.total);
    setNext(results.next);
    setOperation(results.operation);
  };

  return (
    <div id="calculator">
      <View vId="display" total={total} next={next} operation={operation} />
      <Button bId="clear" bName="AC" handleClick={handleClick} />
      <Button bId="del" bName="+/-" handleClick={handleClick} />
      <Button bId="del" bName="%" handleClick={handleClick} />
      <Button bId="div" bName="÷" handleClick={handleClick} />
      <Button bId="seven" bName="7" handleClick={handleClick} />
      <Button bId="eight" bName="8" handleClick={handleClick} />
      <Button bId="nine" bName="9" handleClick={handleClick} />
      <Button bId="mul" bName="x" handleClick={handleClick} />
      <Button bId="four" bName="4" handleClick={handleClick} />
      <Button bId="five" bName="5" handleClick={handleClick} />
      <Button bId="six" bName="6" handleClick={handleClick} />
      <Button bId="sub" bName="-" handleClick={handleClick} />
      <Button bId="one" bName="1" handleClick={handleClick} />
      <Button bId="two" bName="2" handleClick={handleClick} />
      <Button bId="three" bName="3" handleClick={handleClick} />
      <Button bId="add" bName="+" handleClick={handleClick} />
      <Button bId="zero" bName="0" handleClick={handleClick} />
      <Button bId="decimal" bName="." handleClick={handleClick} />
      <Button bId="equal" bName="=" handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
