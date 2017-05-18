import React from 'react';

const Loading = (props) => {
  return (
    <div id="loading-container">
      <div>
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      </div>
      { props.message ? <p>{ props.message }</p> : null }
    </div>
  );
};

export default Loading;