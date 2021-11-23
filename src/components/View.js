/* eslint-disable react/prop-types, react/prefer-stateless-function */
import React, { Component } from 'react';

class View extends Component {
  render() {
    const {
      vId, total, next, operation,
    } = this.props;

    return (
      <div id={vId}>
        {total}
        {operation}
        {next}
      </div>
    );
  }
}

export default View;
