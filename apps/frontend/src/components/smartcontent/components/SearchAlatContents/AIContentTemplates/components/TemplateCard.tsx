import React, { useState } from 'react';
import SheetWrapper from '../../components/SheetWrapper';
import { IconArrowLeft, IconArrowRight, IconX } from '@tabler/icons-react';
import InputField from '../../components/FormHandle/InputField';

export interface TemplateCardProps {
  title: string;
  description: string;
  onClick: () => void;
  icon?: React.ReactNode;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  title,
  description,
  onClick,
  icon,
  isFavorite = false,
  onToggleFavorite,
}) => {
  const [prompt, setPrompt] = useState('');
  const [numOutputs, setNumOutputs] = useState(1);
  const [outputs, setOutputs] = useState<string[]>([]);
  const [tab, setTab] = useState<'new' | 'history'>('new');
  const [history, setHistory] = useState<string[][]>([]);

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    // Fake AI generation logic (demo)
    const generated = Array.from(
      { length: numOutputs },
      (_, i) => `Generated result ${i + 1} for: "${prompt}"`
    );

    setOutputs(generated);
    setHistory((prev) => [...prev, generated]);
    setTab('new');
  };

  const handleClear = () => {
    setPrompt('');
    setOutputs([]);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col gap-4 relative border border-[#f1f5f9] min-h-[240px]">
      {/* Icon and Favorite */}
      <div className="flex items-start justify-between">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#f3f4f6]">
          {icon ? (
            icon
          ) : (
            // Default icon (chat bubble)
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="#E5E7EB" />
              <g>
                <rect x="6" y="8" width="16" height="12" rx="4" fill="#fff" />
                <ellipse cx="10" cy="14" rx="1" ry="1" fill="#9CA3AF" />
                <ellipse cx="14" cy="14" rx="1" ry="1" fill="#9CA3AF" />
                <ellipse cx="18" cy="14" rx="1" ry="1" fill="#9CA3AF" />
              </g>
            </svg>
          )}
        </div>
        <button
          type="button"
          className="p-1 rounded-full hover:bg-gray-100 transition"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          onClick={onToggleFavorite}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 20 20"
            fill={isFavorite ? '#22c55e' : 'none'}
            stroke="#64748b"
            strokeWidth="1.5"
          >
            <path
              d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill={isFavorite ? '#22c55e' : 'none'}
            />
          </svg>
        </button>
      </div>
      {/* Title & Description */}
      <div>
        <h3 className="text-[18px] font-medium text-[#181c23] mb-1">
          {title}
        </h3>
        <p className="text-[15px] text-[#64748b] leading-snug">{description}</p>
      </div>
      {/* Action Button */}
      <div className="mt-auto">
        <SheetWrapper
          sheetTrigger={
            <button
              onClick={onClick}
              className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium rounded-md py-2 text-[16px] transition"
            >
              Try this template
            </button>
          }
          sheetBody={
            <div className="flex w-full h-screen bg-white">
              {/* Sidebar */}
              <div className="w-1/2 border-r border-gray-300 flex flex-col px-8 py-7 bg-white shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded bg-green-200">
                    <IconArrowLeft width={7} height={7} />
                  </div>
                  <span className="font-medium text-[#181c23] text-[15px]">
                    Amazon Product Description (paragraph)
                  </span>
                  <span className="ml-auto text-xs text-[#181c23] font-medium">
                    AI Quota:{' '}
                    <span className="text-[#181c23] font-medium">71,000</span>
                  </span>
                </div>
                <div className="text-[13px] text-[#181c23] mb-5 mt-1">
                  Create compelling product descriptions for Amazon listings.
                </div>
                <div className="mb-3">
                  <InputField
                    type="input"
                    label="Product name"
                    placeholder="Example: Khanda Ortholite 2025 Insoles"
                    variant="secondary"
                    icon={null}
                    className="w-full text-sm max-h-[42px]"
                    disabled={false}
                    onChange={(e) => {}}
                  />
                </div>
                <div className="mb-3">
                  <InputField
                    type="textarea"
                    label="Key features/traits, uses"
                    placeholder="E.g. Eco-friendly & sustainable, moisture balance, triple-layer breathability, anti-bacterial & light..."
                    variant="secondary"
                    icon={null}
                    className="w-full text-sm h-[72px]"
                    value={''}
                    onChange={(e) => {}}
                  />
                </div>
                <div className="mb-3">
                  <InputField
                    type="input"
                    label="Tone of voice"
                    placeholder="Witty"
                    variant="secondary"
                    icon={null}
                    className="w-full text-sm max-h-[42px]"
                    value={''}
                    onChange={(e) => {}}
                  />
                </div>
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2">
                    <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-200 text-green-800 text-xs font-medium border border-green-300 shadow-sm">
                      <span className="inline-block">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <g>
                            <circle cx="8" cy="8" r="8" fill="#A7F3D0" />
                            <path
                              d="M6.5 10.5l-1-1 4-4 1 1-4 4z"
                              fill="#047857"
                            />
                            <circle
                              cx="8"
                              cy="8"
                              r="5"
                              stroke="#047857"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </span>
                      Yoda
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-red-200 text-red-700 text-xs font-medium border border-red-300 shadow-sm">
                      <span className="inline-block">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <g>
                            <circle cx="8" cy="8" r="8" fill="#FECACA" />
                            <path
                              d="M8 4l2 4h-4l2-4zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              fill="#DC2626"
                            />
                          </g>
                        </svg>
                      </span>
                      Tony Stark
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-xs font-medium border border-blue-300 shadow-sm">
                      <span className="inline-block">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <g>
                            <circle cx="8" cy="8" r="8" fill="#E0E7FF" />
                            <path
                              d="M8 4a2 2 0 012 2v1h-4V6a2 2 0 012-2zm-2 4h4v4H6V8z"
                              fill="#3730A3"
                            />
                          </g>
                        </svg>
                      </span>
                      Shakespeare
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-50 border border-gray-300 text-[#181c23] text-xs font-medium shadow-sm">
                      Casual
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-50 border border-gray-300 text-[#181c23] text-xs font-medium shadow-sm">
                      Professional
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-50 border border-gray-300 text-[#181c23] text-xs font-medium shadow-sm">
                      Funny
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-50 border border-gray-300 text-[#181c23] text-xs font-medium shadow-sm">
                      Angry
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-50 border border-gray-300 text-[#181c23] text-xs font-medium shadow-sm">
                      + 9
                    </button>
                  </div>
                </div>
                <div className="flex items-center mt-2 gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-[13px] text-[#181c23] px-3 py-1 rounded border border-gray-200 hover:bg-gray-100 transition"
                  >
                    <IconX width={5} height={5} />
                    Clear inputs
                  </button>
                  <input
                    type="number"
                    min={1}
                    value={numOutputs}
                    onChange={(e) => setNumOutputs(Number(e.target.value))}
                    className="w-12 border border-gray-300 rounded text-center text-sm bg-white text-[#181c23]"
                  />
                  <button
                    type="button"
                    className="ml-auto bg-purple-600 hover:bg-purple-700 text-white text-[14px] font-medium px-5 py-2 rounded transition flex items-center gap-2 shadow"
                    onClick={handleGenerate}
                  >
                    Generate AI Content
                    <IconArrowRight width={7} height={7} />
                  </button>
                </div>
              </div>

              {/* Main content */}
              <div className="w-1/2 flex flex-col bg-white shadow-md">
                {/* Tabs */}
                <div className="border-b border-gray-300 px-6 flex gap-6 bg-white">
                  <button
                    className={`py-3 text-sm font-medium transition ${
                      tab === 'new'
                        ? 'border-b-2 border-purple-600 text-purple-700 bg-purple-50'
                        : 'text-[#181c23] hover:bg-gray-100'
                    }`}
                    onClick={() => setTab('new')}
                  >
                    New output
                  </button>
                  <button
                    className={`py-3 text-sm font-medium transition ${
                      tab === 'history'
                        ? 'border-b-2 border-purple-600 text-purple-700 bg-purple-50'
                        : 'text-[#181c23] hover:bg-gray-100'
                    }`}
                    onClick={() => setTab('history')}
                  >
                    History
                  </button>
                </div>

                {/* Content area */}
                <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
                  {tab === 'new' ? (
                    outputs.length > 0 ? (
                      <div className="space-y-4">
                        {outputs.map((out, idx) => (
                          <div
                            key={idx}
                            className="p-4 bg-white shadow rounded border border-gray-200"
                          >
                            {out}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-400">
                        <svg
                          width="32"
                          height="32"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="mr-2"
                        >
                          <path
                            d="M13 2.05v2.02A7.002 7.002 0 0120 11h2.01A9.003 9.003 0 0013 2.05zM11 2.05A9.003 9.003 0 001.99 11H4A7.002 7.002 0 0111 4.07V2.05zM4.07 13H2.05A9.003 9.003 0 0011 21.95V19.93A7.002 7.002 0 014.07 13zM13 19.93v2.02A9.003 9.003 0 0021.95 13H19.93A7.002 7.002 0 0113 19.93z"
                            fill="#cbd5e1"
                          />
                        </svg>
                        <span className="text-[#181c23]">
                          Fill the input fields and generate unique content.
                        </span>
                      </div>
                    )
                  ) : (
                    <div className="space-y-6">
                      {history.length > 0 ? (
                        history.map((batch, batchIdx) => (
                          <div key={batchIdx} className="space-y-2">
                            <div className="text-xs text-[#181c23]">
                              Run {batchIdx + 1}
                            </div>
                            {batch.map((item, i) => (
                              <div
                                key={i}
                                className="p-4 bg-white shadow rounded border border-gray-200 text-sm"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        ))
                      ) : (
                        <div className="flex h-full items-center justify-center text-gray-400">
                          <span className="text-[#181c23]">No history yet.</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default TemplateCard;
