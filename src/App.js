import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Overview from './component/dashboard/Overview';
import CompanyInfo from './component/dashboard/CompanyInfo';
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
          <Route path="/company-info" element={<CompanyInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
