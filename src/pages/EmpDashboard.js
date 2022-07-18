import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'



function EmpDashboard () {

  const navigate = useNavigate();

  const navigateNewEmp = () => {
       navigate('/dashboard/addemp');
  }  

  const navigateUpdateEmp = () => {
    navigate('/dashboard/updateemp');
} 

const navigateLeaveEmp = () => {
  navigate('/dashboard/leave');
} 
  return (

    <div className='btn-container'>
      <Button
          text= 'Add New Employee'
          onClick= {navigateNewEmp}
      />
            <Button
          text= 'Update Employee Team'
          onClick= {navigateUpdateEmp}
      />
            <Button
          text= 'File Vacation'
          onClick= {navigateLeaveEmp}
      />
    </div>
  )
}


export default EmpDashboard