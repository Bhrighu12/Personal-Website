import React from 'react';
import { motion } from 'framer-motion';

const Certificates = () => {
    const certificates = [
        { name: 'Java Programming', issuer: 'IBM Coursera', date: '2025', pdf: '/certificates/placeholder.pdf' },
        { name: 'Introduction to AIML', issuer: 'NPTEL', date: '2024', pdf: '/certificates/placeholder.pdf' },
        { name: 'Introduction to Software Engineering', issuer: 'IBM Coursera', date: '2025', pdf: '/certificates/placeholder.pdf' },
        { name: 'Node.js Bootcamp', issuer: 'Coursera', date: '2024', pdf: '/certificates/placeholder.pdf' },
        { name: 'Full Stack Web Dev', issuer: 'FreeCodeCamp', date: '2022', pdf: '/certificates/placeholder.pdf' },
        { name: 'Python for Data Science', issuer: 'EdX', date: '2023', pdf: '/certificates/placeholder.pdf' },
        { name: 'AWS Cloud Practitioner', issuer: 'AWS', date: '2024', pdf: '/certificates/placeholder.pdf' },
        { name: 'Docker & Kubernetes', issuer: 'Udemy', date: '2024', pdf: '/certificates/placeholder.pdf' },
        { name: 'Agile Methodologies', issuer: 'LinkedIn Learning', date: '2023', pdf: '/certificates/placeholder.pdf' },
        { name: 'Cyber Security Basics', issuer: 'Google', date: '2022', pdf: '/certificates/placeholder.pdf' }
    ];

    const achievements = [
        { name: '3x Hackathon Winner', event: 'Various Competitions', date: '2023-2024' },
        { name: 'Best Technology Project', event: 'Innovative Expo 2023', date: '2023' },
        { name: '4th Place in Pitchathon', event: 'Pitchathon Event', date: '2024' },
        { name: 'Open Source Contributor', event: 'GitHub', date: '2023' },
        { name: '5 Star Coder', event: 'HackerRank', date: '2022' },
        { name: 'LeetCode Knight Badge', event: 'LeetCode', date: '2024' },
        { name: 'Dean\'s List', event: 'Presidency University', date: '2024' },
        { name: 'Tech Club President', event: 'STEM Club', date: '2025' },
        { name: 'Published Technical Article', event: 'Medium', date: '2023' },
        { name: 'Volunteer of the Year', event: 'Community Service', date: '2022' }
    ];

    const ListColumn = ({ title, items, type }) => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem', color: type === 'cert' ? 'var(--accent-color)' : 'var(--secondary-color)' }}>{title}</h3>
            <div
                className="custom-scroll"
                style={{
                    flex: 1,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    paddingRight: '1rem',
                    maxHeight: '500px', // Fixed height for inner scroll
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="glass-panel"
                        style={{ padding: '1.5rem', borderLeft: `4px solid ${type === 'cert' ? 'var(--accent-color)' : 'var(--secondary-color)'}` }}
                        initial={{ opacity: 0, x: type === 'cert' ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
                            <h4 style={{ fontSize: '1.1rem', margin: 0, color: '#fff' }}>{item.name}</h4>
                            {item.pdf && (
                                <a
                                    href={item.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--accent-color)',
                                        textDecoration: 'none',
                                        border: '1px solid var(--accent-color)',
                                        padding: '2px 8px',
                                        borderRadius: '4px',
                                        marginLeft: '10px',
                                        whiteSpace: 'nowrap',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = 'var(--accent-color)';
                                        e.target.style.color = '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.color = 'var(--accent-color)';
                                    }}
                                >
                                    View
                                </a>
                            )}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#94a3b8' }}>
                            <span>{item.issuer || item.event}</span>
                            <span>{item.date}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="section certificates" id="certificates">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '4rem' }}
                >
                    Certifications & Achievements
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    <ListColumn title="Certifications" items={certificates} type="cert" />
                    <ListColumn title="Achievements" items={achievements} type="achieve" />
                </div>
            </div>
        </section>
    );
};

export default Certificates;
