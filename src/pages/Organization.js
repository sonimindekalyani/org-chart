import React from 'react'
import EmployeeList from '../components/EmployeeList'
import useFetch from '../components/Fetch';

function Organization() {
  
  const {data:employees, isPending, Error} = useFetch('http://localhost:8000/employeesTree');
  
  return (
      <div className='org-tree'>
        {Error && <div> {Error} </div>}
        {isPending && <div>Loading...</div>}
        {employees &&  <EmployeeList employees={employees} />}
      </div>
  )
}

export default Organization