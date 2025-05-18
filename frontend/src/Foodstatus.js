import { useEffect, useState } from "react";
import Foodcard from "./foodcard";
function Foodstatus(){
    const[foodst,setfoodst]=useState([]); 
    const[redender,setredender]=useState(0);
    useEffect(()=>{
            fetch('http://localhost:4000/food')
      .then((response) => response.json())
      .then((json) => setfoodst(json));
        },[])
        
    return( <div className="p-3 mb-2 bg-secondary text-white">
        <h1 className="text-info">Requested <b className="text-warning">Food List</b></h1>
           { foodst.map((e)=>(<Foodcard itm={e} prcoun={redender} prsetcoun={setredender}/>))}
        </div>
    )
}
export default Foodstatus;