import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import no from '../assets/no.gif'


const AllProducts = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(`https://crud-server-psi.vercel.app/Allproducts`)
      .then((res) => setData(res.data));
  };

  const handleDel = (id) => {
    axios
      .delete(`https://crud-server-psi.vercel.app/Allproducts/${id}`)
      .then(() => getData());
    toast.success("Items Deleted");
  };
  //For editing
  const setLocal=(id,title,url,price)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("title",title)
    localStorage.setItem("url",url)
    localStorage.setItem("price",price)
  }
  useEffect(() => {
    getData();
  }, [getData]);
  if(data.length==0){
    return(
      <div>
      <div className="w-[80%] mx-auto  mt-10  border border-gray-200 p-10 shadow-xl">
         <img className="ml-[30%] mr-[50%] w-[30%]" src={no} alt="" />
         <h1 className="text-center text-3xl font-semibold border w-[90%] mx-auto">Sorry data is not found please add first..</h1>
         <Link to='/'>
           <h1 className="text-center text-xl font-bold text-blue-500 mt-5 hover:underline">Home</h1>
         </Link>
      </div>
      </div>
    )
  }else{
    return (
      <div>
        <ToastContainer position="top-center"/>
        <div className="w-[80%] mx-auto grid grid-cols-2 md:grid-cols-4 mt-10 gap-4 items-center border border-gray-200 p-10 shadow-xl">
          {data.map((e) => (
            <div
              className="border p-5 border-blue-200 shadow-xl text-center relative z-10 font-bold rounded-lg"
              key={e.id}
            >
              <h1 className="absolute text-gray-600 text-6xl italic -left-1 -top-8">
                {e.id}
              </h1>
              <img className="" src={e.url} alt="" />
              <h1 className="text-slate-500">{e.title}</h1>
              <p className="text-red-600">Price: ₹{e.price}</p>
              <div className="flex justify-between mt-5">
                <Link to="/edit">
                  <button
                    className="border-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-200 text-zinc-100 rounded-lg"
                    onClick={()=>setLocal(e.id,e.title,e.url,e.price)}
                  >
                    Edit
                  </button>
                </Link>
                <button
                  className="border-2 px-3 py-1 bg-gradient-to-r from-red-500 to-red-200 text-zinc-100 rounded-lg"
                  onClick={() => handleDel(e.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
};

export default AllProducts;
