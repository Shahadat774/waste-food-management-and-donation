import { useContext } from "react";
import {  Link } from "react-router-dom";
import { mkcon } from "./App";
function Home(){
  const [access,setaccess]=useContext(mkcon);
 function out(){
setaccess(0);
  }
    return(
      <div>
       {access===0? <Link to='/login'><h1>LogIN</h1></Link>:<Link onClick={out}><h1>LogOut</h1></Link>}
        <Link to='/signin'><h1>SignIN</h1></Link>
        <Link to='/donate'><h1>Donate Food</h1></Link>
        <Link to='/food'><h1>Request For Food</h1></Link>
        {access===2 ? <Link to='/foodstatus'><h2>Requested_food</h2> </Link>:<h1>hello</h1>}
      </div>
    );
}
export default Home;