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
                alert("Claim successfully submitted. Claim id: "+response.data.claimId)
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
            <nav className="navbar navheader">
                <div className='navContainer1'>
                    <div className='navContainer2'>
                        <Link to="/">
                            <a className="navbar-brand" href="#">Claims Management</a>
                        </Link>
                    </div>
                    <div className='emptyDiv' >Welcome to Claims Management Welcome to</div>
                    <div>
                        <Link to="/home">
                            <a className="navbar-brand" href="#">Home</a>
                        </Link>
                        <Link to="/submitclaim">
                            <a className="navbar-brand" href="#">Submit Claim</a>
                        </Link>
                        <Link to="/claimstatus">
                            <a className="navbar-brand" href="#">Claim Status</a>
                        </Link>
                        <Link to="/viewbill">
                            <a className="navbar-brand" href="#">View Bills</a>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className='container2'>
                
                <h2>Submit Claim</h2>
                <form onSubmit={submitClaim}>
                    <label htmlFor="Memberid">Member Id:</label>
                    <input type="text" id="memberid" onChange={(e) => setMemberId(e.target.value)} value={memberid} placeholder='Enter the member id' required />

                    <label htmlFor="Policyid">Policy Id:</label>
                    <div>
                        <select name='policies' id="policyid" onChange={handleChange}>
                            <option value="101">101 (Upto 100000)</option>
                            <option value="102">102(Upto 150000)</option>
                            <option value="103">103 (Upto 200000)</option>
                        </select>
                        <p>{policies}</p>
                    </div>
                    <input type="text" id="pid" onChange={(e) => setPolicyId(e.target.value)} value={policies} placeholder='Choose the policy id' required />

                    <label htmlFor="Hospital">Hospital:</label>
                    <div>
                        <Select options={ hospitals } />
                    </div>

                    <label htmlFor="Amount">Amount:</label>
                    <input type="text" id="amount" onChange={(e) => setAmount(e.target.value)} value={amount} placeholder='Enter the Amount' required />

                    <button>
                        Submit
                    </button>


                </form>

            </div>
        </div>
    )
}
export default Login;