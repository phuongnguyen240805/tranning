import Title from '../components/Title';
import React, { useState } from 'react';
import SearchAlatLayout from '../SearchAlatLayout';
import SEOMetatags from './SEOMetatags';
import BulkSEOMetatags from './BulkSEOMetatags';

const MetaGenerator = () => {
  const [activeTab, setActiveTab] = useState('SEOMetatags');

  // Tab nội dung logic
  let mainContent, title, subtitle;
  if (activeTab === 'SEOMetatags') {
    title = 'SEO Metatags';
    subtitle =
      'Generate SEO-friendly meta tags for your landing pages with the help of our content AI technology.';
    mainContent = <SEOMetatags />;
  } else if (activeTab === 'BulkSEOMetatags') {
    title = 'Bulk Title & Meta Generator';
    subtitle = '';
    mainContent = <BulkSEOMetatags />;
  }
  return (
    <SearchAlatLayout
      header={
        <Title
          title={title}
          subtitle={subtitle}
          gradientFrom="#2ecc71"
          gradientTo="#3a8bfd"
          className="text-center"
        />
      }
      main={
        <>
          <div className="flex flex-row gap-10 w-full mx-auto pt-4">
            {/* Sidebar Tabs */}
            <div className="min-w-[180px] pt-2 flex-[4_4_0%] max-w-[320px]">
              <div className="w-full">
                <span className="flex justify-end text-xs text-gray-500 font-semibold mb-3 tracking-wider">
                  POPULAR TEMPLATES
                </span>
                <div className="w-full flex justify-end">
                  <button
                    className={`text-left px-3 py-2 rounded-lg font-medium text-sm mb-1 transition ${
                      activeTab === 'SEOMetatags'
                        ? 'bg-gray text-white shadow border border-[#e5e7eb]'
                        : 'text-gray-700 hover:bg-[#e5e7eb]'
                    }`}
                    onClick={() => setActiveTab('SEOMetatags')}
                  >
                    SEO Metatags
                  </button>
                </div>
                <div className="w-full flex justify-end">
                  <button
                    className={`text-left px-3 py-2 rounded-lg font-medium text-sm transition ${
                      activeTab === 'BulkSEOMetatags'
                        ? 'bg-gray text-white shadow border border-[#e5e7eb]'
                        : 'text-gray-700 hover:bg-[#e5e7eb]'
                    }`}
                    onClick={() => setActiveTab('BulkSEOMetatags')}
                  >
                    Bulk SEO Metatags
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-[6_6_0%] w-full pl-4">{mainContent}</div>
          </div>
        </>
      }
      footer={<></>}
      hiddenBg
    />
  );
};

export default MetaGenerator;
