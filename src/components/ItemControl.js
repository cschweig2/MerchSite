import React from 'react';
import ItemList from './ItemList';
//import AddItem from'./AddItem';
import ItemCreationForm from './ItemCreationForm';
import ItemDetails from './ItemDetails';
import EditItemForm from './EditItemForm';



class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [
        {
        name: "Coozie",
        description: "your drink is cold",
        price: 200,
        quantity: 10,
        id: 1,
        key: 3
        }
      ],
      selectedItem: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => { 
    if (this.state.selectedItem != null){
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
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

  handleEditClick = () => {
    console.log("handleEditClick reached");
    this.setState({editing: true});
  }

  handleChangeItemQuantityClick = (itemToEdit) => {
    const editedMasterItemList = this.state.masterItemList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      masterItemList: editedMasterItemList,
    });
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMasterItemList = this.state.masterItemList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      masterItemList: editedMasterItemList,
      editing: false,
      selectedItem: null
    });
  }

  render() {
    
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editing){
      currentlyVisibleState = 
      <EditItemForm 
      item = {this.state.selectedItem} 
      onEditItem = {this.handleEditingItemInList}/>
      buttonText = "Return to Item List";
    } else if (this.state.selectedItem != null){
      currentlyVisibleState = 
      <ItemDetails 
      item = {this.state.selectedItem} 
      onClickingDelete = {this.handleDeletingItem}
      onClickingEdit = {this.handleEditClick} 
      onChangingItemQuantityClick = {this.handleChangeItemQuantityClick}/>
      buttonText = "Return to Item List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <ItemCreationForm onNewItemCreation={this.handleAddingNewItemToList}/>;
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.masterItemList} onItemSelection={this.handleChangingSelectedItem}/>;
      buttonText = "Add Item";
    }

    return(
      <React.Fragment>
        {this.state.masterItemList[0] === undefined && 
        currentlyVisibleState.props.items !== undefined ? "There are no items currently in the store." : ""}
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </ React.Fragment>
    )
  }
}

export default ItemControl;