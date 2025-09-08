interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => (
  <input
    className={`border border-[rgb(66,67,254)] rounded-lg px-3 py-2 bg-[#f8f9ff] 
      text-[rgb(66,67,254)] font-medium focus:ring-2 focus:ring-[rgb(66,67,254)] 
      outline-none transition-all ${className}`}
    style={{ fontFamily: 'Inter, Arial, sans-serif' }}
    {...props}
  />
);
