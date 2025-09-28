import React, { useState, useCallback } from 'react';
import { Page } from '../../types';
import { generateSlogans } from '../../services/geminiService';
import SparklesIcon from '../icons/SparklesIcon';

interface HomeProps {
  navigateTo: (page: Page) => void;
}

const AISloganGenerator: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [slogans, setSlogans] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!businessType.trim()) {
      setError('Please enter a business type or industry.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setSlogans([]);
    try {
      const generated = await generateSlogans(businessType);
      setSlogans(generated);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [businessType]);

  return (
    <section className="py-16 bg-slate-800/50 rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <SparklesIcon className="w-8 h-8 text-brand-cyan animate-pulse-slow" />
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">AI Slogan Generator</h2>
        </div>
        <p className="mt-4 text-lg leading-6 text-slate-300 max-w-2xl mx-auto">
          Need a catchy tagline? Describe your business and let our AI create one for you.
        </p>
        <div className="mt-8 max-w-md mx-auto sm:flex sm:gap-4">
          <input
            type="text"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            placeholder="e.g., 'Artisan Coffee Shop'"
            className="w-full px-5 py-3 text-base text-slate-100 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan"
            disabled={isLoading}
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="mt-4 sm:mt-0 w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-cyan hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-brand-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Generating...' : 'Generate'}
          </button>
        </div>
        
        <div className="mt-8 min-h-[150px]">
          {isLoading && (
             <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-cyan"></div>
             </div>
          )}
          {error && <p className="text-red-400">{error}</p>}
          {!isLoading && slogans.length > 0 && (
            <div className="grid gap-4 md:grid-cols-3">
              {slogans.map((slogan, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <p className="text-slate-100 font-medium italic">"{slogan}"</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  return (
    <div className="space-y-20 md:space-y-32">
      <section className="text-center animate-fade-in-up">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          We Build <span className="text-brand-cyan">Stellar</span> Digital Experiences
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300 sm:text-xl">
          From stunning websites to powerful branding, our solutions are designed to launch your business into the stratosphere.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => navigateTo(Page.Portfolio)}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-cyan hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-brand-dark transition-transform duration-300 hover:scale-105"
          >
            Our Work
          </button>
          <button
            onClick={() => navigateTo(Page.Contact)}
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-100 bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 focus:ring-offset-brand-dark transition-transform duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </section>

      <AISloganGenerator />
    </div>
  );
};

export default Home;
