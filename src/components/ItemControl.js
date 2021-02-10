import React from 'react';
import ItemList from './ItemList';
//import AddItem from'./AddItem';
import ItemCreationForm from './ItemCreationForm';
import ItemDetails from './ItemDetails';


class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [],
      selectedItem: null
    // Initial state definitions will go here
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => { 
    if (this.state.selectedItem != null){
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleDeletingItem = (id) => {
    const newMasterItemList = this.state.masterItemList.filter(item => item.id !== id);
    this.setState({
      masterItemList: newMasterItemList,
      selectedItem: null
    });
  }

  render() {
    
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedItem != null){
      currentlyVisibleState = <ItemDetails item = {this.state.selectedItem} onClickingDelete = {this.handleDeletingItem}/>
      buttonText = "Return to Item List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <ItemCreationForm onNewItemCreation={this.handleAddingNewItemToList}/>;
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.masterItemList} onItemSelection={this.handleChangingSelectedItem}/>;
      buttonText = "Add Item";
    }
    // Conditional change state actions go here using callbacks of event handlers
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        {/* <ItemList/>
        <AddItem />
        <ItemCreationForm />
        <ItemDetails /> */}
      </ React.Fragment>
    )
  }
}

//PropTypes will go here

export default ItemControl;