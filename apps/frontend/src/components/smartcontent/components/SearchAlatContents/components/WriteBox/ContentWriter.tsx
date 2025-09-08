import { useState } from 'react';
import WriteYourself from './WriteYourself';
import WriteAI from './WriteAI';
import WriteAIBulk from './WriteAIBulk';

type TabKey = 'write-yourself' | 'write-ai' | 'write-ai-bulk';

interface TabConfig {
  key: TabKey;
  label: string;
  disabled?: boolean;
}

const tabs: TabConfig[] = [
  { key: 'write-yourself', label: 'Write yourself' },
  { key: 'write-ai', label: 'Write with AI' },
  { key: 'write-ai-bulk', label: 'Write with AI in Bulk' },
];

const WriterBox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('write-yourself');
  const [formData, setFormData] = useState({
    title: '',
    keywords: '',
    bulkTitles: '',
    bulkKeywords: '',
  });

  // Tab nội dung logic
  let mainContent = null;
  if (activeTab === 'write-yourself') {
    mainContent = (
      <WriteYourself formData={formData} setFormData={setFormData} />
    );
  } else if (activeTab === 'write-ai') {
    mainContent = <WriteAI formData={formData} setFormData={setFormData} />;
  } else if (activeTab === 'write-ai-bulk') {
    mainContent = <WriteAIBulk />;
  }

  return (
    <div className="flex flex-col gap-3 mt-2 bg-[#a9b7c7] rounded-xl w-full border-b border-[#e2e8f0]">
      {/* Tabs */}
      <div className="flex justify-around items-center bg-[#a9b7c7] rounded-xl border-b border-[#e2e8f0] overflow-hidden min-h-[56px] w-full">
        {tabs.map(({ key, label, disabled }) => (
          <button
            key={key}
            className={`
              px-4 py-2 text-[16px] font-bold transition-all h-full w-auto
              ${
                activeTab === key
                  ? 'text-[#2ecc71] border-b-4 border-[#2ecc71] shadow-[0_2px_8px_#2ecc71]/10'
                  : 'text-gray-400 hover:text-[#2ecc71]'
              }
            `}
            onClick={() => setActiveTab(key)}
          >
            {label}
            {key === 'write-ai-bulk' && (
              <span className="ml-2 text-[11px] text-yellow-500 font-extrabold">
                PRO ONLY
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="p-4">{mainContent}</div>
    </div>
  );
};

export default WriterBox;
