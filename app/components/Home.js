import React, { Fragment, useState, useContext } from 'react';
import { StudentListContext } from '../context/studentListContext';
export const Home = () => {

  const [students, setStudents] = useContext(StudentListContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const obj = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      address: event.target.address.value,
      city: event.target.city.value,
      stateName: event.target.stateName.value,
      zipCode: event.target.zipCode.value,
      phoneNumber: event.target.phoneNumber.value,
      gpa: event.target.gpa.value
    }

    setStudents((allStudents) => [...allStudents, obj])

    event.target.reset();
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <h1>Student Registration</h1>
        <label>
          First Name:
    <input type="text" name="firstName" />
        </label>
        <br />
        <label>
          Last Name:
    <input type="text" name="lastName" />
        </label>
        <br />
        <label>
          Street Number/Name:
    <input type="text" name="address" />
        </label>
        <br />
        <label>
          City:
    <input type="text" name="city" />
        </label>
        <br />
        <label>
          State:
    <input type="text" name="stateName" />
        </label>
        <br />
        <label>
          Zip:
    <input type="text" name="zipCode" />
        </label>
        <br />
        <label>
          Phone Number:
    <input type="text" name="phoneNumber" />
        </label>

        <br />
        <label>
          GPA:
    <input type="text" name="gpa" />
        </label>
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  )
}
