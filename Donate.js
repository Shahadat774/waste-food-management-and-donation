import { useContext, useState } from "react";
import { mkcon } from "./App";

function Donate(){
    const [fooddes,setfooddes]=useState();
    const [foodqn,setfoodqn]=useState();
    const [fooddate,setfooddate]=useState();
    const [foodloc,setfoodloc]=useState();
    const[access,setaccess]=useContext(mkcon);
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
    }

    return(
<div>
<form action={submitfood}>
        <div >
                <label>Food Description</label>
                <input type="text" onChange={setdes} required/>
            </div>
            <div >
                <label>Quantity Kg</label>
                <input type="number" onChange={setqn}  required/>
            </div>
            <div>
                <label >expiry date</label>
                <input type="date" onChange={setdate} required/>
            </div>
            <div >
                <label>Location</label>
                <input type="text" onChange={setloc} required/>
            </div>
            <input type="submit" />
        </form>
</div>
    )
}
export default Donate;