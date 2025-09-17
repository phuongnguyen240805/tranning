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
                <SettingOptions
                  contentClassName="w-[385px] max-w-[385px] text-sm space-y-2 bg-white z-100 border-none"
                  trigger={
                    <div
                      className="flex items-center max-h-[30px] gap-2 bg-[#4c535c] text-white text-[14px] font-medium p-2 rounded transition relative hover:bg-[#23272c]/80 cursor-pointer"
                      style={{ minWidth: 150 }}
                    >
                      <SearchAlatIcons.Setting />
                      AI Settings
                    </div>
                  }
                  content={
                    <>
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-700">
                            Tone of Voice
                          </span>
                          <span
                            className="text-xs text-gray-400 cursor-pointer"
                            title="Choose how the AI should sound."
                          >
                            ?
                          </span>
                        </div>
                        <input
                          className="w-full bg-gray-100 rounded px-3 py-2 text-sm text-gray-400 mb-2"
                          value="Professional"
                          disabled
                        />
                        <div className="flex flex-wrap gap-2 mb-2">
                          <button className="flex items-center gap-1 px-3 py-1 rounded bg-[#e6f4ea] text-green-700 text-xs font-medium">
                            <span>🧑‍🦱</span> Yoda
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1 rounded bg-[#fbeaea] text-[#c0392b] text-xs font-medium">
                            <span>🦸‍♂️</span> Tony Stark
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1 rounded bg-[#eaf0fb] text-[#34495e] text-xs font-medium">
                            <span>🎭</span> Shakespeare
                          </button>
                          <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-medium">
                            Casual
                          </button>
                          <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-medium">
                            Professional
                          </button>
                          <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-medium">
                            Funny
                          </button>
                          <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-medium">
                            Angry
                          </button>
                          <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-medium">
                            + 9
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 mb-1">
                            Language
                          </div>
                          <select className="w-full border rounded px-2 py-1 text-sm">
                            <option>English (CA)</option>
                            <option>English (US)</option>
                            <option>Vietnamese</option>
                          </select>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 mb-1">
                            Point of view
                          </div>
                          <select className="w-full border rounded px-2 py-1 text-sm">
                            <option>First person</option>
                            <option>Second person</option>
                            <option>Third person</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <button className="px-4 py-2 rounded bg-gray-100 text-gray-700 font-medium">
                          Cancel
                        </button>
                        <button className="px-4 py-2 rounded bg-[#8f5be8] text-white font-medium">
                          Update
                        </button>
                      </div>
                    </>
                  }
                />
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
