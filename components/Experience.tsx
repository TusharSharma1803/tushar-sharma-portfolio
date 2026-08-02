export function Experience() {
  const experiences = [
    {
      date: 'Jan 2023 - Present',
      role: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      description:
        'Leading the development of cloud-based solutions serving 50+ enterprise clients. Architected microservices infrastructure handling 10M+ daily transactions.',
    },
    {
      date: 'Jul 2021 - Dec 2022',
      role: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      description:
        'Built and maintained 15+ production applications using React and Node.js. Improved application performance by 40% through optimization and caching strategies.',
    },
    {
      date: 'Mar 2020 - Jun 2021',
      role: 'Junior Developer',
      company: 'StartUp Labs',
      description:
        'Developed frontend components and APIs for early-stage SaaS platform. Collaborated with cross-functional teams to deliver features on schedule.',
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32" aria-labelledby="experience-title">
      <div className="section-heading">
        <span className="section-number">02.</span>
        <h2 id="experience-title" className="text-[#e6f1ff]">
          Experience
        </h2>
      </div>

      <div className="mt-12 max-w-3xl space-y-10">
        {experiences.map((exp, index) => (
          <article key={index} className="timeline-item">
            <p className="mono text-xs text-[#64ffda]">{exp.date}</p>
            <h3 className="mt-2 text-xl font-semibold text-[#e6f1ff]">
              {exp.role} <span className="text-[#64ffda]">@</span> {exp.company}
            </h3>
            <p className="mt-3 max-w-2xl leading-7 text-[#8b9bb4]">{exp.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
