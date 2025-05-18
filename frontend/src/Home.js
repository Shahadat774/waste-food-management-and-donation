import { useContext } from "react";
import {  Link } from "react-router-dom";
import { mkcon } from "./App";
import pic1 from "./img/UNI497823.avif";
import pic2 from "./img/6PM WED 16032022.jpg";
import pic3 from "./img/IMG_6232-1536x1152.jpeg";
import pic4 from "./img/UNI539226.avif";
import './img/Home.css';
function Home(){
  const [access,setaccess]=useContext(mkcon);
 function out(){
setaccess(0);
  }
    return(
      <div >
      <div className="d-flex justify-content-between">
        <h1 ><b> Food</b> <b className="text-primary">Donate</b></h1><p className="d-flex justify-content-between">
       {access===0? <Link className="btn btn-outline-success" to='/login'><h3>LogIN</h3></Link>:<Link className="btn btn-outline-success" onClick={out}><h3>LogOut</h3></Link>}
       
        <Link className="btn btn-outline-dark" to='/signin'><h3>&nbsp;  SignIN</h3></Link> </p>
        </div>
        <div className="d-flex flex-column">
          <img className="img-responsive" src={pic1} alt="no_pic" />
        <Link className="btn btn-outline-primary" to='/donate'><h1>Donate Food</h1></Link>
        </div>
        <div className="p-3 mb-2 bg-secondary text-white">
        <h2>“Cutting food waste is a delicious way of saving money, helping to feed the world and protect the planet.”</h2>
        </div>
        <div className="text-center">
          <h1 className="font-weight-bold"><u>Our Work</u></h1>
          <h2>"Look what we can do together."</h2>
        </div>
        <div className="container"  >
          <div className="row">
        <div className="image-card col-12 col-md-4 mb-4">
  <img src={pic2} alt="no pic"/>
</div> 
<div className="image-card col-12 col-md-4 mb-4">
  <img src={pic3} alt="no pic"/>
</div> 
<div className="image-card col-12 col-md-4 mb-4">
  <img src={pic4} alt="no pic"/>
</div> 
       </div>  
      </div>
      <div className="text-center">
        <h1><u>DOOR PICKUP</u></h1>
        <h2 className="text-info">"You can collect donated food and sent to your needy people "</h2>
        <Link className="btn btn-outline-success" to='/food'><h2>Request For Food</h2></Link>
        </div>
        <h3 className="p-3 mb-2 bg-primary text-white">"Your small act of kindness can fill an empty plate and bring hope to someone in need."</h3>

        {access===2 ? <Link  className="btn btn-outline-success text-center" to='/foodstatus'><h2 >Requested_food</h2> </Link>:<h1 className="text-success text-center">Thanks</h1>}
        <div className="p-3 mb-2 bg-dark text-white ">
          <div className="container">
          <div className="row">
          <div className="col-12 col-md-4 mb-4">
        <h4><b>About us</b></h4>
        <h6>The basic concept of this project Food Waste Management is to collect the excess/leftover food from donors such as hotels, restaurants, marriage halls , etc and distribute to the needy people .</h6>
          </div>
          <div className="col-12 col-md-4 mb-4" >
          <h4><b>Contack</b></h4>
          <h5>(+00) 0000 000 000</h5>
          <h5 className="text-success">Fooddonate@gmail.com</h5>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h2><b className="text-success">Food</b> Donate</h2>
          </div>
       </div>
       </div>
        </div>
      </div>
    );
}
export default Home;