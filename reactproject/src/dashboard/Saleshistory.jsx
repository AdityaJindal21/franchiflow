import React, { useState } from "react";
import axios from "axios";

function SalesHistory() {
  const getCurrentDate = () => new Date().toISOString().split("T")[0];
  const [salesData, setSalesData] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [error, setError] = useState("");
  
  const [obj, Setobj] = useState({
    fromDate: getCurrentDate(),
    toDate: getCurrentDate(),
    emailid: "",
  });

  function saveInput(event) {
    var { name, value } = event.target;
    Setobj({ ...obj, [name]: value });
  };

  async function showsales() {
    if (!obj.fromDate || !obj.toDate) {
        setError("⚠️ Please select both dates before searching.");
        return;
    }
    setError("");
    try {
        let url = `http://localhost:2004/sales/retreivesales`;
        let response = await axios.post(url, obj, {headers: { "Content-Type": "application/x-www-form-urlencoded" },});
        if (response.data.status === true) {
            setSalesData(response.data.sales);
            const total = response.data.sales.reduce((sum, sale) => sum + sale.totsales, 0);
            setTotalSales(total);
        } else {
            setSalesData([]);
            setTotalSales(0);
            alert("❌ No records found!");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("⚠️ Error fetching sales data.");
    }
  }
  
  return (
    <div style={{ width: "80%", margin: "30px auto", padding: "20px", background: "#ffffff", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", color: "#333", marginBottom: "20px" }}>Sales History</h1>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "20px", padding: "15px", background: "#f8f9fa", borderRadius: "8px", boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)" }}>
        <div>
          <label>From</label>
          <input
            type="date"
            name="fromDate"
            value={obj.fromDate}
            onChange={saveInput}
            required
            style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "16px" }}
          />
        </div>
        <div>
          <label>To</label>
          <input
            type="date"
            name="toDate"
            value={obj.toDate}
            onChange={saveInput}
            required
            style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "16px" }}
          />
        </div>
        <div>
          <label>User ID (Optional)</label>
          <input
            type="text"
            name="emailid"
            value={obj.emailid}
            onChange={saveInput}
            placeholder="Enter User ID"
            style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "16px" }}
          />
        </div>
        <button onClick={showsales} style={{ padding: "10px 15px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>
          🔍 Search
        </button>
      </div>

      {error && <div style={{ color: "red", fontWeight: "bold", marginBottom: "10px" }}>{error}</div>}

      <div style={{ marginTop: "20px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px", background: "white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px", overflow: "hidden" }}>
          <thead>
            <tr>
              <th style={{ padding: "10px", background: "#007bff", color: "white", fontSize: "18px" }}>Sr No.</th>
              <th style={{ padding: "10px", background: "#007bff", color: "white", fontSize: "18px" }}>Date</th>
              <th style={{ padding: "10px", background: "#007bff", color: "white", fontSize: "18px" }}>Total Sales</th>
              <th style={{ padding: "10px", background: "#007bff", color: "white", fontSize: "18px" }}>Total Customers</th>
            </tr>
          </thead>
          <tbody>
            {salesData.length > 0 ? (
              salesData.map((sale, index) => (
                <tr key={index}>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "center" }}>{index + 1}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "center" }}>{new Date(sale.date).toLocaleDateString()}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "center" }}>${sale.totsales}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "center" }}>{sale.totcustomer}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", color: "#777", padding: "4px" }}>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px", fontSize: "18px" }}>
        <label>Total Sales: </label>
        <input type="text" value={`$${totalSales}`} readOnly style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "16px", width: "120px", textAlign: "center", marginLeft: "10px", fontWeight: "bold", background: "#f8f9fa", cursor: "not-allowed" }} />
      </div>
    </div>
  );
}

export default SalesHistory;
