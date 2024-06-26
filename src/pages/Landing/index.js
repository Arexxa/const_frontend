import React from 'react'
import navBg from '../../assets/images/navbar-bg.png'
import pixel from '../../assets/images/pexelbg.png'
import profileIcon from '../../assets/images/profile-icon.png'
import bulletIcon from '../../assets/svg/bullet-icon.svg'
import iqbal from '../../assets/images/iqbal.png'
import lineBg from '../../assets/images/Linesbg.png'
import gradientBg from '../../assets/images/top-question-bg.png'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

const bullet = [
    {
        id: 1,
        icon: bulletIcon,
        title: 'Request a Demo',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar at leo vel quisque sagittis. Cursus dictum aliquam viverra velit. Viverra odio eget.',
    },
    {
        id: 2,
        icon: bulletIcon,
        title: 'Request a Demo',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar at leo vel quisque sagittis. Cursus dictum aliquam viverra velit. Viverra odio eget.',
    },
    {
        id: 3,
        icon: bulletIcon,
        title: 'Request a Demo',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar at leo vel quisque sagittis. Cursus dictum aliquam viverra velit. Viverra odio eget.',
    },
]

function Landing() {
    return (
        <div className="w-full h-screen flex flex-col bg-[#FAFAFA]">
            <div className="flex justify-end">
                <img src={navBg} alt="navbar-bg" />
            </div>
            <div className="mt-[40px] lg:mt-[100px] w-full p-4">
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
                    <Link to="/login">
                        <button className="abel bg-[#FBA91A] hover:bg-amber-300 text-[14px] lg:text-[16px] text-white py-3 px-4 lg:px-24 rounded leading-[20.39px]">
                            Book a free consultation call
                        </button>
                    </Link>
                    </div>
                </div>
                <div className="mx-auto flex justify-center mt-[20px] lg:mt-[60px]">
                    <img src={pixel} alt="" />
                </div>
            </div>

            <div className="relative">
                <div className="circularBg lg:w-[447px] lg:h-[311px] lg:absolute z-[-10] left-0 top-0 lg:mt-[54px]"></div>

                <div className="lg:mt-[60px] w-full p-4">
                    <div className="mx-auto lg:flex justify-center">
                        <div className="p-5 border-2 rounded-lg bg-white lg:w-[65%] px-7 pb-12">
                            <div className="lg:flex lg:flex-row lg:gap-4">
                                <div className=" flex justify-start gap-5">
                                    <img
                                        src={profileIcon}
                                        alt="profile-icon"
                                        className="w-10 h-10"
                                    />
                                    <div className="flex flex-col">
                                        <p className="jakarta text-[16px] leading-[20.16px] font-semibold">
                                            About Us
                                        </p>
                                        <p className="jakarta text-[14px] leading-[17.64px] font-normal">
                                            AcceptBy
                                        </p>
                                    </div>
                                </div>
                                <div className="flex mt-4 gap-3">
                                    <div className="relative grid select-none items-center whitespace-nowrap rounded-2xl bg-[#FFF2E6] py-1 px-5 text-[#FF7A00]">
                                        <span className="jakarta text-[12px] leading-[15.12px] font-normal">
                                            Based in Segamat
                                        </span>
                                    </div>
                                    <div className="">
                                        <span className="w-1 h-1 bg-black rounded-full inline-block"></span>
                                    </div>
                                    <div className="relative grid select-none items-center whitespace-nowrap rounded-2xl bg-[#FFF2E6] py-1 px-5 text-[#F64343]">
                                        <span className="jakarta text-[12px] leading-[15.12px] font-normal">
                                            IT & Technology
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[14px] lg:text-[16px] text-left font-normal leading-[22.08px] mt-[27px]">
                                Lorem ipsum dolor sit amet consectetur. Id elit
                                sit diam fringilla vulputate tellus. Vel risus
                                amet malesuada cum velit tempor. Lorem ipsum
                                dolor sit amet consectetur. Lorem ipsum dolor
                                sit amet consectetur. Id elit sit diam fringilla
                                vulputate tellus. Vel risus amet malesuada cum
                                velit tempor. Lorem ipsum dolor sit amet
                                consectetur.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cubicBg lg:w-[443px] lg:h-[342.03px] lg:absolute z-[-10] right-0 top-0 lg:mt-[47rem]"></div>

                <div className="mt-[10px] w-full p-4">
                    <div className="mx-auto flex justify-center lg:w-[65%]">
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="lg:w-[65%] p-8 border-2 rounded-lg bg-white">
                                <div className="text-left jakarta font-semibold text-[16px] lg:text-[24px] leading-[30.24px] py-4">
                                    What we’re offering
                                </div>
                                {bullet.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex justify-start gap-4 pb-3"
                                    >
                                        <img
                                            src={item.icon}
                                            alt="bullet icon"
                                            className="mb-[100px]"
                                        />
                                        <div className="flex flex-col text-left">
                                            <p className="abel font-normal text-[16px] lg:text-[18px] lg:leading-[23.49px]">
                                                {item.title}
                                            </p>
                                            <p className="font-normal text-[14px] lg:text-[16px] lg:leading-[22.24px]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex-1 p-8 border-[1px] border-[#3583F7] rounded-lg bg-white">
                                <div className="p-2 pr-3 lg:p-4 jakarta font-semibold text-[16px] lg:text-[24px] leading-[30.24px] text-white text-right rounded-lg bg-[#3583F7]">
                                    More than 10 years experience
                                </div>
                                <div className="mt-[21px] flex justify-center">
                                    <img
                                        src={iqbal}
                                        alt="iqbal"
                                        className="w-[28rem] lg:w-[22.5rem] h-[18rem] lg:h-[12.5rem]"
                                    />
                                </div>
                                <div className="mt-6 text-[#002B8C] text-left font-normal text-[14px] lg:text-[16px] leading-[22.24px]">
                                    Iqbal Baharum, tech expert with a background
                                    of more than 10-years in the Tech & Software
                                    Industries and has experience working with
                                    Malaysian and UK companies. Passionate about
                                    guiding tech talent in tech development.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[4rem] lg:mt-[14rem] relative">
                <img
                    src={gradientBg}
                    className="w-full lg:h-[180px] rounded-2xl"
                />
                <div className="absolute top-1/2 left-[30%] lg:left-[20%] transform -translate-x-1/2 -translate-y-1/2 text-white flex items-center gap-4 lg:gap-7">
                    <img src={lineBg} alt="" className="w-12 h-12" />
                    <div className="text-left">
                        <p className="lg:text-[30px] font-semibold">
                            Top questions about our
                        </p>
                        <p className="lg:text-[30px] font-semibold">
                            career consultation
                        </p>
                    </div>
                </div>
            </div>

            <div className="lg:mt-[4rem]">
                <div className="flex flex-col lg:flex-row">
                    <div className="p-5 lg:flex-1 lg:ml-16">
                        <p className="text-left jakarta font-semibold text-[22px] lg:text-[32px] lg:leading-[40.32px]">
                            General FAQs
                        </p>
                        <p className="text-left font-normal text-[14px] lg:text-[16px] lg:leading-[22.4px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                    <div className="p-5 lg:flex-1 pb-[86px] lg:mr-24">
                        <Accordion allowMultiple>
                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box
                                                    as="span"
                                                    flex="1"
                                                    textAlign="left"
                                                    className="font-normal abel lg:text-[16px] lg:leading-[20.72px]"
                                                >
                                                    Hire a skilled part-timer
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize="12px" />
                                                ) : (
                                                    <AddIcon fontSize="12px" />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            pb={4}
                                            className="font-normal lg:text-[16px] lg:leading-[22.4px] text-left"
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>

                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box
                                                    as="span"
                                                    flex="1"
                                                    textAlign="left"
                                                    className="font-normal abel lg:text-[16px] lg:leading-[20.72px]"
                                                >
                                                    Section 2 title
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize="12px" />
                                                ) : (
                                                    <AddIcon fontSize="12px" />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            pb={4}
                                            className="font-normal lg:text-[16px] lg:leading-[22.4px] text-left"
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>

                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box
                                                    as="span"
                                                    flex="1"
                                                    textAlign="left"
                                                    className="font-normal abel lg:text-[16px] lg:leading-[20.72px]"
                                                >
                                                    Section 2 title
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize="12px" />
                                                ) : (
                                                    <AddIcon fontSize="12px" />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            pb={4}
                                            className="font-normal lg:text-[16px] lg:leading-[22.4px] text-left"
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>

                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box
                                                    as="span"
                                                    flex="1"
                                                    textAlign="left"
                                                    className="font-normal abel lg:text-[16px] lg:leading-[20.72px]"
                                                >
                                                    Section 2 title
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize="12px" />
                                                ) : (
                                                    <AddIcon fontSize="12px" />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            pb={4}
                                            className="font-normal text-[12px] lg:text-[16px] lg:leading-[22.4px] text-left"
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
