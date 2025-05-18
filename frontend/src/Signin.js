import { useState } from 'react';
import './Signin.css';
import { useNavigate } from 'react-router-dom';

function Signin(){
    const [nam,setnam]=useState('');
    const [eml,seteml]=useState('');
    const [pass,setpass]=useState('');
    const [pn,setpn]=useState('');
    const [add,setadd]=useState('');
    const navigate=useNavigate();
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
            navigate('/');
    }

    return(
        <div className='d-flex justify-content-center'>
        <div className="signin-contain ">
        <h2>Signin</h2>
        <form action={sentinf}>
        <div >
                <label >Name:</label>
                <input className='form-control' placeholder='enter name' type="text" onChange={handlenam} required/>
            </div>
            <div >
                <label >Email:</label>
                <input className='form-control' placeholder='enter email' type="email" id="email" onChange={handleeml} required/>
            </div>
            <div>
                <label >Password:</label>
                <input className='form-control' placeholder='enter password' type="password" onChange={handlepass} required/>
            </div>
            <div >
                <label >Phone:</label>
                <input className='form-control' placeholder='enter phone number' type="text" onChange={handlepn}  required/>
            </div>
            <div >
                <label >Address:</label>
                <input className='form-control' placeholder='enter address' type="text" onChange={handleadd} required/>
            </div>
            <button className='btn btn-primary btn-block' type='submit' > <h4 className='text-dark'>SignIn </h4> </button>
        </form>
    </div>
    </div>
    )
}
export default Signin;