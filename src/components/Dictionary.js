<<<<<<< HEAD
import React, { useState, useRef } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 5c82e76e8ad50cc288a177719fe1336954456c87
import './Dictionary.css';

const Dictionary = () => {
  const [word, setWord] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
<<<<<<< HEAD
  const [loading, setLoading] = useState(false);
  const audioRef = useRef(null);

  const fetchWord = async () => {
    if (!word.trim()) return;
    setError('');
    setResult(null);
    setLoading(true);

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.trim()}`);
      if (!res.ok) throw new Error('Word not found. Please check the spelling.');
=======

  const fetchWord = async () => {
    if (!word) return;
    setError('');
    setResult(null);

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!res.ok) throw new Error('Word not found');
>>>>>>> 5c82e76e8ad50cc288a177719fe1336954456c87
      const data = await res.json();
      setResult(data[0]);
    } catch (err) {
      setError(err.message);
<<<<<<< HEAD
    } finally {
      setLoading(false);
    }
  };

  const audioUrl = result?.phonetics?.find(p => p.audio)?.audio;

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
=======
>>>>>>> 5c82e76e8ad50cc288a177719fe1336954456c87
    }
  };

  return (
<<<<<<< HEAD
    <div className="dictionary-page">
      {/* Search */}
      <div className="search-section">
        <h1 className="search-heading">Look up a <span>Word</span></h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type any English word…"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchWord()}
          />
          <button className="search-btn" onClick={fetchWord} disabled={loading}>
            {loading ? '…' : '🔍 Search'}
          </button>
        </div>
        {error && <div className="dict-error">⚠️ {error}</div>}
      </div>

      {/* Result */}
      {result && (
        <div className="result-card">
          {/* Word Header */}
          <div className="word-header">
            <div>
              <div className="word-title">{result.word}</div>
              {result.phonetics?.find(p => p.text) && (
                <div className="word-phonetic">
                  {result.phonetics.find(p => p.text).text}
                </div>
              )}
            </div>
            {audioUrl && (
              <>
                <audio ref={audioRef} src={audioUrl} />
                <button className="audio-btn" onClick={playAudio}>
                  🔊 Listen
                </button>
              </>
            )}
          </div>

          <div className="result-divider" />

          {/* Meanings */}
          {result.meanings.map((meaning, idx) => (
            <div className="meaning-block" key={idx}>
              <div className="part-of-speech">
                <span className="pos-tag">{meaning.partOfSpeech}</span>
                <span className="pos-line" />
              </div>

              <ul className="definitions-list">
                {meaning.definitions.slice(0, 4).map((def, i) => (
                  <li className="definition-item" key={i}>
                    <span className="def-num">{i + 1}</span>
                    <div className="def-body">
                      <div className="def-text">{def.definition}</div>
                      {def.example && (
                        <div className="def-example">"{def.example}"</div>
                      )}
                      {def.synonyms?.length > 0 && (
                        <div className="def-synonyms">
                          <span className="syn-label">Synonyms:</span>
                          {def.synonyms.slice(0, 5).map((s, si) => (
                            <span
                              className="syn-tag"
                              key={si}
                              onClick={() => { setWord(s); }}
                              style={{ cursor: 'pointer' }}
                              title={`Search "${s}"`}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
=======
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
>>>>>>> 5c82e76e8ad50cc288a177719fe1336954456c87
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

<<<<<<< HEAD
export default Dictionary;
=======
export default Dictionary;
>>>>>>> 5c82e76e8ad50cc288a177719fe1336954456c87
