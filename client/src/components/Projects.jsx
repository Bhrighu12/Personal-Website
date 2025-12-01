import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Arduino Based Robotic Nurse',
            description: 'Engineered a sensor-driven robotic system to transmit patient vitals via IoT, enhancing hospital workflow efficiency by 25%. Won Best Technology Project award at 2023 Innovative Expo.',
            tags: ['IoT', 'Sensors', 'Robotics'],
            link: 'https://github.com/Bhrighu12' // Placeholder if specific link not provided
        },
        {
            title: 'Health Coach Platform',
            description: 'Developed a MERN stack web platform guiding 100+ users on personalized fitness journeys. Secured 3rd Prize in a software hackathon among 15 competitive teams.',
            tags: ['MERN Stack', 'React', 'Node.js'],
            link: 'https://github.com/Bhrighu12'
        },
        {
            title: 'Gamified Platform for Children’s Rights',
            description: 'Designed an LMS-style platform with animated videos and gamified quizzes to educate 500+ children on legal rights. Ranked in Top 30 out of 500 projects at Project Expo 2024.',
            tags: ['Web Dev', 'Animation', 'Gamification'],
            link: 'https://github.com/Bhrighu12'
        }
    ];

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Featured Projects
                </motion.h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                        >
                            <div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{project.title}</h3>
                                <p style={{ marginBottom: '1.5rem', color: '#94a3b8', lineHeight: '1.6' }}>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '15px', color: '#cbd5e1' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    padding: '0.8rem 1.5rem',
                                    border: '1px solid var(--primary-color)',
                                    borderRadius: '8px',
                                    color: 'var(--primary-color)',
                                    textAlign: 'center',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.background = 'var(--primary-color)';
                                    e.target.style.color = '#fff';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = 'var(--primary-color)';
                                }}
                            >
                                View Project
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
