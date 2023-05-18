
const Navbar = () => {
    const navItems = <>
    <li><a className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-gray-700  hover:scale-110 duration-150">Home</a></li>
    <li><a className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-gray-700 hover:scale-110 duration-150">All Toys</a></li>
    <li><a className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-gray-700 hover:scale-110 duration-150">My Toys</a></li>
    <li><a className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-gray-700 hover:scale-110 duration-150">Add A Toy</a></li>
    <li><a className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-gray-700 hover:scale-110 duration-150">Blogs</a></li>
    </>
    return (
        <div className="navbar bg-white py-10">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact text-charcoal dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                </ul>
                </div>
                {/* <a className="font-kanit text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-gray-700 px-7 py-2 rounded-lg tracking-widest">He<span>ro Ha</span>ven</a> */}
                <a className="font-kanit text-3xl font-bold text-ruby-500 rounded-lg tracking-widest border-b-4 border-[#E32636] active:scale-95 duration-150 cursor-pointer">Hero <span className="text-charcoal">Haven</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className=" text-ruby-500 border-2 border-ruby-500 hover:bg-ruby-500 hover:text-white active:scale-95 duration-150 px-5 py-2 rounded-lg font-semibold ">Login</button>
            </div>
        </div>
    );
};

export default Navbar;