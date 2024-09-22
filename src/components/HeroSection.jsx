import React from 'react';
import tshirtImage from '../assets/svg-image-4.svg';
import png1 from '../assets/svg-image-5.svg';
import png2 from '../assets/svg-image-6.svg';
import png3 from '../assets/svg-image-7.svg';


const HeroSection = () => {
  const features = [
    {
      title: "Higher Profits",
      description: "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
      icon: png1, // Replace with your SVG path
    },
    {
      title: "Robust Scaling",
      description: "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
      icon: png2,
    },
    {
      title: "Best Selection",
      description: "With 900+ products and top-quality brands, you can choose the best products for your business.",
      icon: png3,
    },
  ];

  function Feature({ title, description, icon }) {
    return (
      <div className="text-center">
        <img src={icon} alt={title} className="mx-auto mb-4" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-10">
      <div className="w-full container px-40 flex flex-col md:flex-row justify-evenly items-center">
        {/* Left Text Section */}
        <div className="md:w-1/2 mb-1 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Create and sell <br />
            custom products
          </h1>
          <ul className="space-y-4 mb-8 text-lg text-gray-700">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-600 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              100% Free to use
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-600 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              900+ High-Quality Products
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-600 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Largest global print network
            </li>
          </ul>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-green-600 text-white px-8 py-3 rounded-md shadow hover:bg-green-700 transition duration-300 text-lg">
              Start for free
            </button>
            <button className="bg-white border border-gray-300 px-8 py-3 rounded-md shadow hover:border-gray-400 transition duration-300 flex items-center justify-center text-lg">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.808v4.384a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>
              How it works?
            </button>
          </div>
          <p className="mt-4 text-lg text-green-600">
            Trusted by over 8M sellers around the world
          </p>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src={tshirtImage} alt="T-shirt Design" className="max-w-full h-auto" />
        </div>
      </div>
      {/* middle section */}
      <div className="py-20 flex items-center justify-between bg-white">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Feature
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
