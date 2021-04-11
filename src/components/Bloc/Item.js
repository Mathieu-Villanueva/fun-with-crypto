import React from 'react';

const Item = ({...element}) => {

  return (
    <div className="item-card">
      <h4 className="item-card-title">{element.title}</h4>
      <p className='item-card-span'>{element.span}</p>
      <p className="item-card-content">{element.content}</p>
    </div>
  );
};

export default Item;