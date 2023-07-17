import { arrowUp } from "../assets";
const GetStarted = () => {
    return (
        <div className="flex justify-center items-center h-[140px] w-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer leading-[23.5px">
            <div className="flex flex-col justify-center items-center bg-primary h-[100%] w-[100%] rounded-full ">
                <div className="flex justify-start items-center">
                    <p className="font-poppins text-[18px] font-medium mr-2"><span className="text-gradient">Get</span></p>
                    <img className="w-[23px] h-[23px] object-contain" src={arrowUp} alt="arrow up" />
                </div>
                <p className="font-poppins text-[18px] font-medium"><span className="text-gradient">Started</span></p>
            </div>
        </div>
    );
}

export default GetStarted;
