// components/Footer.tsx
import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="bg-accent text-foreground py-6">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <p>&copy; 2024 Your Name. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="#" className="p-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-foreground/50 hover:text-primary"><Github size={24} /></a>
        <a href="#" className="p-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-foreground/50 hover:text-primary"><Linkedin size={24} /></a>
        <a href="#" className="p-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-foreground/50 hover:text-primary"><Mail size={24} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;

