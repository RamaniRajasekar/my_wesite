import React from 'react';

const teamMembers = [
  { name: 'Alex Johnson', role: 'Lead Designer', imageUrl: 'https://picsum.photos/seed/alex/400/400' },
  { name: 'Maria Garcia', role: 'Head of Development', imageUrl: 'https://picsum.photos/seed/maria/400/400' },
  { name: 'James Smith', role: 'Marketing Strategist', imageUrl: 'https://picsum.photos/seed/james/400/400' },
];

const About: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in-up">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-white">About Stellar Solutions</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">
          We are a passionate team of designers, developers, and strategists dedicated to helping businesses shine in the digital universe. Our mission is to combine creativity with technology to deliver results that exceed expectations.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-white mb-10">Meet Our Crew</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-slate-800 rounded-lg shadow-lg overflow-hidden text-center transform transition-transform duration-300 hover:-translate-y-2">
              <img className="w-full h-64 object-cover" src={member.imageUrl} alt={member.name} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-brand-cyan mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
