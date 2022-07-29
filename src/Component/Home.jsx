import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import submitImg from '../images/submit.png'
import billImg from '../images/bill.png'
import claimImg from '../images/claim.png'
import NavBar from './HomeNavBar'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className='homecontainer0'>
      <NavBar />

      <div className='container homeContentContainer'>

        <div className="row">

          <div className='col-md-4 col-sm-6 col-12' id='homeDiv1'>

            <div className='card homeCard'>
              <img class="card-img-top contentImg" src={submitImg} alt="Card image cap"></img>
              <h4>Submit Claim</h4>

              <p>
                You can submit your claim amount on one click you just have to give your member id,policy id and amount you want to claim. </p>
              <Link to="/submitclaim" className="btn btn-primary">Submit</Link>

            </div>


          </div>
          <div className='col-md-4 col-sm-6 col-12' id='homeDiv2'>
            <div className='card homeCard'>

              <img class="card-img-top contentImg" src={claimImg} alt="Card image cap"></img>
              <h4>Claim Status</h4>

              <p>You can check your claim status on one click you just have to give your member id,policy id and claim id. </p>
              <p></p>
              <Link to="/claimstatus" className="btn btn-primary">Claim</Link>
            </div>

          </div>
          <div className='col-md-4 col-sm-6 col-12' id='homeDiv3'>

            <div className='card homeCard'>

              <img class="card-img-top contentImg" src={billImg} alt="Card image cap"></img>
              <h4>View Bills</h4>

              <p>You can view your all bills on one click you just have to give your member id <br /> and policy id.</p>
              <p></p>

              <Link to="/viewbill" className="btn btn-primary">View Bills</Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
