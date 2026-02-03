import React from 'react';
import achievementsData from '../data/achievements.md';

const Achievements = () => {
    return (
        <section id="achievements">
            <h2>Achievements</h2>
            <div dangerouslySetInnerHTML={{ __html: achievementsData }} />
        </section>
    );
};

export default Achievements;