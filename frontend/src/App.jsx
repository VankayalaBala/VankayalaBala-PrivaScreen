import { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [redactedText, setRedactedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRedact = async () => {
    if (!inputText) return;
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/redact', {
        text: inputText
      });
      setRedactedText(response.data.redacted_text);
    } catch (error) {
      console.error("Error redacting text:", error);
      setRedactedText("Error processing text. Ensure backend is running.");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>PrivaScreen: AI Data Anonymizer</h1>
      <p>Paste text containing sensitive info (names, emails, phones) below:</p>
      
      <textarea 
        rows="6" 
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="e.g., Contact John Doe at john.doe@email.com or 555-123-4567."
      />
      
      <button 
        onClick={handleRedact} 
        disabled={loading}
        style={{ margin: '10px 0', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        {loading ? 'Scanning...' : 'Redact PII'}
      </button>

      {redactedText && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', border: '1px solid #ddd', borderRadius: '4px' }}>
          <h3>Redacted Output:</h3>
          <p>{redactedText}</p>
        </div>
      )}
    </div>
  );
}

export default App;