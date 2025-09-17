import SelectField from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/FormHandle/SelectField';
import { SearchAlatIcons } from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/icon';
import { useState } from 'react';

function RankTrackerTable() {
  const [search, setSearch] = useState('');
  const [dialogOpened, setDialogOpened] = useState(false);

  return (
    <>
      <div className="w-full max-w-6xl mx-auto bg-transparent rounded-xl">
        {/* Table Controls */}
        <div className="flex items-center w-full bg-white px-2 py-2 mt-4 mb-4 gap-2">
          {/* Search by URL */}
          <div className="flex items-center w-[220px] bg-white border border-[#e2e8f0] rounded px-2 h-8">
            <SearchAlatIcons.Search className="w-4 h-4 text-[#b6bbc7] mr-2" />
            <input
              type="text"
              placeholder="Search by URL"
              className="bg-white hover:bg-[#f5f6fa] transition outline-none border-none text-xs text-[#181c23] w-full h-full placeholder-[#b6bbc7]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* Avg Position Dropdown */}
          <SelectField
            label=""
            variant="secondary"
            className="min-w-[130px] h-8 bg-white  border border-[#e2e8f0] rounded px-2 text-xs text-[#181c23] hover:bg-[#f5f6fa] transition"
            options={[
              { label: 'Avg Position', value: 'avg_position' },
              { label: 'Best Position', value: 'best_position' },
              { label: 'Worst Position', value: 'worst_position' },
            ]}
            defaultValue="avg_position"
            onChange={() => {}}
          />
          {/* Traffic Dropdown */}
          <SelectField
            label=""
            variant="secondary"
            className="min-w-[100px] h-8 bg-white border border-[#e2e8f0] rounded px-2 text-xs text-[#181c23] hover:bg-[#f5f6fa] transition"
            options={[
              { label: 'Traffic', value: 'traffic' },
              { label: 'Clicks', value: 'clicks' },
              { label: 'Impressions', value: 'impressions' },
            ]}
            defaultValue="traffic"
            onChange={() => {}}
          />
          {/* Sort Dropdown */}
          <div className="ml-auto">
            <SelectField
              label=""
              variant="secondary"
              className="min-w-[90px] h-8 bg-white border border-[#e2e8f0] rounded px-2 text-xs text-[#181c23] hover:bg-[#f5f6fa] transition"
              options={[
                { label: 'T.I. Sort', value: 'ti_sort' },
                { label: 'A-Z', value: 'az' },
                { label: 'Z-A', value: 'za' },
              ]}
              defaultValue="ti_sort"
              onChange={() => {}}
              icon={
                <span className="mr-1">
                  <SearchAlatIcons.Drop className="w-3 h-3 text-[#b6bbc7]" />
                </span>
              }
            />
          </div>
        </div>
        {/* Empty State */}
        <div className="flex flex-col items-center justify-center h-[320px] bg-[#f5f6fa] rounded-xl">
          <div className="flex flex-col items-center">
            <div className="mb-3">
              <SearchAlatIcons.Box />
            </div>
            <div className="text-gray-400 text-base font-medium mb-1">
              No projects found matching your search.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RankTrackerTable;
