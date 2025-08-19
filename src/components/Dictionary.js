import React, { useState } from 'react';
import './Dictionary.css';

const Dictionary = () => {
  const [word, setWord] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const fetchWord = async () => {
    if (!word) return;
    setError('');
    setResult(null);

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!res.ok) throw new Error('Word not found');
      const data = await res.json();
      setResult(data[0]);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="dictionary-container">
      <input
        type="text"
        placeholder="Search a word..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && fetchWord()}
      />
      <button onClick={fetchWord}>Search</button>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

      {result && (
        <div className="result">
          <h2>{result.word}</h2>
          {result.phonetics[0]?.text && <p>Phonetic: {result.phonetics[0].text}</p>}
          {result.phonetics[0]?.audio && (
            <audio controls src={result.phonetics[0].audio}>
              Your browser does not support audio
            </audio>
          )}

          {result.meanings.map((meaning, index) => (
            <div className="meaning" key={index}>
              <h4>Part of Speech: {meaning.partOfSpeech}</h4>
              <ul>
                {meaning.definitions.map((def, i) => (
                  <li key={i}>
                    <strong>Definition:</strong> {def.definition}
                    {def.synonyms && def.synonyms.length > 0 && (
                      <div>
                        <strong>Synonyms:</strong> {def.synonyms.join(', ')}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dictionary;
