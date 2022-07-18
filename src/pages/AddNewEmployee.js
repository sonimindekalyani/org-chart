import React, { useState } from 'react'
import FormInput from '../components/FormInput'
import useFetch from '../components/Fetch';


function AddNewEmployee() {

  const [isPending, setIsPending] = useState(false);

  const [values, setValues] = useState({
    "id":"",
    "firstname":"",
    "lastname":"",
    "role":"",
    "startDate":"",
    "onLeave":false,
    "reportsTo":""
  });
  
  /* Fetching the Employee Data */
  const { data: employeeList } = useFetch('http://localhost:8000/employers');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/employers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
    .then( () => {
      console.log("Employer Added Successfully");
      /* Todo: Also Update the employeesTree  create component to update employeeTree Nodes*/
      setIsPending(true);
     })
    .catch((err)=> {
      setIsPending(true);
      console.log("Error occurred while adding new employee")
    })
    
  };

  const handleChange =(e) => {
      setValues({...values, [e.target.name]:e.target.value});
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
//    console.log(values)
  };

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "Invalid First Name",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "Invalid Last Name",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "startDate",
      type: "date",
      placeholder: "Start Date",
      label: "Start Date",
    },
  ];
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Add New Employee</h1>
        
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        
        <label>Role</label>
        <select id='role' name="role" className='inputdata formInput' onChange={handleChange}>
          <option value="CEO">CEO</option>
          <option value="Vice President">Vice President</option>
          <option  value="Director">Director</option>
          <option  value="Manager">Manager</option>
          <option  value="Individual Contributor">Individual Contributor</option>
        </select>
        
        <label>Reporting</label>
        <select name='reportsTo' onChange={handleChange} className='inputdata formInput'>
        {employeeList && employeeList.map((emp)=>(
          <option value={emp.firstname +" " +emp.lastname}>{emp.firstname +" " +emp.lastname}</option>
        ))}
        </select>

        {isPending && <button disabled type='submit' className='inputdata formInput btn'>Adding Employee..</button>}
        {!isPending && <button type='submit' className='inputdata formInput btn'>Add New Employee</button>}
      </form>
    </div>
  )
}

export default AddNewEmployee