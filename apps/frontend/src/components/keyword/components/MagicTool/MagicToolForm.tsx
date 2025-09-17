import InputField from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/FormHandle/InputField';
import SelectField from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/FormHandle/SelectField';
import React, { useState } from 'react';

function MagicToolForm() {
  const [keyword, setKeyword] = useState('');
  const [country, setCountry] = useState('United States');

  return (
    <form
      className="flex items-center gap-2 w-full max-w-2xl mt-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {/* Keyword Input */}
      <InputField
        type="input"
        label=""
        placeholder="Enter one or more keywords separated by commas"
        variant="secondary"
        className="w-full flex flex-1 px-4 py-2 text-sm text-black outline-none transition border-none h-[42px]"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {/* Country Selector */}
      <div className="relative">
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
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="h-10 px-5 rounded-md bg-[#ff914d] hover:bg-[#ff7f1a] text-white font-semibold text-sm transition"
      >
        Search
      </button>
    </form>
  );
}

export default MagicToolForm;
