import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiPhone, FiLink, FiMail } from 'react-icons/fi';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="blob bg-mint/20 top-20 left-40"></div>
            <div className="blob bg-purple/20 bottom-20 right-40"></div>

            <div className="container mx-auto px-6">
                <h2 className="section-title">Get In Touch</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-white/80 mb-8 text-lg">
                            Feel free to reach out if you&apos;re looking for a developer, have a question, or just want
                            to connect.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FiMail size={24} />
                                <div>
                                    <h3 className="text-lg font-semibold">Email</h3>
                                    <a
                                        href="mailto:ericfei0521@gmail.com"
                                        className="text-white/70 hover:text-mint transition-colors"
                                    >
                                        ericfei0521@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FiPhone size={24} />
                                <div>
                                    <h3 className="text-lg font-semibold">Phone</h3>
                                    <a
                                        href="tel:+886919995972"
                                        className="text-white/70 hover:text-purple transition-colors"
                                    >
                                        (886)-919-995-972
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FiLink size={24} />
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold">Social</h3>
                                    <div className="flex gap-4 items-center">
                                        <a href="https://github.com/ericfei0521" target="_blank">
                                            <FaGithub size={24} className="hover:text-blue-300" />
                                        </a>
                                        <a href="https://linkedin.com/in/eric-fei" target="_blank">
                                            <FaLinkedin size={24} className="hover:text-blue-300" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-white/80">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-mint transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-white/80">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-mint transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-white/80">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-mint transition-colors"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-mint hover:bg-white text-dark font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
