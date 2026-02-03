import React from 'react';
import educationData from '../data/education.md';

const Education = () => {
    return (
        <section id="education">
            <h2>Education</h2>
            <div dangerouslySetInnerHTML={{ __html: educationData }} />
        </section>
    );
};

export default Education;