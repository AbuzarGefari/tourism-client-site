import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';


const DetailsService = () => {
    const {serviceId} = useParams()
    const [service, setService] = useState({})
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('');
    const [imgUrl, setImgUrl] = useState('')
    const {user} = useAuth()
    useEffect(()=>{
        fetch(`https://shrieking-monster-06481.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
        .catch(error => console.log(error))
    },[])
    
    const { register, handleSubmit } = useForm();
    const {url, description, name, price} = service
    console.log(user);
    const onSubmit = data => {
        data.status = 'Pending'
        data.serviceName = name
        data.price = price;
        data.description = description;
        data.url = url;
        axios.post('https://shrieking-monster-06481.herokuapp.com/addOrders', data)
        .then(res => {
            if(res.data.insertedId){
                swal('Wow!', 'You\'r Order added.', 'success')
            }
          })
        };
    
    return (
        <div className="py-10 min-h-screen">
            <div className="container mx-auto px-3 grid grid-cols-1 lg:grid-cols-3">
           <div>
               <img src={url} alt="" />
           </div>
           <div className="lg:col-span-2 px-3 lg:py-0">
               <h1 className="text-2xl text-black-900 font-bold">{name}</h1>
               <p className="text-md text-black-700 py-3">{description}</p>
               <h1 className="text-black-900 text-xl font-bold capitalize py-2">Order information</h1>
               <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <input className="border-2 border-indigo-500 py-1 px-3"  value={user.displayName} placeholder="Name" {...register("name", { required: true})} /> <br />
                    <input className="border-2 border-indigo-500 py-1 px-3"  value={user.email} placeholder="Email" {...register("email", { required: true })} /> <br />
                    <input className="border-2 border-indigo-500 py-1 px-3"  value={user.photoURL} placeholder="user image url" {...register("userImg", { required: true })} /> <br />
                    <input className="border-2 border-indigo-500 py-1 px-3" placeholder="home towns" {...register("towns", { required: true })} /> <br />
                    <input className="border-2 border-indigo-500 py-1 px-3" placeholder="Country" {...register("country", { required: true })} /> <br />
                    
                    {/* <input className="border-2 border-indigo-500 py-1 px-3" type="number" {...register("age", {required: true, min: 10, max: 75 })} placeholder="Age 18 to 75"/> */}
                    <input className="border-2 py-2 px-3 cursor-pointer bg-indigo-900 hover:bg-indigo-900 text-indigo-50 hover:text-black-900 border-indigo-900 smooth-animation" type="submit" value="Confirm Book"/>
                </form>
           </div>
        </div>
        </div>
    );
};

export default DetailsService;