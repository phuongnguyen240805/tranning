import { useState } from 'react';

type OptionType = {
  value: string | number;
  label: string;
};

type SelectFieldProps = {
  label?: string;
  icon?: React.ReactNode;
  options?: OptionType[];
  defaultValue?: string | number;
  className?: string;
  variant?: 'primary' | 'secondary';
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function SelectField({
  label,
  icon,
  options = [],
  defaultValue,
  className = '',
  variant,
  onChange,
}: SelectFieldProps) {
  // const [isOpen, setIsOpen] = useState(false);
  // const [selected, setSelected] = useState(defaultValue);

  // const countries = ['Germany', 'Canada', 'United States', 'Russia', 'India'];

  // const handleSelect = (country: string) => {
  //   setSelected(country);
  //   setIsOpen(false);
  // };

  const baseClasses =
    'transition w-full bg-white border border-[#e2e8f0] px-4 text-[#181c23] text-[15px] rounded-lg focus:outline-none focus:border-[#929ea1]';

  let variantClasses = '';
  if (variant) {
    variantClasses =
      variant === 'primary'
        ? 'bg-white border border-[#ff914d] placeholder:text-[#bdbdbd] focus:border-[#929ea1]'
        : 'bg-white border border-[#333] placeholder:text-gray-500 focus:ring-[#6366f1]';
  }

  return (
    <>
      {/* label */}
      {label && (
        <label className="flex text-xs font-medium text-gray-500 mb-1">
          {label}
          <span className="pl-2">{icon}</span>
        </label>
      )}
      {/* select */}
      <div className="relative min-w-[200px] flex flex-col justify-end">
        <select
          style={{ height: 48 }}
          className={`${baseClasses} ${variantClasses} ${className}`}
          defaultValue={defaultValue}
          onChange={onChange}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`${baseClasses} ${variantClasses} ${className}`}
        >
          <span>{selected}</span>
          <svg
            className={`w-5 h-5 inline float-right transition-transform duration-200 ${
              isOpen ? 'rotate-0' : '-rotate-90'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#6B7280"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded shadow-md mt-1 py-2">
            {options.map((opt) => (
              <li
                key={opt.label}
                className="px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
                onClick={() => handleSelect(opt.label)}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )} */}
      </div>
    </>
  );
}
