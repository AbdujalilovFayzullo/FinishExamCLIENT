import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { PiPlantBold } from "react-icons/pi";
const Bloc = () => {
    return (
        <>
            <section>
                <p className="pb-[21px] md:pt-[100px] sm:pt-[70px] pt-[40px] dark:text-slate-600 text-2xl text-center text-[#1a253c]">
                    What makes our brand different
                </p>
                <div className="flex flex-wrap justify-center gap-8 px-4 py-4">
                    <div className="group w-[342px] md:w-[270px] p-3  ">
                        <TbTruckDelivery className="text-[24px] text-black group-hover:text-blue-900 duration-200" />
                        <p className="text-xl  text-[#1a253c] dark:text-slate-600 pt-4">
                            Next day as standard
                        </p>
                        <p className="text-[16px] text-[#1a253c] dark:text-slate-600 pt-2">
                            Order before 3pm and get your  order the  next day as standard
                        </p>
                    </div>

                    <div className="group w-[342px] md:w-[270px]  p-4 duration-200">
                        <FaRegCheckCircle className="text-black group-hover:text-red-500 text-[24px] duration-200" />
                        <p className="text-xl  text-[#1a253c] dark:text-slate-600 pt-4">
                            Made by true artisans
                        </p>
                        <p className="text-[16px]  text-[#1a253c] dark:text-slate-600 pt-2">
                            Handmade crafted goods made with real passion and craftmanship
                        </p>
                    </div>
                    <div className="group w-[342px] md:w-[270px]  p-4  duration-200">
                        <CiCreditCard1 className="text-black group-hover:text-gray-400 text-[24px] duration-200" />
                        <p className="text-xl  text-[#1a253c] dark:text-slate-600 pt-4">
                            Unbeatable prices
                        </p>
                        <p className="text-[16px]  text-[#1a253c] dark:text-slate-600 pt-2">
                            For our materials and quality you won’t find better prices
                            anywhere
                        </p>
                    </div>
                    <div className="group w-[342px]  md:w-[270px]  p-4  duration-200">
                        <PiPlantBold className="text-black text-[24px] group-hover:text-green-400 duration-200" />
                        <p className="text-xl  text-[#1a253c] dark:text-slate-600 pt-4">
                            Recycled packaging
                        </p>
                        <p className="text-[16px]  text-[#1a253c] dark:text-slate-600 pt-2">
                            We use 100% recycled packaging to ensure our footprint is
                            manageable
                        </p>
                    </div>
                </div>
                <hr />
            </section>


            <section className="mt-[30px] flex flex-col container mx-auto justify-center  max-w-[1273px] sm:h-[364px] h-[320px] ">
                <p className="md:pt-[68px] text-center sm:text-[32px] text-[20px] px-1 pt-4   text-[#2A254B] dark:text-slate-600">
                    Join the club and get the benefits
                </p>
                <p className="pt-4 px-1 text-[#2A254B] dark:text-slate-600 text-center max-w-[470px] mx-auto ">
                    Sign up for our newsletter and receive exclusive offers on new ranges,
                    sales, pop up stores and more
                </p>
                <form className="flex mx-auto pt-[72px] ">
                    <input
                        type="email"
                        className="outline-none hover:border-5 hover:bg-slate-600  w-[170px] sm:w-[350px] md:w-[400px]  lg:w-[542px]  placeholder:pr-40 bg-slate-200  placeholder-red text-[#2A254B] py-4 pl-[16px] sm:pl-[32px]"
                        placeholder="your@email.com"
                        required
                    />
                    <button
                        type="submit"
                        className="w-[100px] text-slate-200 hover:border-2 border-[#23314e]  hover:bg-slate-200 hover:text-[#23314e] font-medium sm:w-[118px]  bg-[#1a253c] "
                    >
                        Sign up
                    </button>
                </form>
            </section>
        </>
    )
}

export default Bloc