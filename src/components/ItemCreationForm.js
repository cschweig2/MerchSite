import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function ItemCreationForm(props) {
  function handleNewItemFormSubmission(e){
    e.preventDefault();
    props.onNewItemCreation({name: e.target.name.value, description: e.target.description.value, price: e.target.price.value, quantity: e.target.quantity.value, id: v4()});
  }
  return(
    <>
        <ReusableForm
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText = "Create New Item" />
    </>
  );
}

ItemCreationForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default ItemCreationForm;