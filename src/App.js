import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navmenu /> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          {/* <Route path="/profile" element={<MyProfile />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
