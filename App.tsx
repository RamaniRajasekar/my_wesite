import React, { useState, useCallback } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home navigateTo={navigateTo} />;
      case Page.About:
        return <About />;
      case Page.Services:
        return <Services />;
      case Page.Portfolio:
        return <Portfolio />;
      case Page.Contact:
        return <Contact />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="bg-brand-dark text-brand-light min-h-screen flex flex-col font-sans">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
