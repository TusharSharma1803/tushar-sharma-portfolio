"use client"

import { useAppSelector } from '@/lib/hooks'

export function Contact() {

  const { email } = useAppSelector((state: any) => state.socialLinks)  

  return (
    <section id="contact" className="py-24 text-center md:py-32" aria-labelledby="contact-title">
      <p className="mono text-sm text-[#64ffda]">04. What's Next?</p>
      <h2 id="contact-title" className="mt-4 font-bold tracking-tight text-[#e6f1ff] text-4xl md:text-5xl">
        Get In Touch
      </h2>
      <p className="mx-auto mt-5 max-w-lg leading-8 text-[#8b9bb4]">
        I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you have any questions or just want to chat!
      </p>
      <a
        href={email}
        className="cta focus-ring mt-9 inline-flex rounded px-5 py-4"
      >
        Say Hello
      </a>
    </section>
  );
}
