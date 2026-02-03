import React from 'react';
import virtualWorkSimulationsData from '../data/virtual-work-simulations.md';

const VirtualWorkSimulations = () => {
    return (
        <section id="virtual-work-simulations">
            <h2>Virtual Work Simulations</h2>
            <div dangerouslySetInnerHTML={{ __html: virtualWorkSimulationsData }} />
        </section>
    );
};

export default VirtualWorkSimulations;