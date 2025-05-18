import { Link } from 'react-router-dom';
import './foodcard.css';
import Swal from 'sweetalert2';

function Foodcard({itm,prcoun,prsetcoun}){
    const d=new Date(itm.fooddate);
    const delreq=()=>{
        fetch(`http://localhost:4000/delreq/${itm.requestfoodid}`, {
            method: 'DELETE',
          });
          prsetcoun(prcoun+1);
          Swal.fire({
                                        title: "Good job!",
                                        text: "process done",
                                        icon: "success"
                                      });
    }
    return(
        <div className='card'>
           <h2 className='text-success'> Requester name :</h2> <h4> {itm.name}</h4>
           <h3 className='text-success'>Food Requester phone number:</h3> <h4> {itm.phone}</h4>
           <h3 className='text-success'>Requester Address:</h3> <h4> {itm.address}</h4>
           <h2 className='text-primary'>Donare name:</h2> <h4> {itm.donarename}</h4>
           <h3 className='text-primary'>Donare number:</h3> <h4> {itm.donarenumber}</h4>
           <h3 className='text-primary'>Food Name:</h3> <h4> {itm.fooddescription}</h4>
           <h3 className='text-primary'>Food Expiry Date:</h3> <h4> { d.toLocaleString()}</h4>
           <h3 className='text-primary'>Food Address:</h3> <h4> {itm.foodaddress}</h4>
           <button className='btn btn-outline-info' onClick={delreq}><Link to='/'><b> Process Done</b></Link> </button>
        </div>
    )
} 
export default Foodcard;