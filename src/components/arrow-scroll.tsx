"use client"
import { useState, useEffect } from 'react';



export const ArrowScroll = () => {

    const [showArrow, setShowArrow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const windowHeight = window.innerHeight;
            setShowArrow(scrolled < windowHeight * 0.10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <>
            {showArrow && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        cursor: 'pointer',
                    }}
                    onClick={handleScroll}
                >
                    <div className="flex items-center justify-center h-16">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white animate-bounce"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            )}
        </>
    )
}
