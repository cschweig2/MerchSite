import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function ItemCreationForm(props) {
  function handleNewItemFormSubmission(e){
    e.preventDefault();
    props.onNewItemCreation({name: e.target.name.value, description: e.target.description.value, price: e.target.price.value, quantity: e.target.quantity.value, id: v4()});
    console.log(e.target.name.value);
    console.log(e.target.description.value);
    console.log(e.target.price.value);
    console.log(e.target.quantity.value);
    console.log(e.target.id.value);
  }
  return(
    <>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Item Name' />
        <textarea
          name='description'
          placeholder='Item Description' />
        <input
          type='number'
          name='price'
          placeholder='Item Price' />
        <input
          type='number'
          name='quantity'
          placeholder='Item Quantity' />
        <button type="submit">Create Merch Item</button>
      </form>
    </>
  )
}

ItemCreationForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default ItemCreationForm;