type InputFieldProps = {
  label?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'input' | 'textarea' | 'select';
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function InputField({
  label,
  icon,
  placeholder,
  className = '',
  style = {},
  value,
  variant,
  disabled = false,
  type = 'input',
  onChange,
}: InputFieldProps) {
  const baseClasses =
    'transition bg-white border border-[#e2e8f0] rounded-lg px-4 text-[15px] text-[#181c23] placeholder:text-gray-400 focus:outline-none focus:border-[#929ea1]';

  let variantClasses = '';
  if (variant) {
    variantClasses =
      variant === 'primary'
        ? 'bg-white border border-[#ff914d] text-[#181c23] placeholder:text-[#bdbdbd] focus:border-[#929ea1]'
        : 'bg-[#181c23] border border-[#333] text-white placeholder:text-gray-500 focus:ring-[#6366f1]';
  }

  return (
    <>
      {label && (
        <label className="flex text-xs font-medium text-gray-500 mb-1">
          {label}
          <span className="pl-2">{icon}</span>
        </label>
      )}
      {type === 'input' ? (
        <input
          type="text"
          placeholder={placeholder}
          style={{ height: 48, ...style }}
          className={`${baseClasses} ${variantClasses} ${className} ${
            disabled && 'cursor-not-allowed bg-[#8d999b]'
          }`}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      ) : (
        <textarea
          className={`${baseClasses} ${variantClasses} ${className} ${
            disabled && 'cursor-not-allowed bg-[#8d999b]'
          }`}
          placeholder={placeholder}
          rows={2}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  );
}
