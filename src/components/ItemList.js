import React from 'react';
import Item from './Item';
import PropTypes from "prop-types";

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
      {props.itemList.map((item) =>
        <Item name={item.name}
        description={item.description}
        price={item.price}
        quantity={item.quantity}
        id={item.id}
        key={item.id}/>
      )}
    </React.Fragment>
  );
}

ItemList.propTpyes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
}

export default ItemList;