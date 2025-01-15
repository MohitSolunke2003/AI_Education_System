import React, { useState } from 'react';

function EmotionAssessment() {
    const [responses, setResponses] = useState([]);
    const [result, setResult] = useState(null);

    const handleSubmit = async () => {
        const res = await fetch('http://localhost:5000/analyze_emotion', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ responses }),
        });
        const data = await res.json();
        setResult(data);
    };

    return (
        <div>
            <h1>Emotional Well-Being Assessment</h1>
            <button onClick={handleSubmit}>Analyze</button>
            {result && <p>{JSON.stringify(result)}</p>}
        </div>
    );
}

export default EmotionAssessment;
