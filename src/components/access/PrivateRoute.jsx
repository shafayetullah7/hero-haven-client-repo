import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import spinner from '../../assets/spinner.gif';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='w-full'><img className='block w-fit mx-auto' src={spinner} alt="spinner" /></div>
    }
    else{
        if(user){
            return children;
        }
        else{
            return <Navigate to={'/login'} state={{from:location}} replace={true}></Navigate>
        }
    }
};

export default PrivateRoute;