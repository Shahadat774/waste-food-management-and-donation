import { useEffect, useState } from "react";
import Card from "./Card";
function Find(){
    const[foodinfo,setfoodinfo]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/data')
  .then((response) => response.json())
  .then((json) => setfoodinfo(json));
    },[])
    
    return(
        <div className="p-3 mb-2 bg-success text-white" >
            <h1 className="text-info">FOOD<b className="text-dark"> LIST:  </b>  </h1>
            <div className="container">
            <div className="row">
                
           { foodinfo.map(it=>(<Card i={it}/>)) }
           
           </div>
            </div>
        </div>
    )
}
export default Find;