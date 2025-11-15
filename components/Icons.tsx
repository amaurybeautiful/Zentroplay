
import React from 'react';

export const ZentroplayLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M19.1413 22.8631L26.5146 16L19.1413 9.13687L16.9691 11.3091L21.0829 15.4229H5.48535V16.5771H21.0829L16.9691 20.6909L19.1413 22.8631Z" fill="url(#paint0_linear_14_47)"></path>
    <path d="M12.8587 9.13687L5.48535 16L12.8587 22.8631L15.0309 20.6909L10.9171 16.5771H26.5146V15.4229H10.9171L15.0309 11.3091L12.8587 9.13687Z" fill="url(#paint1_linear_14_47)"></path>
    <defs>
      <linearGradient id="paint0_linear_14_47" x1="5.48535" y1="16" x2="26.5146" y2="16" gradientUnits="userSpaceOnUse"><stop stopColor="#3D8BFF"></stop><stop offset="1" stopColor="#AB23FF"></stop></linearGradient>
      <linearGradient id="paint1_linear_14_47" x1="26.5146" y1="16" x2="5.48535" y2="16" gradientUnits="userSpaceOnUse"><stop stopColor="#3D8BFF"></stop><stop offset="1" stopColor="#AB23FF"></stop></linearGradient>
    </defs>
  </svg>
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
