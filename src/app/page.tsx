import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { PiPlantBold } from "react-icons/pi";

import { Chair, Lamp, Poter, Poter1, Sofa, SofaAll, Table, } from "@/assets";
const Home = () => {
  return (
    <main className="container mx-auto bg-white lg:px-[62px] px-[20px]">
      <section className="justify-center flex bg-[#2A254B] md:py-[50px] pt-[0px] pb-[20px]">
        <div className="max-w-[750px] md:p-10 sm:p-8 p-4">
          <p className="sm:text-[32px] text-[24px] leading-10 text-white pb-8">
            The furniture brand for the future, with timeless designs
          </p>
          <button className="w-[342px] hidden sm:block hover:bg-white rounded hover:text-[#2A254B]   text-[#fff] bg-[#f9f9f93c]  px-8 py-4 sm:w-[220px]">
            View collection
          </button>
          <p className="text-[18px] leading-7 lg:pt-[150px] xl:pt-[200px] md:pt-[80px]  pt-[30px] text-white">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
          <Link href={"#"}>
            <button className="w-[232px] mx-auto rounded block sm:hidden mt-[32px] text-[#fff] bg-[#f9f9f93c] hover:bg-white hover:text-[#2A254B]  px-8 py-4 sm:w-[220px]">
              View collection
            </button>
          </Link>
        </div>
        <div className="hidden md:block">
          <Image
            src={Chair}
            alt=""
            className=" h-full w-[474px] min-w-[280px]"
          />
        </div>
      </section>
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
      <section className="flex flex-col">
        <p className=" text-[#1a253c] pl-[70px] flex justify-center md:justify-start md:pt-[80px] text-3xl">
          New ceramics
        </p>
        <div className=" flex flex-wrap justify-center py-[20px] sm:py-[34px] gap-3 sm:gap-5">
          <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Image
              src={Chair}
              alt=""
              className="w-[163px] object-cover rounded-t-xl sm:w-[300px] h-[201px] sm:h-[375px]"
            />
            <p className="text-[#1a253c] dark:text-slate-600 pt-6 text-[20px]">
              The Dandy chair{" "}
            </p>
            <p className="text-[#1a253c] dark:text-slate-600 pt-2 text-[18px]">
              £250
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Image
              src={Poter}
              alt=""
              className="w-[163px] object-cover rounded-t-xl sm:w-[300px] h-[201px] sm:h-[375px] "
            />
            <p className="text-[#1a253c] dark:text-slate-600 pt-6 text-[20px]">
              The Dandy chair{" "}
            </p>
            <p className="text-[#1a253c] dark:text-slate-600 pt-2 text-[18px]">
              £250
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Image
              src={Poter1}
              alt=""
              className="w-[163px] object-cover rounded-t-xl sm:w-[300px] h-[201px] sm:h-[375px]"
            />
            <p className="text-[#1a253c] dark:text-slate-600 pt-6 text-[20px]">
              The Dandy chair{" "}
            </p>
            <p className="text-[#1a253c] dark:text-slate-600 pt-2 text-[18px]">
              £250
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Image
              src={Lamp}
              alt=""
              className="w-[163px] object-cover rounded-t-xl sm:w-[300px] h-[201px] sm:h-[375px]"
            />
            <p className="text-[#1a253c] dark:text-slate-600 pt-6 text-[20px]">
              The Dandy chair{" "}
            </p>
            <p className="text-[#1a253c] dark:text-slate-600 pt-2 text-[18px]">
              £250
            </p>
          </div>
        </div>
        <button className="w-[260px] bg-[#F9F9F9] text-[#2A254B]  border-2 py-2 px-6 focus:outline-none rounded  hover:bg-[#2A254B] hover:text-[#F9F9F9] mx-auto  sm:w-[220px]">
          View collection
        </button>
      </section>
      <section className="flex flex-col">
        <p className=" text-[#1a253c] pl-[60px] dark:text-slate-600 flex justify-center md:justify-start md:pt-[80px] pt-12 md:text-3xl text-2xl">
          Our popular products
        </p>
        <div className=" flex sm:py-[34px] gap-3 sm:gap-5 flex-wrap justify-center py-[20px] ">
          <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Image
              src={SofaAll}
              alt=""
              className="w-[200px] object-cover rounded-t-xl sm:w-[630px] h-[221px] sm:h-[375px]"
            />
            <p className="text-[#1a253c] dark:text-slate-600 pt-6 text-[20px]">
              The Dandy chair{" "}
            </p>
            <p className="text-[#1a253c] dark:text-slate-600 pt-2 text-[18px]">
              £250
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Image
              src={Chair}
              alt=""
              className="w-[200px] sm:w-[300px] h-[221px] object-cover rounded-t-xl sm:h-[375px]"
            />
            <p className="pt-6 text-[20px] text-[#1a253c] dark:text-slate-600 ">
              The Dandy chair{" "}
            </p>
            <p className="pt-2 text-[18px] text-[#1a253c] dark:text-slate-600 ">
              £250
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Image
              src={Table}
              alt=""
              className="w-[200px] h-[221px] sm:h-[375px] sm:w-[300px] object-cover rounded-t-xl "
            />
            <p className="pt-6 text-[20px] text-[#1a253c] dark:text-slate-600">
              The Dandy chair{" "}
            </p>
            <p className="pt-2 text-[18px] text-[#1a253c] dark:text-slate-600 ">
              £250
            </p>
          </div>
        </div>
        <Link href={"#"} className=" mx-auto">
          <button className="w-[260px] text-[#2A254B]   sm:w-[220px] bg-[#F9F9F9]  border-2 py-2 px-6 focus:outline-none hover:bg-[#2A254B] hover:text-[#F9F9F9] rounded text-lg">
            View collection
          </button>
        </Link>
      </section>
      <section className="mt-[52px] flex flex-col justify-center bg-white dark:bg-[#23314e6 max-w-[1273px] sm:h-[364px] h-[320px] ">
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
      <section className=" w-full  md:pt-[65px]  md:flex pt-[20px]">
        <div className=" md:w-[50%] w-[100%] md:p-10 sm:p-8 p-4 mx-auto ">
          <p className="sm:text-[32px]  text-[20px] leading-10  text-[#23314e]  pb-8">
            From a studio in London to a global brand with over 400 outlets
          </p>
          <p className="text-[18px] leading-7 pt-4  text-[#23314e]">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-[18px] leading-7 pt-4  text-[#23314e]">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
          <div className="flex justify-center sm:block">
            <Link href={"#"} className="mx-auto">
              <button className="w-[100%]  mt-[62px] mx-auto text-[#23314e] px-8 py-4 sm:w-[220px]  rounded  hover:bg-[#2A254B] border-2 hover:text-[#F9F9F9] dark:bg-[#f9f9f96] ">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-[50%] w-[100%] ">
          <Image src={Sofa} alt="" className=" h-full w-full" />
        </div>
      </section>
    </main>
  );
};

export default Home