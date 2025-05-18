import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { mkcon } from './App';
const PrivateRoutes = () => {
  const [access]=useContext(mkcon);
  
return (
    access ? <Outlet/> : <Navigate to='/login'/>
  )
}
export default PrivateRoutes;