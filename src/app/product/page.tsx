"use client"


import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import getProducts from '../store/product.store';
import Link from 'next/link';

const page = () => {

    const {getproducts, products } = getProducts();

    const [searchTerm, setSearchTerm] = useState("");



    useEffect(() => {
      getproducts();
    }, []);



    return (
        <section>
            <div className="bg-[url('/Page.png')] h-[209px] ">

                <p className="container mx-auto md:pt-[68px] md:text-start sm:pl-[40px] text-center sm:text-[32px] text-[20px] px-1 pt-4   text-white">
                    All products
                </p>
            </div>
            <div className='flex justify-between container mx-auto'>
                <div className='  hidden sm:block'>
                    <div className='md:pl-[50px] pt-[50px]'>
                        <h1 className='text-[18px] w-[120px] font-normal text-[#2A254B] hover:text-neutral-400 '>Product type</h1>
                        <div className='mt-4 flex flex-col gap-3 px-3 text-[#2A254B]'>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B] hover:text-neutral-400'>Furniture</h3>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B] hover:text-neutral-400'>Homeware</h3>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B] hover:text-neutral-400'>Sofas</h3>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B] hover:text-neutral-400'>Homeware</h3>
                            </div>
                            <div className='flex gap-1'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B] hover:text-neutral-400'>Light fittings</h3>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B] hover:text-neutral-400 '>Accessories</h3>
                            </div>
                        </div>
                    </div>
                    <div className='md:pl-[50px] mx-auto mt-[30px]'>
                        <h1 className='text-[18px] w-[120px] font-normal text-[#2A254B] hover:text-neutral-400 '>Price</h1>
                        <div className='mt-4 flex flex-col gap-3 px-3 text-[#2A254B]'>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B]'>0-100</h3>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B]'>101-250</h3>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B]'>250+</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[1200px]  '>

                    
                    <section>

                    <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='mx-auto block mt-5 w-[400px] h-[40px] px-4'
        />


                    <div className='flex flex-wrap gap-2 mt-10'>
            {products.filter((product) => {
                if (searchTerm === "") {
                  return product;
                } else if (
                  product.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return product;
                }
              }).map((product) => (
              <div key={product.id} className="w-[300px] m-auto rounded p-4 shadow-lg transition-all duration-700 hover:scale-110 drop-shadow-2xl bg-slate-200 mb-10">
                <Link href={`/${product.id}`}><img className="w-full" src={product.image} alt={product.name} /></Link>
                <h2 className='text-black text-2xl'>{product.name}</h2>
                <div className='flex items-center gap-3'>
                <h2 className='text-black text-xl'>{product.title}</h2>
                <h2 className='text-black text-xl'>{product.description}</h2>
                </div>
                <h2 className='text-black text-xl'>{product.price} $</h2>
              </div>
            ))}
          </div>
                        
                        
                    </section>   





                    <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
                    <script>

                    </script>
                </div>
            </div>
        </section>
    )
}

export default page