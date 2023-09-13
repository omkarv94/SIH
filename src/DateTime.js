import React, { useState, useEffect } from 'react';
import "./DateTime.css";

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Update the current time every second
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Format the current time to the desired format
    const formattedTime = currentTime.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
    });

    return (
        <div>
            <p className='dateTime'>{formattedTime}</p>
        </div>
    );
}

export default Clock;
