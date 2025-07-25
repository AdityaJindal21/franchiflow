import React, { useState } from 'react';
import axios from "axios";

function Todaysales() {
  const getCurrentDate = () => new Date().toISOString().split('T')[0];
  const [error, setError] = useState('');

  const [obj, setObj] = useState({
    emailid: "",
    date: getCurrentDate(),
    totsales: "",
    totcustomer: "",
  });

  function doSaveSales(event) {
    var { name, value } = event.target;
    setObj({ ...obj, [name]: value });
  }

  async function doPublishSales() {
    if (!obj.emailid || !obj.date || !obj.totsales || !obj.totcustomer) {
      setError('⚠️ Please fill out all fields before publishing.');
      return;
    }
    setError('');
    let url = `http://localhost:2004/sales/publishsales`;
    let resp = await axios.post(url, obj, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    if (resp.data.status == true) {
      alert(resp.data.msg);
      setObj({
        emailid: "",
        date: getCurrentDate(),
        totsales: "",
        totcustomer: "",
      });
    } else {
      alert(resp.data.msg);
    }
  }

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "30px",
        width: "400px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#333", marginBottom: "20px" }}>
          Sales & Expense Report
        </h1>

        {error && <div style={{ color: "red", fontWeight: "bold", marginBottom: "10px" }}>{error}</div>}

        <form>
          {/* User ID */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontSize: "14px", color: "#555", marginBottom: "5px", display: "block" }}>
              User ID <span style={{ color: "red", fontWeight: "bold" }}>*</span>
            </label>
            <input
              type="text"
              name="emailid"
              value={obj.emailid}
              onChange={doSaveSales}
              placeholder="Enter User ID"
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#333",
              }}
            />
          </div>

          {/* Date */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontSize: "14px", color: "#555", marginBottom: "5px", display: "block" }}>
              Date <span style={{ color: "red", fontWeight: "bold" }}>*</span>
            </label>
            <input
              type="date"
              name="date"
              value={obj.date}
              onChange={doSaveSales}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#333",
              }}
            />
          </div>

          {/* Total Sales */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontSize: "14px", color: "#555", marginBottom: "5px", display: "block" }}>
              Total Sales <span style={{ color: "red", fontWeight: "bold" }}>*</span>
            </label>
            <input
              type="number"
              name="totsales"
              value={obj.totsales}
              onChange={doSaveSales}
              placeholder="Enter total sales"
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#333",
              }}
            />
          </div>

          {/* Total Customers */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontSize: "14px", color: "#555", marginBottom: "5px", display: "block" }}>
              Total Customers Visited <span style={{ color: "red", fontWeight: "bold" }}>*</span>
            </label>
            <input
              type="number"
              name="totcustomer"
              value={obj.totcustomer}
              onChange={doSaveSales}
              placeholder="Enter total customers visited"
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#333",
              }}
            />
          </div>

          {/* Publish Button */}
          <center>
            <button
              type="button"
              onClick={doPublishSales}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                padding: "12px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
              onMouseDown={(e) => (e.target.style.backgroundColor = "#003d80")}
            >
              Publish
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Todaysales;
