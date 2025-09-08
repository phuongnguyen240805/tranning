import React from 'react';

interface AlertProps {
  type?: 'primary' | 'secondary';
  message: React.ReactNode;
  className?: string; // cho phép custom thêm class
}

const alertStyles = {
  primary: {
    bg: 'from-[#1a2332] to-[#22304a]',
    text: 'text-blue-200',
    icon: 'fas fa-info-circle text-blue-300',
  },
  secondary: {
    bg: 'from-[#2d211a] to-[#3a2a1a]',
    text: 'text-yellow-300',
    icon: 'fas fa-exclamation-triangle text-yellow-400',
  },
};

const Alert: React.FC<AlertProps> = ({
  type = 'primary',
  message,
  className,
}) => {
  const style = alertStyles[type];

  return (
    <div
      className={`bg-gradient-to-r ${style.bg} ${
        style.text
      } text-[12px] px-4 py-2 rounded-lg flex justify-center items-center gap-2 ${
        className || ''
      }`}
    >
      <i className={`${style.icon} mr-1`}></i>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
