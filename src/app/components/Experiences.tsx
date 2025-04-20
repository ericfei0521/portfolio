'use client';

const experiences = [
    {
        title: 'Mid. Frontend Developer',
        company: 'AlleyPin',
        period: '2024.08 - Present',
        achievements: [
            'Modernized LINE LIFF pages to enhance user experience and engagement.',
            'Integrated legacy services into a Next.js app with best practices for server components, templates, Sentry logging, and shared utilities.',
            'Developed a shared design system, reducing redundancy and improving maintainability.',
            'JavaScript-to-TypeScript migration, enhancing scalability and reducing bugs.',
            'Led the internationalization efforts for three major frontend processes, integrating i18n services and CI/CD automation to minimize manual maintenance of translation keys.',
            'Spearheaded frontend architecture for two new services, defined POCs, and led API discussions, completing both projects within two weeks.',
            'Diagnosed and resolved Express.js API issues, accelerating development efficiency.',
        ],
    },
    {
        title: 'L2. Frontend Developer',
        company: 'Partipost',
        period: '2022 - 2024',
        achievements: [
            'Refactored key features, reducing unnecessary re-renders by 10x and improving load times by 30%.',
            'Designed and implemented a RBAC system and a comment system, reducing manual operations by 50%.',
            'Developed a comprehensive, scalable design system using advanced component design patterns, integrated with Storybook to enhance team collaboration and accelerate development speed.',
            'Led end-to-end testing adoption with Playwright and GitLab CI, enhancing system reliability and deployment confidence.',
            'Integrated Fortitude CLI for i18n and Amplitude for analytics, improving user data insights.',
            'Conducted multiple POCs, influencing key product and architectural decisions.',
        ],
    },
    {
        title: 'Jr. Frontend Developer',
        company: 'Kuobrothers Corp',
        period: '2021 - 2022',
        achievements: [
            'Rebuilt an e-commerce platform with Next.js, improving performance and responsiveness.',
            'Developed a D3-powered real-time sales dashboard, enhancing business visibility for TV sales events.',
            'Implemented AMP pages, boosting SEO rankings and page speed scores.',
            'Introduced Cypress for E2E testing, ensuring core feature reliability.',
            'Optimized performance with code-splitting, React improvements, and progressive images.',
        ],
    },
    {
        title: 'Jr. Frontend Developer',
        company: 'Glaibo Digital',
        period: '2021/03 - 2022/05',
        achievements: [
            'Developed new features using TypeScript, Next.js, and Apollo GQL to support dynamic content needs.',
            'Created reusable service methods to maximize efficiency and maintainability across projects.',
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="blob bg-mint/20 top-40 left-20"></div>

            <div className="container mx-auto px-6">
                <h2 className="section-title">Experience</h2>

                <div className="mt-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item" style={{ animationDelay: `${0.2 * index}s` }}>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-colors">
                                <div className="flex flex-wrap justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-mint">{exp.title}</h3>
                                        <p className="text-lg font-medium text-white/80">{exp.company}</p>
                                    </div>
                                    <p className="text-sm text-white/60 font-medium bg-white/10 px-3 py-1 rounded-full">
                                        {exp.period}
                                    </p>
                                </div>

                                <ul className="space-y-2 list-disc list-inside text-white/70">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
