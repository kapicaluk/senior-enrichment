import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import StudentList from './StudentList'
import Student from './Student'
import AddStudent from './AddStudent'
import CampusList from './CampusList'
import Campus from './Campus'
import Navbar from './Navbar'
import EditStudent from './EditStudent'
import Puppy from './Puppy'

const App = () => {
    return (
      <div>
        <Router>
          <div>
            <div>
              <Navbar />
            </div>
            <Switch>
              <Route exact path="/" component={ CampusList } />
              <Route path="/campus/:campusId" component={ Campus } />
              <Route exact path="/students" component={ StudentList } />
              <Route exact path="/students/:studentId" component={ Student } />
              <Route path="/addStudent" component={ AddStudent } />
              <Route path="/editStudent/:studentId" component={ EditStudent } />
              <Route component={ Puppy } />
            </Switch>
          </div>
        </Router>
      </div>
    )
}

export default App;
