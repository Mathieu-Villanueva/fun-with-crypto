import React from 'react';
import Item from './Item';

const Content = ({isShown, onClick, ...element}) => {

  const items = element.item
  return (
    <>
    <div className={`${isShown ? "content shown" : "content"}`}>
      <h4 className="content-title">{element.title}</h4>
      <div className="content-items">
        {items.map((element) => (
        <Item key={element.title} {...element}/>))}
      </div>
    </div>
    <button
        className={`${isShown ? "content-btn shown" : "content-btn"}`}
        onClick={onClick}>
          Close
        </button>
    </>
  );
};

export default Content;