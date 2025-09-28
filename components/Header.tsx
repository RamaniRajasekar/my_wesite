import React, { useState } from 'react';
import { Page } from '../types';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import SparklesIcon from './icons/SparklesIcon';

interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  navigateTo: (page: Page) => void;
  children: React.ReactNode;
  isMobile?: boolean;
}> = ({ page, currentPage, navigateTo, children, isMobile = false }) => {
  const isActive = currentPage === page;
  const baseClasses = 'cursor-pointer transition-colors duration-300';
  const activeClasses = 'text-brand-cyan';
  const inactiveClasses = 'hover:text-brand-cyan';
  const mobileClasses = 'text-2xl py-4 text-center';
  const desktopClasses = 'text-sm font-medium';

  return (
    <a
      onClick={() => navigateTo(page)}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${isMobile ? mobileClasses : desktopClasses}`}
    >
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: Page[] = [Page.Home, Page.Services, Page.Portfolio, Page.About, Page.Contact];

  const handleMobileNavClick = (page: Page) => {
    navigateTo(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigateTo(Page.Home)}
          >
            <SparklesIcon className="w-6 h-6 text-brand-cyan" />
            <span className="text-xl font-bold text-white">Stellar Solutions</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            {navItems.map((page) => (
              <NavLink key={page} page={page} currentPage={currentPage} navigateTo={navigateTo}>
                {page}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-brand-dark z-40 pt-16 animate-fade-in-up">
           <nav className="flex flex-col items-center justify-center h-full space-y-6">
             {navItems.map((page) => (
               <NavLink key={page} page={page} currentPage={currentPage} navigateTo={handleMobileNavClick} isMobile>
                 {page}
               </NavLink>
             ))}
           </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
