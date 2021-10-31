import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
          fetch('http://localhost:5000/services')
          .then(res => res.json())
          .then(data => setServices(data))
          .catch(error => console.log(error));
    },[services])
    return (
        <div className="bg-white">
            <div className="container mx-auto px-3 grid grid-cols-3 gap-6 py-10">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;