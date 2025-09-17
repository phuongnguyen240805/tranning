import InputField from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/FormHandle/InputField';
import SelectField from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/FormHandle/SelectField';

function CreateKeywordForm({
  setShowFolderSetting,
}: {
  setShowFolderSetting?: (e: boolean) => void;
}) {
  return (
    <form className="w-full h-full justify-between">
      {/* Title */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Create Keyword List</h2>
        <div className="grid gap-4 mb-6">
          <div className="flex justify-between">
            {/* List name */}
            <div>
              <InputField
                type="input"
                label="List name"
                placeholder=""
                variant="secondary"
                className="w-[320px] max-h-[42px] flex flex-1 px-4 py-2 text-sm text-black outline-none transition border-gray h-[42px]"
              />
            </div>
            {/* Location */}
            <div>
              <SelectField
                label="Location"
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
                className="w-full max-h-[42px] bg-gray-50 border-gray rounded px-3 py-2 text-sm text-gray-200 hover:bg-gray-100 transition"
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
        {/* Keywords */}
        <div className="mb-2">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="keywords"
          >
            Keywords
          </label>
          <textarea
            id="keywords"
            rows={7}
            className="w-full min-h-[200px] rounded-md border border-gray bg-gray-50 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-400 transition resize-none"
            placeholder="Enter one or more keywords separated by a new line (Shift + Enter)"
          />
        </div>
        {/* Import from file */}
        <div className="mb-2">
          <button
            type="button"
            className="text-[#3a8bfd] text-sm flex items-center hover:underline focus:outline-none mt-1"
          >
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
        </div>
      </div>
      {/* Footer actions */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center text-xs text-gray-500 w-full max-w-[160px]">
          <span>Keywords: 5/5K</span>
          <span className="ml-1">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M8 8h8v8H8z" />
            </svg>
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowFolderSetting(false)}
            type="button"
            className="h-10 px-6 rounded-md border border-gray-200 bg-white text-gray-700 font-medium text-sm transition hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="h-10 px-7 rounded-md bg-[#ff914d] hover:bg-[#ff7f1a] text-white font-medium text-sm transition"
          >
            Create List
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateKeywordForm;
