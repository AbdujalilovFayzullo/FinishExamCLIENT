
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Vase } from '@/assets';
import Cart2 from "@/components/cards";

const Cart = () => {
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
        <>
            <div className="container bg-white mx-auto lg:px-[62px] px-[20px]">
                <p className="sm:text-[36px] text-[24px] text-[#2A254B] md:pt-[64px] text-center md:text-start pb-[40px] sm:pb-[50px]">
                    Your shopping cart
                </p>
                <div className="justify-between  hidden sm:flex pb-[12px] ">
                    <p className="text-[14px] text-[#2A254B] ">
                        Product
                    </p>
                    <p className="text-[14px] text-[#2A254B]  pl-48">
                        Quantity
                    </p>
                    <p className="text-[14px] text-[#2A254B] ">Total</p>
                </div>
                <hr className=" pt-[12px]  hidden sm:flex" />
                <div className="flex sm:justify-between py-[20px] items-center justify-center">
                    <div className="flex">
                        <Image
                            src={Vase}
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
                            <div className="items-center gap-5 pl-[21px] flex sm:hidden text-blackn">
                                <button onClick={decreaseQuantity} className="w-[30px] h-[30px] hover:bg-[#2A254B] hover:text-[#fff] border-2 rounded">-</button>
                                <p>{quantity}</p>
                                <button onClick={increaseQuantity} className="w-[30px] h-[30px] hover:bg-[#2A254B] hover:text-[#fff] border-2 rounded">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="items-center gap-5 pl-[21px] hidden sm:flex text-black">
                        <button onClick={decreaseQuantity} className="w-[30px] h-[30px] hover:bg-[#2A254B] hover:text-[#fff] border-2 rounded">-</button>
                        <p>{quantity}</p>
                        <button onClick={increaseQuantity} className="w-[30px] h-[30px] border-2 rounded hover:bg-[#2A254B] hover:text-[#fff]">+</button>
                    </div>
                    <p className="text-[18px] hidden sm:block text-black">
                        £ {pricePerProduct * quantity}
                    </p>
                </div>



            </div>
            <Cart2 />
        </>
    );
};

export default Cart;
