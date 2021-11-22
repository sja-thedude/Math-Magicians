/* eslint-disable react/prop-types, react/prefer-stateless-function */
import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { bId, bName } = this.props;

    return (
      <button id={bId} type="button">{bName}</button>
    );
  }
}

export default Button;
