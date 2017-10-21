import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

export default class AddStudent extends Component {
  constructor () {
    super();
    this.state = {
      campuses: [],
      studentName: '',
      studentEmail: '',
      selectedCampus: '',
      fireRedirect: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => this.setState({ campuses }));
  }

  handleChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit (evt) {
    axios.post('/api/students', { name: this.state.studentName, email: this.state.studentEmail, campusId: this.state.selectedCampus })
      .then(res => res.data)
      .then(() => this.setState({fireRedirect: true}))
    evt.preventDefault();
  }

  render () {
    const campuses = this.state.campuses;
    return (
      <div className="container">
        <br />
        <div className="input-group input-group-lg">
        <form onSubmit={ this.handleSubmit }>
          <h1> Add Student </h1>
          <br />
          Student Name: <br />
          <input className="form-control" type="text" name="studentName" placeholder="Student Name" onChange={ this.handleChange } /><br />
          E-Mail: <br />
          <input className="form-control" type="text" name="studentEmail" placeholder="E-Mail Address" onChange={ this.handleChange } /><br />
          Select A Campus: <br />
          <select className="form-control" name="selectedCampus" form="Campuses" onChange={ this.handleChange }>
            <option selected="true" disabled="disabled"> Campuses </option>
            {
              campuses.length && campuses.map(campus => {
                return (
                  <option value={ campus.id } key={ campus.id }>{ campus.name }</option>
                );
              })
            }
          </select>
          <br />
          <button className="btn btn-success" type="submit" value="submit">Submit</button>
        </form>
        </div>
         {this.state.fireRedirect && (
          <Redirect to="/students" />
        )}

      </div>
    );
  }
}
