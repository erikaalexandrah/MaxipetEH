import React from 'react';

const LocationIcon = (props) => {
  const color = props.color;
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path d="M6.99993 7.83421C8.00509 7.83421 8.81993 7.01937 8.81993 6.01421C8.81993 5.00906 8.00509 4.19421 6.99993 4.19421C5.99477 4.19421 5.17993 5.00906 5.17993 6.01421C5.17993 7.01937 5.99477 7.83421 6.99993 7.83421Z"
          stroke={color}
          strokeWidth="0.5"
        />

        <path d="M2.11158 4.95249C3.26074 -0.0991754 10.7449 -0.093342 11.8882 4.95832C12.559 7.92166 10.7157 10.43 9.09986 11.9817C7.92737 13.1133 6.07238 13.1133 4.89406 11.9817C3.28407 10.43 1.44075 7.91582 2.11158 4.95249Z"
          stroke={color}
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
};

export default LocationIcon;
