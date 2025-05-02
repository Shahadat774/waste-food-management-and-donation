import { useEffect, useState } from "react";
import Card from "./Card";
function Find(){
    const[foodinfo,setfoodinfo]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/data')
  .then((response) => response.json())
  .then((json) => setfoodinfo(json));
    },[])
    console.log(foodinfo);
    return(
        <div>
            <h1>FOOD LIST:    </h1>
           { foodinfo.map(it=>(<Card i={it}/>)) }

        </div>
    )
}
export default Find;