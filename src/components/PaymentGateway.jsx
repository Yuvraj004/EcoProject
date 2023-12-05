import React, { useState } from "react";
import "./payment.css";
import Navbar from "./Navbar";

// Import your medicine images
import medicineImageA from "../assets/med1.png";
import medicineImageB from "../assets/med2.jpg";
import medicineImageC from "../assets/med3.jpg";
import medicineImageD from "../assets/med4.jpg";
import medicineImageE from "../assets/med3.jpg";
import medicineImageF from "../assets/med2.jpg";

function PaymentGateway() {
  const [medicineData, setMedicineData] = useState([
    { id: 1, name: "Medicine A", price: 10.99, image: medicineImageA },
    { id: 2, name: "Medicine B", price: 15.99, image: medicineImageB },
    { id: 3, name: "Medicine C", price: 20.49, image: medicineImageC },
    { id: 4, name: "Medicine D", price: 10.99, image: medicineImageD },
    { id: 5, name: "Medicine E", price: 15.99, image: medicineImageE },
    { id: 6, name: "Medicine F", price: 20.49, image: medicineImageF },

    // Add more items as needed
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (medicine) => {
    setCartItems([...cartItems, medicine]);
  };

  return (
    <><Navbar /><div
      className="payment-gateway"
      style={{
        backgroundColor: "rgba(12,15,27,255)",
        color: "#fff",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1 className="text-2xl font-bold text-center mb-1">Welcome to the Medicine Store</h1>
      <p className="text-gray-300 text-center mb-5">Buy medicines online with ease!</p>

      <div className="grid grid-cols-2 gap-4">
        {medicineData.map((medicine) => (
          <div
            key={medicine.id}
            className="  p-4 text-center rounded shadow-md"
            style={{ color: "#fff",backgroundColor:"#FFD700" }}
          >
            <img
                src={medicine.image}
                alt={medicine.name}
                className="mb-2 rounded"
                style={{ width: "100%", height: "200px" }}
              />
            <h3 className="text-lg font-semibold mb-2">{medicine.name}</h3>
            <p className="text-white-700">Price: ${medicine.price}</p>
            <button
              className="bg-green-500 text-white py-2 px-4 mt-2 rounded hover:bg-green-600"
              onClick={() => addToCart(medicine)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="bg-gray-200 p-2 mb-2 rounded"
                style={{ color: "#333" }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div></>
  );
}
export default PaymentGateway;
