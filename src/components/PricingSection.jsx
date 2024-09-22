import React from 'react';
import svgImage from '../assets/svgexport-22.svg';

const PricingSection = () => {
    return (
        <div className="flex justify-center items-center ">
            <div className="max-w-6xl mx-auto  flex rounded-3xl justify-center shadow-lg">
                {/* Left Section */}
                <div className="bg-gray-800 w-3/5 text-white p-8 flex flex-col justify-between rounded-3xl">
                    <div className=' px-6 m-14'>
                        <h1 className="text-5xl font-bold mb-4">Make Money, Risk-Free</h1>
                        <p className="text-gray-400 mb-6">
                            You pay for fulfillment only when you make a sale
                        </p>
                        <div className="bg-gray-900 p-4 rounded-lg mb-6 text-lg">
                            <div className="flex justify-between my-4 mb-7">
                                <span>You sell a t-shirt</span>
                                <span>$30</span>
                            </div>
                            <div className="flex justify-between my-4 mb-7">
                                <span>You pay for its production</span>
                                <span>$12</span>
                            </div>
                            <hr className="border-gray-700 my-2" />
                            <div className="flex justify-between font-bold text-green-500 my-6">
                                <span>Your profit</span>
                                <span>$18</span>
                            </div>
                        </div>
                        <div className=''>
                            <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
                                Start selling
                            </button>
                            <p className="text-gray-400 mt-4 text-sm">
                                100% Free to use · 900+ Products · Largest print network
                            </p>
                        </div>
                    </div>

                </div>
                {/* Right Section */}
                <div className="w-1/2 flex justify-center items-center">
                    <img src={svgImage} alt="Illustration" className="h-full object-contain rounded-xl" />
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
