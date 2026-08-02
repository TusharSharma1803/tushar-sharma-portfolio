'use client'

import { useAppSelector } from '@/lib/hooks'

export function Footer() {
  const { github, linkedin, email } = useAppSelector((state: any) => state.socialLinks)

  return (
    <footer className="border-t border-[#253141] px-6 py-10 text-center">
      <div className="flex justify-center gap-5 md:hidden">
        <a
          className="social-icon focus-ring"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c2.6-.3 5.4-1.3 5.4-6a4.7 4.7 0 0 0-1.3-3.2A4.4 4.4 0 0 0 20 3c-1.3 0-2.6.5-3.5 1.3A7 7 0 0 0 12 3c-1-.3-2.2.3-3.5 1.3A4.7 4.7 0 0 0 7 8c0 4.7 2.8 5.7 5.4 6a4.8 4.8 0 0 0-1 3.5v4"/><path d="M9 18c-4.51 2-5-2.5-7-2.5"/></svg>
        </a>
        <a
          className="social-icon focus-ring"
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a
          className="social-icon focus-ring"
          href={email}
          aria-label="Send an email"
        >
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
      </div>
      <p className="mono mx-auto max-w-xl text-xs leading-6 text-[#8b9bb4]">
        Designed & Built by Tushar Sharma © 2026. All rights reserved.
      </p>
    </footer>
  );
}
