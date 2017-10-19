import React, { Component } from 'react';
import axios from 'axios';

export default class RemoveStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toBeDeleted: props.toBeDeleted
    }
    this.removeStudent = this.removeStudent.bind(this)
  }

  removeStudent () {
    const id = this.state.toBeDeleted;
    axios.delete(`/api/students/${id}`)
      .then(res => res.data)
  }

  render (){
    return (
      <button className="btn btn-default" onClick={this.removeStudent}><span className="glyphicon glyphicon-trash" /></button>
    )
  }
}
