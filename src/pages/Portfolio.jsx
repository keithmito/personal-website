import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            title: "Sleeper Builds",
            role: "Lead Technician (2024)",
            description: "Led technical aspects of building high-performance PCs in unassuming, vintage cases. Focused on airflow, component compatibility, and aesthetics within constraints.",
            tags: ["Hardware", "Cooling Optimization", "OS Configuration", "Performance Tuning"],
            links: []
        },
        {
            title: "Network Design Capstone",
            role: "Network Engineer",
            description: "Designed and simulated a robust network infrastructure for a 250-user enterprise. Implemented VLANs, OSPF routing, ACLs for security, and HSRP/VRRP redundancy using Cisco Packet Tracer.",
            tags: ["Cisco Packet Tracer", "OSPF", "VLANs", "Network Security"],
            links: []
        },
        {
            title: "Personal Portfolio v1",
            role: "Web Developer",
            description: "A dynamic personal portfolio built with modern web technologies featuring smooth animations. Showcases skills, projects, and experience.",
            tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
            links: [
                { label: "Live Demo", url: "https://hillarymito.vercel.app/portfolio", icon: <ExternalLink size={16} /> },
                { label: "View Code", url: "https://hillarymito.vercel.app/portfolio", icon: <Github size={16} /> }
            ]
        }
    ];

    return (
        <div className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
                    <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
                    <p className="text-lg text-gray-300">
                        A selection of projects that demonstrate my skills and passion for technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="glass-card flex flex-col overflow-hidden h-full"
                        >
                            <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-white/5 rounded-lg">
                                        <Folder className="w-6 h-6 text-primary" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                                <p className="text-xs text-primary mb-4 font-mono">{project.role}</p>

                                <p className="text-gray-400 text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center space-x-4 mt-auto">
                                    {project.links.map((link, lIdx) => (
                                        <a
                                            key={lIdx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.icon}
                                            <span className="ml-1">{link.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </div>
    );
};

export default Portfolio;
