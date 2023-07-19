import { stats } from "../constants"

const Stats = () => {
    return (
        <section className='flex flex-1 justify-center items-center mt-7 mb-6 sm:mb-20'>
            {stats.map((item, index) => (
                <div className={`flex justify-start items-center px-4 leading-3 border-e-2 ${index === stats.length - 1 && "border-e-0"}`} key={item.id}>
                    <h4 className="font-poppins font-semibold text-[38px] md:text-[53.16px] me-8">{item.value}</h4>
                    <p className=" font-poppins font-normal text-[21px] leading-[28.58px] text-gradient uppercase ">{item.title}</p>
                </div>
            ))}
        </section>
    );
}

export default Stats;
