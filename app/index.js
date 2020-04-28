import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { StudentList } from './components/StudentList';
import { StudentDetails } from './components/StudentDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import StudentListState from './context/StudentListState';
import { StudentListProvider } from './context/studentListContext';

export const App = () => {

  return (
    <StudentListProvider>
      <Router>
        <Navbar title="Student Registration" />
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path="/students" component={StudentList} />
          <Route exact path="/student/:index" component={StudentDetails} />
        </div>
      </Router>
    </StudentListProvider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

