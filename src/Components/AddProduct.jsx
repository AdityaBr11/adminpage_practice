import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initial = {
  title: "",
  url: "",
  price: 0,
};

const AddProduct = () => {
  const [formD, setFormD] = useState(initial);

  const handleChange = ({ target }) => {
    let val = target.value;
    setFormD({ ...formD, [target.name]: val });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(formD);
    
    try {
      
      const url = "https://crud-server-psi.vercel.app/Allproducts";
      const data =  formD ;
      axios.post(url, data).then((res) => console.log(res.data));
      toast.success("Products Added")
    } catch (err) {
      console.log(err);
    }
    setFormD(initial);
  };

  return (
    <div className="w-[50%] mx-auto mt-10 border p-6 rounded-md border-slate-400">
      <ToastContainer position="top-center"/>
      <h1 className="text-2xl font-semibold">Add Products</h1>
      <form>
        <div className="">
          <input
            className="w-full border-2 h-10 rounded-sm px-2 mb-6 mt-4 outline-none text-gray-600"
            type="text"
            placeholder="Enter title"
            name="title"
            value={formD.title}
            onChange={handleChange}
          />

          <input
            className="w-full border-2 h-10 rounded-sm px-2 mb-6 outline-none text-gray-600"
            type="url"
            placeholder="Enter Url"
            name="url"
            value={formD.url}
            onChange={handleChange}
          />
          <input
            className="w-full border-2 h-10 rounded-sm px-2 mb-6 outline-none text-gray-600"
            type="number"
            placeholder="Enter Price"
            name="price"
            value={formD.price}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          onClick={submit}
          className="text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
