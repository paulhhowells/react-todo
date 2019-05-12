import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.css';

function Toggle ({checked, handleChange, id, width, height, stroke, className, ...props}) {
  return (
    <div className={`Toggle ${className}`} {...props}>
    {checked}
      <svg
        width={width || '32'}
        height={height || '32'}
        viewBox="0 0 32 32"

        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"

        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <circle
          stroke="rgba(0, 0, 0, 0.2)"
          strokeWidth="1"
          cx="16"
          cy="16"
          r="15.5"
        />

        {checked && (<polyline
          stroke={stroke || "rgba(50, 200, 0, 0.9)"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="8,18 14,24 24,10"
        />)}
      </svg>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string
};

export default Toggle;
