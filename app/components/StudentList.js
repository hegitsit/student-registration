import React, { useContext, Fragment } from 'react'
import { StudentListContext } from '../context/studentListContext';
import { Link } from 'react-router-dom';

export const StudentList = () => {

  const [students, setStudents] = useContext(StudentListContext);

  return (
    <Fragment>
      <h1>Current students</h1>
      <table>
        <tbody>

          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.gpa}</td>
              <td><Link to={`/student/${index}`}>More Info</Link></td>
              <td><button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to='/'>Back to Student Registration</Link>
    </Fragment>
  )
}

