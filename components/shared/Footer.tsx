// components/Footer.tsx
import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <p>&copy; 2024 Your Name. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-300 hover:text-white"><Github size={24} /></a>
        <a href="#" className="text-gray-300 hover:text-white"><Linkedin size={24} /></a>
        <a href="#" className="text-gray-300 hover:text-white"><Mail size={24} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;