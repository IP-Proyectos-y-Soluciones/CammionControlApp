import React from 'react';

export function Label({ children, ...props }) {
  return (
    <label
      className="text-sm font-semibold mt-2 text-gray-700"
      {...props}
    >
      {children}
    </label>
  );
}
