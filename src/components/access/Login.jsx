import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const {loginUser,googleLogin} = useContext(AuthContext);
  const navigate = useNavigate();

  AOS.init();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email,password);
    if(!email || !password){
        setErrorMessage('Must provide email and password');
        return;
    }

    loginUser(email,password)
    .then(result=>{
        console.log(result);
        navigate('/',{replace:true});
    })
    .catch(err=>{
        console.log(err.message);
        setErrorMessage('Failed to Login');
    })

  };

  const handleGoogleSignIn = () => {
    googleLogin()
    .then(result=>{
        console.log(result);
        navigate('/',{replace:true});
    })
    .catch(err=>{
        console.log(err.message);
        setErrorMessage('Failed to Login');
    })
  };

  return (
    <div className="max-w-sm mx-auto p-10 rounded-xl shadow-2xl bg-gray-100 mt-32"
    data-aos="fade-down"
    data-aos-offset="0"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
    >
      <h1 className="text-2xl font-bold mb-4 w-fit mx-auto">Login Page</h1>

      <form onSubmit={handleLogin}>
        <div className="mb-4 mt-10">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
          <input type="email" name="email" id="email" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-opacity-50 focus:shadow-xl focus:border-ruby-500" placeholder='Enter your email' required/>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password:</label>
          <input type="password" name="password" id="password" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 focus:border-opacity-50 focus:shadow-xl" placeholder='Enter password' required/>
        </div>

        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        <div className='w-fit mx-auto mt-10'>
          <button type="submit" className="border-2 border-ruby-500 text-ruby-500 font-bold px-4 py-2 rounded-md hover:bg-ruby-500 hover:text-white transition duration-200">Login</button>
        </div>
      </form>
      
      <div className="divider mt-10">OR</div>
      <button onClick={handleGoogleSignIn} className="border-2 border-gray-600 w-fit mx-auto block font-bold text-black px-4 py-2 rounded hover:text-white hover:bg-gray-600 transition duration-200 mt-4 text-sm">Sign in with Google</button>

      <p className="mt-4 text-center">Don't have an account? <Link to="/register" className="text-ruby-500 hover:font-bold">Register here</Link></p>
    </div>
  );
};

export default Login;
