import InputField from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/FormHandle/InputField';
import SelectField from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/FormHandle/SelectField';
import React from 'react';

function ResearchForm() {
  return (
    <div className="bg-white p-4 mt-4 rounded-xl flex items-center w-full max-w-3xl mx-auto shadow">
      <div className="flex-1 flex flex-col">
        <InputField
          type="input"
          label=""
          placeholder="Enter one or more keywords separated by commas"
          variant="secondary"
          className="w-full flex flex-1 px-4 py-2 text-sm text-gray-900 outline-none transition border-none h-[42px]"
        />
        <div className="flex justify-between items-center mt-2">
          <button className="text-[#3a8bfd] text-sm flex items-center hover:underline focus:outline-none">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 4v16m8-8H4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Import from file
          </button>

          <div className="flex items-center ml-4 gap-2">
            <SelectField
              label=""
              variant="secondary"
              icon={
                <span className="mr-2">
                  <span role="img" aria-label="flag">
                    🇺🇸
                  </span>
                </span>
              }
              options={[
                { label: 'United States', value: 'us' },
                { label: 'United Kingdom', value: 'uk' },
                { label: 'Canada', value: 'ca' },
                { label: 'Australia', value: 'au' },
              ]}
              defaultValue="us"
              className="min-w-[150px] max-h-[42px] bg-gray-50 border-none rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              onChange={() => {}}
            />
            <button
              type="submit"
              className="bg-[#ff914d] hover:bg-[#ff7f1a] h-[42px] text-white px-5 py-2 rounded font-medium text-sm transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchForm;
