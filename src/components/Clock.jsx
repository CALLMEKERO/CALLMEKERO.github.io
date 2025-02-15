import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed bottom-0 right-0 m-4 text-white">
            {time.toLocaleTimeString()}
        </div>
    );
}

export default Clock;
