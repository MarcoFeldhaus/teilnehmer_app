import React, { Component } from "react";
import { Button } from "react-bootstrap";
import history from "./../history";
import "./Home.css";
import { Container, Row, Col } from "reactstrap";
import DataTable from "./Components/Tables/DataTable";
import { CSVLink } from "react-csv";

export default class Home extends Component {
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
      <Container className="App">
        <Row>
          <Col>
            <DataTable
              
              items={this.state.items}
              updateState={this.updateState}
              deleteItemFromState={this.deleteItemFromState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CSVLink
              filename={"Teilnehmer.csv"}
              color="primary"
              style={{
                backgroundColor: "#003c71",
                float: "left",
                marginRight: "10px",
              }}
              className="btn btn-primary"
              data={this.state.items}
            >
              Download CSV
            </CSVLink>
            <Button
              style={{ backgroundColor: "#0290D3" }}
              variant="btn btn-success"
              onClick={() => history.push("/Products")}
            >
              Teilnehmer hinzufügen
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
