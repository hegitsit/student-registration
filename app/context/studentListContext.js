import React, { createContext, useState } from 'react';

export const StudentListContext = createContext();

export const StudentListProvider = (props) => {
  const [students, setStudents] = useState([]);

  return (
    <StudentListContext.Provider
      value={[students, setStudents]}
    >
      {props.children}
    </StudentListContext.Provider>
  );
}