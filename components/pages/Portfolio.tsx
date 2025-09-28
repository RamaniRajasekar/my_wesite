import React from 'react';

const portfolioItems = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: `Project Astro ${i + 1}`,
  category: i % 3 === 0 ? 'Web Design' : i % 3 === 1 ? 'Branding' : 'Development',
  imageUrl: `https://picsum.photos/seed/project${i + 1}/600/400`,
}));

const Portfolio: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">Our Portfolio</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
          A glimpse into the universe of projects we've successfully launched.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-70"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-brand-cyan transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
