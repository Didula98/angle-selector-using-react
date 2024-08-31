import React, { useState } from 'react';

const AngleSelector = () => {
  const [angle, setAngle] = useState(180);

  // Update both the angle state and the radio buttons when input changes
  const handleInputChange = (event) => {
    let value = parseInt(event.target.value);
    if (value > 360) {
      value %= 360;
    }
    setAngle(value);
  };

  // Update angle state when slider changes
  const handleSliderChange = (event) => {
    let value = parseInt(event.target.value);
    if (value > 360) {
      value %= 360;
    }
    setAngle(value);
  };

  // Update angle state when a radio button is clicked
  const handleRadioChange = (event) => {
    const value = parseInt(event.target.value);
    setAngle(value);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Angle Selector</h1>
        <div style={styles.controls}>
          <div style={styles.inputRow}>
            <input
              type="number"
              value={angle}
              min="0"
              max="360"
              onChange={handleInputChange}
            />
            <input
              type="range"
              min="0"
              max="360"
              value={angle}
              onChange={handleSliderChange}
            />
          </div>
          <div style={styles.radioRow}>
            <input
              type="radio"
              name="angle"
              value="0"
              checked={angle === 0}
              onChange={handleRadioChange}
            />{' '}
            0
            <input
              type="radio"
              name="angle"
              value="45"
              checked={angle === 45}
              onChange={handleRadioChange}
            />{' '}
            45
            <input
              type="radio"
              name="angle"
              value="60"
              checked={angle === 60}
              onChange={handleRadioChange}
            />{' '}
            60
            <input
              type="radio"
              name="angle"
              value="90"
              checked={angle === 90}
              onChange={handleRadioChange}
            />{' '}
            90
            <input
              type="radio"
              name="angle"
              value="180"
              checked={angle === 180}
              onChange={handleRadioChange}
            />{' '}
            180
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline styles for the component
const styles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
  },
  container: {
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputRow: {
    marginBottom: '15px',
  },
  radioRow: {
    display: 'flex',
    gap: '10px',
  },
};

export default AngleSelector;
