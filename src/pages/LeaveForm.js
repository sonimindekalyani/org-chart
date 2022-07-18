import React, {useState} from 'react'
import useFetch from '../components/Fetch';

function LeaveForm() {
  
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

    /* Updating the Employee Data set onLeave:true*/
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
        /* Todo: Also Update the employeesTree */
        setIsPending(true);
       })
      .catch((err)=> {
        setIsPending(true);
        console.log("Error occurred while adding new employee")
      })
      
      /* TODO: After updating employee status of onLeave */
      // Find all employees(child employees) reporting to employee on leave */
      // Assign them temporary manager(parent employee) by setting someTimeout period
      // Once timeout is (leave ends) triggered change the manager back to original
      // Update the org-tree 

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
      
  };


  //function to set manager onLeave flag to true and updating employees
  const updateOnLeave = ({employeeList, employeeId }) => {
      let matchfound = employeeList.foreach(emp() => {
         return (emp.id === employeeId)
      })

      if (!matchfound) {
        updateOnLeave(emp.reportees, employeeId)
      }

      const [reportees] = matchfound.reportees
      



  }


  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
    <h1>Apply for a Leave</h1>
    <label>Choose the Employee</label>
        <select name='id' onChange={handleChange} className='inputdata formInput'>
        {employeeList && employeeList.map((emp)=>(
          <option value={emp.id}>{emp.firstname +" " +emp.lastname}</option>
        ))}
        </select>

      <label className='inputdata formInput'>Enter Start Date</label>
      <input type="date"></input>
      <label className='inputdata formInput'>Enter End Date</label>
      <input type="date" ></input>
      {!isPending &&<button type="submit" onClick={handleSubmit} className='inputdata formInput btn'>Submit Leave</button>}
      {isPending &&<button disabled type="submit" onClick={handleSubmit} className='inputdata formInput btn'>Submitting the Leave</button>}
      </form>
      </div>

  )
}

export default LeaveForm