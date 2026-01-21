import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    // REPLACE "YOUR_FORM_ID" WITH YOUR ACTUAL FORMSPREE ID
    // OR BETTER YET, USE IMPORT.META.ENV.VITE_FORMSPREE_ID
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID || "YOUR_FORM_ID");

    if (state.succeeded) {
        return (
            <div className="section-container min-h-[60vh] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card p-12 text-center max-w-lg mx-auto"
                >
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                    <p className="text-gray-300 mb-6">
                        Thanks for reaching out! I'll get back to you as soon as possible.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="btn-outline text-sm"
                    >
                        Send Another Message
                    </button>
                </motion.div>
            </div>
        );
    }

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

                    {/* Functional Form */}
                    <div className="glass-card p-8">
                        <h3 className="text-xl font-bold mb-6">Send me a message</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                                    placeholder="John Doe"
                                    required
                                />
                                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                                    placeholder="john@example.com"
                                    required
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                                    placeholder="Hello..."
                                    required
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full btn-primary flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {state.submitting ? 'Sending...' : 'Send Message'}
                                {!state.submitting && <Send className="ml-2 w-4 h-4" />}
                            </button>
                            {state.errors && <p className="text-red-500 text-sm text-center mt-2">Something went wrong. Please try again.</p>}
                        </form>
                    </div>

                </div>

            </motion.div>
        </div>
    );
};

export default Contact;
