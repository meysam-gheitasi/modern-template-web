import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLink } from "../constants";
import { useState } from "react";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    
    return (
        <div className="flex justify-between items-center py-6 w-full">
            <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

            <ul className=" hidden md:flex flex-1 list-none justify-end items-center">
                {navLink.map((item, index) => (
                    <li key={item.id} className={`cursor-pointer font-normal text-[16px] font-poppins
                    ${index === navLink.length - 1 ? "mr-0" : "mr-4"}`}>
                        <Link to={item.id}>{item.title}</Link>
                    </li>
                ))}
            </ul>

            <div className="flex md:hidden justify-end items-center">
                <img src={toggle ? close : menu} alt="menu" onClick={() => setToggle(!toggle)} className=" object-contain w-[28px] h-[28px]"/>
                <div className={`${toggle ? "flex" : "hidden"} absolute bg-black-gradient top-20 right-0 my-2 mx-4 min-w-[140px] rounded-xl p-6 sidebar`}>
                    <ul className=" list-none flex justify-end items-center flex-col flex-1">
                       {navLink.map(item =>(
                         <li key={item.id} className=" font-medium cursor-pointer font-poppins text-[16px] mb-4">
                            <Link to={item.id}>{item.title}</Link>
                         </li>
                       ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
