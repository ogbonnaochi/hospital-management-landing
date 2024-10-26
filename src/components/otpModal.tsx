"use client";

import React, { useState, ChangeEvent } from "react";

interface OtpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OtpModal({ isOpen, onClose }: OtpModalProps) {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value.slice(-1);
    setOtp(newOtp);

    if (e.target.value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join("");
    console.log("OTP Code Entered:", otpCode);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-800 p-6 rounded-lg w-80 md:w-96">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-white font-semibold">Verify OTP</h2>
            <button onClick={onClose} className="text-gray-400 text-xl">
              ✕
            </button>
          </div>
          <p className="text-gray-300 mb-6">
            Please enter the OTP sent to your registered mobile number.
          </p>
          <div className="flex justify-between mb-6">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={value}
                onChange={(e) => handleChange(index, e)}
                className="w-10 h-10 text-center text-lg bg-gray-700 text-white rounded-md focus:outline-none"
                maxLength={1}
              />
            ))}
          </div>
          <button
            onClick={handleVerify}
            className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Verify
          </button>
        </div>
      </div>
    )
  );
}
