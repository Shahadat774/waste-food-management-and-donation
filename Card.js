import { useContext, useState } from 'react';
import './Card.css';
import { mkcon } from './App';
function Card({i}){
    const[access,setaccess]=useContext(mkcon);
    const[count,setcount]=useState(0);
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
    }
    return(
<div className='card'>
    
<h2>donare name:{i.name}</h2>
<h3>donare phone number:{i.phone}</h3>
<h3>donare address:{i.address}</h3>
<h3>food Description:{i.food_des}</h3>
<h3>food Quantity:{i.quantity}</h3>
<h3>food expiry date:{i.expiry_date}</h3>
<h3>food Location:{i.location}</h3>
<button onClick={getfood}>Request for this food</button>
</div>
    )
}
export default Card;