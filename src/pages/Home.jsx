import { motion } from 'framer-motion';
import { ArrowRight, Shield, Terminal, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center px-4 relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-30 animate-pulse"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 max-w-3xl"
            >
                <div className="flex justify-center mb-6 space-x-4">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
                    >
                        <Shield className="w-8 h-8 text-primary" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: -10 }}
                        className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
                    >
                        <Terminal className="w-8 h-8 text-secondary" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
                    >
                        <Server className="w-8 h-8 text-purple-500" />
                    </motion.div>
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
                    Hello, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-text-gradient bg-[length:200%_auto]">Hillary Keith Mito</span>
                </h1>

                <h2 className="text-xl sm:text-2xl text-gray-400 mb-8 font-light">
                    Cybersecurity Student & IT Professional
                </h2>

                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                    Passionate about driving <span className="text-primary font-medium">digital transformation</span> through networking, systems administration, and cybersecurity excellence.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/portfolio"
                        className="btn-primary flex items-center group w-full sm:w-auto justify-center"
                    >
                        View Projects
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/about"
                        className="btn-outline w-full sm:w-auto justify-center"
                    >
                        More About Me
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
