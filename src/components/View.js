/* eslint-disable react/prop-types, react/prefer-stateless-function */
import React, { Component } from 'react';

class View extends Component {
  render() {
    const {
      id, total, next, operation,
    } = this.props;

    return (
      <div id={id}>
        {total}
        {operation}
        {next}
      </div>
    );
  }
}

export default View;
