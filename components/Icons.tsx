import React from 'react';

// Replaced the previous SVG with the user-provided image, embedded as a Base64 URI.
export const ZentroplayLogo: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="data:image/png;base64,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" 
    alt="Zentroplay Logo" 
    className={className} 
  />
);

export const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

export const LightbulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1.268a2 2 0 000 3.464V16a1 1 0 11-2 0V7.732a2 2 0 000-3.464V3a1 1 0 011-1zM9 16h2v2H9v-2z"></path><path d="M4.055 11.288A7.5 7.5 0 0115.945 8.712 1 1 0 0115 10.5a5.5 5.5 0 00-10 0 1 1 0 01-.945-.788z"></path></svg>
);

export const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.184-1.268-.5-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.184-1.268.5-1.857m0 0a5.002 5.002 0 019 0m-9 0a5.002 5.002 0 00-9 0m9 0a5 5 0 01-9 0m9 0a5 5 0 009 0m-4.5-5.5a3 3 0 100-6 3 3 0 000 6z"></path></svg>
);

export const GiftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
);

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
);

export const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917L12 22l9-1.083A12.02 12.02 0 0021 7.882c0-.668-.046-1.323-.132-1.968z"></path></svg>
);

export const LightningIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
);

export const DollarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1.667a1.667 1.667 0 00-1.667-1.667H10M12 6h1.667A1.667 1.667 0 0115.333 6H12m0 0V5m2.599 1.001a5.001 5.001 0 00-5.198 0M12 18a6 6 0 100-12 6 6 0 000 12z"></path></svg>
);

export const PresentIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

// FIX: Add missing ChevronDownIcon component.
export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
);
