import React from 'react';
import professionalSummary from '../data/professional-summary.md';

const ProfessionalSummary = () => {
    return (
        <section id="professional-summary">
            <h2>Professional Summary</h2>
            <div dangerouslySetInnerHTML={{ __html: professionalSummary }} />
        </section>
    );
};

export default ProfessionalSummary;