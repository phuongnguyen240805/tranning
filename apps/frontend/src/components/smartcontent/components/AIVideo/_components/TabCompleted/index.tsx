import { useState } from 'react';

function TabCompleted() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <div>
        <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
          <span>✅</span> Chưa có video hoàn tất
        </h2>
      </div>
  ) : (
    <></>
  );
}

export default TabCompleted;
