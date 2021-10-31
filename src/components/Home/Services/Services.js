import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
          fetch('https://shrieking-monster-06481.herokuapp.com/services')
          .then(res => res.json())
          .then(data => setServices(data))
          .catch(error => console.log(error));
    },[services])
    return (
        <div className="bg-white">
            <div className="container py-12 mx-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4 xl:gap-6">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;