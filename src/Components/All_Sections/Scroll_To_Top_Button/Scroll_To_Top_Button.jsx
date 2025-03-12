import React, { useState, useEffect } from 'react';

const Scroll_To_Top_Button = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down 200px
    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top with smooth behavior
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    style={{
                        zIndex: 1000,
                        position: 'fixed',
                        bottom: '120px',
                        right: '40px',
                        background: '#25D366',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        fontSize: '20px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default Scroll_To_Top_Button;