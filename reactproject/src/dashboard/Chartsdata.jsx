import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { useState, useEffect } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import axios from "axios";
import "../AppCharts.css";


defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";



function Chartsdata() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchSalesData();
    }, []);

  async function fetchSalesData() {
    try {
      let url = `http://localhost:2004/sales/allsales?emailid=adi12@gmail.com`;
      let resp = await axios.get(url);
      setData(resp.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const barData = {
    labels: data.map((item) => new Date(item.date).toISOString().split("T")[0]),
    datasets: [
      {
        label: "Total Sales",
        data: data.map((item) => item.totsales),
        borderRadius: 5,
      },
    ],
  };
  const doughnutData = {
    labels: data.map((item) => new Date(item.date).toISOString().split("T")[0]),
    datasets: [
      {
        label: "Customers",
        data: data.map((item) => item.totcustomer),
        backgroundColor: [
            "rgba(43, 63, 229, 0.8)",
            "rgba(250, 192, 19, 0.8)",
            "rgba(253, 135, 135, 0.8)",
          ],
          borderColor: [
            "rgba(43, 63, 229, 0.8)",
            "rgba(250, 192, 19, 0.8)",
            "rgba(253, 135, 135, 0.8)",
          ],
      },
    ],
  };

  const lineData = {
    labels : data.map((item)=> new Date(item.date).toISOString().split("T")[0]),
    datasets:[
        {
            label: "Revenue",
            data: data.map((item)=> item.totsales),
            backgroundColor: [
                "rgba(43, 63, 229, 0.8)",
                "rgba(250, 192, 19, 0.8)",
                "rgba(253, 135, 135, 0.8)",
              ],
              borderColor: [
                "rgba(43, 63, 229, 0.8)",
                "rgba(250, 192, 19, 0.8)",
                "rgba(253, 135, 135, 0.8)",
              ],
        },
    ],
  };

  return (
    <div className="layout-container">
      <div className="top-section"><Line data={lineData} options={{
         elements: {
            line: {
              tension: 0.5,
            },
          },
            plugins: {
              title: {
                text: "Revenue",
              },
            },
          }}></Line></div>
      <div className="bottom-section">
        <div className="left-box">
          <Bar data={barData} options={{
            plugins: {
              title: {
                text: "Sales Generated",
              },
            },
          }}/>
        </div>
        <div className="right-box"><Doughnut data={doughnutData} options={{
            plugins: {
              title: {
                text: "Customer Footfall",
              },
            },
          }}/></div>
      </div>
    </div>
  );
};

export default Chartsdata;
