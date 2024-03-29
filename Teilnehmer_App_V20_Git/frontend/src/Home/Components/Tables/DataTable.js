import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import ModalForm from "../Modals/Modal";
import "./DataTable.css"


class DataTable extends Component {
  deleteItem = (id) => {
    let confirmDelete = window.confirm("Teilnehner wirklich löschen?");
    if (confirmDelete) {
      fetch("http://localhost:3001/stelcon", {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      })
        .then((response) => response.json())
        .then((item) => {
          this.props.deleteItemFromState(id);
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const items = this.props.items.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.first}</td>
          <td>{item.last}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.location}</td>
          <td>{item.education}</td>
          <td>
            <div>
              <ModalForm
                buttonLabel="Bearbeiten"
                item={item}
                updateState={this.props.updateState}
              />{" "}
            </div>
          </td>
          <td>
            <div>
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>
                Löschen{" "}
              </Button>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <Table className="Table">
        <thead >
          <tr>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>E-Mail</th>
            <th>Telefon</th>
            <th>Ort</th>
            <th>Ausbildung</th>
            <th>Bearbeiten</th>
            <th>Löschen</th>
          </tr>
        </thead>
        <tbody
        >{items}</tbody>
      </Table>
    );
  }
}

export default DataTable;
