
const subjects = [
  ["Mathematics", "mathematics", "Algebra, geometry and numbers."],
  ["Physics", "physics", "Understand the laws of nature."],
  ["Chemistry", "chemistry", "Explore matter and reactions."],
  ["Biology", "biology", "Discover living organisms."],
  ["Computer Science", "computer-science", "Learn computing and programming."],
  ["Sociology", "sociology", "Understand society."],
  ["Biotechnology", "biotechnology", "Explore biology and technology."],
  ["Technology", "technology", "Discover modern technology."],
  ["Languages", "languages", "Improve language skills."],
];

export default function SubjectsPage() {
  return (
    <main className="container">
      <h1>Explore Subjects</h1>
      <p>Choose a subject and start learning with BlitBiz.</p>

      <div className="grid">
        {subjects.map(([name, slug, description]) => (
          <a className="card" href={`/subjects/${slug}`} key={slug}>
            <h2>{name}</h2>
            <p>{description}</p>
            <span>Explore Subject →</span>
          </a>
        ))}
      </div>
    </main>
  );
                        }
