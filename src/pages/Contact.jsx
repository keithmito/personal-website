import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
                    <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-8"></div>
                    <p className="text-lg text-gray-300">
                        Have a question, a project proposal, or just want to connect? Feel free to reach out!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="glass-card p-6 flex items-center space-x-4">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-400">Email</h3>
                                <a href="mailto:hillarymito@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">
                                    hillarymito@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-6 flex items-center space-x-4">
                            <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-400">Phone</h3>
                                <p className="text-lg font-semibold">
                                    0724172124
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com/keithmito" target="_blank" rel="noopener noreferrer" className="flex-1 glass-card p-6 flex flex-col items-center justify-center hover:bg-white/5 transition-colors group">
                                <Github className="w-8 h-8 text-gray-400 group-hover:text-white mb-2 transition-colors" />
                                <span className="font-medium">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/hillary-keith-mito/" target="_blank" rel="noopener noreferrer" className="flex-1 glass-card p-6 flex flex-col items-center justify-center hover:bg-white/5 transition-colors group">
                                <Linkedin className="w-8 h-8 text-blue-400 group-hover:text-blue-300 mb-2 transition-colors" />
                                <span className="font-medium">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Simple Form (Visual only for now) */}
                    <div className="glass-card p-8">
                        <h3 className="text-xl font-bold mb-6">Send me a message</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                <input type="text" id="name" className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input type="email" id="email" className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                <textarea id="message" rows={4} className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="Hello..." />
                            </div>
                            <button type="submit" className="w-full btn-primary flex justify-center items-center">
                                Send Message <Send className="ml-2 w-4 h-4" />
                            </button>
                        </form>
                    </div>

                </div>

            </motion.div>
        </div>
    );
};

export default Contact;
