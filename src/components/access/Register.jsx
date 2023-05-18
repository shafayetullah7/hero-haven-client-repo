import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const {createUser,updateUser,googleLogin} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    console.log(name, email, password, photoURL);
    if(!email || !password){
        setErrorMessage('All required fields must be filled');
        return;
    }
    if(password.length<6){
        setErrorMessage('password must be at least 6 characters');
        return;
    }
    
    createUser(email,password)
    .then(result=>{
        console.log(result.user);
        updateUser(result.user,name,photoURL)
        .then(result=>{
            console.log(result)
            navigate('/',{replace:true});
        })
        .catch(err=>{
            console.log(err.message);
            setErrorMessage('Something is wrong! Failed to register!');
        })
        form.reset();
    })
    .catch(err=>{
        console.log(err.message);
        setErrorMessage('Something is wrong! Failed to register!');
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
    <div className="max-w-xl mx-auto p-10 rounded-xl shadow-2xl bg-gray-100 mt-32">
      <h1 className="text-2xl font-bold mb-4 w-fit mx-auto">Create new account</h1>

      <form onSubmit={handleLogin}>
        <div className="mb-4 mt-10">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name:</label>
          <input type="text" name="name" id="name" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 focus:border-opacity-50 focus:shadow-xl" placeholder="Enter your name" required/>
        </div>
        <div className='grid sm:grid-cols-2 grid-cols-1 mb-4 gap-2'>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                <input type="email" name="email" id="email" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-opacity-50 focus:shadow-xl focus:border-ruby-500" placeholder="Enter your email" required
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password:</label>
                <input type="password" name="password" id="password" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 focus:border-opacity-50 focus:shadow-xl" placeholder="Enter password" required/>
            </div>
        </div>


        <div className="mb-4">
          <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 mb-2">Photo URL:</label>
          <input type="text" name="photoURL" id="photoURL" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 focus:border-opacity-50 focus:shadow-xl" placeholder="Enter your photo URL"/>
        </div>

        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        <div className="w-fit mx-auto mt-10">
          <button type="submit" className="border-2 border-ruby-500 text-ruby-500 font-bold px-4 py-2 rounded-md hover:bg-ruby-500 hover:text-white transition duration-200">Register</button>
        </div>
      </form>

      <div className="divider mt-10">OR</div>
      <button onClick={handleGoogleSignIn} className="border-2 border-gray-600 w-fit mx-auto block font-bold text-black px-4 py-2 rounded hover:text-white hover:bg-gray-600 transition duration-200 mt-4 text-sm">Sign in with Google</button>

        <p className="mt-4 text-center">Already have an account? <Link to="/login" className="text-ruby-500 hover:font-bold">Login</Link></p>
      </div>
    );
  };
  
  export default Login;
  
