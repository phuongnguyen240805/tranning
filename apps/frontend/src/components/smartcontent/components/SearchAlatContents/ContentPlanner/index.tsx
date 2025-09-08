import React from 'react';
import Title from '../components/Title';
import Alert from '../components/ui/Alert';
import VideoCard from '../components/VideoCard';
import FormHandle from '../components/FormHandle';
import { SearchAlatIcons } from '../components/icon';
import SearchAlatLayout from '../SearchAlatLayout';

type ContentPlannerItem = {
  keyword: string;
  url: string;
  country: string;
  topics: number;
  date: string;
  time: string;
};

const contentPlannerData: ContentPlannerItem[] = [
  {
    keyword: 'Inversiones',
    url: 'neurotraderonlinistas.com',
    country: '🇺🇸',
    topics: 386,
    date: 'Aug 15, 2025',
    time: '1:37 AM',
  },
  {
    keyword: 'Digital Marketing',
    url: 'marketingprosite.com',
    country: '🇬🇧',
    topics: 245,
    date: 'Jul 10, 2025',
    time: '9:15 PM',
  },
  {
    keyword: 'Machine Learning',
    url: 'mlinsights.ai',
    country: '🇨🇦',
    topics: 178,
    date: 'Jun 2, 2025',
    time: '11:05 AM',
  },
];

const ContentPlanner = () => {
  return (
    <>
      {/* Alert Boxes */}
      <div className="flex justify-center w-full mb-6 px-14">
        <Alert
          type="secondary"
          message={
            <span className="text-[15px] font-medium justify-center">
              Search Intent is now available on all new Content Plans!
            </span>
          }
          className="w-full flex items-center"
        />
      </div>

      <SearchAlatLayout
        // 🔹 HEADER SLOT
        header={
          <>
            <Title
              title="Content Planner"
              subtitle="Create editorial calendars for your SEO content strategy. Simplify keyword targeting, clustering, 
      and content planning with our easy-to-use tool."
              gradientFrom="#2ecc71"
              gradientTo="#3a8bfd"
            />
          </>
        }
        // 🔹 MAIN SLOT (search + filters)
        main={
          <FormHandle
            keywordPlaceholder='Enter a keyword like "Garden Tools"'
            urlPlaceholder="Enter Page URL"
            buttonText="Generate Keyword Clusters"
            buttonClassName="bg-[#21963c] hover:bg-[#1e7e34] text-white font-medium px-4 py-2 rounded-lg text-[16px] transition"
          />
        }
        sidebar={
          <VideoCard
            src="https://www.youtube.com/embed/BUqoV8TdkKw?list=PLEpY4e8tcdVW1ib_iaBqvnDYV5DPL6Y4T"
            height={250}
            controls
            className="h-[210px] md:h-[240px]"
          />
        }
        // TABLE
        table={
          <>
            {/* control */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full mt-8 mb-4 px-6">
              <div
                className="flex items-center bg-white px-2 py-3 w-full max-w-full"
                style={{ maxWidth: '100%' }}
              >
                <span className="pr-2">
                  <SearchAlatIcons.Search />
                </span>
                <input
                  type="text"
                  placeholder="Search by article titles or keywords"
                  className="bg-transparent text-[15px] font-medium text-[#334155] w-full outline-none placeholder:text-[#94a3b8]"
                  style={{ height: 32 }}
                />
              </div>
            </div>

            {/* table */}
            <table className="min-w-full text-left text-sm text-[#181c23] border border-[#e2e8f0] rounded-xl overflow-hidden">
              <thead>
                <tr className="text-left text-gray-500 border-b border-[#e2e8f0]">
                  <th className="px-6 py-4 font-semibold tracking-wide">
                    KEYWORD
                  </th>
                  <th className="px-6 py-4 font-semibold tracking-wide">
                    TOPICS <i className="fas fa-arrow-up text-xs ml-1" />
                  </th>
                  <th className="px-6 py-4 font-semibold tracking-wide">
                    SEARCHED ON <i className="fas fa-arrow-up text-xs ml-1" />
                  </th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="text-[#181c23]">
                {contentPlannerData.map((row) => (
                  <tr
                    key={row.keyword}
                    className="border-b border-[#e2e8f0] hover:bg-[#f1f5f9] transition"
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-medium text-[#3a8bfd] hover:underline cursor-pointer flex items-center gap-1">
                          {row.keyword}{' '}
                          <i className="fas fa-arrow-up-right-from-square text-xs text-[#3a8bfd]" />
                        </span>
                        <span className="text-xs text-[#e05a5a] flex items-center gap-1 mt-1">
                          {row.url} <span className="ml-1">{row.country}</span>
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold">{row.topics}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span>{row.date}</span>
                        <span className="text-xs text-gray-400">
                          {row.time}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 flex items-center justify-center gap-2 text-right">
                      <button
                        className="flex items-center justify-center h-10 min-w-[120px] bg-[#f3f4f6] border border-[#e2e8f0] hover:bg-[#60a5fa] hover:text-white text-[#2563eb] transition"
                        title="Xem bản đồ"
                      >
                        View Topical Map
                      </button>
                      <button
                        className="flex items-center justify-center w-9 h-9 bg-[#f3f4f6] border border-[#e2e8f0] rounded-full hover:bg-[#60a5fa] hover:text-white text-[#374151] transition"
                        title="Tùy chọn"
                      >
                        <SearchAlatIcons.MoreOptions />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        }
        isTableView
        showOverlay
        footer={<></>}
      />
    </>
  );
};

export default ContentPlanner;
