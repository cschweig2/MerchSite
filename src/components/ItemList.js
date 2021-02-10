import React from 'react';
import Item from './Item';

// const tempItem = [
//   {
//   name: 'Coozie',
//   description: 'Keep yr drink cold',
//   price: 10,
//   quantity: 10
//   }
// ];

function ItemList(props) {
  return(
    <React.Fragment>
      {props.itemList.map((item, index) =>
        <Item name={item.name}
        description={item.description}
        price={item.price}
        quantity={item.quantity}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default ItemList;