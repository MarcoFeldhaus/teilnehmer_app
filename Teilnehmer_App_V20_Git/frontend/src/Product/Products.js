import React, { Component } from "react";
import ModalForm from "../Home/Components/Modals/Modal";
import background from "./Ausbildungen.png";

class Products extends Component {
  state = {
    items: [],
  };

  getItems() {
    fetch("http://localhost:3001/stelcon")
      .then((response) => response.json())
      .then((items) => this.setState({ items }))
      .catch((err) => console.log(err));
  }

  addItemToState = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }));
  };

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex((data) => data.id === item.id);
    const newArray = [
      // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
      // add the updated item to the array
      item,
      // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1),
    ];
    this.setState({ items: newArray });
  };

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: updatedItems });
  };

  componentDidMount() {
    this.getItems();
  }
  render() {
    return (
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundColor: "white",
        height: "700px",
        width: "",
        margin: "30px",
        backgroundRepeat: "no-repeat"
      }}>
        <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
        </div>
        <div style={{ marginTop: "650px", marginLeft: "520px" }}>
          <ModalForm
            buttonLabel="Hier kannst Du Dich als Teilnehmer hinzufügen"
            addItemToState={this.addItemToState}
          />
        </div>
      </div>
    );
  }
}

export default Products;
