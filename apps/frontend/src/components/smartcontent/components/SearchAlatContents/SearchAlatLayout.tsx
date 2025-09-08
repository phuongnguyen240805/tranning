import React, { Suspense, ReactNode } from 'react';
import { SearchAlatIcons } from './components/icon'; // Assume this exists
import clsx from 'clsx';

type LayoutProps = {
  header?: ReactNode; // Slot for top hero/title section
  sidebar?: ReactNode; // Optional slot for right column (e.g., video/tutorial)
  main?: ReactNode; // Optional slot for pre-table content (e.g., search bar, filters)
  table?: ReactNode; // Optional slot for table content (e.g., articles, topical maps)
  footer?: ReactNode; // Optional slot for bottom content (e.g., powered by)
  className?: string; // Override wrapper classes
  showOverlay?: boolean; // Toggle overlay for table (default: false)
  isTableView?: boolean; // Apply table styles (border, shadow) if true (default: false)
  halfWidth?: boolean;
  tableClassName?: string; // Override table container styles
  hiddenBg?: boolean;
};

export default function SearchAlatLayout({
  header,
  sidebar,
  main,
  table,
  footer,
  className,
  showOverlay = false,
  isTableView = false,
  halfWidth = false,
  tableClassName,
  hiddenBg,
}: LayoutProps) {
  return (
    <section
      className={clsx(
        'flex flex-col gap-6 h-full min-h-0 flex-1 w-full items-center font-sans pt-10 ',
        className
      )}
    >
      {/* Hero Section */}
      <div
        className={`px-10 md:px-10 w-full max-w-none ${
          sidebar && 'grid grid-cols-1 md:grid-cols-3 gap-6'
        }`}
      >
        <div
          className={`${
            sidebar && 'col-span-1 md:col-span-2 flex flex-col gap-6 min-w-0'
          }${halfWidth && ' w-full md:w-1/2'}`}
        >
          {/* Header Slot */}
          {header}

          {/* Main Slot (e.g., search bar, filters, alerts) */}
          {main && <Suspense fallback={<div>Loading...</div>}>{main}</Suspense>}
        </div>

        {/* Sidebar Slot */}
        {sidebar && (
          <div className="col-span-1 flex flex-col items-center mt-8 md:mt-0 w-full">
            {sidebar}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-0 w-full mt-4">
        <div className="px-0 w-full my-4 overflow-x-auto">
          {/* Table Slot with Optional Overlay and Styles */}
          {table && (
            <div className="relative">
              {showOverlay && (
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gray z-0 pointer-events-none"></div>
              )}
              <div className="relative z-1 px-10 w-full">
                {isTableView ? (
                  <div
                    className={clsx(
                      `rounded-2xl shadow-lg w-full overflow-x-auto ${
                        tableClassName
                          ? tableClassName
                          : 'bg-white border border-[#e2e8f0]'
                      }`
                    )}
                  >
                    <Suspense
                      fallback={
                        <div className="animate-pulse bg-gray-200 h-32 rounded-lg" />
                      }
                    >
                      {table}
                    </Suspense>
                  </div>
                ) : (
                  <Suspense
                    fallback={
                      <div className="animate-pulse bg-gray-200 h-32 rounded-lg" />
                    }
                  >
                    {table}
                  </Suspense>
                )}
              </div>
            </div>
          )}

          {/* Footer Slot */}
          {footer ? (
            <div
              className={`w-full py-10 bg-gray ${
                hiddenBg && 'p-0 bg-transparent'
              }`}
            >
              {footer}
            </div>
          ) : (
            <div className="px-10 py-6 flex flex-row gap-2 bg-gray text-white font-medium">
              <span>
                <SearchAlatIcons.ArrowUp />
              </span>
              <span className="font-medium">Powered by SearchAtlas</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
