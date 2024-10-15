// components/Hero.tsx
"use client"
import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin, Facebook, Code, Hash, Sparkles, LucideIcon } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  { Icon: Github, href: 'https://github.com/yourusername' },
  { Icon: Instagram, href: 'https://instagram.com/yourusername' },
  { Icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
  { Icon: Facebook, href: 'https://facebook.com/yourusername' },
];

const hobbies = [
  { name: 'Web Development', LeftIcon: Code, RightIcon: Code },
  { name: 'Bread Baking', LeftIcon: Hash, RightIcon: Hash },
  { name: 'Reiki', LeftIcon: Sparkles, RightIcon: Sparkles },
];

const slideshowImages = [
  { src: '/assets/pictures/slide-1.jpg', alt: 'Web Development Project' },
  { src: '/assets/pictures/slide-2.jpg', alt: 'Freshly Baked Bread' },
  { src: '/assets/pictures/slide-3.jpg', alt: 'Reiki Session' },
  { src: '/assets/pictures/slide-4.jpg', alt: 'Reiki Session' },
  { src: '/assets/pictures/slide-5.jpg', alt: 'Reiki Session' },
  { src: '/assets/pictures/slide-6.jpg', alt: 'Reiki Session' },
  { src: '/assets/pictures/slide-7.jpg', alt: 'Reiki Session' },
  { src: '/assets/pictures/slide-8.jpg', alt: 'Reiki Session' },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg">
      {slideshowImages.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            onError={(e) => {
              e.currentTarget.src = '/assets/pictures/placeholder.jpg'; // Fallback image
            }}
          />
        </div>
      ))}
    </div>
  );
};

type HobbyProps = {
  hobby: {
    name: string;
    LeftIcon: LucideIcon;
    RightIcon: LucideIcon;
  };
}

const HobbyItem: React.FC<HobbyProps> = ({ hobby }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="flex items-center justify-center mb-4 p-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <hobby.LeftIcon size={24} className={`mr-2 transition-colors duration-300 ${isHovered ? 'text-blue-500' : 'text-gray-600'}`} />
      <span className={`text-lg transition-colors duration-300 ${isHovered ? 'text-blue-700 font-semibold' : 'text-gray-600'}`}>{hobby.name}</span>
      <hobby.RightIcon size={24} className={`ml-2 transition-colors duration-300 ${isHovered ? 'text-blue-500' : 'text-gray-600'}`} />
    </li>
  );
};

type SocialIconProps = {
  Icon: LucideIcon;
  href: string;
}

const SocialIcon = ({ Icon, href }: SocialIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${isHovered ? 'bg-gray-200' : ''
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon size={24} className={`transition-colors duration-300 ${isHovered ? 'text-blue-500' : 'text-gray-600'}`} />
    </a>
  );
};

const Hero = () => {
  return (
    <section id="home" className="py-10 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side */}
          <div className="w-full md:w-1/3 mb-10 md:mb-0 flex flex-col items-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6">
              <Image
                src='/assets/pictures/myself.jpg'
                alt="Your Name"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/assets/pictures/placeholder.jpg'; // Fallback image
                }}
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Your Name</h1>
            <ul className="mb-8 w-full">
              {hobbies.map((hobby, index) => (
                <HobbyItem key={index} hobby={hobby} />
              ))}
            </ul>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <SocialIcon key={index} {...link} />
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="w-full md:w-2/3 md:pl-10">
            <Slideshow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;