import React from 'react';
import ItemList from './ItemList';
import AddItem from'./AddItem';
import ItemCreationForm from './ItemCreationForm';
import ItemDetails from './ItemDetails';

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    // Initial state definitions will go here
    }
  }

  // event handlers go here

  render() {
    // Conditional change state actions go here using callbacks of event handlers
    return(
      <React.Fragment>
        <ItemList/>
        <AddItem />
        <ItemCreationForm />
        <ItemDetails />
      </ React.Fragment>
    )
  }
}

//PropTypes will go here

export default ItemControl;