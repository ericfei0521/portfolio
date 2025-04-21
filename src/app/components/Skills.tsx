'use client';
import { useState } from 'react';

const skills = [
    { name: 'JavaScript', category: 'language', color: 'bg-yellow-500' },
    { name: 'TypeScript', category: 'language', color: 'bg-blue-500' },
    { name: 'Python', category: 'language', color: 'bg-blue-500' },
    { name: 'HTML', category: 'markup', color: 'bg-orange-500' },
    { name: 'CSS', category: 'styling', color: 'bg-purple-500' },
    { name: 'Tailwind', category: 'styling', color: 'bg-cyan-500' },
    { name: 'Css-in-Js', category: 'styling', color: 'bg-pink-500' },
    { name: 'MUI', category: 'library', color: 'bg-blue-400' },
    { name: 'React.js', category: 'library', color: 'bg-blue-600' },
    { name: 'Next.js', category: 'framework', color: 'bg-gray-600' },
    { name: 'Plasmo', category: 'framework', color: 'bg-gray-600' },
    { name: 'Redux', category: 'state', color: 'bg-purple-600' },
    { name: 'Redux-saga', category: 'state', color: 'bg-purple-400' },
    { name: 'Redux-thunk', category: 'state', color: 'bg-purple-400' },
    { name: 'zustand', category: 'state', color: 'bg-yellow-600' },
    { name: 'Git', category: 'tools', color: 'bg-red-600' },
    { name: 'Playwright', category: 'testing', color: 'bg-green-600' },
    { name: 'Cypress.io', category: 'testing', color: 'bg-green-600' },
    { name: 'i18n', category: 'library', color: 'bg-blue-300' },
    { name: 'Express.js', category: 'backend', color: 'bg-gray-500' },
    { name: 'Mongoose', category: 'database', color: 'bg-green-500' },
    { name: 'MongoDB', category: 'database', color: 'bg-green-700' },
    { name: 'MySQL', category: 'database', color: 'bg-green-700' },
    { name: 'Prisma', category: 'database', color: 'bg-indigo-500' },
    { name: 'Storybook', category: 'tools', color: 'bg-pink-600' },
];

const categories = [
    { id: 'all', label: 'All' },
    { id: 'language', label: 'Languages' },
    { id: 'markup', label: 'Markup' },
    { id: 'styling', label: 'Styling' },
    { id: 'library', label: 'Libraries' },
    { id: 'framework', label: 'Frameworks' },
    { id: 'state', label: 'State Management' },
    { id: 'tools', label: 'Tools' },
    { id: 'testing', label: 'Testing' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredSkills =
        activeCategory === 'all' ? skills : skills.filter((skill) => skill.category === activeCategory);

    return (
        <section id="skills" className="py-20 relative">
            <div className="blob bg-orange/20 bottom-20 right-20"></div>

            <div className="container mx-auto px-6">
                <h2 className="section-title">Technical Skills</h2>

                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeCategory === category.id
                                    ? 'bg-mint text-dark'
                                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white/5  rounded-full  flex items-center justify-center text-center h-12 hover:bg-white/10 transition-all transform hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-4 ">
                                <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                                <p className="font-medium text-sm">{skill.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
