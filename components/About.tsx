export function About() {
  const skills = [
    '.NET 6/7/8/9/10',
'C#',
'ASP.NET Core',
'ASP.NET MVC',
'Web API',
'Entity Framework Core',
'ReactJS',
'Next.js',
'JavaScript',
'SQL Server',
'Cosmos DB',
'Microsoft Azure',
'REST APIs',
'Microservices',
'Clean Architecture',
'CQRS',
'MediatR',
'Redis',
'RabbitMQ',
'Docker',
'Kubernetes',
'Azure DevOps',
'CI/CD',
'OAuth 2.0',
'JWT',
'Git',
'Open AI Integration',
'AI Agent Development',
'AI-Integrated Applications'
  ];

  return (
    <section id="about" className="py-24 md:py-32" aria-labelledby="about-title">
      <div className="section-heading">
        <span className="section-number">01.</span>
        <h2 id="about-title" className="text-[#e6f1ff]">
          About
        </h2>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr_.7fr] md:gap-16">
        <div>
          <p className="leading-8 text-[#8b9bb4]">
            Hello! I'm Tushar Sharma, a Full-Stack .NET Developer with over 4 years of experience building scalable, high-performance, and user-focused applications. I'm passionate about solving complex problems through clean, efficient code and creating reliable software solutions that deliver real business value. I specialize in developing full-stack applications using technologies such as C#, .NET Core, ASP.NET Core, Web APIs, React.js, Next.js, SQL Server, and Azure. My experience includes working on enterprise applications, RESTful APIs, microservices, cloud-based solutions, and real-time systems. I'm always learning, exploring new technologies, and looking for opportunities to take on challenging projects, strengthen my skills, and build impactful digital solutions.
          </p>
          <p className="mt-5 leading-8 text-[#8b9bb4]">
            I specialize in building full-stack applications using modern technologies like React, Node.js, and cloud services. I'm always learning, always building, and always looking for the next challenge to push my skills further.
          </p>
        </div>

        <div className="rounded-lg border border-[#253141] bg-[#101822] p-6">
          <h3 className="mono text-sm font-medium text-[#e6f1ff]">Skills</h3>
          <ul className="skill-list mt-5 grid grid-cols-2 gap-x-3 gap-y-3 text-sm text-[#8b9bb4]">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
