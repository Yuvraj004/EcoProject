import React, { useState } from 'react';

function PaymentGateway() {


  return (
    <div>
      <h1>Welcome to the Medicine Store</h1>
      <p>Buy medicines online with ease!</p>

      <div>
        <h2>Medicine List</h2>
        {medicineData.map((medicine) => (
          <div key={medicine.id}>
            <h3>{medicine.name}</h3>
            <p>Price: ${medicine.price}</p>
            <button onClick={() => addToCart(medicine)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default PaymentGateway;
