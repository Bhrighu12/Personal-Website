import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = ['Java', 'Python', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'JavaScript', 'HTML/CSS', 'Git'];

    return (
        <section className="section about" id="about">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>
                <motion.div
                    className="glass-panel"
                    style={{ padding: '3rem' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2.5rem', color: '#cbd5e1' }}>
                        I am an aspiring Computer Science Engineering student at Presidency University, Bengaluru (Expected 2026) with a CGPA of 9.17.
                        I have hands-on experience in Java, Python, and the MERN stack, with a proven track record of winning multiple hackathons.
                        I am passionate about delivering innovative projects and seeking a Software Engineering role to apply my technical expertise.
                    </p>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#fff' }}>Education</h3>
                        <div>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>Bachelor of Technology in Computer Science Engineering</h4>
                            <p style={{ color: '#94a3b8' }}>Presidency University Bengaluru, India | Expected July 2026</p>
                            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>CGPA: 9.17</p>
                        </div>
                    </div>

                    <h3 style={{ marginBottom: '1.5rem', color: '#fff' }}>Technical Skills</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index, duration: 0.4 }}
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                                style={{
                                    padding: '0.6rem 1.2rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '50px',
                                    fontSize: '0.95rem',
                                    border: '1px solid var(--glass-border)',
                                    cursor: 'default',
                                    transition: 'background-color 0.3s'
                                }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
