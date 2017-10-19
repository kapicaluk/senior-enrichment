import React, { Component } from "react";
import axios from "axios";

export default class Campus extends Component {
  constructor() {
    super();
    this.state = {
      campus: {},
      students: []
    };
  }
  componentDidMount() {
    const campusId = this.props.match.params.campusId;
    axios
      .get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({ campus }));
    axios
      .get("/api/students")
      .then(res => res.data)
      .then(students => this.setState({ students }));
  }

  render() {
    const campusName = this.state.campus.name;
    const campusPic = this.state.campus.image;
    const id = this.state.campus.id;
    console.log(id);
    const studs = this.state.students;
    return (
      <div className="container">
        <div className="col-md-12">
          <div className="thumbnail">
            <img src={campusPic} width="400px" />
            <div className="caption">
              <h3>{campusName}</h3>
              <table className="table">
              	<thead>
              		<tr><th>Name</th>
              		<th>E-mail</th></tr>
              	</thead>
              	<tbody>
                {studs.map(student => {
                  if (student.campus.id === id) return (
                  	<tr key={student.id}>
                  		<td>{student.name}</td>
                  		<td>{student.email}</td>
                  	</tr>
                  	)
                })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}