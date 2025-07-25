import React, { useState } from "react";
import Allapplications from "../applications/Allapplications";
import Todaysales from "./Todaysale";
import SalesHistory from "./Saleshistory";
import Chartsdata from "./Chartsdata";
// import Settings from "./Settings";

const Sidebar = () => {
    const [activeComponent, setActiveComponent] = useState("todaysales");

    const renderComponent = () => {
        switch (activeComponent) {
            case "todaysales":
                return <Todaysales />;
            case "saleshistory":
                return <SalesHistory />;
            case "charts":
                return <Chartsdata />;
            case "settings":
                return <Allapplications/>;
        }
    };

    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "#f7f7f7" }}>
            {/* Sidebar */}
            <div style={{ width: "260px", background: "linear-gradient(135deg, #6e7a99, #4e6a91)", color: "#fff", paddingTop: "20px", paddingBottom: "20px", borderRadius: "0 20px 20px 0", boxShadow: "3px 0 15px rgba(0,0,0,0.2)" }}>
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <p style={{ fontSize: "18px", fontWeight: "bold" }}>Welcome</p>
                </div>
                <hr style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)", margin: "0 10px" }} />
                <nav style={{ padding: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div>
                            <button
                                onClick={() => setActiveComponent("todaysales")}
                                style={{
                                    width: "100%", padding: "14px", backgroundColor: "#ffffff", color: "#4e6a91", borderRadius: "8px", border: "none", fontSize: "16px", fontWeight: "600", textAlign: "left",
                                    transition: "background-color 0.3s ease", cursor: "pointer", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
                                }}
                                className="sidebar-btn"
                            >
                                <span role="img" aria-label="sales">💰</span> Today's Sale
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => setActiveComponent("saleshistory")}
                                style={{
                                    width: "100%", padding: "14px", backgroundColor: "#ffffff", color: "#4e6a91", borderRadius: "8px", border: "none", fontSize: "16px", fontWeight: "600", textAlign: "left",
                                    transition: "background-color 0.3s ease", cursor: "pointer", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
                                }}
                                className="sidebar-btn"
                            >
                                <span role="img" aria-label="history">📜</span> Sales History
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => setActiveComponent("charts")}
                                style={{
                                    width: "100%", padding: "14px", backgroundColor: "#ffffff", color: "#4e6a91", borderRadius: "8px", border: "none", fontSize: "16px", fontWeight: "600", textAlign: "left",
                                    transition: "background-color 0.3s ease", cursor: "pointer", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
                                }}
                                className="sidebar-btn"
                            >
                                <span role="img" aria-label="analytics">📊</span> Sales Analytics
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => setActiveComponent("settings")}
                                style={{
                                    width: "100%", padding: "14px", backgroundColor: "#ffffff", color: "#4e6a91", borderRadius: "8px", border: "none", fontSize: "16px", fontWeight: "600", textAlign: "left",
                                    transition: "background-color 0.3s ease", cursor: "pointer", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
                                }}
                                className="sidebar-btn"
                            >
                                <span role="img" aria-label="settings">⚙️</span> Settings
                            </button>
                        </div>
                        <div>
                            <button
                                style={{
                                    width: "100%", padding: "14px", backgroundColor: "#ff4757", color: "#fff", borderRadius: "8px", border: "none", fontSize: "16px", fontWeight: "600", textAlign: "left",
                                    transition: "background-color 0.3s ease", cursor: "pointer", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
                                }}
                                className="sidebar-btn"
                            >
                                <span role="img" aria-label="logout">🚪</span> Logout
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: "30px", background: "#f9f9f9", borderRadius: "20px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
                {renderComponent()}
            </div>
        </div>
    );
};

export default Sidebar;
