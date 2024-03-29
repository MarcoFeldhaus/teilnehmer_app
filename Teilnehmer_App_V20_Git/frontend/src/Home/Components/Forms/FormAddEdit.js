import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Select from 'react-select';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    first: "",
    last: "",
    email: "",
    phone: "",
    location: "",
    education: "Bürokauffrau /-kaufmann"
  };


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitFormAdd = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/stelcon", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        phone: this.state.phone,
        location: this.state.location,
        education: this.state.education,
      }),
    })
      .then((response) => response.json())
      .then((item) => {
        if (Array.isArray(item)) {
          this.props.addItemToState(item[0]);
          this.props.toggle();
        } else {
          console.log("failure");
        }
      })
      .catch((err) => console.log(err));
  };

  submitFormEdit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/stelcon", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.state.id,
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        phone: this.state.phone,
        location: this.state.location,
        education: this.state.education,
      }),
    })
      .then((response) => response.json())
      .then((item) => {
        if (Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0]);
          this.props.toggle();
        } else {
          console.log("failure");
        }
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const { id, first, last, email, phone, location, education } =
        this.props.item;
      this.setState({ id, first, last, email, phone, location, education });
    }
  }

  educations = [
    { label: 'Bürokauffrau /-kaufmann', value: 'Bürokauffrau /-kaufmann' },
    { label: 'Industriekauffrau /-kaufmann', value: 'Industriekauffrau /-kaufmann' },
    { label: 'Bauzeichner /-in', value: 'Bauzeichner /-in' },
    { label: 'Baustoffprüfer /-in', value: 'Baustoffprüfer /-in' },
    { label: 'Betonfertigteilbauer /-in', value: 'Betonfertigteilbauer /-in' },

  ]

  render() {
    return (
      <Form
        onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}
      >
        <FormGroup>
          <Label for="first">Vorname</Label>
          <Input
            type="text"
            name="first"
            id="first"
            onChange={this.onChange}
            value={this.state.first === null ? "" : this.state.first}
          />
        </FormGroup>
        <FormGroup>
          <Label for="last">Nachname</Label>
          <Input
            type="text"
            name="last"
            id="last"
            onChange={this.onChange}
            value={this.state.last === null ? "" : this.state.last}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">E-Mail</Label>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={this.onChange}
            value={this.state.email === null ? "" : this.state.email}
            placeholder=""
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Telefon</Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            onChange={this.onChange}
            value={this.state.phone === null ? "" : this.state.phone}
            placeholder="Pflichtfeld"
          />
        </FormGroup>
        <FormGroup>
          <Label for="location">Ort</Label>
          <Input
            type="text"
            name="location"
            id="location"
            onChange={this.onChange}
            value={this.state.location === null ? "" : this.state.location}
            placeholder="PLZ, Ort"
          />
        </FormGroup>
        <FormGroup>
          <Label for="education">Ausbildung</Label>
          <Select
            id="education"
            name="education"
            onChange={(e) => {
              console.log({ e })
              this.setState({ education: e.value })
            }}
            options={this.educations}
            value={{ value: this.state.education, label: this.state.education }}
            isSearchable={true}
          />
        </FormGroup>
        <Button>Speichern</Button>
      </Form>
    );
  }
}

export default AddEditForm;
