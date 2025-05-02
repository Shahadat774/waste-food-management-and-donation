import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { mkcon } from './App';
const PrivateRoutes = () => {
  const [access,setaccess]=useContext(mkcon);
  console.log(access);
return (
    access ? <Outlet/> : <Navigate to='/login'/>
  )
}
export default PrivateRoutes;