import { useContext, useState } from 'react';
import './Card.css';
import { mkcon } from './App';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
function Card({i}){
    const[access]=useContext(mkcon);
    const[count,setcount]=useState(0);
    const d=new Date( i.expiry_date);
    function getfood(){
        fetch('http://localhost:4000/request', {
            method: 'POST',
            body: JSON.stringify({
                donarenm: i.name,
                donarenum:i.phone,
              reqfddes: i.food_des,
              food_location: i.location,
             date:i.expiry_date,
              Userid:access,
              
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
            fetch(`http://localhost:4000/del/${i.donation_id}`, {
                method: 'DELETE',
              });
              setcount(count+1);
                Swal.fire({
                              title: "Good job!",
                              text: "You are success",
                              icon: "success"
                            });

    }
    return(
<div className='card col-12 col-md-4 mb-4'>
    
<h2 className='text-info'>Donare name:</h2><h4>{i.name}</h4>
<h3 className='text-info'>Donare phone number:</h3><h4> {i.phone}</h4>
<h3 className='text-info'>Donare address:</h3> <h4> {i.address}</h4>
<h3 className='text-info'>Food Name:</h3> <h4> {i.food_des}</h4>
<h3 className='text-info'>Food Quantity:</h3> <h4> {i.quantity} kg</h4>
<h3 className='text-info'>Food expiry date:</h3> <h4> {d.toLocaleString()}</h4>
<h3 className='text-info'>Food Location:</h3> <h4> {i.location}</h4>
<button className='btn btn-primary' onClick={getfood}><Link to='/'> <b className='text-dark'>Request for this food </b></Link></button>
</div>
    )
}
export default Card;