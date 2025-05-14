/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

// Create the context
const LoadingContext = createContext(null);

// Provider component
export function LoadingProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);

    const value = {
        isLoading,
        showLoader,
        hideLoader
    };

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    );
}

// Custom hook to use the context
export function useLoading() {
    const context = useContext(LoadingContext);
    if (context === null) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
} 