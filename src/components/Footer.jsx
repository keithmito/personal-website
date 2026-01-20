import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-dark py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Hillary Keith Mito. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 sm:mt-0">
                    <a href="https://github.com/keithmito" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/hillary-keith-mito/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:hillarymito@gmail.com" className="hover:text-primary transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
