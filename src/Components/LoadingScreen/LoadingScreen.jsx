import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LoadingScreen = ({ isLoading, onLoadingComplete }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (isLoading) {
            const duration = 2000;

            // Simply set a timeout to fade out after duration
            const timer = setTimeout(() => {
                setFadeOut(true);
                setTimeout(() => {
                    if (onLoadingComplete) {
                        onLoadingComplete();
                    }
                }, 500);
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [isLoading, onLoadingComplete]);

    if (!isLoading && !fadeOut) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-all duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
            <div className="w-[90%] max-w-md flex flex-col items-center">
                <div className="relative mb-8 w-48 h-48 flex items-center justify-center">
                    {/* Circular background with border */}
                    <div className="absolute inset-0 rounded-full border-2 border-gray-100 bg-white shadow-lg"></div>

                    {/* Animated spinner around circle */}
                    <div className="absolute inset-0 rounded-full">
                        <div className="absolute inset-0 border-4 border-transparent border-t-[#8A47CB] rounded-full animate-spin"></div>
                    </div>

                    {/* Animated circles */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 border-2 border-[#8A47CB] rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"
                            style={{ opacity: 0.2 }} />
                        <div className="absolute inset-0 border-2 border-[#8A47CB] rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_500ms]"
                            style={{ opacity: 0.3 }} />
                    </div>

                    {/* Logo in center */}
                    <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden flex items-center justify-center bg-white p-3 transform transition-transform duration-700 hover:scale-105">
                        <img
                            src="https://ik.imagekit.io/ixthr16gh/Intern-Work/Logo.png"
                            alt="Logo"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                <div className="mt-5 text-center">
                    <div className="text-gray-600 font-medium text-sm sm:text-base mb-3">
                        Loading your experience
                    </div>
                    <div className="flex gap-2 justify-center items-center h-4">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="w-2 h-2 bg-[#8A47CB] rounded-full"
                                style={{
                                    animation: 'bounce 1s infinite',
                                    animationDelay: `${i * 0.2}s`,
                                    opacity: 0.7 + (i * 0.1)
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

LoadingScreen.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onLoadingComplete: PropTypes.func
};

export default LoadingScreen;