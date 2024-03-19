import Link from "next/link";
import React from "react";
import { FaTelegram, FaInstagram } from "react-icons/fa";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { TiSocialSkype } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io5";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-[#1a253c]">
            <div className="container mx-auto sm:px-[82px] px-[20px]">
                <div className="flex flex-wrap gap-y-10 gap-6 justify-between py-12">
                    <div className="flex flex-col gap-3">
                        <Link href={"#"} className="text-[#fff]">
                            Menu
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            New arrivals
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            Best sellers
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            Recently viewed
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            Popular this week
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700duration-150"
                        >
                            All products
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Link href={"#"} className="text-[#fff]">
                            Categories
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            Crockery
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            Furniture
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            Homeware
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            Plant pots
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            Chairs
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            Crockery
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Link href={"#"} className="text-[#fff]">
                            Our company
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            Vacancies
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            Contact us
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            Privacy
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            Categories
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#fff]  text-sm hover:text-gray-700 duration-150"
                        >
                            Returns policy
                        </Link>
                    </div>
                    <div className=" mx-auto sm:mx-0">
                        <p className="text-white">Join our mailing list</p>
                        <form className="pt-4 flex mx-auto">
                            <input
                                type="email"
                                className="outline-none  w-[170px] sm:w-[350px] md:w-[400px]  hover:bg-slate-900 lg:w-[542px] py-4 pl-[16px] sm:pl-[32px] placeholder:pr-40 bg-zinc-600  placeholder-slate-300 text-slate-100"
                                placeholder="your@email.com"
                                required
                            />
                            <button
                                type="submit"
                                className="w-[100px] sm:w-[118px] hover:bg-[#23314e] hover:text-slate-200 hover:border-2 border-white  bg-white text-slate-900 font-medium "
                            >
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
                <hr className="text-[#3f3d7f]" />
                <div className="py-[25px] flex sm:justify-between gap-3 flex-wrap  justify-center">
                    <p className="text-sm text-white">Copyright 2022 Avion LTD</p>
                    <div className="flex gap-3 items-center">
                        <p className="flex hover:bg-white rounded-lg  justify-center w-[18px] h-[20px] items-center">
                            <Link
                                href={""}
                                className="text-[24px] hover:scale-[1.2] text-white hover:text-[#5191c6] duration-200"
                            >
                                <FaTelegram />
                            </Link>
                        </p>
                        <Link
                            href={""}
                            className="w-6 h-6 hover:scale-[1.2] text-[24px] text-white hover:text-[#f34783] duration-200"
                        >
                            <FaInstagram />
                        </Link>
                        <p className="flex hover:bg-white rounded-[4px] justify-center w-[18px] h-[20px] items-center">
                            <Link
                                href={""}
                                className="text-[27px] hover:scale-[1.2] text-white hover:text-[#9b9b01] duration-200"
                            >
                                <IoLogoLinkedin />
                            </Link>
                        </p>
                        <Link
                            href={""}
                            className="w-6 h-6 hover:scale-[1.2] text-white hover:text-[#29609a] duration-200 text-[24px]  "
                        >
                            <IoLogoTwitter />
                        </Link>
                        <p className="flex hover:bg-white  rounded-[4px] justify-center w-[18px] h-[22px] items-center">
                            <Link
                                href={""}
                                className="text-[27px] hover:scale-[1.2] rounded-[12px] text-white hover:text-[#042e76] duration-200"
                            >
                                <IoLogoFacebook />
                            </Link>
                        </p>
                        <p className="flex hover:bg-white rounded-lg  justify-center w-[18px] h-[24px] items-center">
                            <Link
                                href={""}
                                className="text-[22px] hover:scale-[1.2] text-white hover:text-[red] duration-200"
                            >
                                <BsPinterest />
                            </Link>
                        </p>
                        <p className="flex hover:bg-white rounded-[24px] justify-center w-[18px] h-[20px] items-center">
                            <Link
                                href={""}
                                className="text-[27px] hover:scale-[1.2 text-white hover:text-[#69c0ff] duration-200"
                            >
                                <TiSocialSkype />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
