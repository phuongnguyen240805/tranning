import InputField from './InputField';
import SelectField from './SelectField';

type FormHandleProps = {
  keywordPlaceholder?: string;
  urlPlaceholder?: string;
  countryDefault?: string;
  onSubmit?: () => void;
  buttonText?: string;
  buttonClassName?: string;
  extraAction?: React.ReactNode;
};

export type SelectList = { value: string; label: string }[];

export const languageList: SelectList = [
  { value: 'world', label: '🌍 Worldwide' },
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
];

export default function FormHandle({
  keywordPlaceholder = 'Add up to 3 keywords, separate by comma',
  urlPlaceholder = 'Enter Page URL',
  countryDefault = 'us',
  onSubmit,
  buttonText = 'Run Audit',
  buttonClassName = 'bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold px-6 py-2.5 rounded-lg text-[15px] transition',
  extraAction,
}: FormHandleProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Keyword Input */}
      <InputField
        placeholder={keywordPlaceholder}
        className="w-full py-3 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
      />

      {/* URL + Country Row */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <InputField
          placeholder={urlPlaceholder}
          className="flex-1 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
        />
        <SelectField
          options={languageList}
          defaultValue={countryDefault}
          className="focus:outline-none first:focus:ring-2 focus:ring-[#22c55e]"
        />
      </div>

      {/* Actions Row */}
      <div className="flex justify-between items-center gap-4 mt-1">
        <button onClick={onSubmit} className={buttonClassName}>
          {buttonText}
        </button>

        {/* Extra action nếu có */}
        {extraAction && (
          <div className="flex items-center gap-2">{extraAction}</div>
        )}
      </div>
    </div>
  );
}
