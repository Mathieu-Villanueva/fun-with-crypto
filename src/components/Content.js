import React from 'react';
import Item from './Item';

const Content = ({isShown, ...element}) => {
  return (
    <div className={`${isShown ? "content shown" : "content"}`}>
      <h4 className="content-title">{element.title}</h4>
      <div className="content-items">
        <Item />
      </div>
    </div>
  );
};

export default Content;