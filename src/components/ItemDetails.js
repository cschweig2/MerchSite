import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props){
  const {item} = props;
  return(
    <>
      <h1>Item Detail</h1>
      <h3>Item Name: {item.name}</h3>
      <p>Description: {item.description}</p>
      <p>${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <hr/>
    </>
  )
}
ItemDetail.propTypes ={
  item: PropTypes.object
}
export default ItemDetail;