import React from 'react';
import skillsData from '../data/skills.md';

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-content">
                <div dangerouslySetInnerHTML={{ __html: skillsData }} />
            </div>
        </section>
    );
};

export default Skills;