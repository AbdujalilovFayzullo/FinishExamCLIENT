"use client"
import React, { useState, useEffect, Fragment } from "react"
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { Squeeze as Hamburger } from 'hamburger-react'
import Link from "next/link";
const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isShrunk, setIsShrunk] = useState(false)
    useEffect(() => {

    }, []);


    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Fragment>

            <div
                className={`bg-white  -top-1 left-0 right-0 z-20 fixed ${isShrunk ? "shadow-lg" : ""
                    }`}
            >
                <div
                    className={`container bg-white mx-auto ${isShrunk
                        ? "md:h-[85px] h-[55px] flex flex-col pt-[12px] pb-2 gap-y-1 duration-300"
                        : "md:h-[132px] h-[70px] flex flex-col pt-[16px] gap-y-4 duration-300  "
                        }  px-5`}
                >
                    <div className="flex justify-between items-center">
                        <IoIosSearch className="w-[24px] h-[24px] cursor-pointer hidden md:block  text-[#22202E] hover:text-slate-950" />
                        <p className="text-3xl font-normal text-[#2A254B] ">
                            <Link href="/"> Avion</Link>
                        </p>


                        <div className="flex gap-4  items-center">
                            <div className="sm:flex gap-4 hidden ">

                                <Link href='/'><p className="text-slate-700">Home</p></Link>
                                <Link href='/about'><p className="text-slate-700">About us</p></Link>
                                <Link href='/product'><p className="text-slate-700">All Product</p></Link>
                                <Link href='/products'><p className="text-slate-700">Contact</p></Link>

                            </div>
                            <IoIosSearch className="block md:hidden  w-[28px] h-[28px] cursor-pointer  text-[#22202E] hover:text-slate-950" />
                            <Link href="/cart">
                                <AiOutlineShoppingCart className="md:block hidden  w-[24px] h-[24px] cursor-pointer d text-[#22202E] hover:text-slate-950" />
                            </Link>
                            <FaRegUserCircle className="md:block hidden w-[24px] h-[24px] cursor-pointer  text-[#22202E] hover:text-slate-950" />

                            <button
                                onClick={handleClick}
                                className="pt-2 flex-col gap-1 justify-center items-center block md:hidden w-[32px] h-[32px] cursor-pointer  text-[#22202E] hover:text-slate-950"
                            >
                                <span><Hamburger/></span>
                            </button>

                        </div>
                    </div>
                    <hr className=" md:block hidden pr-6 h-2" />
                    <div className=" justify-center gap-6 hidden md:flex">
                        <Link
                            href={"#"}
                            className="text-[#505977] dark:text-slate-400  hover:text-[#2A254B] cursor-pointer hover:font-normal"
                        >
                            Plant pots
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#505977] dark:text-slate-400  hover:text-[#2A254B]  cursor-pointer hover:font-normal"
                        >
                            Ceramics
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#505977] dark:text-slate-400 hover:text-[#2A254B]  over:text-[#110f16]  cursor-pointer hover:font-normal"
                        >
                            Tables
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#505977] dark:text-slate-400 hover:text-[#2A254B]  cursor-pointer hover:font-normal"
                        >
                            Chairs
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#505977] dark:text-slate-400  hover:text-[#2A254B]  cursor-pointer hover:font-normal"
                        >
                            Crockery
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#505977] dark:text-slate-400  hover:text-[#2A254B]  cursor-pointer hover:font-normal"
                        >
                            Tableware
                        </Link>
                        <Link
                            href={"#"}
                            className="text-[#505977] dark:text-slate-400  hover:text-[#2A254B]  cursor-pointer hover:font-normal"
                        >
                            Cutlery
                        </Link>
                    </div>
                    <div
                        className={`${isOpen
                            ? "translate-x"
                            : "-translate-x-[420px] transation duration-400 ease-linier  "
                            } absolute top-0 left-0 h-screen flex flex-col gap-3 px-3 w-[50vw] bg-slate-900  z-50 transation duration-500 ease-linear md:hidden shadow-md`}
                    >
                        <Link href='/' className="mt-5 flex items-center gap-3">Home</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/product'>Blog</Link>
                        <Link href='/cart'>Korzinka</Link>
                    </div>
                </div>
            </div>



        </Fragment>
    )
}
export default Header