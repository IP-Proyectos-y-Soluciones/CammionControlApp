/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export function Label({ children, ...props }) {
    return (
        <label className="text-md font-bold mt-2 text-white" {...props}>
            {children}
        </label>
    );
}
