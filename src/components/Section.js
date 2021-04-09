import React from 'react';

const Section = ({isEven,...element}) => {

  
  return (
    <div className="section">
      <div className="section-left">
        <h3 className="section-left-title">{element.title}</h3>
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