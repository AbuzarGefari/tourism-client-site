import React, { useState } from 'react';

const About = () => {
    const [image, setImage] = useState("https://i.ibb.co/N6Dq7vf/pexels-ray-bilcliff-1494720.jpg"
    );
    const onClickImgHandle1 = () => {
         setImage('https://i.ibb.co/qDvDF1W/tour-2-scaled.jpg');
    }
    const onClickImgHandle2 = () => {
         setImage('https://i.ibb.co/wh1yyzN/tour-1-scaled.jpg');
    }
    const onClickImgHandle3 = () => {
         setImage('https://i.ibb.co/0rPDcYp/tour-3-scaled.jpg'); 
    }
    return (
        <div className="min-h-screen py-4 md:p-10 ">
            <div>
                <div className="px-2 grid grid-cols-1 lg:grid-cols-1 gap-6">
                    <div>
                    <div className="position relative">
                            <img className="h-full w-full border-8 border-white shadow-2xl" src={image} alt="" />
                            <ul className="flex position absolute top-5 left-5">
                                <li className="mr-3 mb-2"><button onClick={onClickImgHandle1} className="w-20 h-20 border-4 border-white shadow" style={{background: 'url(https://i.ibb.co/qDvDF1W/tour-2-scaled.jpg)', backgroundSize: 'cover'}}></button></li>
                                <li className="mr-3 mb-2"><button onClick={onClickImgHandle2} className="w-20 h-20 border-4 border-white shadow" style={{background: 'url(https://i.ibb.co/wh1yyzN/tour-1-scaled.jpg)', backgroundSize: 'cover'}}></button></li>
                                <li className="mr-3 mb-2"><button onClick={onClickImgHandle3} className="w-20 h-20 border-4 border-white shadow" style={{background: 'url(https://i.ibb.co/0rPDcYp/tour-3-scaled.jpg)', backgroundSize: 'cover'}}></button></li>
                            </ul>
                         </div>  
                        <div>
                            <span className="text-xl text-indigo-500">EXPLORE MOST BEAUTIFUL PLACES</span>
                            <h1 className="xl:text-6xl text-indigo-500 font-bold">EXPLORE MOST BEAUTIFUL PLACES</h1>
                        </div>
                       <div className="pt-10">
                           <div className="p-3 border-2 border-gray-300 mb-2">
                                <span className="uppercase py-3 ">Where are you going</span>
                                <input className="text-lg border-0 outline-none block" type="text" placeholder="Enter Keywords" />
                            </div>
                            <div  className="p-3 border-2 border-gray-300 mb-2">
                                <span className="uppercase">date & Time</span>
                                <input className="text-lg border-0 outline-none block" type="text" placeholder="Date & Time" />
                            </div>
                       </div>
                       <div className="py-4">
                            <button className="py-4 px-16 text-xl bg-indigo-500 text-gray-900 hover:bg-indigo-900 hover:text-yellow-50 smooth-animation">Find Now</button>
                       </div>
                    </div>
                    <div>
                           
                   </div>   
               </div>
            </div>
        </div>
    );
};

export default About;