import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import './Login.css';
import { mkcon } from './App';
import Swal from 'sweetalert2';
function Login(){
    const [emil,setemil]=useState('');
    const [passw,setpassw]=useState('');
    const [data,setdata]=useState([]);
    const [access,setaccess]=useContext(mkcon);
    function handleemil(e) {
        setemil(e.target.value);
    }
    function handlepassw(e) {
        setpassw(e.target.value);
    }
    function sentinf() {
        fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({
              Email: emil,
              Password: passw,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => setdata(json));
            
            if(data.length===0&&access===0){
                       Swal.fire({
                             title: "Something wrong!",
                             text: "Please enter correct email and password",
                             icon: "error"
                                 });
                                }
    }
    if(data.length!==0&&access===0){
        if(data[0].password===passw){setaccess(data[0].user_id);
       Swal.fire({
                             title: "Good job",
                             text: "You are successfully login",
                             icon: "success"
                                 });

        }
        
    }
    
    return(
        
        <div className="login-container" >
        <h2>Login</h2>
        <form    action={sentinf}>
            <div >
                <label>Email : </label>
                <input className='form-control' placeholder='enter email' type="email" onChange={handleemil} required/>
            </div>
            <div>
                <label>Password :</label>
                <input className='form-control' placeholder='enter password' type="password" onChange={handlepassw} required/>
            </div>
            <input className='btn btn-primary btn-block' type='submit' value='Login'/>
        </form>
       <Link to='/signin'><h6>Don't have account</h6></Link>
        { access ? <Navigate to='/' />: <h4 className='text-primary'>Please enter your email and password</h4>}
    </div>
    
    )
}
export default Login;