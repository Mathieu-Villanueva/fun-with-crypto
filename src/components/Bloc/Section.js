import React from 'react';

const Section = ({onClick, isShown, ...element}) => {

  return (
    <div className="section" onClick={onClick} >
      <div className="section-left">
        <h3 className="section-left-title">{element.title}</h3>
        <button className="section-left-button">{isShown ? 'Close' : 'See more'}</button>
      </div>
      <div className="section-right">
        <p className="section-right-description">
          {element.description}
        </p>
      </div>      
    </div>
  );
};

export default Section;