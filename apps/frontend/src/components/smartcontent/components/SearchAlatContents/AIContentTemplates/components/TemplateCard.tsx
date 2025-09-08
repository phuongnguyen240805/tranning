import React from 'react';
import SheetWrapper from '../../components/SheetWrapper';

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
        <h3 className="text-[18px] font-semibold text-[#181c23] mb-1">
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
              className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold rounded-md py-2 text-[16px] transition"
            >
              Try this template
            </button>
          }
          sheetBody={
          <div className="flex flex-col md:flex-row h-[520px] w-full bg-[#f8fafc] rounded-xl overflow-hidden">
            {/* Left Panel */}
            <div className="w-full md:w-1/2 border-r border-[#e5e7eb] flex flex-col px-7 py-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 flex items-center justify-center rounded bg-[#e0f7ef]">
                  <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                    <rect x="2" y="2" width="16" height="16" rx="4" fill="#22c55e" />
                    <path d="M6 10h8M10 6v8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="font-medium text-[#181c23] text-[15px]">AI Image Generation</span>
                <span className="ml-auto text-xs text-[#94a3b8] font-medium">AI Quota: <span className="text-[#181c23] font-semibold">71,000</span></span>
              </div>
              <div className="text-[13px] text-[#64748b] mb-5 mt-1">
                Create custom images that are the perfect fit for your content.
              </div>
              <div className="mb-3">
                <label className="block text-[13px] text-[#64748b] mb-1 font-medium" htmlFor="prompt">
                  Prompt
                </label>
                <textarea
                  id="prompt"
                  className="w-full min-h-[60px] max-h-[120px] border border-[#e5e7eb] rounded-md px-3 py-2 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#22c55e] resize-none bg-white placeholder:text-[#b0b8c1]"
                  placeholder="For best results, provide a detailed description, e.g. Polar dogs in the middle of a busy Tokyo walking in tall red velvet coats, 4K, high resolution"
                />
              </div>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="text-[13px] text-[#64748b] px-3 py-1 rounded border border-transparent hover:bg-[#f1f5f9] transition"
                >
                  × Clear Inputs
                </button>
                <button
                  type="button"
                  className="ml-auto bg-[#3a8bfd] hover:bg-[#2563eb] text-white text-[14px] font-semibold px-5 py-2 rounded transition flex items-center gap-2"
                >
                  Generate AI Content
                  <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                    <path d="M5 10h10M13 6l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            {/* Right Panel */}
            <div className="w-full md:w-1/2 flex flex-col bg-white h-full">
              <div className="border-b border-[#e5e7eb] flex items-center px-8 pt-6 pb-0">
                <button className="text-[15px] font-semibold text-[#181c23] border-b-2 border-[#3a8bfd] pb-2 px-2 mr-4 bg-transparent">
                  New output
                </button>
                <button className="text-[15px] font-medium text-[#64748b] pb-2 px-2 bg-transparent">
                  History
                </button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center px-8">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="mb-2">
                    <svg width="44" height="44" fill="none" viewBox="0 0 44 44">
                      <rect x="2" y="2" width="40" height="40" rx="12" fill="#f1f5f9"/>
                      <path d="M22 14v8l6 3" stroke="#3a8bfd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-[#64748b] text-[15px] font-medium text-center max-w-[260px]">
                    Fill the input fields and generate unique content.
                  </div>
                </div>
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
