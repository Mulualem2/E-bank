import React from "react";

export const TeleBirr = () => {
  return (
    <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
      <div className="col-span-4">
        <label
          htmlFor="phone-number"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            className="block w-full p-1  border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>

      <div className="col-span-4 sm:col-span-2">
        <label
          htmlFor="pin"
          className="block text-sm font-medium text-gray-700"
        >
          PIN
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="pin"
            id="pin"
            className="block w-full p-1  border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>

      <div className="col-span-4 sm:col-span-2">
        <label
          htmlFor="otp"
          className="block text-sm font-medium text-gray-700"
        >
          OTP
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="otp"
            id="otp"
            className="block w-full p-1  border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>
    </div>
  );
};
