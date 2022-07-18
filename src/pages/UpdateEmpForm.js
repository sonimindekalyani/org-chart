import React from 'react'
import { useState } from 'react';
import useFetch from '../components/Fetch'


function UpdateEmpForm() {
  
  const [values, setValues] = useState({
    "id":"",
    "firstname":"",
    "lastname":"",
    "role":"",
    "startDate":"",
    "onLeave":false,
    "reportsTo":""
  });

   const { data:employeeList} = useFetch('http://localhost:8000/employers')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(values))
    fetch("http://localhost:8000/employers/"+values.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
    .then( () => {
      console.log("Employer Manager Updated Successfully");
      /* Todo: Also Update the employeesTree */
      
     })
    .catch((err)=> {
      console.log("Error occurred while adding new employee")
    })
    
  };
  const handleChange =(e) => {
    /* get Employee Info */
    fetch("http://localhost:8000/employers/"+e.target.value)
    .then( res => {
        if(!res.ok) {
            throw Error("Could not fetch the data from server")
        }  
            return res.json();
        })
    .then(data => {
        console.log(data)
        setValues(data);
    })
    .catch(err => {
        console.log("Error")
    }
    )
    console.log()
    
}

const handleManagerChange = (e)=>{
    /*Change the manager */
    setValues({...values, [e.target.name]:e.target.value});
    console.log(values)

    /*TODO: Logic to update org if anyone reports to the employee changing teams */
    // get all employees reporting to employee changing team
    // get the start dates of each of the employee
    // get oldest (max time) employee and make him the manager
    // assign rest of the employees manager = new manager

    /* Update the employeeTree */
    
}

  
  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <h1>Change Employee Team</h1>
      <label>Choose the Employee</label>
        <select name='id' onChange={handleChange} className='inputdata formInput'>
        {employeeList && employeeList.map((emp)=>(
          <option value={emp.id}>{emp.firstname +" " +emp.lastname}</option>
        ))}
        </select>
        <label className='inputdata formInput'>Currently Reports to {values.reportsTo}</label>
        <label>Change to</label>
        <select name='reportsTo' onChange={handleManagerChange} className='inputdata formInput'>
        {employeeList && employeeList.map((emp)=>(
          (emp.firstname+" "+emp.lastname) !== values.reportsTo?
          <option value={emp.firstname+ " " + emp.lastname}>{emp.firstname +" " +emp.lastname}</option>:null
        ))}

        </select>

        <button type='submit' onClick={handleSubmit} className='inputdata formInput btn'>Update Employee Manager</button>
     </form>
    </div>
  )
}

export default UpdateEmpForm