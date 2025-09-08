interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = ({ className = "", ...props }) => (
  <textarea
    className={`resize-none overflow-hidden break-words border border-[rgb(66,67,254)] rounded-lg px-3 py-2 min-h-[70px] 
      bg-[#f8f9ff] text-[rgb(66,67,254)] font-medium outline-none focus:ring-2 
      focus:ring-[rgb(66,67,254)] transition-all ${className}`}
    style={{ fontFamily: 'Inter, Arial, sans-serif' }}
    {...props}
  />
);
