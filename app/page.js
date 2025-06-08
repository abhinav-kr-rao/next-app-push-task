'use client'
import Image from "next/image";
import Link from "next/link";
 
 
import React, { useState, useEffect } from 'react';

 function Home() {
  return (
    <div className="bg-white min-h-screen w-full">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl">Lookscout</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/" className="hover:underline">Resources</Link>
          <Link href="/" className="hover:underline">Our Products</Link>
          <Link href="/" className="hover:underline">Contacts</Link>
        </div>
        <div className="space-x-2">
          <button className="px-4 py-1 rounded bg-blue-500 hover:bg-blue-700">Log in</button>
          <button className="px-4 py-1 rounded bg-white text-blue-600 hover:bg-blue-100">Sign up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white px-6 py-12 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">Your Supercharged Design Workflow</h1>
          <p className="text-blue-100">We&aposve been told it is not possible to overachieve our customers&apos expectations. We have not reinvented the wheel, we decided to build upon it.</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-blue-100">Send Notification</button>
          <div className="flex items-center space-x-6 mt-6">
            <span className="text-xs">Who supports us</span>
            <span className="font-bold">GitLab</span>
            <span className="font-bold">slack</span>
            <span className="font-bold">NETFLIX</span>
            <span className="font-bold">PayPal</span>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative w-64 h-64 bg-blue-500 rounded-full flex items-center justify-center">
            <Image src="/Rectangle34624127.png" alt="avatar" width={120} height={120} className="rounded-full" />
          </div>
        </div>
      </section>

      {/* Messaging Section */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-black">Messaging for all</h2>
        <p className="text-center text-gray-500 mb-10">User generated content in real-time will have multiple touchpoints for offshoring.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto mb-4 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">✈️</div>
            <h3 className="font-semibold mb-2 text-black">Easier Work Organization</h3>
            <p className="text-gray-500 text-sm mb-2">Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.</p>
            <Link href="/" className="text-blue-600 font-semibold text-sm">Learn more →</Link>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">⚡</div>
            <h3 className="font-semibold mb-2 text-black">Fast Connection</h3>
            <p className="text-gray-500 text-sm mb-2">Completely pursue scalable customer cross-media through potentialities. Holistically quickly installed portals.</p>
            <Link href="/" className="text-blue-600 font-semibold text-sm">Learn more →</Link>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">🔗</div>
            <h3 className="font-semibold mb-2 text-black">Streamlined Processes</h3>
            <p className="text-gray-500 text-sm mb-2">Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.</p>
            <Link href="/" className="text-blue-600 font-semibold text-sm">Learn more →</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-black">Redefining Product Features</h2>
        <p className="text-center text-gray-500 mb-10">Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
        <div className="md:flex md:items-center md:justify-center md:space-x-12">
          <div className="space-y-8 md:w-1/2">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">✈️</div>
              <div>
                <h4 className="font-semibold text-black">Explore ideas together</h4>
                <p className="text-gray-500 text-sm">Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                <Link href="/" className="text-blue-600 font-semibold text-sm">Learn more →</Link>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">⚡</div>
              <div>
                <h4 className="font-semibold text-black">Bring those ideas to life</h4>
                <p className="text-gray-500 text-sm">Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                <Link href="/" className="text-blue-600 font-semibold text-sm">Learn more →</Link>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">🔗</div>
              <div>
                <h4 className="font-semibold text-black">Ship better outcomes</h4>
                <p className="text-gray-500 text-sm">Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                <Link href="/" className="text-blue-600 font-semibold text-sm">Learn more →</Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            {/* Placeholder for decorative image grid */}
            <div className="grid grid-cols-2 gap-4 w-64 h-64">
              <div className="rounded-full overflow-hidden"><Image src="/Elem2.png" alt="room" width={120} height={120} /></div>
              <div className="rounded-full overflow-hidden"><Image src="/Elem3.png" alt="room" width={120} height={120} /></div>
              <div className="rounded-full overflow-hidden"><Image src="/Elem4.png" alt="room" width={120} height={120} /></div>
              <div className="rounded-full overflow-hidden"><Image src="/Elem5.png" alt="room" width={120} height={120} /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <Home />
    </div>
  );
}