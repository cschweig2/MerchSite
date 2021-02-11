import React from 'react';
import Item from './Item';
import PropTypes from "prop-types";



function ItemList(props) {
  
  return(
    <React.Fragment>
      {props.itemList.map((item) =>
        <Item 
        whenItemClicked = {props.onItemSelection}
        name={item.name}
        description={item.description}
        price={parseInt(item.price)}
        quantity={parseInt(item.quantity)}
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