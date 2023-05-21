import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../access/AuthProvider";

const Navbar = () => {
    const navigate = useNavigate();
    const {user,loading,logout} = useContext(AuthContext);

    const handleLogout = ()=>{
        logout()
        .then(result=>console.log(result))
        .catch(err=>console.log(err));
    }

    const navItems = <>
    <li><NavLink to={`/`} className={({ isActive }) =>isActive? "active":'not-active'}>Home</NavLink></li>
    <li><NavLink to={`/all-toys`} className={({ isActive }) =>isActive? "active":'not-active'}>All Toys</NavLink></li>
    {user && <li><NavLink to={`/my-toys`} className={({ isActive }) =>isActive? "active":'not-active'}>My Toys</NavLink></li>}
    {user && <li><NavLink to={`/add-toy`} className={({ isActive }) =>isActive? "active":'not-active'}>Add A Toy</NavLink></li>}
    <li><NavLink to={`/blog`} className={({ isActive }) =>isActive? "active":'not-active'}>Blogs</NavLink></li>
    </>
    return (
        <div className="navbar bg-white py-10">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="flex flex-col gap-4 text-charcoal dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                </ul>
                </div>
                {/* <a className="font-kanit text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-gray-700 px-7 py-2 rounded-lg tracking-widest">He<span>ro Ha</span>ven</a> */}
                <Link to={'/'} className="font-kanit text-2xl md:text-3xl font-bold text-ruby-500 rounded-lg tracking-widest border-b-4 border-[#E32636] active:scale-95 duration-150 cursor-pointer">Hero <span className="text-charcoal">Haven</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-8 text-charcoal item-center justify-center px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !loading && <div>
                        {!user && <button className=" text-ruby-500 border-2 border-ruby-500 hover:bg-ruby-500 hover:text-white active:scale-95 duration-150 px-2 md:px-5 py-2 rounded-lg font-semibold" onClick={()=>navigate('/login')}>Login</button>}
                        {user && <div className="flex gap-2 md:gap-4 flex-row-reverse justify-center items-center">
                            <button className=" text-ruby-500 border-2 border-ruby-500 hover:bg-ruby-500 hover:text-white active:scale-95 duration-150 md:px-5 px-2 py-2 rounded-lg font-semibold" onClick={handleLogout}>Logout</button>
                            {user.photoURL && <div className="tooltip tooltip-left" data-tip={user.displayName && user.displayName}>
                                <img src={user.photoURL} className="md:w-12 md:h-12 w-10 h-10 object-cover object-center rounded-full" alt="" />
                            </div>}
                        </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;