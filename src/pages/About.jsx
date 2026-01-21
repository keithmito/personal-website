import { motion } from 'framer-motion';
import { BookOpen, Award, Cog, Users, Briefcase } from 'lucide-react';

const About = () => {
    const skills = [
        "Network Infrastructure Design", "TCP/IP Protocols & Routing", "Network Security",
        "Proxmox (Type-1 Hypervisors)", "Windows Server Admin", "Linux System Management",
        "Bash Scripting", "SQL Database Management", "React.js & Tailwind CSS", "Process Automation"
    ];

    const education = [
        {
            degree: "Master of Science in Information Technology",
            school: "Strathmore University",
            year: "2024 - Present"
        },
        {
            degree: "Bachelor of Science in Information Technology",
            school: "The Cooperative University of Kenya",
            year: "2019 - 2023",
            // note: "Second Class Upper"
        },
        {
            degree: "Kenya Certificate of Secondary Education (KCSE)",
            school: "Starehe Boys Centre and School",
            year: "2015 - 2018",
            // note: "Grade: B-"
        }
    ];

    return (
        <div className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-16">
                    <h1 className="text-4xl font-bold mb-4">About Me</h1>
                    <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
                        Driven by a passion for technology and innovation, I am dedicated to leveraging my IT skills to create impactful solutions and foster growth.
                        I aim to secure a role where I can apply my expertise in <span className="text-primary">networking, systems administration, and cybersecurity</span> to
                        drive organizational efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Skills Section */}
                    <div className="glass-card p-8">
                        <div className="flex items-center mb-6">
                            <Cog className="w-6 h-6 text-primary mr-3" />
                            <h2 className="text-2xl font-bold">Technical Skills</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span key={index} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:border-primary/50 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="glass-card p-8">
                        <div className="flex items-center mb-6">
                            <BookOpen className="w-6 h-6 text-secondary mr-3" />
                            <h2 className="text-2xl font-bold">Education</h2>
                        </div>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div key={index} className="relative pl-6 border-l-2 border-white/10 last:pb-0">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark border-2 border-secondary"></div>
                                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                                    <p className="text-primary text-sm mb-1">{edu.school}</p>
                                    <p className="text-gray-500 text-sm">{edu.year}</p>
                                    {edu.note && <p className="text-gray-400 text-sm mt-1 italic">{edu.note}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Certifications */}
                    <div className="glass-card p-8">
                        <div className="flex items-center mb-6">
                            <Award className="w-6 h-6 text-yellow-500 mr-3" />
                            <h2 className="text-2xl font-bold">Certifications</h2>
                        </div>
                        <div className="border border-white/10 p-4 rounded-lg bg-white/5">
                            <h3 className="font-bold">Cisco Certified Network Associate (CCNA)</h3>
                            <p className="text-gray-400 text-sm">CISCO Certified</p>
                            <p className="text-xs text-gray-500 mt-2 font-mono">Verification: 5f96f1c991f844f68e18c0428f99f8db</p>
                        </div>
                    </div>

                    {/* Leadership */}
                    <div className="glass-card p-8">
                        <div className="flex items-center mb-6">
                            <Users className="w-6 h-6 text-purple-500 mr-3" />
                            <h2 className="text-2xl font-bold">Leadership</h2>
                        </div>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                                Lead Technician at Sleeper Builds (2024)
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                                Chairperson at Valuraha Investment Club (2018)
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                                Chairperson at Techub Club (2018)
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="glass-card p-8 mt-16">
                    <div className="flex items-center mb-8">
                        <Briefcase className="w-6 h-6 text-green-500 mr-3" />
                        <h2 className="text-2xl font-bold">Professional Experience</h2>
                    </div>
                    <div className="space-y-12">
                        {[
                            {
                                role: "Credit Assistant",
                                company: "MWALIMU NATIONAL DT SACCO",
                                period: "Sep 2025 - Present",
                                location: "Kisii, Kisii County, Kenya",
                                description: "Full-time role."
                            },
                            {
                                role: "Co-Founder/ Lead Technician",
                                company: "Power Computing Systems",
                                period: "Feb 2024 - Present",
                                location: "Self-employed",
                                description: "Driving technical solutions and business operations."
                            },
                            {
                                role: "Information Technology Officer",
                                company: "Chosen Generation Sacco",
                                period: "Dec 2023 - Jun 2024",
                                location: "Kiserian, Kajiado County, Kenya",
                                description: "Managed IT infrastructure and support."
                            },
                            {
                                role: "Student Intern",
                                company: "Spire Bank Kenya",
                                period: "Jun 2022 - Sep 2022",
                                location: "Nairobi County, Kenya",
                                description: "Help Desk Support, IT and related skills."
                            },
                            {
                                role: "Volunteer",
                                company: "Community Service", // Placeholder
                                period: "Apr 2017 & Aug 2017",
                                location: "Kenya",
                                description: "Volunteered during April and August of 2017."
                            }
                        ].map((job, index) => (
                            <div key={index} className="relative pl-8 border-l-2 border-white/10 last:border-0">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark border-2 border-green-500"></div>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                                    <span className="text-sm text-green-400 font-mono bg-green-500/10 px-2 py-1 rounded">{job.period}</span>
                                </div>
                                <p className="text-lg text-gray-300 mb-1">{job.company}</p>
                                <p className="text-sm text-gray-500 mb-2">{job.location}</p>
                                <p className="text-gray-400 leading-relaxed">{job.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default About;
