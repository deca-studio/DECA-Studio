import React from 'react';

const iconProps = {
  className: "w-8 h-8",
  "aria-hidden": "true" as const,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 2,
};

export const BrandingIcon: React.FC = () => (
  <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.663 2.258a2.25 2.25 0 012.674 0l8.25 4.5a2.25 2.25 0 011.083 1.943V15a2.25 2.25 0 01-1.083 1.943l-8.25 4.5a2.25 2.25 0 01-2.674 0l-8.25-4.5A2.25 2.25 0 012.25 15V8.698a2.25 2.25 0 011.083-1.943l8.25-4.5z" />
  </svg>
);

export const UiUxIcon: React.FC = () => (
  <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
);

export const MotionIcon: React.FC = () => (
  <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
  </svg>
);

export const SocialMediaIcon: React.FC = () => (
  <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.633 10.5c.806 0 1.533-.422 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.448 7.25c-.288.54-.738.98-1.254 1.332a11.901 11.901 0 01-5.468 3.03c-.533.164-1.036.29-1.53.396a11.9 11.9 0 01-5.23-2.143 1.5 1.5 0 01-.622-1.206V16.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 01-1.5-1.5V10.5c0-.828.672-1.5 1.5-1.5h1.383c.482 0 .933-.24 1.21-.638z" />
  </svg>
);

export const IllustrationIcon: React.FC = () => (
    <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
    </svg>
);

export const WebDesignIcon: React.FC = () => (
  <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);
