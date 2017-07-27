import React from 'react';

const Content = (props) => {
  return(
      <div className="content-section">
        <h3 className="section-header">Who I am:</h3>
        <p>{ props.about } </p>
      </div>
  )
}
export default Content;
