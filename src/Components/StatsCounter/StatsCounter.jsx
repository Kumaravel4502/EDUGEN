import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useCounter from '../../hooks/useCounter';

const StatsCounter = ({
    value,
    label,
    start = 0,
    duration = 2000,
    easingFn = 'easeOutQuad',
    onComplete
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const count = useCounter({
        start: isVisible ? start : start,
        end: isVisible ? value : start,
        duration,
        easingFn
    });

    useEffect(() => {
        // Start animation when component is mounted
        setIsVisible(true);
    }, []);

    useEffect(() => {
        // Call onComplete when count reaches the target value
        if (count === value && onComplete) {
            onComplete();
        }
    }, [count, value, onComplete]);

    return (
        <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{count}+</div>
            <div className="text-sm text-gray-600">{label}</div>
        </div>
    );
};

StatsCounter.propTypes = {
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    start: PropTypes.number,
    duration: PropTypes.number,
    easingFn: PropTypes.oneOf(['linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad']),
    onComplete: PropTypes.func
};

export default StatsCounter; 