import React from 'react';
import projectsData from '../data/major-projects.md';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Major Projects</h2>
            <div className="projects-list">
                {projectsData.split('\n').map((project, index) => (
                    <div key={index} className="project-item">
                        <p>{project}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;