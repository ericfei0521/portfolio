'use client';

const experiences = [
    {
        title: 'Mid. Frontend Developer',
        company: 'AlleyPin',
        period: '2024.08 - Present',
        achievements: [
            'Modernized LINE LIFF interfaces, delivering a smoother, more intuitive user experience that boosted engagement.',
            'Migrated legacy services to a modern Next.js architecture, incorporating App Router, server components, and Sentry logging, reducing page load times by almost 30% and boosting developer productivity like 1 times faster  through reusable utilities and scalable design.',
            'Established a design system from scratch, reducing UI/UX inconsistencies and improving cross-team efficiency.',
            'Led JavaScript to TypeScript migration, enhancing type safety, reducing runtime bugs, and simplifying code maintenance.',
            'Implemented i18n across 3 core services via a CI/CD-integrated workflow, cutting manual translation work and accelerating global readiness.',
            'Architected  high-priority services, handling POC planning, API contract alignment, and full implementation.',
            'Optimized Express.js APIs, resolving bottlenecks and enabling faster frontend-backend delivery.',
            'Developed Chrome extensions for direct interaction with products like LINE OA boosting user retention by 15% and enhancing product accessibility.',
        ],
    },
    {
        title: 'Mid. Frontend Developer',
        company: 'Partipost',
        period: '2022.03 - 2024.08',
        achievements: [
            'Refactored key features in React, reducing unnecessary re-renders by 10x and improving load times by 30%, delivering a seamless and efficient user experience.',
            'Built a scalable RBAC system and advanced comment module, cutting ops workload by 50%.',
            'Led and Created a modular design system with advanced patterns and Storybook, accelerating feature delivery and ensuring design consistency.',
            'Championed end-to-end testing with Playwright and GitLab CI, increasing release reliability by 40% and enhancing developer confidence in production deployments.',
            'Automated i18n processes using Fortitude CLI and integrated Amplitude analytics for data-driven product improvements.',
            'Delivered multiple POCs, including a new onboarding flow and redesigned dashboard, directly shaping product architecture and strategic direction.',
        ],
    },
    {
        title: 'Jr. Frontend Developer',
        company: 'Kuobrothers Corp',
        period: '2021.05 - 2022.03',
        achievements: [
            'Re-architected a monolithic e-commerce platform into a high-performance Next.js application, improving page load speeds by 60% which enhance the lighthouse performance score to almost reach 100 and enabling seamless scalability for future growth.',
            'Built a real-time D3-powered sales dashboard for live TV commerce, enabling instant sales insights and better business decisions.',
            'Developed an AMP page that boosted the main product website SEO score.',
            'Implemented Cypress E2E testing, strengthening test coverage and reducing release regressions.',
            'Optimized web app performance ( code-splitting, react optimization skills, progressive images ... etc) which help the web app reach 100 performance scores and 92 SEO scores, and more than 91% great user experience links.',
        ],
    },
    {
        title: 'Jr. Frontend Developer',
        company: 'Glaibo Digital',
        period: '2021.03 - 2022.05',
        achievements: [
            'Built dynamic features using Next.js, TypeScript, and Apollo GraphQL, ensuring fast and efficient client-side rendering.',
            'Developed reusable service-layer utilities, promoting code reuse and easing long-term maintenance across projects.',
        ],
    },
    {
        title: 'Frontend Developer Trainee',
        company: 'AppWorks school',
        period: '2020.09 - 2021.01',
        achievements: [
            'Developed a Project management system real-time chat application using React and Firebase, enhancing user engagement and interaction.',
            'Created a responsive e-commerce website with HTML, CSS, and JavaScript.',
        ],
    },
    {
        title: 'Project Manager',
        company: 'MoonShine Animation Studio',
        period: '2019.02 - 2020.09',
        achievements: [
            'Movie, commercial, and other digital media project management.',
            'Managed and scheduled work process for 60 - 120 members by cases.',
            'Successfully engaged in negotiations and delivered projects, resulting in a significant increase of 20 million in annual revenue for the company.',
            'Maintained relationships with major corporate clients, such as Asus, Acer, and other renowned brands.',
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="blob bg-mint/20 top-40 left-20"></div>

            <div className="container mx-auto px-6">
                <h2 className="section-title">Experiences</h2>

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
