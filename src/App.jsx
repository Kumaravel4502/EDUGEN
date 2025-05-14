import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import NavBar from './Components/NavBar/NavBar';
// Import other components as needed

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading
        // In a real app, you might want to wait for important resources to load
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Show loading screen for 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <LoadingScreen
                isLoading={isLoading}
                onLoadingComplete={() => console.log('Loading complete')}
            />
            <Router>
                <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                    <NavBar />
                    {/* Add your other components and routes here */}
                </div>
            </Router>
        </>
    );
};

export default App; 