"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = ['home', 'about', 'projects', 'contact'];
const hobbies = [
  { name: 'Bread Baking', href: '/bread-baking' },
  { name: 'Reiki', href: '/reiki' },
];

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }
};

const NavItems = ({ isMobile = false, closeMenu = () => { } }: { isMobile?: boolean; closeMenu?: () => void }) => (
  <>
    {menuItems.map((item) => (
      <li key={item}>
        <Button
          variant="ghost"
          className={`p-0 capitalize ${isMobile ? 'text-gray-800' : 'text-gray-700 hover:text-gray-900'}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(item);
            closeMenu();
          }}
        >
          {item}
        </Button>
      </li>
    ))}
    <li>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className={`p-0 ${isMobile ? 'text-gray-800' : ''}`}>
            Hobbies
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {hobbies.map((hobby) => (
            <DropdownMenuItem key={hobby.name} asChild>
              <Link
                href={hobby.href}
                onClick={isMobile ? closeMenu : undefined}
                className={isMobile ? 'text-gray-800' : ''}
              >
                {hobby.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  </>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md'
          : 'bg-white shadow'}
      `}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Your Logo</Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-4 items-center">
            <NavItems />
          </ul>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-white/80 backdrop-blur-md"
            >
              <nav className="flex flex-col h-full">
                <ul className="flex flex-col space-y-4 mt-6 flex-grow">
                  <NavItems isMobile={true} closeMenu={closeMenu} />
                </ul>
                <div className="mt-auto pb-6">
                  <p className="text-sm text-gray-600">© 2024 Your Company</p>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;