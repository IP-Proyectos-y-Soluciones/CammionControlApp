import React from 'react';

export function Label({ children, ...props }) {
  return (
    <label
      className="text-md font-bold mt-2 text-white"
      {...props}
    >
      {children}
    </label>
  );
}
