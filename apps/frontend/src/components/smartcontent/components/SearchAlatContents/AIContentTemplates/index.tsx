import { useState } from 'react';
import SearchAlatLayout from '../SearchAlatLayout';
import InputField from '../components/FormHandle/InputField';
import Title from '../components/Title';
import { SearchAlatIcons } from '../components/icon';
import CategoryFilter from './components/CategoryFilter';
import TemplateGrid from './components/TemplateGrid';
import SettingOptions from '../components/SettingOptions';

const AIContentTemplates = () => {
  const categories = [
    'All',
    'Video',
    'SEO',
    'Ads',
    'Marketing',
    'Social Media',
    'Ecommerce',
    'Website',
    'Google',
    'Blog',
    'Email',
  ];
  const [selected, setSelected] = useState<string>(categories[0]);
  const handleSelect = (category: string) => setSelected(category);

  return (
    <SearchAlatLayout
      header={
        <div className="flex justify-between">
          <Title
            title={
              <div className="flex justify-between">
                AI Content Writer
                {/* <div
                  className="flex items-center max-h-[30px] gap-2 bg-[#4c535c] text-white text-[14px] font-medium p-2 rounded transition relative hover:bg-[#23272c]/80 cursor-pointer"
                  style={{ minWidth: 150 }}
                >
                  <SearchAlatIcons.Setting />
                  AI Settings
                </div> */}
                <SettingOptions />
              </div>
            }
            subtitle="Are you looking to get high-quality copy written fast? AI-driven writing tools can help you craft
            content that is both creative and engaging. This description was written by AI too."
            gradientFrom="#2ecc71"
            gradientTo="#3a8bfd"
          />
        </div>
      }
      main={
        <div className="w-full flex flex-col gap-4 max-w-[1070px]">
          <InputField
            variant="secondary"
            placeholder="Search templates..."
            className="w-full px-4 py-2 max-h-[42px]"
          />
          <div className="w-[1070px]">
            <CategoryFilter
              categories={categories}
              selected={selected}
              onSelect={handleSelect}
            />
          </div>
        </div>
      }
      table={
        <div className="w-full max-w-[740px]">
          <TemplateGrid />
        </div>
      }
      tableClassName="bg-transparent border-none shadow-none mx-auto"
      isTableView
      showOverlay
      halfWidth
      footer={<></>}
    />
  );
};

export default AIContentTemplates;
