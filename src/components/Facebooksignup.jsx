// src/components/FacebookSignup.jsx
import React from 'react';
import './Facebooksignup.css'; // Import the custom CSS file

export const FacebookSignup = () => {
  return (
    <>
      <div className="custom-container">
        <div className="custom-box">
          <h2 className="custom-title">Sign Up</h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="First name"
                className="custom-input"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Last name"
                className="custom-input"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Mobile number or email"
                className="custom-input"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="New password"
                className="custom-input"
              />
            </div>
            <div className="mb-6">
              <label className="custom-label text-left">Gender</label>
              <div className="flex justify-between">
                <label className="flex items-center">
                  <input type="radio" name="gender" value="Female" className="mr-2" />
                  Male
                </label>
                <label className="flex justify-start">
                  <input type="radio" name="gender" value="Male" className="mr-2" />
                  Female
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" value="Other" className="mr-2" />
                  Other
                </label>
              </div>R
            </div>
            <div className="mb-4">
              <label className="custom-label text-left">Birthday</label>
              <div className="flex justify-between">
                <select className="custom-input">
                  <option value="">Day</option>
                  <option value="1">1</option>
                  {/* Add options for all days */}
                </select>
                <select className="custom-input ml-2">
                  <option value="">Month</option>
                  <option value="January">January</option>
                  {/* Add options for all months */}
                </select>
                <select className="custom-input ml-2">
                  <option value="">Year</option>
                  <option value="2000">2000</option>
                  {/* Add options for all years */}
                </select>
              </div>
            </div>
            
            <button className="btn-custom">
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            By clicking Sign Up, you agree to our Terms, Data Policy, and Cookie Policy.
          </p>
        </div>
      </div>
    </>
  );
};

export default FacebookSignup;
