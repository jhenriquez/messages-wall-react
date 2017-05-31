import React, { Component } from 'react';

export default class Loading extends React.Component {
  render() {
    return (
      <div className="loading-container">
        <div>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </div>
        { this.props.message ? <p>{ this.props.message }</p> : null }
      </div>
    );
  }
};