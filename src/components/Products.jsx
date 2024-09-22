import React from 'react';
import svg100 from '../assets/svg100.webp';
import CreateSvg from '../assets/s11.png';
import SellSvg from '../assets/s22.png';
import FulfillmentSvg from '../assets/s33.png';
import connectStoreImage from '../assets/s44.png';

const FeatureCard = ({ image, title, subtitle, description }) => {
    return (
        <div className="text-center p-4">
            <img src={image} alt={title} className="mx-auto mb-4 h-32 w-32" />
            <h3 className="text-green-600 text-xl font-bold mb-1">{title}</h3>
            <h4 className="text-black text-lg font-bold mb-2">{subtitle}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default function Products() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 box-border py-16 relative">

            <div className="relative flex items-center w-full max-w-6xl mx-auto">
                <div className="w-full h-[400px] flex bg-white rounded-2xl shadow-lg relative z-10">

                    <div className="w-1/3 h-full flex items-center justify-center">
                        <div
                            className="relative rounded-2xl w-full h-full"
                            style={{
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center',
                                backgroundColor: '#18c75a',
                                backgroundSize: 'cover',
                            }}
                        >
                            <img
                                src={svg100}
                                alt="Product mockups"
                                className="absolute top-0 left-0 w-full h-full object-contain"
                            />
                        </div>
                    </div>


                    <div className="w-2/3 h-full flex flex-col justify-center items-center px-12 text-justify">
                        <div className="px-28 text-justify">
                            <h2 className="text-4xl font-bold mb-4">
                                Easily add your design to a wide range of products
                            </h2>
                            <p className="text-gray-600 mb-6">
                                With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
                            </p>
                            <a
                                href="/all-products"
                                className="text-green-500 font-semibold hover:underline"
                            >
                                All products &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="my-20 w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

                    <FeatureCard
                        image={CreateSvg}
                        title="CREATE"
                        subtitle="custom products"
                        description="Easily add your designs to a wide range of products using our free tools."
                    />


                    <FeatureCard
                        image={SellSvg}
                        title="SELL"
                        subtitle="on your terms"
                        description="You choose the products, sale price, and where to sell."
                    />


                    <FeatureCard
                        image={FulfillmentSvg}
                        title="WE HANDLE"
                        subtitle="fulfillment"
                        description="Once an order is placed, we automatically handle all the printing and delivery logistics."
                    />
                </div>
            </div>

            <div className="w-full mt-12">
                <img
                    src={connectStoreImage}
                    alt="Connect your store"
                    className="w-full object-cover"
                />
            </div>
        </div>
    );
}


