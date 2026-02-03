import React from 'react';
import workExperienceData from '../data/work-experience.md';

const WorkExperience = () => {
    return (
        <section id="work-experience">
            <h2>Work Experience</h2>
            <div dangerouslySetInnerHTML={{ __html: workExperienceData }} />
        </section>
    );
};

export default WorkExperience;