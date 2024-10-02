import Link from 'next/link'
import React from 'react'

// components/Footer.js

const Footer = () => {
  return (
    <footer className="mt-20 bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4 text-[24] space-x-4">
        <a href="https://discord.gg/JNKn3JE8mX" aria-label="Discord" target="_blank" rel="noopener noreferrer">
        Discord
          </a>
        </div>

        <div className="flex justify-center space-x-8 mb-4">
          <a href="/about/AboutUs" className="hover:underline">About</a>
          <a href="/about/DMCA" className="hover:underline">DMCA</a>
          <a href="/about/ContactUs" className="hover:underline">Contact</a>
          <a href="/about/Privacy" className="hover:underline">Privacy</a>
          
        </div>

        <div className="text-sm text-gray-400">
          <div className="flex justify-center space-x-4">
          All the novels and comics on this website are only previews of the original novels and comics, there may be many language errors, character names, and story lines. For the original version, please buy the novels and comic if it's available in your city.

          </div>
          <p>Copyright © Fiction Read 2024</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
