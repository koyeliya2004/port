import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Bhumika Tewari. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/bhumika-tewari" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/bhumika-tewari" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://twitter.com/bhumika_tewari" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;