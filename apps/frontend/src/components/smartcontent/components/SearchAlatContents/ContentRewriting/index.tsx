import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Title from '../components/Title';
import Alert from '../components/ui/Alert';
import SearchAlatLayout from '../SearchAlatLayout';
import { SearchAlatIcons } from '../components/icon';
import { Icons } from '../../../icons';
import SettingOptions from '../components/SettingOptions';

const ContentRewriting = () => {
  const [activeTab, setActiveTab] = useState('Write yourself');

  const MAX_WORDS = 2000;
  const AI_QUOTA = 100000; // Example quota

  function countWords(str: string) {
    return str.trim().split(/\s+/).filter(Boolean).length;
  }

  const [step1Active, setStep1Active] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [quota, setQuota] = useState(7); // Example: 7 of 100K
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle import from file
  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      setInput(text.slice(0, 10000)); // Limit for safety
      setStep1Active(true);
    };
    reader.readAsText(file);
  };

  // Handle rewrite
  const handleRewrite = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setOutput('');
    // Simulate API call
    try {
      // Replace with real API call
      await new Promise((res) => setTimeout(res, 1800));
      setOutput(`(AI Rewrite)\n${input}`);
      setQuota((q) => Math.max(0, q - 1));
    } catch (e) {
      setOutput('Đã có lỗi xảy ra khi rewrite nội dung.');
    }
    setLoading(false);
  };

  // Word count
  const wordCount = countWords(input);

  return (
    <>
      <SearchAlatLayout
        header={
          <div className="flex justify-between">
            <Title
              title={
                <div className="flex justify-between">
                  Content Rewriter Quick Tool
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
              subtitle="If you're looking for an excellent content rewriter tool, this is the one that can help you compose 
              unique paragraphs for blogs, articles, essays, or any other kind of writing."
              gradientFrom="#2ecc71"
              gradientTo="#3a8bfd"
            />
          </div>
        }
        table={
          <div className="flex flex-row w-full bg-white rounded-2xl shadow-lg border border-[#e2e8f0] overflow-hidden min-h-[480px]">
            {/* Left Panel: Input */}
            <div className="flex-1 flex flex-col min-w-[340px] border-r border-[#f1f1f1]">
              {!step1Active ? (
                <>
                  <div
                    className="pl-[60px] pt-[80px] h-full min-h-[120px]"
                    onClick={() => setStep1Active(true)}
                  >
                    <div className="flex items-center mb-2">
                      <span className="mr-2">
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M6 19.5V17.5C6 16.1193 7.11929 15 8.5 15H15.5C16.8807 15 18 16.1193 18 17.5V19.5"
                            stroke="#A3A3A3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z"
                            stroke="#A3A3A3"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                      <span className="uppercase text-xs font-medium text-gray-400 tracking-wider">
                        STEP 1
                      </span>
                    </div>
                    <div className="font-medium text-lg text-[#444] mb-1">
                      Rewrite your Content
                    </div>
                    <div className="text-sm text-gray-400 mb-1">
                      Type or paste (CTRL + V) your text here
                    </div>
                    <div className="text-sm text-gray-400 mb-6">
                      You can also import from file
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-2 w-full px-8 py-8">
                    <button
                      className={`bg-[#3a8bfd] hover:bg-[#2563eb] text-white text-sm font-medium px-4 py-2 rounded-lg transition ${
                        !input.trim() ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={!input.trim()}
                      onClick={handleRewrite}
                      type="button"
                    >
                      Rewrite Content
                    </button>
                    <button
                      className="ml-2 text-[#3a8bfd] text-sm font-medium px-2 py-2 rounded hover:underline transition"
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Import from file
                    </button>
                    <span className="ml-auto text-xs text-gray-400">
                      {countWords(input)} / {MAX_WORDS} words
                    </span>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".txt"
                    className="hidden"
                    onChange={handleImportFile}
                  />
                </>
              ) : (
                <>
                  <div className="pt-[26px] pl-[26px]">
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2"
                        >
                          <path
                            d="M3.5 15.5L8.5 10.5M13.5 3.5C14.0523 2.94772 14.9477 2.94772 15.5 3.5C16.0523 4.05228 16.0523 4.94772 15.5 5.5L6.5 14.5L3 17L3.5 15.5L12.5 6.5L13.5 3.5Z"
                            stroke="#A3A3A3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="font-semibold text-sm text-[#222]">
                          Original Content
                        </span>
                      </div>
                      <textarea
                        className="w-full min-h-[120px] max-h-[220px] border-0 rounded-lg px-0 py-0 text-sm text-gray-700 focus:outline-none resize-none bg-transparent"
                        placeholder=""
                        maxLength={10000}
                        rows={7}
                        style={{ fontFamily: 'inherit' }}
                        value={input}
                        onChange={(e) => {
                          // Limit by word count
                          const val = e.target.value;
                          if (countWords(val) <= MAX_WORDS) setInput(val);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-2 w-full px-8 py-8">
                    <button
                      className={`bg-[#3a8bfd] hover:bg-[#2563eb] text-white text-sm font-semibold px-4 py-2 rounded-lg transition ${
                        !input.trim() ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={!input.trim()}
                      onClick={handleRewrite}
                      type="button"
                    >
                      Rewrite Content
                    </button>
                    <button
                      className="ml-2 text-[#3a8bfd] text-sm font-medium px-2 py-2 rounded hover:underline transition"
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Import from file
                    </button>
                    <span className="ml-auto text-xs text-gray-400">
                      {countWords(input)} / {MAX_WORDS} words
                    </span>
                  </div>
                </>
              )}
            </div>
            {/* Right Panel: Output (Step 2) */}
            <div
              className={`flex-1 flex flex-col min-w-[340px] transition-all duration-200 ${
                !step1Active ? '' : ''
              }`}
              style={{
                background: '#fafbfc',
                borderTopRightRadius: '16px',
                borderBottomRightRadius: '16px',
              }}
              onClick={() => setStep1Active(false)}
            >
              {!step1Active ? (
                <div
                  className="flex flex-col justify-start pl-[60px] pt-[80px] h-full min-h-[120px] select-none"
                  style={{ color: '#bdbdbd' }}
                  onClick={() => setStep1Active(true)}
                >
                  <span className="mb-4">
                    <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                      <g>
                        <path
                          d="M16 6a10 10 0 1 1-9.95 11"
                          stroke="#BDBDBD"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M6 6v5a1 1 0 0 0 1 1h5"
                          stroke="#BDBDBD"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                    </svg>
                  </span>
                  <span
                    className="uppercase text-xs font-semibold tracking-wider mb-1"
                    style={{ color: '#bdbdbd' }}
                  >
                    STEP 2
                  </span>
                  <div
                    className="font-semibold text-xl mb-2"
                    style={{ color: '#bdbdbd' }}
                  >
                    Rewritten content will appear here
                  </div>
                  <div className="text-sm" style={{ color: '#bdbdbd' }}>
                    Your content will be rewritten in seconds by our Content AI
                  </div>
                </div>
              ) : (
                <div className="pt-[26px] pl-[26px]">
                  <div className="flex items-center mb-2">
                    <Icons.Refresh />
                    <span className="font-medium text-base text-[#A3A3A3]">
                      Rewritten Content
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <span className="text-[#BDBDBD] text-sm">
                      Rewritten content will appear here…
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        }
        isTableView
        showOverlay
        halfWidth
        footer={<></>}
      />
    </>
  );
};

export default ContentRewriting;
