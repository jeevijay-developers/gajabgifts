import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { MdKeyboardReturn, MdSecurity } from "react-icons/md";
import { RiCustomerServiceLine, RiSecurePaymentLine } from "react-icons/ri";
import { BiPackage } from "react-icons/bi";
import { AiOutlineTag } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const WhyChooseUs = () => {
    return (
        <div className='font-[lora] my-6 px-4 sm:px-6 md:px-10'>
            <h1 className='px-6 my-8 font-[lora] text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] text-center '>
                Why Choose Us?
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6'>
                {/* Card 1 */}
                <div data-aos="fade-up" className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] text-gray-900'>
                        <TbTruckDelivery /> Free Shipping
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        Enjoy Pan-India Free Shipping on all Orders!
                    </p>
                </div>

                {/* Card 2 */}
                <div data-aos="fade-up" className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] text-gray-900'>
                        <MdKeyboardReturn /> Easy Returns
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        14-Day Hassle-Free Return and Exchange Policy
                    </p>
                </div>

                {/* Card 3 */}
                <div data-aos="fade-up" className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] text-gray-900'>
                        <RiCustomerServiceLine /> 24/7 Support
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        Get 24x7 Assistance on All Things Shopping!
                    </p>
                </div>

                {/* Card 4 */}
                <div data-aos="fade-up" className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] text-gray-900'>
                        <RiSecurePaymentLine /> Secure Payment
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        Multiple Secure Payment Options Available
                    </p>
                </div>

                {/* Card 5 */}
                <div data-aos="fade-up" className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] text-gray-900'>
                        <BiPackage /> Quality Products
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        100% Genuine and Quality Assured Products
                    </p>
                </div>

                {/* Card 6 */}
                <div data-aos="fade-up" className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] text-gray-900'>
                        <AiOutlineTag /> Best Prices
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        Competitive Prices and Regular Exciting Offers
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
