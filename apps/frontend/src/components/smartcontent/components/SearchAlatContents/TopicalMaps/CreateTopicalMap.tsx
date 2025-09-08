import { useState } from 'react';
import { Icons } from '../../../icons';
import InputField from '../components/FormHandle/InputField';
import SelectField from '../components/FormHandle/SelectField';
import { SearchAlatIcons } from '../components/icon';
import FolderSettingModal from '../ContentGenius/FolderSettingModal';

function CreateTopicalMap({
  setDialogOpened,
}: {
  setDialogOpened?: (e: boolean) => void;
}) {
  const [activeTab, setActiveTab] = useState('step1');

  // Tab nội dung logic
  let mainContent = null;
  if (activeTab === 'step1') {
    mainContent = (
      <>
        {/* Select Folder */}
        <div className="mb-4">
          <SelectField
            label="Select folder:"
            variant="secondary"
            className="w-full"
            options={[
              { label: 'All Articles', value: 'All Articles' },
              { label: 'Create a new folder', value: 'create_new_folder' },
              {
                label: 'Uncategorized Articles',
                value: 'Uncategorized Articles',
              },
              {
                label: 'Topic Map | hotshotnetworth.com',
                value: 'Topic Map | hotshotnetworth.com',
              },
              { label: 'taimuransari', value: 'taimuransari' },
            ]}
            defaultValue="All Articles"
            onChange={() => {}}
          />
          <div className="flex items-center bg-[#fbeaea] border border-[#e05a5a] rounded-lg px-3 py-2 mt-2">
            <span className="text-[#e05a5a] mr-2">
              <i className="fas fa-exclamation-circle" />
            </span>
            <span className="text-[#e05a5a] text-[13px]">
              The "All articles" folder is selected. To keep your topical maps
              organized, we recommend you create a new folder or select a
              different one for better content management.
            </span>
          </div>
        </div>

        {/* Pillar Page URL */}
        <div className="mb-4">
          <InputField
            type="input"
            label="Pillar Page URL (Optional)"
            placeholder=""
            className="w-full"
            variant="secondary"
          />
        </div>

        {/* Target Keyword & Language */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <InputField
              variant="secondary"
              type="input"
              label="Target Keyword (Topic)"
              placeholder='e.g "chocolate donuts"'
              className="w-full"
            />
          </div>
          <div className="w-full md:w-[180px]">
            <SelectField
              label="Language"
              variant="secondary"
              className="w-full"
              options={[
                { label: 'English (US)', value: 'English (US)' },
                { label: 'English (UK)', value: 'English (UK)' },
                { label: 'Spanish', value: 'Spanish' },
                { label: 'French', value: 'French' },
              ]}
              defaultValue="English (US)"
              onChange={() => {}}
            />
          </div>
        </div>

        {/* Cluster/Long tail/Title controls */}
        <div className="bg-[#f1f5f9] border border-[#cbd5e1] rounded-lg px-4 py-3 mb-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#3a8bfd] text-white rounded-full w-[18px] h-[18px] flex items-center justify-center text-xs font-bold mr-2">
              <Icons.InfoCircle />
            </span>
            <span className="text-[#334155] text-[13px] leading-snug">
              Input the number of clusters (categories) you want to create based
              on your target keyword. Next, specify the number of long-tail
              keywords to be generated within each cluster. Finally, choose the
              quantity of article titles to be generated for each long-tail
              keyword.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-2">
          <div className="flex flex-wrap items-center gap-2 w-full">
            {/* Clusters */}
            <div className="flex flex-col min-w-[120px]">
              <label
                className="text-[12px] font-medium text-[#64748b] mb-0.5"
                htmlFor="clusters-input"
              >
                Clusters (Categories)
              </label>
              <input
                id="clusters-input"
                type="number"
                min={1}
                max={10}
                defaultValue={1}
                className="w-[80px] border border-[#cbd5e1] rounded px-2 py-1 text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-[#3ad6b0]/40 text-center"
              />
            </div>
            <span className="text-[#64748b] text-lg font-medium select-none">
              ×
            </span>
            {/* Long tails */}
            <div className="flex flex-col min-w-[100px]">
              <label
                className="text-[12px] font-medium text-[#64748b] mb-0.5"
                htmlFor="longtails-input"
              >
                Long tails
              </label>
              <input
                id="longtails-input"
                type="number"
                min={1}
                max={10}
                defaultValue={1}
                className="w-[80px] border border-[#cbd5e1] rounded px-2 py-1 text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-[#3ad6b0]/40 text-center"
              />
            </div>
            <span className="text-[#64748b] text-lg font-medium select-none">
              ×
            </span>
            {/* Title */}
            <div className="flex flex-col min-w-[80px]">
              <label
                className="text-[12px] font-medium text-[#64748b] mb-0.5"
                htmlFor="title-input"
              >
                Title
              </label>
              <input
                id="title-input"
                type="number"
                min={1}
                max={10}
                defaultValue={1}
                className="w-[80px] border border-[#cbd5e1] rounded px-2 py-1 text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-[#3ad6b0]/40 text-center"
              />
            </div>
            <span className="ml-2 text-[#2563eb] text-[13px] underline cursor-pointer select-none">
              = 1 article idea
            </span>
          </div>
          <div className="text-[#64748b] text-[13px] mt-1">
            Total{' '}
            <span className="underline cursor-pointer text-[#2563eb]">
              upper limit
            </span>{' '}
            is 1,000 results (10×10×10)
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={() => setDialogOpened(false)}
            type="button"
            className="bg-transparent border-none text-[#334155] font-medium px-4 py-2 rounded flex items-center justify-center gap-2 text-[15px] hover:underline transition"
          >
            Cancel
          </button>
          <button
            onClick={() => setActiveTab('step2')}
            type="button"
            className="ml-4 bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium px-4 py-2 rounded flex items-center justify-center gap-2 text-[15px] transition"
          >
            Create &amp; Continue
            <span className="text-lg">
              <SearchAlatIcons.ArrowRight />
            </span>
          </button>
        </div>
      </>
    );
  } else if (activeTab === 'step2') {
    mainContent = <FolderSettingModal />;
  }

  return (
    <div className="w-full max-w-[753px] mx-auto bg-white rounded-xl shadow-lg p-8">
      {/* Steps */}
      <div className="flex items-start gap-8 mb-6 mt-2">
        {/* Step 1 */}
        <div className="flex flex-col min-w-[160px]">
          <span className="text-[12px] font-normal text-[#64748b] mb-1 leading-none">
            Step 1
          </span>
          <span className="text-[15px] font-semibold text-[#181c23] leading-none">
            Choose a topic
          </span>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col min-w-[180px]">
          <span className="text-[12px] font-normal text-[#64748b] mb-1 leading-none">
            Step 2
          </span>
          <span className="text-[15px] font-normal text-[#64748b] leading-none">
            AI Writing Settings
          </span>
        </div>
        <div className="h-[3px] bg-[#22c55e] rounded mt-[6px]" />
      </div>

      {mainContent}
    </div>
  );
}

export default CreateTopicalMap;
