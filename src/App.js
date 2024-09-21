import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Login from './component/Login';
import SignUpAgency from './component/SignUpAgency';
import SignUpStaff from './component/SignUpStaff';
import Overview from './component/dashboard/Overview';
import CompanyInfoU from './component/dashboard/CompanyInfoU';
import AgencyInfo from './component/dashboard/AgencyInfo';
import AgencyInfoA from './component/dashboard/AgencyInfoA';
import NonStaffUser from './component/dashboard/NonStaffUsers';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navmenu /> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-up-agency-account" element={<SignUpAgency />} />
          <Route path="/sign-up-staff-account" element={<SignUpStaff />} />
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/company-info" element={<CompanyInfoU />} />
          <Route path="/agency-info" element={<AgencyInfo />} />
          <Route path="/agency-details" element={<AgencyInfoA />} />
          <Route path="/agency-accounts" element={<NonStaffUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
