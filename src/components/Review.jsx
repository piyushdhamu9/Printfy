import React from 'react';
import avatar from '../assets/avatar.png';

const ReviewHeader = () => {
  return (
    <div className="flex justify-between items-center py-16 bg-gray-50 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-1/2">
        <h2 className="text-5xl font-bold text-gray-800 leading-tight">
          Trusted by over 8M sellers around the world
        </h2>
      </div>
      <div className="w-1/2 h-full flex items-center">
        <p className="text-lg text-gray-600">
          Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
        </p>
      </div>
    </div>
  );
};

const ReviewCard = ({ imageSrc, name, role, review }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center">
        <img
          src={imageSrc}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-green-600">{role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="h-5 w-5 text-orange-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.09 2.67 1.45-5.73L1 7.91l5.91-.51L10 2l2.09 5.4 5.91.51-4.36 3.03 1.45 5.73L10 15z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{review}</p>
    </div>
  );
};

const ReviewSection = () => {
  return (
    <div className="bg-gray-50">
      <ReviewHeader />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
        <ReviewCard
          imageSrc={avatar}
          name="Robert A. Voltaire"
          role="Store link"
          review="Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!"
        />
        <ReviewCard
          imageSrc={avatar}
          name="Quinten Barney"
          role="Etsy Merchant"
          review="We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better."
        />
        <ReviewCard
          imageSrc={avatar}
          name="Nikki"
          role="Store link"
          review="Printify has been amazing for us as we grow our business, facilitating the best choices we can make for our customers. The Customer Service team is exceptional and makes the whole process a breeze."
        />
      </div>
    </div>
  );
};

export default ReviewSection;
