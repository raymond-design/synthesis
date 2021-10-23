import React from 'react';

const Osc1 = ({changeFreq, freq}) => {
  return (
    <div>
      <input value={freq} onChange={changeFreq} max='8000' type="range" id="frequency"/>
    </div>
  )
}

export default Osc1