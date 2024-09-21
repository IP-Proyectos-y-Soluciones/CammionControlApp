export function Button({ className = '', children, ...props }) {
    return (
        <button
            className={`rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-bold leading-6 text-red-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
