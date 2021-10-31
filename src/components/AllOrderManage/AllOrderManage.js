import React, { useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import swal from 'sweetalert';


const AllOrderManage = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/addOrders')
        .then(res => res.json())
        .then(data => setOrders(data));
    },[orders])

    // __________________Handle Service Delete______________________
     const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Order'd Service!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url =  `http://localhost:5000/addOrders/${id}`;
                fetch(url, {
                    method: 'delete'
                })
                .then(res => res.json())
                .then(data => {
                    
                    const remaining = orders.filter(service => service._id !== id);
                    setOrders(remaining)
                })
            } else {
              swal("Your Customer's order Service is safe!");
            }
          });
     }
     
    //  _________________Status Pending and Approved________________________
     const acceptOrderHandle = id => {
        swal({
            title: "Are you sure?",
            text: "Once Approved, you will not be able to unapproved this Ordered Services!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url =  `http://localhost:5000/addOrders/${id}`;
                fetch(url, {
                    method: 'PUT'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.modifyedCount > 0){
                        swal("Poof! Your Customer's Order Service has been Approved!", {
                            icon: "success",
                          }
                        )}
                })
                } else {
                swal("Services Approved Close!");
                }
            });
     }

     
    return (
        <div className="py-10 container mx-auto min-h-screen ">
            <div className="bg-indigo-800 py-8">  
                 <h1 className=" text-3xl text-center font-bold text-white md:text-6xl">Manage All Orders</h1>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {
                    orders.map(order => 
                        
                        <Zoom key={order._id} >
                         <div className="shadow p-2 flex justify-between flex-col">
                          <div>
                            <div className="grid grid-cols-4 gap-4 p-3 bg-indigo-900">
                                    <div>
                                        <img className="w-full" src={order.userImg} alt="" />
                                    </div>
                                    <div className="col-span-3">
                                        <h2 className="text-white ">{order.name}</h2>
                                        <h2 className="text-white ">{order.email}</h2>
                                        <h2 className="text-white ">Location : {order.Location}</h2>
                                    </div>
                                </div>
                                <div className="">
                                <div className="overflow-hidden">
                                    <img className="w-full transform scale-100 hover:scale-110 smooth-animation cursor-pointer" src={order.url} alt="" />
                                </div>
                                <div className="py-3">
                                    <h3 className="text-xl font-bold text-indigo-800">Status : {order.status}</h3>
                                    <h2 className="text-2xl font-bold text-indigo-800 py-1">{order.serviceName}</h2>
                                    <h1 className="text-md font-bold text-indigo-800">Price : {order.price}</h1>
                                    {/* <p className="text-base font-medium text-yellow-900">{order.description.substring(0, 30)}</p> */}
                                </div>
                                <div className=" mb-4">
                                   <strong className="text-md text-indigo-900">Home Towns : {order.towns}</strong>
                                   <br />
                                   <strong className="text-md text-indigo-900">Country : {order.country}</strong>
                                   <br />
                                   <strong className="text-md text-indigo-900">Post Office : {order.post_office}</strong>
                                </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={()=> handleDelete(order._id)} className="bg-indigo-900 hover:bg-yellow-50 text-red-50 hover:text-white-900 py-2 px-8 border-black-900 border-2 smooth-animation cursor-pointer mr-2">Delete</button>
                                <button onClick={()=>acceptOrderHandle(order._id)} className="bg-indigo-900 hover:bg-yellow-50 text-red-50 hover:text-white-900 py-2 px-8 border-black-900 border-2 smooth-animation cursor-pointer">Accept Order</button>
                            </div>
                        </div>
                        </Zoom>
                    )
                }
            </div>
        </div>
    );
};

export default AllOrderManage;