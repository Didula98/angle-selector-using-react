import React, { useState } from 'react';

function AngleSelector() {
    const [angleDegrees, setAngleDegrees] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);

   // Handler for changes in the input box
    const handleInputChange = (e) => {
      let value = parseInt(e.target.value) || 0;
      if (value < 0) value = 0;
      if (value > 360) value = 360;
      setAngleDegrees(value);
      setSliderValue(value - 180);
    };

    // Handler for changes in the slider
    const handleSliderChange = (e) => {
      setAngleDegrees(parseInt(e.target.value) + 180);
      setSliderValue(parseInt(e.target.value));
    };

    // Handler for changes in the radio buttons
    const handleRadioChange = (e) => {
      setAngleDegrees(parseInt(e.target.value));
      setSliderValue(parseInt(e.target.value) - 180);
    };

  return (
    <div>
      <input type="number" value={angleDegrees} onChange={handleInputChange} min="0" max="360" />
      <input type="range" min="-180" max="180" value={sliderValue} onChange={handleSliderChange} />

      <div>
        <input type="radio" name="angle" value="0" checked={angleDegrees === 0} onChange={handleRadioChange} /> 0
        <input type="radio" name="angle" value="45" checked={angleDegrees === 45} onChange={handleRadioChange} /> 45
        <input type="radio" name="angle" value="60" checked={angleDegrees === 60} onChange={handleRadioChange} /> 60
        <input type="radio" name="angle" value="90" checked={angleDegrees === 90} onChange={handleRadioChange} /> 90
        <input type="radio" name="angle" value="180" checked={angleDegrees === 180} onChange={handleRadioChange} /> 180
      </div>
    </div>
  );
}

export default AngleSelector;
