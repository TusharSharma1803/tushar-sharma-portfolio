export function Hero() {
  return (
    <section
      className="hero-space flex min-h-[100vh] flex-col justify-center py-24 md:py-0"
      aria-labelledby="hero-name"
    >
      <p className="mono mb-5 text-sm text-[#64ffda]">Hi, my name is</p>
      <h1
        id="hero-name"
        className="hero-name max-w-4xl font-bold text-[#e6f1ff]"
      >
        Tushar Sharma.
      </h1>
      <h2 className="mt-4 max-w-4xl font-semibold leading-tight text-[#64ffda] text-2xl md:text-3xl">
        I&apos;m a software developer passionate about building exceptional digital experiences.
      </h2>
      <p className="mt-7 max-w-xl text-lg leading-8 text-[#8b9bb4]">
        I specialize in creating elegant solutions to complex problems. With a focus on clean code and user experience, I build web applications that are both powerful and intuitive.
      </p>
      <div className="mt-10">
        <a
          href="#contact"
          className="cta focus-ring inline-flex items-center gap-2 rounded px-5 py-4"
        >
          <span>Get In Touch</span>
          <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-right"><path d="m7 7 10 10M17 7v10H7"/></svg>
        </a>
      </div>
    </section>
  );
}
