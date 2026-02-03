import React from 'react';
import certificationsData from '../data/certifications.md';

const Certifications = () => {
    return (
        <section id="certifications">
            <h2>Certifications</h2>
            <div dangerouslySetInnerHTML={{ __html: certificationsData }} />
        </section>
    );
};

export default Certifications;