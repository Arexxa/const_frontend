import React from 'react'
import navBg from '../../assets/images/navbar-bg.png'
import pixel from '../../assets/images/pexelbg.png'

function Landing() {
    return (
        <div className="w-full h-screen flex flex-col justify-start bg-[#FAFAFA]">
            <div className="fixed top-0 right-0">
                <img src={navBg} alt="navbar-bg" />
            </div>
            <div className="mt-[220px] w-full p-4">
                <div>
                    <div className="mx-auto flex justify-center ">
                        <div className="lg:w-[60%] text-black italic font-normal text-[22px] lg:text-[40px] leading-[25px] lg:leading-[47.28px] mb-[37px]">
                            CRAFT YOUR OWN CAREER PATHWAY WITH <br /> A CAREER
                            CONSULTATION.
                        </div>
                    </div>
                    <div className="mx-auto flex justify-center lg:w-[65%]">
                        <div className="text-black italic font-normal text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22.08px] mb-[16px] lg:mb-[37px]">
                            Lorem ipsum dolor sit amet consectetur. Id elit sit
                            diam fringilla vulputate tellus. Vel risus amet
                            malesuada cum velit tempor. Lorem ipsum dolor sit
                            amet consectetur. Lorem ipsum dolor sit amet
                            consectetur. Id elit sit diam fringilla vulputate
                            tellus. Vel risus amet malesuada cum velit tempor.
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                    </div>
                    <div className="mx-auto flex justify-center">
                        <button className="abel bg-[#FBA91A] hover:bg-amber-300 text-[14px] lg:text-[16px] text-white py-3 px-4 lg:px-24 rounded leading-[20.39px]">
                            Book a free consultation call
                        </button>
                    </div>
                </div>
                <div className="mx-auto flex justify-center mt-[20px] lg:mt-[60px]">
                    <img src={pixel} alt="" />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Landing
