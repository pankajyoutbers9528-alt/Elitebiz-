import { notFound } from "next/navigation";

const subjectData: Record<string, { title: string; description: string; topics: string[] }> = {
  mathematics: {
    title: "Mathematics",
    description: "Build your mathematical knowledge step by step.",
    topics: ["Number Systems", "Algebra", "Geometry", "Trigonometry", "Statistics"],
  },
  physics: {
    title: "Physics",
    description: "Understand the laws and principles of physics.",
    topics: ["Motion", "Force and Laws of Motion", "Work and Energy", "Light", "Electricity"],
  },
  chemistry: {
    title: "Chemistry",
    description: "Explore matter, elements and chemical reactions.",
    topics: ["Atoms and Molecules", "Periodic Table", "Chemical Reactions", "Acids and Bases"],
  },
  biology: {
    title: "Biology",
    description: "Learn about living organisms and life processes.",
    topics: ["Cell Biology", "Human Body", "Plant Biology", "Genetics", "Ecology"],
  },
  "computer-science": {
    title: "Computer Science",
    description: "Explore computers, programming and technology.",
    topics: ["Computer Fundamentals", "Programming Basics", "Algorithms", "Data Structures"],
  },
  sociology: {
    title: "Sociology",
    description: "Understand society and social relationships.",
    topics: ["Introduction to Sociology", "Culture", "Social Institutions", "Social Change"],
  },
  biotechnology: {
    title: "Biotechnology",
    description: "Discover how biology and technology work together.",
    topics: ["Introduction", "Genetics", "Microbiology", "Applications"],
  },
  technology: {
    title: "Technology",
    description: "Explore modern technology and innovation.",
    topics: ["Digital Technology", "Artificial Intelligence", "Internet", "Cyber Safety"],
  },
  languages: {
    title: "Languages",
    description: "Improve your language and communication skills.",
    topics: ["Grammar", "Vocabulary", "Reading", "Writing", "Communication"],
  },
};

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subject = subjectData[slug];

  if (!subject) notFound();

  return (
    <main className="container">
      <a href="/subjects">← All Subjects</a>
      <h1>{subject.title}</h1>
      <p>{subject.description}</p>

      <h2>Learning Topics</h2>
      <div className="grid">
        {subject.topics.map((topic, index) => (
          <article className="card" key={topic}>
            <h3>{index + 1}. {topic}</h3>
            <p>Study this topic and build your understanding.</p>
          </article>
        ))}
      </div>
    </main>
  );
    }
      
