import React, { Component } from 'react';
import View from './View';
import Button from './Button';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
          currValue: '0',
    };
  }

    handleClick = () => {

    }

    render() {
      const { currValue } = this.state;

      return (
          <div id="calculator">
              <View vId="display" currValue={currValue} />
              <Button bId="clear" bName="AC" handleClick={this.handleClick} />
              <Button bId="del" bName="+/-" handleClick={this.handleClick} />
              <Button bId="del" bName="%" handleClick={this.handleClick} />
              <Button bId="div" bName="/" handleClick={this.handleClick} />
              <Button bId="seven" bName="7" handleClick={this.handleClick} />
              <Button bId="eight" bName="8" handleClick={this.handleClick} />
              <Button bId="nine" bName="9" handleClick={this.handleClick} />
              <Button bId="mul" bName="x" handleClick={this.handleClick} />
              <Button bId="four" bName="4" handleClick={this.handleClick} />
              <Button bId="five" bName="5" handleClick={this.handleClick} />
              <Button bId="six" bName="6" handleClick={this.handleClick} />
              <Button bId="sub" bName="-" handleClick={this.handleClick} />
              <Button bId="one" bName="1" handleClick={this.handleClick} />
              <Button bId="two" bName="2" handleClick={this.handleClick} />
              <Button bId="three" bName="3" handleClick={this.handleClick} />
              <Button bId="add" bName="+" handleClick={this.handleClick} />
              <Button bId="zero" bName="0" handleClick={this.handleClick} />
              <Button bId="decimal" bName="." handleClick={this.handleClick} />
              <Button bId="equal" bName="=" handleClick={this.handleClick} />
            </div>
      );
    }
}

export default Calculator;
