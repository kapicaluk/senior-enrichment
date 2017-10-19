import React, { Component } from 'react';
import axios from 'axios';

export default class EditStudent extends Component {
  constructor () {
    super();
    this.state = {
      campuses: [],
      student: {},
      studentId: '',
      studentName: '',
      studentEmail: '',
      selectedCampus: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    const id = this.props.match.params.studentId
    axios.all([
      axios.get('/api/campuses'),
      axios.get(`/api/students/${id}`)
    ])
    .then(axios.spread((campuses, student) => {
      this.setState({ campuses: campuses.data, student: student.data })
    }))
  }

  handleChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit (evt) {
    let id = this.state.student.id
    let campus = Number(this.state.selectedCampus) || 1
    console.log('and the winner is: ', typeof campus, campus)
    axios.put(`/api/students/${id}`, { name: this.state.studentName, email: this.state.studentEmail, campusId: campus})
      .then(res => res.data)
    evt.preventDefault();
  }

  render () {
    const campuses = this.state.campuses;
    const student = this.state.student;

    return (
      <div className="container">
        <br />
        <form onSubmit={ this.handleSubmit }>
          <h3>Edit "{ student.name }" </h3>
          <br />
          Student Name: <br />
          <input className="form-control" type="text" name="studentName" value={ `${ student.name }` } onChange={ this.handleChange } /><br />
          E-Mail: <br />
          <input className="form-control" type="text" name="studentEmail" value={ `${ student.email }` } onChange={ this.handleChange } /><br />
          Select A Campus: <br />
          <select className="form-control" selected={ `${ student.campusId }` } name="selectedCampus" form="Campuses" onChange={ this.handleChange }>
            <option disabled="disabled"> Campuses </option>
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


    );
  }
}
