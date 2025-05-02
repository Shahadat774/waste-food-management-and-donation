import { useState } from 'react';
import './Signin.css';
function Signin(){
    const [nam,setnam]=useState('');
    const [eml,seteml]=useState('');
    const [pass,setpass]=useState('');
    const [pn,setpn]=useState('');
    const [add,setadd]=useState('');
    function handlenam(e) {
        setnam(e.target.value);
    }
    function handleeml(e) {
        seteml(e.target.value);
    }
    function handlepass(e) {
        setpass(e.target.value);
    }
    function handlepn(e) {
        setpn(e.target.value);
    }
    function handleadd(e) {
        setadd(e.target.value);
    }
    function sentinf(){
        fetch('http://localhost:4000/post', {
            method: 'POST',
            body: JSON.stringify({
              Name: nam,
              Email: eml,
              Password: pass,
              Phone: pn,
              Address: add,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return(
        <div className="signin-contain">
        <h2>Signin</h2>
        <form>
        <div >
                <label >Name</label>
                <input type="text" onChange={handlenam} required/>
            </div>
            <div >
                <label >Email</label>
                <input type="email" id="email" onChange={handleeml} required/>
            </div>
            <div>
                <label >Password</label>
                <input type="password" onChange={handlepass} required/>
            </div>
            <div >
                <label >Phone</label>
                <input type="text" onChange={handlepn}  required/>
            </div>
            <div >
                <label >Address</label>
                <input type="text" onChange={handleadd} required/>
            </div>
            <button onClick={sentinf} >Login</button>
        </form>
    </div>
    )
}
export default Signin;