import { useRef, useState, useEffect } from 'react';
import React from 'react'
import Connection from '../service/Connection';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [memberid, setMemberId] = useState('');
    const [policyid, setPolicyId] = useState('');
    const navigate = useNavigate()

    const viewBills = async (e) => {
        e.preventDefault()
        const memberid = document.getElementById("memberid").value
        const policyid = document.getElementById("policyid").value
        console.log(memberid, policyid);
        
        if(memberid=="" || policyid==""){
            alert("Please enter all the details")
        }
        else{
            var response = await Connection.viewBills(memberid, policyid)
            console.log(response.data.length)
            console.log(response.data.type)
            if(response.data.length==0){
                console.log("Error data")
                alert("No such data exists!!")
            }
            else{
                navigate('/viewbillresult',{ state: response.data[0]})
            }
        }
    }
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark mainNavBar">
            <Link to="/home">
                <a className="navbar-brand" href="#">Claims Management</a>
            </Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/home">
                            <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                        </Link>
                    </li>

                    <li class="nav-item active">
                        <Link to="/submitclaim">
                            <a class="nav-link" href="#">Submit Claim <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/claimstatus">
                            <a class="nav-link" href="#">Claim Status <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/viewbill">
                            <a class="nav-link" href="#">View Bills<span class="sr-only">(current)</span></a>
                        </Link>
                    </li>

                    <li class="nav-item active">
                        <Link to="/">
                            <a class="nav-link" href="#">Log Out<span class="sr-only">(current)</span></a>
                        </Link>
                    </li>

                </ul>

            </div>
        </nav>
        
            <div className='container2'>

                <h2>View Bills</h2>
                <form onSubmit={viewBills}>
                    
                    <input type="text" id="memberid" onChange={(e) => setMemberId(e.target.value)} value={memberid} placeholder='Enter the member id' required />
                    
                    <input type="text" id="policyid" onChange={(e) => setPolicyId(e.target.value)} value={policyid} placeholder='Enter the policy id' required />

                    <button class="btn btn-primary">
                        View
                    </button>


                </form>

            </div>
        </div>
    )
}
export default Login;