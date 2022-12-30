import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";



const Edit = () => {
  const [id,setId]=useState(0)
  const [title,setTitle]=useState('')
  const [url,setUrl]=useState('')
  const [price,setPrice]=useState('');
  const nav=useNavigate()

  useEffect(()=>{
    setId(localStorage.getItem("id"))
    setTitle(localStorage.getItem("title"))
    setUrl(localStorage.getItem("url"))
    setPrice(localStorage.getItem("price"));
  },[])
  
  const handleUpdate=(e)=>{
    e.preventDefault();
    
    try {
      
      const api = `https://crud-server-psi.vercel.app/Allproducts/${id}`
      
      axios.put(api,{
        title:title,
        url:url,
        price:price
      }).then((res) => console.log(res.data)).then(()=>
       setTimeout(()=>{
        nav('/All')
       },500)
      
      )
      toast.success("Products Updated")
      
    } catch (err) {
      console.log(err);
    }
    // setData(id,title,url,price);
  }

  return (
    <div>
      <ToastContainer position="top-center"/>
      <form>
        <div className="w-[30%] mx-auto mt-10">
        <h1 className="mt-4 text-2xl">Update the products details</h1>
          <input
            className="w-full border-2 h-10 rounded-sm px-2 mb-6 mt-2 outline-none text-gray-600"
            type="text"
            placeholder="Enter title"
            name="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <input
            className="w-full border-2 h-10 rounded-sm px-2 mb-6 outline-none text-gray-600"
            type="url"
            placeholder="Enter Url"
            name="url"
            value={url}
            onChange={(e)=>setUrl(e.target.value)}
          />
          <input
            className="w-full border-2 h-10 rounded-sm px-2 mb-6 outline-none text-gray-600"
            type="number"
            placeholder="Enter Price"
            name="price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />
          <div className="flex justify-between">
          <button
            className="border-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-200 text-zinc-100 rounded-md"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
        </div>
        
      </form>
    </div>
  );
};

export default Edit;
