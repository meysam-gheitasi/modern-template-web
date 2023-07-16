import { logo, menu, close } from "../assets";
import { navLink } from "../constants";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-6 w-full">
            <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
           
        </div>
    );
}

export default Navbar;
