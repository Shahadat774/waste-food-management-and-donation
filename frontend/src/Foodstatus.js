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
        console.log(foodst);
    return(
        
            foodst.map((e)=>(<Foodcard itm={e} prcoun={redender} prsetcoun={setredender}/>))
        
    )
}
export default Foodstatus;