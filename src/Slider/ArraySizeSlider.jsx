import React from 'react';
import './ArraySizeSlider.css';

function ArraySizeSlider({ value, onChange }) {
    const handleChange = (e) => {
        onChange(parseInt(e.target.value, 10));
    };

    return (
        <div className='slider-container'>
            <input 
                className='slider'
                type="range" 
                min="50" 
                max="500" 
                step="1" 
                value={value} 
                onChange={handleChange} 
            />
        </div>
    );
}

export default ArraySizeSlider;
