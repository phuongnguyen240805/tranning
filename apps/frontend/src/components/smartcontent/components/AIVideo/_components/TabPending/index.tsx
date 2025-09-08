import { useState } from 'react';

function TabPending() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <div>
      <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
        <span>⏳</span> Danh sách lời thoại đang chờ
      </h2>
    </div>
  ) : (
    <></>
  );
}

export default TabPending;
