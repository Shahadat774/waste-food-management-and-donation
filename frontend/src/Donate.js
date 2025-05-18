import { useContext, useState } from "react";
import { mkcon } from "./App";
import {  useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
function Donate(){
    const [fooddes,setfooddes]=useState();
    const [foodqn,setfoodqn]=useState();
    const [fooddate,setfooddate]=useState();
    const [foodloc,setfoodloc]=useState();
    const[access]=useContext(mkcon);
    const nav=useNavigate();

    const setdes=(e)=>{
        setfooddes(e.target.value);
    }
    const setqn=(e)=>{
        setfoodqn(e.target.value);
    }
    const setdate=(e)=>{
        setfooddate(e.target.value);
    }
    const setloc=(e)=>{
        setfoodloc(e.target.value);
    }
    function submitfood(){
        fetch('http://localhost:4000/food', {
            method: 'POST',
            body: JSON.stringify({
              Fddes: fooddes,
              Fdqn: foodqn,
              Fddate: fooddate,
              Fdloc: foodloc,
              Userid:access,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
            Swal.fire({
                title: "Good job!",
                text: "You are success",
                icon: "success"
              });
              nav('/');
    }

    return(
        
<div className="card" >
<form action={submitfood} >
        <div  >
                <label className="text-info">Food Name</label>
                <input className="form-control" type="text" onChange={setdes} required/>
            </div>
            <div >
                <label className="text-info">Quantity Kg</label>
                <input className="form-control" type="number" onChange={setqn}  required/>
            </div>
            <div>
                <label className="text-info" >expiry date</label>
                <input className="form-control" type="date" onChange={setdate} required/>
            </div>
            <div >
                <label className="text-info">Location</label>
                <input className="form-control" type="text" onChange={setloc} required/>
            </div>
            
         <button type="submit" className="btn btn-outline-success " > <b>Donate</b> </button>  
        </form>
</div>


    )
}
export default Donate;