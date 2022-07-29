import { useRef, useState, useEffect } from 'react';
import Select from 'react-select';
import Connection from '../service/Connection'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [memberid, setMemberId] = useState('');
    const [policyid, setPolicyId] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();
    const hospitals=[{ label: "Apollo Hospital", value: "Apollo Hospital" },{ label: "Sanjivini", value: "Sanjivini" },{ label: "Manipal hospital",value: "Manipal hospital" }];


    const [policies,setOption] = useState()

    function handleChange(event){
        setOption(event.target.value)
    }

    const submitClaim = async (e) => {
        e.preventDefault()
        var mId = document.getElementById("memberid").value;
        var pId = document.getElementById("policyid").value;
        var Amount = document.getElementById("amount").value;
        console.log(mId, pId, Amount);
        var i=100;
        var body = {
            amountClaimed: Amount,
            claimId: 0,
            memberId: mId
        }
        if(mId=="" || pId=="" || Amount=="")
        {
            alert("Please enter all the details")
        }
        else{
            var response = await Connection.submitClaim(mId, pId, body)
            console.log(response.data);
            if(response.data){
                alert("Claim successfully submitted \nClaim id: "+response.data.claimId)
                navigate("/home")
            }
            else{
                alert("Claim not Submitted")
                navigate("/home")
            }
        }
    }
    return (
        <div className='homecontainer0'>
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
            <h2><center>Submit Claim</center></h2>
                <form onSubmit={submitClaim}>
                    <label htmlFor="Memberid"><b>Enter Member Id:</b></label>
                    <input type="text" id="memberid" onChange={(e) => setMemberId(e.target.value)} value={memberid} placeholder='Enter the Member Id' required />

                    <label htmlFor="Hospital"><b>Hospital:</b></label>
                    <div>
                        <Select name="hospitalid" options={ hospitals } />
                    </div>

                    
                    <label htmlFor="Policyid"><b>Enter Policy Id:</b></label>
                    <div>
                        <select name='policies' id="policyid" onChange={handleChange}>
                            <option value="101">101 (Upto 100000)</option>
                            <option value="102">102(Upto 150000)</option>
                            <option value="103">103 (Upto 200000)</option>
                        </select>
                        
                    </div>
                    <input type="text" id="pid" onChange={(e) => setPolicyId(e.target.value)} value={policies} placeholder='Choose the policy id' required />


                    <label htmlFor="Amount"><b>Enter Amount:</b></label>
                    <input type="text" id="amount" onChange={(e) => setAmount(e.target.value)} value={amount} placeholder='Enter the Amount' required />

                    <button style={{backgroundColor:"#2d3429",color:"white"}}>
                        Status
                    </button>


                </form>

            </div>
        </div>
    )
}
export default Login;