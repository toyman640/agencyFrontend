import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/SignUp';
import MainComp from './component/dashboard/MainComp';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navmenu /> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<MainComp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
