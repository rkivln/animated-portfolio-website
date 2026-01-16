
import React from 'react';

type IconProps = {
  className?: string;
};

export const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const DribbbleIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.4 19.98c-3.187-.692-5.592-3.23-6.22-6.39.062-.005.122-.01.18-.018.89.02 1.76.2 2.59.51 1.05.39 2.02.95 2.92 1.63.78.58 1.48 1.25 2.12 1.99-.64.8-1.39 1.5-2.22 2.09-.08.05-.16.1-.25.15-.01 0-.01.01-.02.01zm-4.73-8.83c.18-.01.36-.02.53-.02 2.43 0 4.7.93 6.45 2.5.42-.92.68-1.92.78-2.98-.24-.09-.48-.2-.72-.32-2.3-1.12-4.14-3.03-5.22-5.34-.33.91-.53 1.88-.6 2.89.06.01.12.02.18.03zm11.37 5.42c-.52-1.03-1.18-1.97-1.95-2.79-.81-.84-1.74-1.53-2.76-2.05-.18-.09-.36-.18-.55-.26-.1-.04-.2-.08-.3-.12.16-1.19.16-2.42-.01-3.64.9.23 1.75.61 2.53 1.12 2.22 1.49 3.63 3.96 3.92 6.78-.06.01-.12.01-.18.01zm-1.04-10.15c-.9-1.57-2.18-2.88-3.69-3.83.8.31 1.56.73 2.28 1.26 1.89 1.4 3.11 3.48 3.51 5.86-.59-.05-1.17-.13-1.75-.24-.3-.06-.6-.12-.9-.19-.01-.01-.01-.01-.02-.02z" />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 010-18m0 18a9 9 0 000-18m0 18h0m-9-9h18m-9 9a9 9 0 000-18" />
  </svg>
);

export const HeartIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);
