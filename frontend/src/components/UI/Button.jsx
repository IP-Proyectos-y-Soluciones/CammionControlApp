export function Button({
    className = '',
    children,
    ...props
  }) {
    return (
      <button
        className={`relative rounded-full border-2 border-red-700 text-red-700 w-48 mb-2 hover:bg-red-600 hover:text-white hover:border-red-600 flex items-center justify-center 
          px-3 py-1.5 text-sm font-bold leading-6 shadow-sm 
          focus-visible:outline focus-visible:outline-2 
          focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  