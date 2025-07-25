import React, { useState } from "react";
import axios from "axios";

const Applicationform = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [obj,setObj] = useState({
    email:"",
    fname: "",
    lname:"",
    phone:"",
    address:"",
    businessname:"",
    sitelocation:"",
    city:"",
    code:"",
    area:"",
    floor:"",
    ownership:"",
})
function doUpdate(event)
{
    var {name,value} = event.target;
    setObj({...obj,[name]:value})
}
async function doSave()
{
    
    let url = `http://localhost:2004/form/saveuser`;
    let resp = await axios.post(url,obj,{
        headers:{
            'Content-Type' : 'application/x-www-form-urlencoded'
        }
    });
    if(resp.data.status==true)
    {
        alert(resp.data.msg);
    }
    else
    {
        alert(resp.data.msg);

    }
}
  return (
    <div
      className={`flex flex-col items-center justify-center w-full min-h-screen px-5 transition-all duration-300 ${
        darkMode ? "bg-[#1f2937]" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-4xl mb-5">
        <h3 className={`text-lg font-medium ${darkMode ? "text-white" : "text-black"}`}>
          Dark Mode :
        </h3>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            readOnly
          />
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-green-600 peer-focus:ring-green-300 relative peer"
          >
            <div
              className="absolute top-0.5 left-[2px] w-5 h-5 bg-white border border-gray-300 rounded-full transition-all peer-checked:translate-x-full peer-checked:border-white"
            ></div>
          </div>
        </label>
      </div>
      <div
        className={`w-full max-w-4xl p-5 sm:p-10 rounded-lg shadow-lg transition-all duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1
          className={`text-center text-2xl font-semibold mb-5 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Franchise Inquiry Form
        </h1>

        {/* Personal Information Section */}
        <h3
          className={`text-xl font-semibold mb-4 ${
            darkMode ? "text-orange-500" : "text-orange-600"
          }`}
        >
          Personal Information
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Your first name"
              name="fname"
              onChange={doUpdate}
              className={`flex-1 px-4 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:border-white"
                  : "bg-gray-100 text-black border-gray-300 focus:border-black"
              }`}
            />
            <input
              type="text"
              placeholder="Your last name"
              name="lname"
              onChange={doUpdate}
              className={`flex-1 px-4 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:border-white"
                  : "bg-gray-100 text-black border-gray-300 focus:border-black"
              }`}
            />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={doUpdate}
            className={`w-full px-4 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none transition-all duration-300 ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600 focus:border-white"
                : "bg-gray-100 text-black border-gray-300 focus:border-black"
            }`}
          />
          <input
            type="tel"
            placeholder="Enter your phone"
            name="phone"
            onChange={doUpdate}
            className={`w-full px-4 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none transition-all duration-300 ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600 focus:border-white"
                : "bg-gray-100 text-black border-gray-300 focus:border-black"
            }`}
          />
          <input
            type="text"
            placeholder="Your residential address"
            name="address"
            onChange={doUpdate}
            className={`w-full px-4 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none transition-all duration-300 ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600 focus:border-white"
                : "bg-gray-100 text-black border-gray-300 focus:border-black"
            }`}
          />
          <input
            type="text"
            placeholder="Business name (if applicable)"
            name="businessname"
            onChange={doUpdate}
            className={`w-full px-4 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none transition-all duration-300 ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600 focus:border-white"
                : "bg-gray-100 text-black border-gray-300 focus:border-black"
            }`}
          />
        </div>

        {/* Site Information Section */}
        <h3
          className={`text-xl font-semibold mt-6 mb-4 ${
            darkMode ? "text-orange-500" : "text-orange-600"
          }`}
        >
          Site Information
        </h3>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Site address/ location"
            name="sitelocation"
            onChange={doUpdate}
            className={`w-full px-4 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none transition-all duration-300 ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600 focus:border-white"
                : "bg-gray-100 text-black border-gray-300 focus:border-black"
            }`}
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="City"
              name="city"
              onChange={doUpdate}
              className={`flex-1 px-4 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:border-white"
                  : "bg-gray-100 text-black border-gray-300 focus:border-black"
              }`}
            />
            <input
              type="text"
              placeholder="Postal Code"
              name="code"
              onChange={doUpdate}
              className={`flex-1 px-4 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:border-white"
                  : "bg-gray-100 text-black border-gray-300 focus:border-black"
              }`}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Area (in sq. ft.)"
              name="area"
              onChange={doUpdate}
              className={`flex-1 px-4 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:border-white"
                  : "bg-gray-100 text-black border-gray-300 focus:border-black"
              }`}
            />
            <select
              name="floor"
              onChange={doUpdate}
              className={`flex-1 px-4 py-3 rounded-lg border-2 text-sm focus:outline-none transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:border-white"
                  : "bg-gray-100 text-black border-gray-300 focus:border-black"
              }`}
            >
              <option>Ground Floor</option>
              <option>First Floor</option>
              <option>Second Floor</option>
            </select>
          </div>
        </div>

        {/* Ownership Section */}
        <div className="mt-6">
          <h4
            className={`text-lg font-medium mb-2 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Ownership status:
          </h4>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="ownership"
                onChange={doUpdate}
                value="Owned"
                className="accent-orange-500"
              />
              <span className={darkMode ? "text-white" : "text-black"}>Owned</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="ownership"
                onChange={doUpdate}
                value="Rented"
                className="accent-orange-500"
              />
              <span className={darkMode ? "text-white" : "text-black"}>Rented</span>
            </label>
          </div>
        </div>

        <button
          className="mt-6 w-full py-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-300"
          onClick={doSave}
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <path d="M20 8v6M23 11h-6" />
          </svg>
          Submit
        </button>
        {/* {JSON.stringify(obj)} */}
      </div>
    </div>
  );
};

export default Applicationform;
