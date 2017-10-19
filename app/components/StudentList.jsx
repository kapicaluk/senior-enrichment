import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RemoveStudent from './RemoveStudent';


export default class StudentList extends Component {
  constructor () {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount () {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => this.setState({ students }));
  }

  render () {
    const students = this.state.students;
    return (
      <div>
        <br />
        <Link to="/addStudent">
          <button className="btn btn-default">
          <span className="glyphicon glyphicon-user" />
          <span className="glyphicon glyphicon-plus" />
          </button>
        </Link>
        <br />
          {
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Campus</th>
                  <th>Delete</th>
                  <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                {
                  students.map(student => {
                    return (
                      <tr key={student.id}>
                        <td>{ student.id }</td>
                        <td>{ student.name }</td>
                        <td>{ student.campus.name }</td>
                        <td><RemoveStudent toBeDeleted={student.id} /></td>
                        <td>
                          <Link to={`/editStudent/${ student.id }`} >
                            <button className="btn btn-default"><span className="glyphicon glyphicon-pencil" /></button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          }
      </div>
    );
  }
}
