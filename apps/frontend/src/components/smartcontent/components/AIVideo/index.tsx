'use client';

import React, { useState } from 'react';

import TabCreateVideo from './_components/TabCreateVideo';
import Button from './_components/ui/Button';
import TabPending from './_components/TabPending';
import TabCompleted from './_components/TabCompleted';

type ScriptStatus = string;

type Tabs = {
  key: string;
  label: string;
  icon: string;
  count: null | number;
}[];

const AIVideoGenerator = () => {
  const [tab, setTab] = useState<ScriptStatus>('creating');
  const [scriptList, setScriptList] = useState<any[]>([]);
  const [videoList, setVideoList] = useState<any[]>([]);
  const [alert, setAlert] = useState<string | null>(null);

  const tabs: Tabs = [
    {
      key: 'creating',
      label: 'Tạo Video',
      icon: '🎥',
      count: null,
    },
    {
      key: 'pending',
      label: 'Đang Chờ',
      icon: '⏳',
      count: scriptList.length,
    },
    {
      key: 'done',
      label: 'Hoàn Tất',
      icon: '✅',
      count: videoList.length,
    },
  ];

  // Main Content logic
  let mainContent = null;
  if (tab === 'creating') {
    mainContent = <TabCreateVideo setAlert={setAlert} />;
  } else if (tab === 'pending') {
    mainContent = <TabPending />;
  } else if (tab === 'done') {
    mainContent = <TabCompleted />;
  }

  return (
    <div className="p-5 min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Top Tabs */}
      <div className="flex gap-2 mb-4 sticky top-0 z-10 bg-[#f8f9ff] py-3">
        {tabs.map(({ key, label, icon, count }) => (
          <Button
            key={key}
            variant="primary"
            fullWidth
            active={tab === key}
            onClick={() => setTab(key)}
            className="flex items-center justify-center gap-2"
          >
            <span>
              {icon} {label}
            </span>
            {count !== null && (
              <span className="ml-1 text-base font-normal">({count})</span>
            )}
          </Button>
        ))}
      </div>

      {/* Alert */}
      <div className="mb-2">
        <div
          className="bg-[#ffeaea] border border-[#ff6b6b] text-[#b91c1c] px-4 py-2 rounded-lg text-sm font-medium"
          style={{ fontFamily: 'Inter, Arial, sans-serif' }}
        >
          Vui lòng hạn chế tạo kịch bản về một nhân vật cụ thể, sản phẩm cụ thể
          hay bối cảnh cụ thể có thật nào đó, vì AI có thể làm sai lệch hình ảnh
          với thực tế!
        </div>
        {alert && (
          <div
            className="mt-2 bg-[#fffbe6] border border-[#ffe066] text-[#b59f00] px-4 py-2 rounded-lg text-sm font-medium"
            style={{ fontFamily: 'Inter, Arial, sans-serif' }}
          >
            {alert}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">{mainContent}</div>

      {/* Nút hỗ trợ/phản hồi */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded shadow flex items-center gap-2">
          <span className="text-lg">💬</span>
        </button>
      </div>
    </div>
  );
};

export default AIVideoGenerator;
