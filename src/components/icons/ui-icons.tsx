import React from "react";

interface IconProps {
  className?: string;
}

export const MoveUpRight: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83496 14.1663L14.1682 5.83301M14.1682 5.83301H5.83496M14.1682 5.83301V14.1663"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronDown: React.FC<IconProps> = ({ className }) => (
  <svg
    width="15"
    className={className}
    height="14"
    viewBox="0 0 15 14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.9528 4.77173H4.04609C3.48609 4.77173 3.20609 5.4484 3.60276 5.84506L6.62443 8.86673C7.10859 9.35089 7.89609 9.35089 8.38026 8.86673L9.52943 7.71756L11.4019 5.84506C11.7928 5.4484 11.5128 4.77173 10.9528 4.77173Z" />
  </svg>
);

export const IconLock: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
    >
      <path d="M13.11 18.3335H6.0575C5.12483 18.3429 4.22653 17.9819 3.55962 17.3298C2.89272 16.6778 2.51165 15.7878 2.5 14.8552V10.7402C2.50589 9.99715 2.75009 9.27561 3.19667 8.68172C3.64325 8.08783 4.26863 7.65294 4.98083 7.44102V6.16685C4.99665 4.96268 5.48817 3.81365 6.34811 2.97058C7.20806 2.1275 8.36658 1.65882 9.57083 1.66685C10.7889 1.66117 11.9604 2.13398 12.8333 2.98352C13.2614 3.39583 13.6018 3.89029 13.8342 4.43728C14.0666 4.98427 14.1862 5.57254 14.1858 6.16685V7.44102C14.898 7.65294 15.5234 8.08783 15.97 8.68172C16.4166 9.27561 16.6608 9.99715 16.6667 10.7402V14.8543C16.6552 15.787 16.2744 16.677 15.6076 17.3293C14.9409 17.9815 14.0427 18.3426 13.11 18.3335ZM9.58333 11.1535C9.39009 11.1515 9.20395 11.2263 9.06582 11.3615C8.92769 11.4966 8.84887 11.6811 8.84667 11.8743V13.7127C8.84667 13.9092 8.92472 14.0976 9.06365 14.2365C9.20259 14.3755 9.39102 14.4535 9.5875 14.4535C9.78398 14.4535 9.97242 14.3755 10.1113 14.2365C10.2503 14.0976 10.3283 13.9092 10.3283 13.7127V11.8743C10.3248 11.6801 10.2444 11.4951 10.1048 11.36C9.96514 11.2249 9.77763 11.1506 9.58333 11.1535ZM9.59167 3.11602C8.77587 3.1064 7.98933 3.41955 7.40338 3.98724C6.81743 4.55493 6.47955 5.33116 6.46333 6.14685V7.26185H12.7042V6.16685C12.6999 5.76186 12.6159 5.36168 12.457 4.98916C12.2981 4.61664 12.0673 4.27909 11.7779 3.99577C11.4884 3.71246 11.146 3.48895 10.7702 3.338C10.3944 3.18705 9.99249 3.11162 9.5875 3.11602H9.59167Z" />
    </svg>
  );
};

export const IconCheck: React.FC<IconProps> = ({ className }) => {
  return <img src="/white_check.svg" alt="check" className={className} />;
};

export const IconWhiteCheck: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="14"
      height="11"
      className={className}
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3334 2L5.00002 9.33333L1.66669 6"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
