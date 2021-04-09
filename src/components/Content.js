import React from 'react';

const Content = ({...element}) => {
  return (
    <div className="content">
      {element.title}
    </div>
  );
};

export default Content;