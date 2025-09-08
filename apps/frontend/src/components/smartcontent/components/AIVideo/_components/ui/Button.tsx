import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Loại button: primary = nền xanh, outline = viền xanh */
  variant?: 'primary' | 'outline';
  active?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  active = false,
  fullWidth = false,
  size = 'md',
  loading = false,
  className = '',
  type = 'button',
  disabled,
  ...props
}) => {
  const baseStyle =
    'rounded-lg font-semibold transition-colors focus:outline-none tracking-wide flex items-center justify-center gap-2';
  const widthStyle = fullWidth ? 'w-full' : '';
  const fontFamily = 'Inter, Arial, sans-serif';

  // size style
  const sizeStyle =
    size === 'sm'
      ? 'px-3 py-1 text-sm'
      : size === 'lg'
      ? 'px-6 py-3 text-lg'
      : 'px-4 py-2 text-base';

  let variantStyle = '';
  if (variant === 'primary') {
    variantStyle = active
      ? 'bg-[rgb(66,67,254)] text-white shadow'
      : 'bg-white text-[rgb(66,67,254)] border border-[rgb(66,67,254)]';
  } else if (variant === 'outline') {
    variantStyle = active
      ? 'bg-[rgb(66,67,254)] text-white'
      : 'border border-[rgb(66,67,254)] text-[rgb(66,67,254)] bg-transparent';
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`${baseStyle} ${sizeStyle} ${widthStyle} ${variantStyle} ${
        loading ? 'opacity-70 cursor-not-allowed' : ''
      } ${className}`}
      style={{ fontFamily, letterSpacing: '0.01em' }}
      {...props}
    >
      {loading ? (
        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
      ) : null}
      {children}
    </button>
  );
};

export default Button;
