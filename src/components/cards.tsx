
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Flower, Vase } from '@/assets';

const Cart2 = () => {
    const [quantity, setQuantity] = useState(1);
    const pricePerProduct = 85;
    const [totalPrice, setTotalPrice] = useState(pricePerProduct);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        setTotalPrice(totalPrice + pricePerProduct);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalPrice(totalPrice - pricePerProduct);
        }
    };

    return (
        <div className="container bg-white mx-auto lg:px-[62px] px-[20px]">


            <hr className=" pt-[12px]  hidden sm:flex" />
           <div className="text-black">


           <div className="flex sm:justify-between py-[20px] items-center justify-center">
                <div className="flex">
                    <Image
                        src={Flower}
                        alt="CartImage"
                        className="sm:w-[109px] sm:h-[134px] w-[133px] h-[170px]"
                    />
                    <div className="flex flex-col">
                        <p className="text-[20px] text-[#2A254B]  pl-[21px]">
                            Graystone vase
                        </p>
                        <p className="text-[14px] py-2 text-[#2A254B]  pl-[21px] max-w-[179px]">
                            A timeless ceramic vase with a tri color grey glaze.
                        </p>
                        <p className=" text-[#2A254B]  pl-[21px]">£85</p>
                        <div className="items-center gap-5 pl-[21px] flex sm:hidden">
                            <button onClick={decreaseQuantity} className="w-[30px] h-[30px] hover:bg-[#2A254B] hover:text-[#fff] border-2 rounded">-</button>
                            <p>{quantity}</p>
                            <button onClick={increaseQuantity} className="w-[30px] h-[30px] hover:bg-[#2A254B] hover:text-[#fff] border-2 rounded">+</button>
                        </div>
                    </div>
                </div>
                <div className="items-center gap-5 pl-[21px] hidden sm:flex">
                    <button onClick={decreaseQuantity} className="w-[30px] h-[30px] hover:bg-[#2A254B] hover:text-[#fff] border-2 rounded">-</button>
                    <p>{quantity}</p>
                    <button onClick={increaseQuantity} className="w-[30px] h-[30px] border-2 rounded hover:bg-[#2A254B] hover:text-[#fff]">+</button>
                </div>
                <p className="text-[18px] hidden sm:block">
                    £ {pricePerProduct * quantity}
                </p>
            </div>
           </div>


            <div className="">
                <p className="sm:text-end text-center pt-4">Subtotal £ {totalPrice}</p>
                <p className="sm:text-end text-center">
                    Taxes and shipping are calculated at checkout
                </p>
                <div className="flex justify-center sm:justify-end">
                    <button
                        type="submit"
                        className=" mb-[48px] mt-4 w-[172px]  flex  items-center justify-center hover:bg-[#F9F9F9]  hover:text-[#1a253c] rounded-2 border-2   h-[56px] bg-[#1a253c] text-slate-200 font-medium"
                    >
                        Go to checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart2;
