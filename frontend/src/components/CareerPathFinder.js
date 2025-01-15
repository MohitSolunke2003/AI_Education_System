import React, { useState } from 'react';

function CareerPathFinder() {
    const [userData, setUserData] = useState({});
    const [result, setResult] = useState(null);

    const handleSubmit = async () => {
        const res = await fetch('http://localhost:5000/recommend_career', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_data: userData }),
        });
        const data = await res.json();
        setResult(data);
    };

    return (
        <div>
            <h1>Career Path Finder</h1>
            <button onClick={handleSubmit}>Get Recommendations</button>
            {result && <p>{JSON.stringify(result)}</p>}
        </div>
    );
}

export default CareerPathFinder;
