'use client';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav
            className={twMerge(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 bg-dark/90 shadow-md bg-[#171717]'
            )}
        >
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="font-display text-xl font-bold">
                    <span className="text-white">Eric</span>
                    <span className="text-mint">Fei</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#about" className="text-white/80 hover:text-mint transition-colors">
                        About
                    </a>
                    <a href="#experience" className="text-white/80 hover:text-mint transition-colors">
                        Experience
                    </a>
                    <a href="#skills" className="text-white/80 hover:text-mint transition-colors">
                        Skills
                    </a>
                    <a href="#contact" className="text-white/80 hover:text-mint transition-colors">
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full  py-4 shadow-lg  backdrop-blur-sm bg-dark/90 z-50">
                    <div className="container mx-auto space-y-4 px-6">
                        <a
                            href="#about"
                            className="block text-white/80 hover:text-mint transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#experience"
                            className="block text-white/80 hover:text-mint transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Experience
                        </a>
                        <a
                            href="#skills"
                            className="block text-white/80 hover:text-mint transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Skills
                        </a>
                        <a
                            href="#contact"
                            className="block text-white/80 hover:text-mint transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
