import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Stellar Solutions. All rights reserved.</p>
        <p className="mt-1">Crafting Digital Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
