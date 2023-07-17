import { discount, arrowUp } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
    return (
        <section id="home" className="flex flex-col md:flex-row md:py-16 py-6">
            <div className="flex flex-1 justify-center items-start flex-col xl:px-0 md:px-16 px-6">
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img src={discount} alt="discount" className=" w-[32px] h-[32px] object-contain" />
                    <span className=" font-poppins text-[16px]">{' '}20% <span className=" text-gray-400">DISCOUNT FOR</span> 1 MONTH <span className="text-gray-400">ACCOUNT</span></span>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="md:text-[72px] text-[52px]  font-poppins font-semibold flex-1 leading-[75px] md:leading-[100px]">The Next<br />
                        <span className="text-gradient">Generation</span><br />
                       </h1>
                    <div className=" hidden md:flex md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>
                <h1 className="md:text-[72px] text-[52px] font-poppins font-semibold flex-1 leading-[75px] md:leading-[100px]"> Payment Method.</h1>
            </div>
        </section>
    );
}

export default Hero;
