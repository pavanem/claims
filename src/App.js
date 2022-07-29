import logo from './logo.svg';
import './App.css';
import ClaimStatus from './Component/ClaimStatus'
import SubmitClaim from './Component/SubmitClaim'
import ViewBill from './Component/ViewBill'
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Component/NavBar'
import Footer from './Component/Footer'
import Home from './Component/Home';
import ViewBillResults from './Component/ViewBillResults';
import ClaimStatusResult from './Component/ClaimStatusResult';
function App() {
  return (
    <>
    
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/claimstatus" element={<ClaimStatus />} />
          <Route path="/submitclaim" element={<SubmitClaim/>} />
          <Route path="/viewbill" element={<ViewBill/>} />
          <Route path="/viewbillresult" element={<ViewBillResults/>} />
          <Route path="/claimstatusresult" element={<ClaimStatusResult/>} />
        </Routes>
        <Footer />
      </Router>
   

  </>
  );
}

export default App;
