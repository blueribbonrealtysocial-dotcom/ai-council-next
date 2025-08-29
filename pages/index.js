export default function Home() {
  return <h1>Hello, Tracy 👋</h1>;
}import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [brain, setBrain] = useState('lacey');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse('Thinking...');

    const res = await fetch(`/api/${brain}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setResponse(data.answer || 'No response received.');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Ask & Route</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Your question:
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{ width: '100%', marginTop: '0.5rem', marginBottom: '1rem' }}
          />
        </label>
        <div style={{ marginBottom: '1rem' }}>
          <label>Select brain: </label>
          <select value={brain} onChange={(e) => setBrain(e.target.value)}>
            <option value="lacey">Lacey</option>
            <option value="lt">LT</option>
            <option value="radar">Radar</option>
          </select>
        </div>
        <button type="submit">Ask</button>
      </form>
      <div style={{ marginTop: '2rem', background: '#f4f4f4', padding: '1rem' }}>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}