import InputField from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/FormHandle/InputField';
import SelectField from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/FormHandle/SelectField';
import React, { useState } from 'react';

// Constants
const MAX_SITES = 6;
const DEFAULT_SITES = [
  { value: '', type: 'domain', isPrimary: true },
  { value: '', type: 'domain', isPrimary: false },
  { value: '', type: 'domain', isPrimary: false },
];
const LOCATION_OPTIONS = [
  { label: 'United States', value: 'us', flag: '🇺🇸' },
  { label: 'United Kingdom', value: 'uk', flag: '🇬🇧' },
  { label: 'Canada', value: 'ca', flag: '🇨🇦' },
  { label: 'Australia', value: 'au', flag: '🇦🇺' },
];
const TYPE_OPTIONS = [
  { label: 'Domain', value: 'domain' },
  { label: 'Subdomain', value: 'subdomain' },
  { label: 'URL', value: 'url' },
];

function GapForm() {
  const [country, setCountry] = useState('us');
  const [sites, setSites] = useState(DEFAULT_SITES);

  // Add a new input
  const handleAddSite = () => {
    if (sites.length < MAX_SITES) {
      setSites([...sites, { value: '', type: 'domain', isPrimary: false }]);
    }
  };

  // Remove a site input
  const handleRemoveSite = (idx: number) => {
    if (sites.length > 1) {
      setSites(sites.filter((_, i) => i !== idx));
    }
  };

  // Update a site's value or type
  const handleSiteChange = (
    idx: number,
    key: 'value' | 'type',
    val: string
  ) => {
    setSites(
      sites.map((site, i) => (i === idx ? { ...site, [key]: val } : site))
    );
  };

  // Change country
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  // Get flag for selected country
  const getFlag = (value: string) => {
    const found = LOCATION_OPTIONS.find((opt) => opt.value === value);
    return found ? found.flag : '';
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col gap-6 w-full max-w-xl bg-white mt-4 p-6 rounded-lg border border-[#e5e7eb] shadow"
      onSubmit={handleSubmit}
    >
      {/* Location Selector */}
      <div className="flex items-center gap-2 mb-2">
        <SelectField
          label="Location:"
          onChange={handleCountryChange}
          options={LOCATION_OPTIONS}
          className="min-w-[160px]"
          icon={getFlag(country)}
        />
      </div>

      {/* Website Inputs */}
      <div className="flex flex-col gap-3">
        {sites.map((site, idx) => (
          <div key={idx} className="flex items-center gap-2">
            {/* Remove/Add Button */}
            <button
              type="button"
              onClick={() =>
                site.isPrimary ? undefined : handleRemoveSite(idx)
              }
              className={`w-6 h-6 flex items-center justify-center rounded-full border border-[#d1d5db] text-[#6b7280] transition
                  ${
                    site.isPrimary
                      ? 'opacity-50 cursor-default'
                      : 'hover:bg-[#f3f4f6] hover:text-[#ef4444]'
                  }
                `}
              disabled={site.isPrimary}
            >
              {site.isPrimary ? (
                <span className="text-lg">−</span>
              ) : (
                <span className="text-lg">−</span>
              )}
            </button>
            {/* Website Input */}
            <input
              type="text"
              value={site.value}
              onChange={(e) => handleSiteChange(idx, 'value', e.target.value)}
              className={`flex-1 bg-white border border-[#d1d5db] rounded px-4 py-2 text-sm text-[#111827] placeholder-[#9ca3af] outline-none transition focus:border-[#3b82f6] ${
                site.isPrimary ? '' : ''
              }`}
              placeholder={
                site.isPrimary ? 'Enter a primary website' : 'Enter a website'
              }
            />
            {/* Type Selector */}
            <select
              value={site.type}
              onChange={(e) => handleSiteChange(idx, 'type', e.target.value)}
              className="bg-white border border-[#d1d5db] rounded px-3 py-2 text-sm text-[#111827] focus:outline-none"
            >
              {TYPE_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="text-[#111827]"
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        ))}
        {/* Add another site */}
        <button
          type="button"
          onClick={handleAddSite}
          disabled={sites.length >= 6}
          className="flex items-center gap-1 text-[#2563eb] hover:text-[#1d4ed8] text-sm font-medium mt-1 disabled:opacity-50"
        >
          <span className="text-lg">＋</span>
          Add another site
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 w-fit bg-[#8854d0] hover:bg-[#7c47c5] text-white font-medium rounded-lg px-4 py-2 text-lg transition"
      >
        Analyze Keywords
      </button>
    </form>
  );
}

export default GapForm;
