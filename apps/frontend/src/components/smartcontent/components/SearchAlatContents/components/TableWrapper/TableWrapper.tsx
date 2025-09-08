type TableWrapper = {
  children: React.ReactNode;
  title?: string;
  emptyText?: string;
  dataLength?: number;
  withPagination?: boolean;
  paginationContent?: React.ReactNode;
  controls?: React.ReactNode;
};

export default function TableWrapper({
  children,
  title,
  emptyText = 'No data available',
  dataLength,
  withPagination = false,
  paginationContent,
  controls,
}: TableWrapper) {
  return (
    <div className="w-full mt-7">
      <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-lg overflow-x-auto w-full">
        {/* Nếu có tiêu đề thì hiển thị */}
        {title && (
          <h2 className="text-[16px] font-semibold text-[#181c23]">{title}</h2>
        )}
        {controls && <div className="flex items-center gap-2">{controls}</div>}

        {/* Kiểm tra có data hay không */}
        {dataLength === 0 ? (
          <div className="text-center text-gray-500 py-10 font-medium text-[15px]">
            {emptyText}
          </div>
        ) : (
          <div className="w-full">{children}</div>
        )}

        {/* Nếu có pagination thì render */}
        {withPagination && (
          <div className="flex items-center justify-end px-6 py-4 bg-white border-t border-[#e2e8f0]">
            {paginationContent}
          </div>
        )}
      </div>
    </div>
  );
}
