import { Fragment } from "react"
import React from 'react'

const EmployeeList = ({employees}) => {
  
  return (
    <ul id="tophead">
        {
            employees && employees.map((emp)=> (
                <Fragment key={emp.employeeId}>
                    <li>
                        <div className="caret">
                            <h4> {emp.name}
                            <br></br>
                            {emp.role} 
                        </h4>
                        </div>
                        {emp.reportee?.length !== "0" && <EmployeeList className="nested" employees={emp.reportee} />}
                    </li>
                </Fragment>
             )

            )
        }
    </ul>
  )
}

export default EmployeeList