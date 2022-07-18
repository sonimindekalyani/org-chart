import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'
import Home from '../pages/Home';
import Organization from '../pages/Organization';
import EmpDashboard from '../pages/EmpDashboard';
import AddNewEmployee from '../pages/AddNewEmployee'
import Error from '../pages/Error';
import UpdateEmpForm from '../pages/UpdateEmpForm';
import LeaveForm from '../pages/LeaveForm';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/org-chart' element= {<Organization />} />
        <Route path='/dashboard' element= {<EmpDashboard />} />
        <Route path='/dashboard/addemp' element= {<AddNewEmployee />} />
        <Route path='/dashboard/updateemp' element= {<UpdateEmpForm />} />
        <Route path='/dashboard/leave' element= {<LeaveForm />} />
        <Route path='*' element= {<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;