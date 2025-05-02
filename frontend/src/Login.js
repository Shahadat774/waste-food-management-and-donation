import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom'
import './Login.css';
import { mkcon } from './App';
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
           // console.log(data);
    }
    if(data.length!==0&&access===0){
        if(data[0].password===passw){setaccess(data[0].user_id);}
        
    }
    
    return(
        <div className="login-container">
        <h2>Login</h2>
        <form action={sentinf}>
            <div >
                <label>Email</label>
                <input type="email" onChange={handleemil} required/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={handlepassw} required/>
            </div>
            <input type='submit' value='Login'/>
        </form>{
        access ? <Navigate to='/' />: <h3>Please enter your email and password</h3>}
    </div>
    )
}
export default Login;