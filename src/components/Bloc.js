import React, { useEffect, useState } from 'react';
import Content from './Content';
import Section from './Section';

const Block = ({...element}) => {
  
	const [isEven, setIsEven] = useState(false);

  useEffect(() =>{
      if (element.id%2 === 0) {
        setIsEven('even')
      }else{
        setIsEven('odd')
      }
  },[element.id])
  

  return (
    <div className="bloc">
      <Section {...element.section} isEven={isEven}/>
      <Content {...element.content} />
    </div>
  );
};

export default Block;