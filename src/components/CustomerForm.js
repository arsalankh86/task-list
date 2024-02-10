
import React, { useState } from 'react';
import axios from 'axios';
import './CustomerForm.css'; 

const CustomerForm = ({ onLogin }) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/customers', {
  name: customerName,
  password: customerPassword
}, {
  headers: {
    'Content-Type': 'application/json',
  },
});

      console.log('Customer created:', response.data);
      onLogin();

    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Customer User Name:
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </label>
      <label>
        Customer User Password:
        <input
          type="password"
          value={customerPassword}
          onChange={(e) => setCustomerPassword(e.target.value)}
        />
      </label>
      <button type="submit">Create Customer</button>
    </form>
  );
};

export default CustomerForm;
