import InputField from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/FormHandle/InputField';
import SelectField from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/FormHandle/SelectField';
import React, { useState } from 'react';

function RankTrackerForm() {
  const [keyword, setKeyword] = useState('');
  const [country, setCountry] = useState('United States');

  return (
    <form
      className="flex items-center gap-3 w-full max-w-3xl mt-6 bg-transparent"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {/* Website Input */}
      <InputField
        type="input"
        label=""
        placeholder="Enter website..."
        variant="secondary"
        className="w-[240px] h-[38px] px-3 py-2 text-sm text-black bg-[#f5f6fa] border-none rounded outline-none transition placeholder:text-[#7b7b7b]"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {/* Domain Selector */}
      <div className="relative">
        <SelectField
          label=""
          variant="secondary"
          options={[
            { label: 'Domain', value: 'domain' },
            { label: 'Subdomain', value: 'subdomain' },
            { label: 'Exact URL', value: 'url' },
          ]}
          defaultValue="domain"
          className="w-[120px] h-[38px] bg-[#f5f6fa] border-none rounded px-3 py-2 text-sm text-black outline-none transition"
          onChange={() => {}}
        />
      </div>

      {/* Location Selector */}
      <InputField
        type="input"
        label=""
        placeholder="Select location"
        variant="secondary"
        className="w-[220px] h-[38px] px-3 py-2 text-sm text-black bg-[#f5f6fa] border-none rounded outline-none transition placeholder:text-[#7b7b7b]"
        value=""
        onChange={() => {}}
      />

      {/* Start Tracking Button */}
      <button
        type="submit"
        className="h-[48px] w-[120px] px-5 rounded bg-[#ff914d] hover:bg-[#ff7f1a] text-white font-semibold text-sm transition"
      >
        Start Tracking
      </button>
    </form>
  );
}

export default RankTrackerForm;
