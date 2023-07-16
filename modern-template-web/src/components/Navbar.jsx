import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLink } from "../constants";

const Navbar = () => {
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
        </div>
    );
}

export default Navbar;
