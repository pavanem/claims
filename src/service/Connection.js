import axios from "axios";
const Authorization_authenticate="http://localhost:8400/auth/authenticate"
const Authorization_authorize="http://localhost:8400/auth/authorize"
const member_viewBills="http://localhost:8100/member/viewbills/"
const claim_submitClaim="http://localhost:8100/member/submitclaim/"
const claimstatus = "http://localhost:8100/member/getclaimstatus/"
class Connection{
    async getToken(creds) {
        try {
            var token = await axios.post(Authorization_authenticate, creds)
                .then(response => {
                    if (response.data != null) {
                        console.log(response);
                        return response;
                    }
                    else {
                        alert("Bad Credentials")
                    }
                });
        } catch (error) {
            token = error.message
        } finally {
            return token;
        }
    }
    async userValidate(token) {
        console.log("TOKEN IN POST ", token);
        var validate = await axios.post(Authorization_authorize, token, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => {
                return response
            })
        return validate;
    }
    //Submit claim
    async submitClaim(mid,pid,body) {

        console.log("Inside submitClaim");
        var url = claim_submitClaim +mid+'/'+pid
        var bench = await axios.post(url,body)
            .then(response => {
                if (response.data != null) {
                  //  console.log("viewBills ", response);
                    return response;
                }
            });
        return bench;
    }
    //viewbill
    async viewBills(mid,pid) {
        console.log("Inside viewBills");
        console.log(mid,pid);
        var bench = await axios.get(member_viewBills+mid+'/'+pid)
            .then(response => {
                if (response.data != null) {
                    console.log("viewBills ", response);
                    return response;
                }
            });
        return bench;
    }
    //view claim status
    async viewClaimStatus(mid,pid,cid) {
        console.log("Inside view claim status");

        var bench = await axios.get(claimstatus+mid+'/'+pid+'/'+cid)
            .then(response => {
                if (response.data != null) {
                  //  console.log("viewBills ", response);
                    return response;
                }
            });
        return bench;
    }

}
export default new Connection();