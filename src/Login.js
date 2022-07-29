import { useRef, useState, useEffect } from 'react';

import Connection from './service/Connection'
import { Link, useNavigate } from 'react-router-dom';
import './index.css'




const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])
    const navigate=useNavigate()

    const handleSubmit = async (e) => {
       
        e.preventDefault()
        var uname = document.getElementById("username").value
        var pass = document.getElementById("password").value
        var request = {
            userName: uname,
            password: pass
        }
        var token = await Connection.getToken(request)
        if  (token==="Request failed with status code 401"){
            alert("Please check the credentials!!")
        } else{
   
        
        var response = await Connection.userValidate(token.data);
        console.log("Request", request);
        console.log("token ", token.data);
        console.log("Response ", response.data);
          
           navigate("/home")
         }
    }
    return (
        <>{success ? (
            <section>
                <h1>You are logged in </h1>
                <br />
                <p> <a href="#">go to home page</a></p>
            </section>
        ) : (

            <div className='homecontainer0'>
                <nav className="navbar navheader">
                    <Link to="/">
                        <a className="navbar-brand" href="#"> Welcome to Claims Management</a>
                    </Link>

                </nav>
                <div className='mainScreen'>
                    <div className='mainLeft'>
                        <h1> Claims Management</h1>
                        
                        <h1> System</h1>
                    </div>
                    <div className='mainRight'>
                        <div className='container1'>
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <h1>Sign In</h1>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" placeholder="Enter Username" ref={userRef} autoComplete="off" onChange={(e) => setUser(e.target.value)} value={user} required />


                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password"  placeholder="Enter Password" onChange={(e) => setPwd(e.target.value)} value={pwd} required />
                    
                                <button>
                                    Sign In
                                </button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )} </>
    )
}

export default Login;