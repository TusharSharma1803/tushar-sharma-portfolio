export function Experience() {
  const experiences = [
    {
      date: 'Jul 2022 - Jun 2026',
      role: 'Senior Software Engineer',
      company: 'Homepage Infotetech Solutions LLP.',
      description: [
        'Developed and maintained enterprise-scale applications used by 500+ users, reducing system response time by 30% using .NET Core, ASP.NET MVC, ReactJS, and Next.js.',
        'Developed a background service that processes incoming emails and leverages AI to generate dynamic, one-time regular expression patterns. The generated regex uses capture groups to accurately extract required information from unstructured email content.',
        'Designed and optimized RESTful APIs for healthcare, emergency response, and billing platforms.',
        'Built cloud-integrated solutions using Azure services and Cosmos DB.',
        'Implemented secure authentication and authorization using OAuth and JWT.',
        'Applied SOLID principles, design patterns, and dependency injection to improve maintainability and scalability.',
        'Optimized SQL Server and Cosmos DB operations for improved performance and reliability.',
        'Participated in sprint planning, code reviews, production support, and Agile ceremonies.',
        'Leveraged AI-assisted development tools to accelerate coding, debugging, documentation, and research.',
        'Created and maintained technical documentation and internal knowledge repositories.',
        'Collaborated with cross-functional teams to deliver features from requirements through deployment.'
      ]
    },
    {
      date: 'Nov 2021 - May 2022',
      role: 'Java Trainee Intern',
      company: 'Ypsilon Solutions.',
      description: [
        "Completed a 6-month internship in Java development, working on application development, API integration, testing, debugging, and software development best practices."
      ]
    }
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
            {
              exp.description instanceof Array ? (
                <ul className="mt-3 list-disc pl-5 text-[#8b9bb4]">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 max-w-2xl leading-7 text-[#8b9bb4]">{exp.description}</p>
              ) 
            }
          </article>
        ))}
      </div>
    </section>
  );
}
