import React from "react";
import Home from "./pages/Home";
import "./App.css";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthProvider  from "./context/AuthContext";
import CartProvider from "./context/CartContext";

function App() {
    return (
        <AuthProvider>
            <CartProvider>
            <div className="app">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/CartProvider" element={<Checkout />} />
                </Routes>
            </div>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;