/* eslint-disable react/prop-types, react/prefer-stateless-function */
import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { bId, bName, handleClick } = this.props;

    return (
      <button
        id={bId}
        type="button"
        onClick={() => handleClick(bName)}
      >
        {bName}
      </button>
    );
  }
}

export default Button;
