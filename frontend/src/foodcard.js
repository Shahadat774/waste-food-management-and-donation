import './foodcard.css';

function Foodcard({itm,prcoun,prsetcoun}){
    
    const delreq=()=>{
        fetch(`http://localhost:4000/delreq/${itm.requestfoodid}`, {
            method: 'DELETE',
          });
          prsetcoun(prcoun+1);
    }
    return(
        <div className='card'>
           <h3> Requester name : {itm.name}</h3>
           <h3>Food Requester phone number:{itm.phone}</h3>
           <h3>Requester Address:{itm.address}</h3>
           <h3>Donare name:{itm.donarename}</h3>
           <h3>Donare number:{itm.donarenumber}</h3>
           <h3>Food Description:{itm.fooddescription}</h3>
           <h3>Food Expiry Date:{itm.fooddate}</h3>
           <h3>Food Address:{itm.foodaddress}</h3>
           <button onClick={delreq}>Process Done</button>
        </div>
    )
} 
export default Foodcard;