import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'Concentrix',
            role: 'Research Analyst Intern',
            location: 'Bengaluru, India',
            period: 'Jul 2025 – Sep 2025',
            description: [
                'Conducted data-driven analysis on customer behavior and service usage patterns for a major OTT and sports streaming platform, providing insights that improved user engagement by 15%.',
                'Assisted over 50+ customers weekly with service management queries (cancellations, refunds, account modifications), maintaining a 98% compliance rate with company policies.',
                'Collaborated with team leads to monitor customer retention and acquisition metrics, delivering recommendations that drove a 10% increase in retention and 7% growth in new sign-ups.'
            ]
        },
        {
            company: 'STEM Club, Presidency University',
            role: 'President',
            location: 'Bengaluru, India',
            period: 'Apr 2025 – Present',
            description: [
                'Led a team of 5+ members to design and deploy 3+ interactive STEM learning tools, benefiting 200+ students in government schools.',
                'Managed a team of 20+ members ensuring timely delivery of club projects and events.'
            ]
        }
    ];

    return (
        <section className="section experience" id="experience">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '4rem' }}
                >
                    Work Experience
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            style={{ padding: '2rem', borderLeft: '4px solid var(--accent-color)' }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ scale: 1.01, backgroundColor: 'rgba(255,255,255,0.08)' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>{exp.role}</h3>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-color)' }}>{exp.company}</h4>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ color: '#94a3b8', fontWeight: '500' }}>{exp.period}</p>
                                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{exp.location}</p>
                                </div>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {exp.description.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.8rem', color: '#cbd5e1', display: 'flex', alignItems: 'start' }}>
                                        <span style={{ color: 'var(--accent-color)', marginRight: '10px', marginTop: '5px' }}>▹</span>
                                        <span style={{ lineHeight: '1.6' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
