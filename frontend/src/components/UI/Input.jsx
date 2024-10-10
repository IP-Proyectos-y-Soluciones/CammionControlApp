import React from 'react';

export const Input = React.forwardRef((props, ref) => {
  return (
    <input
      className="bg-gray-200 text-gray-900 border border-gray-400 px-4 py-2 rounded-md my-3 mt-1 mb-3"
      style={{width: 'calc(100% + 2px)' }}
      ref={ref}
      {...props}
    />
  );
});
