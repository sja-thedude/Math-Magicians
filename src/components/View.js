/* eslint-disable react/prop-types, react/prefer-stateless-function */
import React, { Component } from 'react';

class View extends Component {
  render() {
    const { vId, currValue } = this.props;

    return (
      <div id={vId}>{currValue}</div>
    );
  }
}

export default View;
