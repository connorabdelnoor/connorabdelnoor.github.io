import '../styles/projects.css';

const projects = [
  {
    title: 'AI Agent Portfolio',
    url: 'https://connorabdelnoor.com',
    displayUrl: 'connorabdelnoor.com',
    description:
      'Why answer questions about myself when I can train an agent to do it for me. RAG via Pinecone and Gemini. React frontend, self hosted N8N instance to facilitate workflows, IAC with OpenTofu, and hosted on AWS within the free tier',
  },
  {
    title: 'Upper Valley Tech Meetup',
    url: 'https://uppervalleytech.org/',
    displayUrl: 'uppervalleytech.org',
    description:
      'A strong belief in the value of community led me to start Upper Valley Tech this year. The goal: bring together tech folk for socializing, mentorship, and special events.',
  },
  {
    title: 'Lebanon Data Project',
    url: 'https://lebanondataproject.org/',
    displayUrl: 'WIP',
    description:
      'Free as in speech, or free as in beer. Either way, here in Lebanon, NH, the town data is available for free and a great sandbox for Python projects. Apache Airflow setup to run ETL pipelines with data stored in MongoDB. Generated reports in S3 with a React frontend, so once again, AWS free tier',
  },
];

const items = projects
  .map(
    ({ title, url, displayUrl, description }) => `
  <li class="project-item">
    <span class="project-arrow" aria-hidden="true">→</span>
    <div class="project-content">
      <h3 class="project-title">${title}</h3>
      <a
        class="project-link"
        href="${url}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${title}, ${displayUrl} (opens in new tab)"
      ><span aria-hidden="true">${displayUrl}</span></a>
      <p class="project-description">${description}</p>
    </div>
  </li>`,
  )
  .join('');

export const projectsSection = `
  <section class="projects-section" aria-labelledby="projects-heading">
    <div class="container">
      <h2 class="projects-heading" id="projects-heading">What I'm working on</h2>
      <ul class="projects-list">
        ${items}
      </ul>
    </div>
  </section>
`;
