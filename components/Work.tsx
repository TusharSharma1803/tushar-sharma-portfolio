

export function Work() {
  const projects = [
    {
      id: 1,
      title: 'Cloudline',
      description:
        'A real-time cloud storage platform with collaborative features. Built with React, Node.js, and PostgreSQL for seamless file synchronization.',
      tech: 'React • Node.js • PostgreSQL • AWS S3',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/',
    },
    {
      id: 2,
      title: 'Metric',
      description:
        'An analytics dashboard providing real-time insights and data visualization. Features interactive charts and customizable reports for businesses.',
      tech: 'Next.js • TypeScript • Chart.js • Firebase',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/',
    },
    {
      id: 3,
      title: 'Storyboard',
      description:
        'A visual project management tool designed for creative teams. Includes drag-and-drop workflows, collaborative boards, and real-time updates.',
      tech: 'React • Redux • MongoDB • Socket.io',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/',
    },
    {
      id: 4,
      title: 'Signal',
      description:
        'A messaging platform with end-to-end encryption and real-time notifications. Built to prioritize user privacy and seamless communication.',
      tech: 'React Native • Node.js • PostgreSQL • WebSockets',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/',
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32" aria-labelledby="work-title">
      <div className="section-heading">
        <span className="section-number">03.</span>
        <h2 id="work-title" className="text-[#e6f1ff]">
          Some Things I&apos;ve Built
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card flex min-h-[275px] flex-col rounded-lg p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <svg width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-kanban text-[#64ffda]"><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><rect x="6" y="9" width="2" height="6"/><rect x="12" y="9" width="2" height="6"/><rect x="18" y="9" width="2" height="6"/></svg>
              <div className="flex gap-4 text-[#8b9bb4]">
                <a
                  className="focus-ring hover:text-[#64ffda]"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live site`}
                >
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
                <a
                  className="focus-ring hover:text-[#64ffda]"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code`}
                >
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c2.6-.3 5.4-1.3 5.4-6a4.7 4.7 0 0 0-1.3-3.2A4.4 4.4 0 0 0 20 3c-1.3 0-2.6.5-3.5 1.3A7 7 0 0 0 12 3c-1-.3-2.2.3-3.5 1.3A4.7 4.7 0 0 0 7 8c0 4.7 2.8 5.7 5.4 6a4.8 4.8 0 0 0-1 3.5v4"/><path d="M9 18c-4.51 2-5-2.5-7-2.5"/></svg>
                </a>
              </div>
            </div>
            <h3 className="project-title mt-7 text-xl font-semibold text-[#e6f1ff]">
              {project.title}
            </h3>
            <p className="mt-3 leading-7 text-[#8b9bb4]">{project.description}</p>
            <p className="tech-tag mt-auto pt-7 text-[#8b9bb4]">{project.tech}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
