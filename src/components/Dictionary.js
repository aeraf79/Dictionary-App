import React, { useState, useRef } from 'react';
import './Dictionary.css';

const Dictionary = () => {
  const [word, setWord] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
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
      const data = await res.json();
      setResult(data[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const audioUrl = result?.phonetics?.find(p => p.audio)?.audio;

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
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