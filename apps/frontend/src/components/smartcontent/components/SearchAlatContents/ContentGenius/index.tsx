import { useState } from 'react';

import SearchAlatLayout from '../SearchAlatLayout';
import Title from '../components/Title';
import Alert from '../components/ui/Alert';
import VideoCard from '../components/VideoCard';
import ContentWriter from '../components/WriteBox/ContentWriter';
import { SearchAlatIcons } from '../components/icon';
import { ModalWrapper } from '../components/ModalWrapper';
import { SelectList } from '../components/FormHandle';
import FolderSettingModal from './FolderSettingModal';
import ContentGeniusTable from './ContentGeniusTable';

export const searchIntentList: SelectList = [
  { value: '', label: 'Search intent' },
  { value: 'informational', label: 'Informational' },
  { value: 'navigational', label: 'Navigational' },
  { value: 'transactional', label: 'Transactional' },
  { value: 'commercial', label: 'Commercial' },
];

const ContentGenius = () => {
  const [dialogOpened, setDialogOpened] = useState(false);

  return (
    <>
      <ModalWrapper
        opened={dialogOpened}
        onClose={() => setDialogOpened(!dialogOpened)}
        title="Folder Settings"
        padding="24px 32px 32px"
      >
        <div className="flex h-[600px] max-h-[80vh]">
          <FolderSettingModal setShowFolderSetting={setDialogOpened} />
        </div>
      </ModalWrapper>

      <SearchAlatLayout
        header={
          <Title
            title="Content Genius"
            subtitle="An SEO text editor that streamlines every step of the content optimization and writing process with artificial intelligence, link suggestions, and integrated keyword and SERP research."
            gradientFrom="#2ecc71"
            gradientTo="#3a8bfd"
          />
        }
        sidebar={
          <>
            <VideoCard
              src="https://www.youtube.com/embed/BUqoV8TdkKw?list=PLEpY4e8tcdVW1ib_iaBqvnDYV5DPL6Y4T"
              height={250}
              controls
              className="h-[210px] md:h-[240px]"
            />
            <p className="text-gray-600 text-[15px] font-medium mt-4 text-center">
              Still have questions?{' '}
              <a
                href="#"
                className="text-[#3a8bfd] font-semibold hover:underline hover:text-[#2563eb] transition"
              >
                Read the Full Guide.
              </a>
            </p>
          </>
        }
        main={
          <>
            {/* Folder Navigation */}
            <div className="flex items-center justify-between bg-[#181c20] rounded-lg px-3 py-2">
              <div className="flex items-start gap-3">
                <span className="h-full align-middle mt-[2px]">
                  <SearchAlatIcons.Folder width={26} height={26} />
                </span>
                <div className="cursor-pointer">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <span className="text-[#cbd5e1] text-xs font-medium leading-none">
                      Folder
                    </span>
                    <span className="bg-[#393c41] text-[#cbd5e1] text-[11px] px-2 py-0.5 rounded-full font-semibold ml-1 leading-none">
                      Beta
                    </span>
                  </div>
                  <div className="relative mt-1 flex flex-row align-middle items-center">
                    <select
                      className="appearance-none bg-transparent text-white text-[17px] font-bold pr-6 pl-0 py-0 focus:outline-none cursor-pointer leading-tight"
                      style={{ minWidth: 120 }}
                    >
                      <option className="text-[17px] font-bold text-white bg-[#23272c]">
                        All Articles
                      </option>
                    </select>
                    <span className="pointer-events-none text-white text-xs flex flex-col items-center">
                      <SearchAlatIcons.Sort />
                    </span>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setDialogOpened(true)}
                className="flex items-center gap-2 bg-[#4c535c] text-white text-[14px] font-medium p-2 rounded transition relative hover:bg-[#23272c]/80 cursor-pointer"
                style={{ minWidth: 150 }}
              >
                <SearchAlatIcons.Setting />
                Folder settings
                <span className="absolute top-1 right-1 bg-orange-500 w-2 h-2 rounded-full"></span>
              </div>
            </div>

            {/* Alert Boxes */}
            <div className="flex flex-col gap-2 mt-4">
              <Alert
                type="primary"
                message={
                  <>
                    <span className="text-[15px] font-medium">
                      The "All articles" folder is selected. To keep your
                      content organized, we recommend you{' '}
                      <a
                        href="#"
                        className="underline text-blue-600 hover:text-blue-500 transition font-semibold"
                      >
                        create a new folder
                      </a>{' '}
                      or select a different one for better article management.
                    </span>
                  </>
                }
                className="w-full min-h-[56px]"
              />
              <Alert
                type="secondary"
                message={
                  <span className="text-[15px] font-medium">
                    Finish configuring the AI settings for this folder to get
                    the best content results.
                  </span>
                }
                className="w-full min-h-[56px]"
              />
            </div>

            {/* Content Writer */}
            <ContentWriter />
          </>
        }
        table={
          <>
            {/* Search and Controls */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full my-4 px-4">
              <div className="flex items-center bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg px-5 py-2.5 w-full md:w-[400px]">
                <SearchAlatIcons.Search />
                <input
                  type="text"
                  placeholder="Search by article titles or keywords"
                  className="bg-transparent text-[15px] font-medium text-[#334155] w-full outline-none placeholder:text-[#94a3b8]"
                  style={{ height: 28 }}
                />
              </div>
              <div className="flex items-center gap-3 mt-2 md:mt-0 flex-wrap">
                <button
                  className="flex items-center gap-2 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg px-5 py-2.5 text-[15px] font-semibold text-[#334155] hover:bg-[#e0e7ef] hover:text-[#3a8bfd] transition-all"
                  title="Filter articles"
                >
                  <i className="fas fa-filter text-[#94a3b8]"></i>
                  Filters 4
                </button>
                <button
                  className="flex items-center gap-2 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg px-5 py-2.5 text-[15px] font-semibold text-[#334155] hover:bg-[#e0e7ef] hover:text-[#3a8bfd] transition-all"
                  title="Sort articles"
                >
                  <i className="fas fa-sort text-[#94a3b8]"></i>
                  Sort by
                </button>
                <button
                  className="flex items-center gap-2 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg px-5 py-2.5 text-[15px] font-semibold text-[#334155] hover:bg-[#e0e7ef] hover:text-[#3a8bfd] transition-all"
                  title="Change view mode"
                >
                  <i className="fas fa-table text-[#94a3b8]"></i>
                  View Mode: Table
                </button>
                <button
                  className="flex items-center gap-2 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg px-5 py-2.5 text-[15px] font-semibold text-[#334155] hover:bg-[#e0e7ef] hover:text-[#3a8bfd] transition-all"
                  title="Restore articles"
                >
                  <i className="fas fa-undo text-[#94a3b8]"></i>
                  Restore
                </button>
              </div>
            </div>
            <ContentGeniusTable />
          </>
        }
        footer={null}
        showOverlay={true}
        isTableView={true}
      />
    </>
  );
};

export default ContentGenius;
