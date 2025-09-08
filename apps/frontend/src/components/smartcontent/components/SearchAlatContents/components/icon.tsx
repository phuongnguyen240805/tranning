export type IconProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const SearchAlatIcons = {
  Sort: ({ width = 22, height = 22, className }: IconProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      className="inline-block opacity-60 group-hover:opacity-100 transition"
    >
      <path
        d="M7 8l3 3 3-3"
        stroke="#A0A0A0"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
      />
    </svg>
  ),
  Box: ({ width = 56, height = 56, className }: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none">
      <rect
        x="8"
        y="16"
        width="32"
        height="20"
        rx="3"
        stroke="#e2e8f0"
        strokeWidth="2"
        fill="#f7fafc"
      />
      <path
        d="M8 16l8-8h16l8 8"
        stroke="#e2e8f0"
        strokeWidth="2"
        fill="#f7fafc"
      />
      <rect
        x="20"
        y="24"
        width="8"
        height="8"
        rx="2"
        fill="#f7fafc"
        stroke="#e2e8f0"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Drop: ({ width = 18, height = 18, className }: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 20 20">
      <path
        d="M5.5 8l4.5 4.5L14.5 8"
        stroke="#6b7280"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
      />
    </svg>
  ),
  Search: ({ width = 22, height = 22, className }: IconProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <circle
        cx="9"
        cy="9"
        r="7"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M15 15L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  ),
  MoreOptions: ({ width, height, className }: IconProps) => (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="5" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="19" r="1.5" />
    </svg>
  ),
  ArrowUp: ({ width = 22, height = 22, className }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      style={{ background: 'transparent', color: 'white' }}
    >
      <path
        d="M10 22L22 10M10 10H22V22"
        stroke="#C2BDB4"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="currentColor"
      />
    </svg>
  ),
  Folder: ({ width = 22, height = 22, className }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      style={{ background: 'transparent', color: 'white' }}
    >
      <path
        d="M3 6.75A1.75 1.75 0 0 1 4.75 5h4.379a2 2 0 0 1 1.414.586l1.293 1.293A2 2 0 0 0 13.25 7.5h6A1.75 1.75 0 0 1 21 9.25v8A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z"
        stroke="#C2BDB4"
        strokeWidth="1.5"
        fill="currentColor"
      />
      <path
        d="M3 7.5h18"
        stroke="#C2BDB4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  Setting: ({ width = 18, height = 18, className }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      className="inline-block"
      aria-hidden="true"
    >
      <path
        d="M10 13.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666Z"
        stroke="#64748b"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 10.833v-1.666a1.25 1.25 0 0 0-.908-1.2l-1.025-.342a1.25 1.25 0 0 1-.792-1.667l.342-1.025a1.25 1.25 0 0 0-1.583-1.583l-1.025.342a1.25 1.25 0 0 1-1.667-.792l-.342-1.025a1.25 1.25 0 0 0-2.4 0l-.342 1.025a1.25 1.25 0 0 1-1.667.792l-1.025-.342a1.25 1.25 0 0 0-1.583 1.583l.342 1.025a1.25 1.25 0 0 1-.792 1.667l-1.025.342a1.25 1.25 0 0 0-.908 1.2v1.666c0 .54.35 1.02.868 1.183l1.025.342a1.25 1.25 0 0 1 .792 1.667l-.342 1.025a1.25 1.25 0 0 0 1.583 1.583l1.025-.342a1.25 1.25 0 0 1 1.667.792l.342 1.025a1.25 1.25 0 0 0 2.4 0l.342-1.025a1.25 1.25 0 0 1 1.667-.792l1.025.342a1.25 1.25 0 0 0 1.583-1.583l-.342-1.025a1.25 1.25 0 0 1 .792-1.667l1.025-.342a1.25 1.25 0 0 0 .908-1.183Z"
        stroke="#64748b"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Shopify: ({ width = 18, height = 18, className }: IconProps) => (
    <svg width={width}
    height={height} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="shopify" className="svg-inline--fa fa-shopify " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" color="#FFFFFF"><path fill="currentColor" d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"></path></svg>
  ),
  ArrowRight: ({ width = 18, height = 18, className }: IconProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      className="inline-block"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
};
