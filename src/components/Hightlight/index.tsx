import React from 'react';

export default function Highlight({children, color}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.5em',
        boxSizing:'border-box',
        margin: '0.4em'
      }}>
      {children}
    </span>
  );
}