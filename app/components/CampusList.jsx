import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CampusList extends Component {
  constructor () {
    super();
    this.state = {
      campuses: []
    };
  }

  componentDidMount () {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => this.setState({ campuses }));
  }

  render () {
    const campuses = this.state.campuses;

    return (
      <div>
        <h2>Margaret Hamilton Interplanetary Academy of JavaScript</h2>
        <div className="container">
          <br />
          {
            campuses.length && campuses.map(campus => {
              return (

                <div className="col-md-4" key={campus.id}>
               
                  <div className="caption">{campus.name}</div>
                  <Link to={`/campus/${campus.id}`}><div className="thumbnail"><img src={`${campus.image}`} alt="Academy of Javascript Campus" width="400px" /></div></Link>
                  <br />
           
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
