import React from 'react';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    title: 'Web Development',
    description: 'We build fast, responsive, and secure websites that look great on all devices and are optimized for performance.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
    ),
    title: 'Branding & Identity',
    description: 'Craft a memorable brand with our expert identity design services, including logos, color palettes, and style guides.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
    title: 'SEO Optimization',
    description: 'Climb the search engine ranks and attract more organic traffic with our data-driven SEO strategies.',
  },
];

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
          We offer a constellation of services to help your brand reach new heights.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-slate-800 p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:bg-slate-700">
            <div className="text-brand-cyan mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-slate-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
