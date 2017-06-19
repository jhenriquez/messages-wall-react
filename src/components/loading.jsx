import React, { Component } from 'react';

type LoadingPropType = { message?: string };

export default class Loading extends Component<void, LoadingPropType, void> {
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