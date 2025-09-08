import React from 'react';

interface VideoCardProps {
  src: string;
  height?: number | string; // hỗ trợ number hoặc string
  autoPlay?: boolean;
  controls?: boolean;
  className?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  src,
  height = 210,
  className = '',
}) => {
  // Nếu height là number thì thêm "px", nếu là string thì giữ nguyên
  const computedHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={`w-full rounded-2xl overflow-hidden shadow-xl bg-white border border-[#e2e8f0] ${className}`}
    >
      <div className="relative group">
        <div
          className="relative group w-full"
          style={{
            height: computedHeight,
            maxHeight:
              typeof height === 'number' ? `${height + 30}px` : undefined, // chỉ cộng khi là number
            transition: 'box-shadow 0.3s',
          }}
        >
          <iframe
            src={src}
            width="100%"
            height={computedHeight}
            className="object-cover w-full h-full rounded-2xl transition-transform duration-300"
            style={{ background: '#000' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Tutorial Video"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
