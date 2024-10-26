// src/app/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import OtpModal from "@/components/OtpModal";

export default function Home() {
  const [isOtpOpen, setIsOtpOpen] = useState(false);

  const openOtpModal = () => setIsOtpOpen(true);
  const closeOtpModal = () => setIsOtpOpen(false);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl gap-0 lg:gap-0 flex-grow mt-10 mb-10">
        {/* Form Section */}
        <div className="bg-black text-white flex flex-col justify-between h-full rounded-lg lg:rounded-none">
          <div className="px-6 py-8 flex-grow">
            <div className="flex items-center mb-10">
              <Image
                src="/logo-icon.jpg"
                alt="Logo Icon"
                width={40}
                height={40}
                className="mr-2"
              />
              <p className="text-3xl font-bold">Pulse Care</p>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold mb-4 mt-16">
              Hi there, ....
            </h1>
            <p className="text-gray-400 mb-6">Get Started with Appointments.</p>

            <form>
              {/* Full Name Field */}
              <div className="mb-4 mt-12">
                <label className="block text-sm mb-4 mt-16" htmlFor="full-name">
                  Full Name
                </label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3 rounded-md bg-gray-800 text-white"
                />
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={openOtpModal} // Open the OTP modal on button click
                className="w-full py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Get Started
              </button>
            </form>
          </div>

          <footer className="w-full text-center py-4 text-gray-400 mb-6">
            © Care Pulse
          </footer>
        </div>

        {/* Image Section */}
        <div className="hidden lg:flex items-center justify-center h-full rounded-lg lg:rounded-none overflow-hidden">
          <Image
            src="/page.png"
            alt="Doctor"
            width={720}
            height={1024}
            className="object-cover h-full"
          />
        </div>
      </div>

      {/* OTP Modal */}
      <OtpModal isOpen={isOtpOpen} onClose={closeOtpModal} />
    </div>
  );
}
