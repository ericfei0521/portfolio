'use client';
import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Image from 'next/image';

const Hero = () => {
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            if (counterRef.current && count <= 1) {
                counterRef.current.textContent = count.toString().padStart(2, '0');
                count += 1;
            } else {
                clearInterval(interval);
            }
        }, 300);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll('.animate-fade-in');
        elements.forEach((el) => {
            const delay = parseFloat(el.getAttribute('style')?.match(/animation-delay: ([\d.]+)s/)?.[1] || '0');
            setTimeout(() => {
                el.classList.add('opacity-100');
            }, delay * 1000);
        });
    }, []);

    return (
        <section className="min-h-screen flex items-center ">
            <div className="mx-auto px-6 container">
                <div className="flex flex-col-reverse justify-between items-center lg:flex lg:flex-row lg:gap-4 ">
                    <div className="w-full flex flex-col items-center justify-center gap-4 lg:w-4/5 lg:items-start lg:gap-6">
                        <h1 className="text-3xl md:text-7xl font-bold hidden lg:block">Hi, I am ERIC FEI </h1>
                        <h2 className="text-xl font-bold text-gray-400 md:text-3xl">FRONTEND DEVELOPER</h2>
                        <h3 className="text-lg text-gray-300 max-w-[800px] hidden lg:block">
                            FrontEnd Developer with 5+ years of experience. Proven expertise in the React ecosystem and
                            modern web architecture. Adept at modernizing legacy systems, building scalable design
                            systems from the ground up, and delivering high-performance, user-centric interfaces. Strong
                            cross-functional collaboration skills with a solid backend foundation in Express.js and API
                            integration.
                        </h3>
                        <div className="flex gap-4 items-center">
                            <a href="https://github.com/ericfei0521" target="_blank">
                                <FaGithub size={24} className="hover:text-blue-300" />
                            </a>
                            <a href="https://linkedin.com/in/eric-fei" target="_blank">
                                <FaLinkedin size={24} className="hover:text-blue-300" />
                            </a>
                            <a
                                href="mailto:ericfei0521@gmail.com"
                                className="text-white/70 hover:text-mint transition-colors"
                            >
                                <HiMail size={28} className="hover:text-blue-300" />
                            </a>
                        </div>
                        <div>
                            <a
                                href="#contact"
                                className="w-fit border block border-gray-200 text-white py-3 px-6 rounded-full hover:bg-gray-500 hover:text-blue-200 transition-colors"
                            >
                                Get in touch
                            </a>
                        </div>
                    </div>
                    <Image src="/profile.png" alt="profile" width={500} height={500} className="hidden lg:block" />

                    <div className="flex flex-col items-center lg:items-start gap-2 lg:w-1/5 lg:hidden">
                        <div className="w-[300px] h-[300px] lg:w-auto lg:h-fit rounded-full overflow-hidden bg-amber-200 lg:bg-transparent lg:rounded-none">
                            <Image src="/profile.png" alt="profile" width={500} height={500} />
                        </div>
                        <div className="text-5xl md:text-7xl font-bold mb-4 lg:hidden">Eric Fei</div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#about" className="text-white/50 hover:text-white transition-colors">
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
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </a>
            </div>
        </section>
    );
};
export default Hero;
