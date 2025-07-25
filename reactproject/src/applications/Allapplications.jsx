import React, { useEffect, useState } from "react";
import axios from "axios";

const Allapplications = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let url = `http://localhost:2004/applicants/allapplicants`;
      let resp = await axios.get(url);
      setData(resp.data);
      setFilteredData(resp.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleAction = async (email, status) => {
    try {
      let resp = await axios.post("http://localhost:2004/applicants/updateStatus", { email, status }, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
      if (resp.data.status) {
        alert(resp.data.msg);
        fetchData();
        handleTabChange(activeTab);
      } else {
        alert(resp.data.msg);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case "accepted":
        setFilteredData(data.filter(user => user.status === 1));
        break;
      case "declined":
        setFilteredData(data.filter(user => user.status === 0));
        break;
      case "franchised":
        setFilteredData(data.filter(user => user.status === 2));
        break;
      default:
        setFilteredData(data);
    }
  };

  const tabOptions = ["all", "accepted", "declined", "franchised"];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      {/* Fixed Top Section */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <h2 className="text-xl font-semibold text-gray-800 text-center py-4">
          Applicants Information
        </h2>

        {/* Tabs Section */}
        <div className="relative w-full border-b bg-white">
          <div className="flex justify-around relative">
            {tabOptions.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`relative flex-1 p-3 text-sm font-medium text-gray-600 transition ${
                  activeTab === tab ? "text-gray-900 font-bold" : "hover:text-gray-800"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            {/* Smooth Animated Indicator */}
            <div
              className="absolute bottom-0 h-1 bg-gray-900 rounded-full transition-all duration-300 ease-in-out"
              style={{
                width: "25%",
                left: `${tabOptions.indexOf(activeTab) * 25}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Table Section (Full Page) */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm bg-white shadow-md">
          <thead className="sticky top-0 bg-gray-800 text-white">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">City</th>
              {activeTab === "all" && <th className="p-3 text-center">Actions</th>}
              {activeTab === "accepted" && <th className="p-3 text-center">Actions</th>}  {/* Extra Actions Column */}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition-all">
                  <td className="p-3">{user.fname} {user.lname}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.phone}</td>
                  <td className="p-3">{user.address}</td>
                  <td className="p-3">{user.city}</td>
                  
                  {/* Actions Column in "All" Tab */}
                  {activeTab === "all" && (
                    <td className="p-3 text-center">
                      {user.status === 1 ? (
                        <span className="text-green-600 font-medium">Accepted</span>
                      ) : user.status === 0 ? (
                        <span className="text-red-600 font-medium">Declined</span>
                      ) : (
                        <>
                          <button
                            onClick={() => handleAction(user.email, 1)}
                            className="bg-green-500 text-white px-2 py-1 rounded-md text-xs mr-1 hover:bg-green-600 transition-all"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleAction(user.email, 0)}
                            className="bg-red-500 text-white px-2 py-1 rounded-md text-xs hover:bg-red-600 transition-all"
                          >
                            Decline
                          </button>
                        </>
                      )}
                    </td>
                  )}

                  {/* Actions Column in "Accepted" Tab */}
                  {activeTab === "accepted" && (
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleAction(user.email, 0)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md text-xs hover:bg-red-600 transition-all"
                      >
                        Decline
                      </button>
                      <button
                        onClick={() => handleAction(user.email, 2)}
                        className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs ml-2 hover:bg-blue-600 transition-all"
                      >
                        Franchise
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 p-4 italic">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allapplications;
