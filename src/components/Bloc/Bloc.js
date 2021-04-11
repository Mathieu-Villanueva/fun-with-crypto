import React, { useState } from 'react';
import Content from './Content';
import Section from './Section';

const Block = ({...element}) => {

  const [isShown, setIsShown] = useState(false);

  const showContent = () => {
    setIsShown(!isShown);
  }
  
  return (
    <div className="bloc">
      <Section {...element.section} onClick={showContent}/>
      <Content {...element.content} isShown={isShown} />
    </div>
  );
};

export default Block;