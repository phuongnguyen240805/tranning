'use client';

import Image from 'next/image';
import { useState } from 'react';

type VideoSettingsProps = {
  VideoSettings?: any;
  handleVideoChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

type ListTopics = {
  name: string;
  img: string;
  selected: boolean;
}[];

const listTopics: ListTopics = [
  {
    name: 'Người thật',
    img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=400&h=400&fit=facearea',
    selected: true,
  },
  {
    name: 'Hoạt hình Nhật Bản (Anime)',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    selected: false,
  },
  {
    name: 'Aztec',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    selected: false,
  },
  {
    name: 'Hoạt hình Trung Quốc (Donghua)',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    selected: false,
  },
  {
    name: 'Tranh thủy mặc',
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=400&q=80',
    selected: false,
  },
];

export default function VideoSettings({}: VideoSettingsProps) {
  const [topic, setTopic] = useState<ListTopics>(listTopics);

  const handleSelectStyle = (selectedStyle: ListTopics[number]) => {
    setTopic((prev) =>
      prev.map((style) =>
        style.name === selectedStyle.name
          ? { ...style, selected: !style.selected }
          : { ...style, selected: false }
      )
    );
  };

  return (
    <div className="w-full mt-6 mb-2 grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Left: Video & Subtitle Settings (5/12) */}
      <div className="col-span-12 md:col-span-5 bg-[#f8f9ff] border border-[rgb(66,67,254)] rounded-xl p-4 sm:p-6 shadow flex flex-col gap-5 w-full min-w-0">
        <div className="grid grid-cols-1 gap-6">
          {/* Định dạng video */}
          <div>
            <label className="block text-sm font-semibold text-[rgb(66,67,254)] mb-1">
              Định dạng video
            </label>
            <select className="w-full border border-[rgb(66,67,254)] rounded-lg px-3 py-2 text-base focus:ring-2 focus:ring-[rgb(66,67,254)] bg-white font-medium text-[rgb(66,67,254)]">
              <option>Ảnh hoạt hình AI</option>
              <option>Ảnh thật AI</option>
              <option>Ảnh tĩnh</option>
            </select>
          </div>

          {/* Giọng đọc */}
          <div>
            <label className="block text-sm font-semibold text-[rgb(66,67,254)] mb-1">
              Giọng đọc
            </label>
            <input
              className="w-full border border-[rgb(66,67,254)] rounded-lg px-3 py-2 text-base bg-gray-100 text-gray-400 font-medium"
              placeholder="Chọn giọng đọc..."
              disabled
            />
          </div>

          {/* Tốc độ chuyển cảnh */}
          <div>
            <label className="block text-sm font-semibold text-[rgb(66,67,254)] mb-1">
              Tốc độ chuyển cảnh
            </label>
            <select className="w-full border border-[rgb(66,67,254)] rounded-lg px-3 py-2 text-base focus:ring-2 focus:ring-[rgb(66,67,254)] bg-white font-medium text-[rgb(66,67,254)]">
              <option>Vừa</option>
              <option>Chậm</option>
              <option>Nhanh</option>
            </select>
          </div>

          {/* Tỉ lệ khung hình */}
          <div>
            <label className="block text-sm font-semibold text-[rgb(66,67,254)] mb-1">
              Tỉ lệ khung hình
            </label>
            <select className="w-full border border-[rgb(66,67,254)] rounded-lg px-3 py-2 text-base focus:ring-2 focus:ring-[rgb(66,67,254)] bg-white font-medium text-[rgb(66,67,254)]">
              <option>Dọc</option>
              <option>Ngang</option>
              <option>Vuông</option>
            </select>
          </div>
        </div>

        {/* Hiển thị phụ đề */}
        <div className="flex items-center gap-3 mt-2 bg-white border border-[rgb(66,67,254)] rounded-lg px-4 py-2">
          <input
            type="checkbox"
            id="showSubtitle"
            className="accent-[rgb(66,67,254)] w-5 h-5"
            defaultChecked
          />
          <label
            htmlFor="showSubtitle"
            className="text-base font-medium text-[rgb(66,67,254)] select-none"
          >
            Hiển thị phụ đề
          </label>
        </div>

        {/* Subtitle Settings */}
        <div className="grid grid-cols-1 gap-6">
          {/* Vị trí phụ đề */}
          <div>
            <label className="block text-sm font-semibold text-[rgb(66,67,254)] mb-1">
              Vị trí phụ đề
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <select className="w-full sm:w-1/2 border border-[rgb(66,67,254)] rounded-lg px-2 py-1.5 text-base focus:ring-2 focus:ring-[rgb(66,67,254)] bg-white font-medium text-[rgb(66,67,254)]">
                <option>Dọc : Dưới</option>
                <option>Dọc : Trên</option>
              </select>
              <select className="w-full sm:w-1/2 border border-[rgb(66,67,254)] rounded-lg px-2 py-1.5 text-base focus:ring-2 focus:ring-[rgb(66,67,254)] bg-white font-medium text-[rgb(66,67,254)]">
                <option>Ngang : Giữa</option>
                <option>Ngang : Trái</option>
                <option>Ngang : Phải</option>
              </select>
            </div>
          </div>
          {/* Viền chữ phụ đề */}
          <div>
            <label className="block text-sm font-semibold text-[rgb(66,67,254)] mb-1">
              Viền chữ phụ đề
            </label>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[rgb(66,67,254)] text-base">Độ dày</span>
              <input
                type="number"
                min={1}
                max={5}
                defaultValue={2}
                className="w-14 border border-[rgb(66,67,254)] rounded-lg px-2 py-1 text-base focus:ring-2 focus:ring-[rgb(66,67,254)] bg-white text-[rgb(66,67,254)]"
              />
              <span className="text-[rgb(66,67,254)] text-base">Màu</span>
              <input
                type="color"
                defaultValue="#000000"
                className="w-8 h-8 border border-[rgb(66,67,254)] rounded"
              />
            </div>
          </div>
        </div>

        {/* Font chữ phụ đề */}
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[rgb(66,67,254)] mb-1">
              Font chữ phụ đề
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <select className="w-full sm:w-1/2 border border-[rgb(66,67,254)] rounded-lg px-2 py-1.5 text-base focus:ring-2 focus:ring-[rgb(66,67,254)] bg-white font-medium text-[rgb(66,67,254)]">
                <option>Vừa</option>
                <option>Nhỏ</option>
                <option>Lớn</option>
              </select>
              <div className="flex items-center gap-1 px-2 py-1.5 border border-[rgb(66,67,254)] rounded-lg bg-white">
                <input
                  type="checkbox"
                  id="subtitleBold"
                  className="accent-[rgb(66,67,254)]"
                  defaultChecked
                />
                <label
                  htmlFor="subtitleBold"
                  className="text-[rgb(66,67,254)] text-base font-semibold select-none"
                >
                  Đậm
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Zone + Phong cách Video */}
      <div className="col-span-12 md:col-span-7 min-w-0 flex flex-col gap-8">
        {/* Nhạc nền */}
        <div>
          <label className="block text-sm font-semibold text-[rgb(66,67,254)] mb-1">
            Chọn nhạc nền&nbsp;
            <span className="font-normal text-gray-700">- Chưa chọn</span>
          </label>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-[rgb(66,67,254)] text-base font-medium">
                Danh mục :
              </span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-base focus:ring-2 focus:ring-[rgb(66,67,254)] bg-white font-medium text-gray-700 min-w-[120px]">
                <option>Tất cả</option>
                <option>Nhạc vui</option>
                <option>Nhạc buồn</option>
                <option>Nhạc sôi động</option>
                <option>Nhạc nhẹ nhàng</option>
              </select>
            </div>
            {/* input file */}
            <label
              htmlFor="audio-upload"
              className="bg-[#19c37d] hover:bg-[#16a06a] text-white font-semibold px-5 py-2 rounded-lg shadow transition whitespace-nowrap cursor-pointer flex items-center justify-center"
              style={{
                padding: '0.5rem 1.25rem',
                minWidth: 180,
                textAlign: 'center',
              }}
            >
              Upload nhạc nền/MP3
              <input
                id="audio-upload"
                type="file"
                accept="audio/mp3,audio/mpeg"
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Upload clip quảng cáo */}
        <div>
          <label className="block text-sm font-semibold text-[rgb(66,67,254)] mb-2">
            Upload clip quảng cáo của bạn cuối video (tối đa 50MB)
          </label>
          <div
            className="relative flex flex-col items-center justify-center border-2 border-dashed border-[rgb(66,67,254)] rounded-xl bg-white py-8 px-4 transition-all duration-200 hover:shadow-lg hover:border-solid cursor-pointer"
            style={{ minHeight: 120 }}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // handleFileDrop(e.dataTransfer.files[0]);
            }}
            onClick={() => document.getElementById('ad-upload-input')?.click()}
          >
            <div className="flex flex-col items-center gap-2">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                <rect
                  width="24"
                  height="24"
                  rx="12"
                  fill="rgb(66,67,254)"
                  fillOpacity="0.08"
                />
                <path
                  d="M12 16V8M12 8L9 11M12 8l3 3"
                  stroke="rgb(66,67,254)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[rgb(66,67,254)] font-medium text-base text-center">
                Kéo & thả file video hoặc ảnh vào đây
              </span>
              <span className="text-xs text-gray-500 text-center">
                Hỗ trợ MP4, MOV, JPG, PNG. Tối đa 50MB.
              </span>
              <button
                type="button"
                className="mt-2 px-4 py-1.5 bg-[rgb(66,67,254)] text-white rounded-lg font-semibold shadow hover:bg-[rgb(46,47,200)] transition"
              >
                Chọn file
              </button>
            </div>
            <input
              id="ad-upload-input"
              type="file"
              accept="video/*,image/*"
              className="hidden"
              // onChange={handleFileChange}
            />
          </div>
        </div>

        {/* Phong cách Video */}
        <div>
          <label className="block text-sm font-semibold text-[rgb(66,67,254)] mb-2">
            Phong cách Video
            <span className="text-xs font-normal text-gray-500">
              (Khuyến nghị chọn phong cách giống người thật 100%)
            </span>
          </label>
          <div className="flex flex-col gap-2 flex-1">
            {/* Grid các style */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-70 overflow-y-auto p-3 rounded-xl bg-white shadow-lg 
                  border border-[rgb(66,67,254)] transition-all duration-200 scrollbar-thin scrollbar-thumb-[rgb(66,67,254)] 
                  scrollbar-track-gray-100"
            >
              {topic.map((style) => (
                <button
                  key={style.name}
                  type="button"
                  className={`
                    relative flex flex-col items-center justify-end
                    h-40 w-full rounded-2xl border-2 cursor-pointer select-none transition-all duration-200 outline-none 
                    overflow-hidden
                    ${
                      style.selected
                        ? 'border-[rgb(66,67,254)] shadow-xl ring-2 ring-[rgb(66,67,254)]'
                        : 'border-gray-200 bg-gray-100 hover:bg-white hover:border-[rgb(66,67,254)] hover:shadow-lg'
                    }
                    focus:ring-2 focus:ring-[rgb(66,67,254)] active:scale-95
                  `}
                  style={{
                    backgroundImage: `url(${style.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  onClick={() => handleSelectStyle(style)}
                  tabIndex={0}
                  aria-pressed={style.selected}
                  aria-label={`Chọn phong cách ${style.name}`}
                  role="button"
                >
                  <div
                    className={`
                      absolute inset-0 transition-all duration-200
                      ${
                        style.selected
                          ? 'bg-[rgba(66,67,254,0.10)]'
                          : 'bg-white/60'
                      }
                    `}
                  />
                  {style.selected && (
                    <span
                      className="absolute top-2 right-2 bg-[rgb(66,67,254)] text-white rounded-full w-7 h-7 flex 
                    items-center justify-center text-lg shadow-lg animate-bounce z-10"
                    >
                      ✓
                    </span>
                  )}
                  <span
                    className={`
                      relative z-20 mb-2 px-2 py-1 rounded-md bg-white/90 text-[15px] font-semibold text-center truncate
                      transition-colors duration-200
                      ${
                        style.selected
                          ? 'text-[rgb(66,67,254)] font-bold shadow'
                          : 'text-gray-700'
                      }
                      max-w-[90%] bottom-[10px] left-1/2 translate-x-[-50%] absolute pointer-events-none
                    `}
                  >
                    {style.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* btn submit */}
      <div className="col-span-12 mt-6 flex">
        <button
          className="w-full text-center text-lg font-bold py-4 px-8 rounded-md cursor-pointer 
        bg-[rgb(66,67,254)] text-white hover:bg-[rgb(60,60,223)] hover:shadow-lg transition duration-100"
        >
          Tạo video
        </button>
      </div>
    </div>
  );
}
