export default function Button({ text, onClick, type = "button", className = "" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-6 py-2 rounded-full cursor-pointer
            bg-(--primary-color) text-white 
            hover:bg-(--secondary-color) hover:text-white
            transition-all duration-300 ${className}`}
        >
            {text}
        </button>
    );
}