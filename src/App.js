import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import SignUp from './pages/Login/SignUp/SignUp';
import Purces from './pages/Purces/Purces';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/purces" element={
          <RequireAuth>
            <Purces></Purces>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
