import React, { useState } from 'react';
import './App.css';

function EmployeeForm() {

  const [employees, setEmployees] = useState([]);
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    position: '',
    companyName: '',
    employeeId: '',
    city: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = {
      name: inputValues.name,
      email: inputValues.email,
      position: inputValues.position,
      companyName: inputValues.companyName,
      employeeId: inputValues.employeeId,
      city: inputValues.city,
    };
    setEmployees([...employees, newEmployee]);
    setInputValues({
      name: '',
      email: '',
      position: '',
      companyName: '',
      employeeId: '',
      city: '',
    });
  };

  const handleDelete = (index) => {
    const newEmployees = [...employees];
    newEmployees.splice(index, 1);
    setEmployees(newEmployees);
  };

  const handleEdit = (index, newEmployee) => {
    const newEmployees = [...employees];
    newEmployees[index] = newEmployee;
    setEmployees(newEmployees);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div>
      <h1>EMPLOYEE FORM</h1>
      <div id="form">
        <div id="employee-inputs">
          <input
            id="input-field1"
            className="input-field"
            type="text"
            name="name"
            value={inputValues.name}
            onChange={handleInputChange}
            placeholder="NAME"
          />
          <input
            id="input-field2"
            className="input-field"
            type="text"
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
            placeholder="EMAIL"
          />
          <input
            id="input-field3"
            className="input-field"
            type="text"
            name="position"
            value={inputValues.position}
            onChange={handleInputChange}
            placeholder="POSITION"
          />
          <input
            id="input-field4"
            className="input-field"
            type="text"
            name="companyName"
            value={inputValues.companyName}
            onChange={handleInputChange}
            placeholder="COMPANY NAME"
          />
          <input
            id="input-field5"
            className="input-field"
            type="text"
            name="employeeId"
            value={inputValues.employeeId}
            onChange={handleInputChange}
            placeholder="EMPLOYEE ID"
          />
          <input
            id="input-field6"
            className="input-field"
            type="text"
            name="city"
            value={inputValues.city}
            onChange={handleInputChange}
            placeholder="CITY"
          />
          <button onClick={handleSubmit} className='btn'>Submit</button>
        </div>
      </div>
      <ul id="list">
        {employees.map((employee, index) => (
          <li key={index}>
            <span>
              Employee Details: {employee.name}, {employee.email},
              {employee.position}, {employee.companyName}, {employee.employeeId},{' '}
              {employee.city}
            </span>
            <button onClick={() => handleDelete(index)} className='delete-btn'>Delete</button>
            <button
              className='edit-btn'
              onClick={() => {
                const newEmployee = {
                  name: prompt('Edit NAME:', employee.name),
                  email: prompt('Edit EMAIL:', employee.email),
                  position: prompt('Edit POSITION:', employee.position),
                  companyName: prompt('Edit COMPANY NAME:', employee.companyName),
                  employeeId: prompt('Edit EMPLOYEE ID:', employee.employeeId),
                  city: prompt('Edit CITY:', employee.city),
                };
                handleEdit(index, newEmployee);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeForm;