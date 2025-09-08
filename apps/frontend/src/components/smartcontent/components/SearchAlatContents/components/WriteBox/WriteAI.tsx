// WriteAI.tsx
import React from 'react';
import SelectField from '../FormHandle/SelectField';
import { languageList } from '../FormHandle';

interface FormData {
  title: string;
  keywords: string;
  bulkTitles: string;
  bulkKeywords: string;
}

interface WriteAIProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit?: () => void;
}

const WriteAI: React.FC<WriteAIProps> = ({
  formData,
  setFormData,
  onSubmit,
}) => {
  return (
    <div>
      <input
        placeholder="Enter an article title or a subject..."
        className="mb-3 w-full bg-white text-gray-800 text-[15px] font-medium px-4 py-3 rounded border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#3ad6b0] transition placeholder:text-gray-400"
        type="text"
        value={formData.title}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <input
        placeholder="Enter keyword(s) you want to rank for, separated by commas..."
        className="mb-3 w-full bg-white text-gray-800 text-[15px] font-medium px-4 py-3 rounded border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#3ad6b0] transition placeholder:text-gray-400"
        type="text"
        value={formData.keywords}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, keywords: e.target.value }))
        }
      />
      <div className="flex items-center justify-between mt-2">
        <button
          className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold px-5 py-2 rounded flex items-center gap-2 transition text-[15px]"
          type="button"
          onClick={onSubmit}
        >
          Write Article with AI <span className="text-lg">→</span>
        </button>
        <div className="flex items-center gap-2 text-gray-300 text-[15px]">
          <span>
            <SelectField options={languageList} defaultValue="United States" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WriteAI;
