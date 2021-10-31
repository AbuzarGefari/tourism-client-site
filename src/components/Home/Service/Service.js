import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, description, price, url, } = service || {}
    return (
        <div className="bg-indigo-100 smooth-animation rounded-t-3xl hover:shadow-2xl p-4 pb-8">
            <div className="h-64 overflow-hidden rounded-t-2xl">
              <img className="min-h-full max-w-full transform scale-100 hover:scale-110 transition-all duration-500 ease-linear cursor-pointer" src={url} alt={name} />
            </div>
            <h2 className="mt-3 text-2xl font-medium">{name}</h2>
            <div className="text-2xl py-3 text-gray-900">TAKA <br />
              <span className="font-medium text-">{price}</span> 
              <span className="text-lg font-semibold text-gray-900"> / Hours</span>
            </div>
            <div className="">
                {/* This is Divider */}
            </div>
            <p className="pt-3 pb-8 text-md text-gray-700 font-medium">{description.substring(0, 30)} <br /> {description.substring(0, 30)}</p>
            <Link className="smooth-animation bg-indigo-700   hover:bg-indigo-900 text-white-900 hover:text-yellow-50 border-2 py-2 px-8" to={`/services/${_id}`}>Booking Now</Link>
        </div>
    );
};

export default Service;