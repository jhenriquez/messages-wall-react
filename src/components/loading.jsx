import React, { Component } from 'react';
import PropTypes from 'prop-types';

export interface ILoadingPropType {
  message?: string;
}

export default class Loading extends Component<void, ILoadingPropType, void> {
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
}

Loading.propTypes = {
  message: PropTypes.string
};