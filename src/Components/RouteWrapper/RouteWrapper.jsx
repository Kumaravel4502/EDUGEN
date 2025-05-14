import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const RouteWrapper = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [contentReady, setContentReady] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        setContentReady(false);

        // Simulate loading time for route changes
        const timer = setTimeout(() => {
            setIsLoading(false);

            // Add a small delay before showing content
            setTimeout(() => {
                setContentReady(true);
            }, 100);
        }, 1000); // Route transition duration

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            <LoadingScreen
                isLoading={isLoading}
                onLoadingComplete={() => console.log('Route transition complete')}
            />
            <div className={`transition-all duration-500 ${contentReady ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} rounded-xl overflow-hidden`}>
                {children}
            </div>
        </>
    );
};

RouteWrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default RouteWrapper; 