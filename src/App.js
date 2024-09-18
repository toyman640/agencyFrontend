import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Overview from './component/dashboard/Overview';
import CompanyInfoU from './component/dashboard/CompanyInfoU';
import AgencyInfo from './component/dashboard/AgencyInfo';
import AgencyInfoA from './component/dashboard/AgencyInfoA';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navmenu /> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/company-info" element={<CompanyInfoU />} />
          <Route path="/agency-info" element={<AgencyInfo />} />
          <Route path="/agency-details" element={<AgencyInfoA />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
