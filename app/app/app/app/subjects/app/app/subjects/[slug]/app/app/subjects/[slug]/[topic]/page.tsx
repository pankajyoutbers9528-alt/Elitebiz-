const lessons: Record<string, { title: string; introduction: string; points: string[] }> = {
  algebra: {
    title: "Algebra",
    introduction: "Algebra is a branch of mathematics that uses letters and symbols to represent unknown numbers.",
    points: [
      "Variables represent unknown values, such as x and y.",
      "Constants are fixed numerical values.",
      "Expressions combine variables, constants and operations.",
      "Equations show that two expressions are equal.",
    ],
  },
  motion: {
    title: "Motion",
    introduction: "Motion describes a change in the position of an object over time.",
    points: [
      "Distance is the total path travelled.",
      "Displacement is the change in position.",
      "Speed is distance travelled per unit time.",
      "Velocity includes both speed and direction.",
    ],
  },
  "atoms-and-molecules": {
    title: "Atoms and Molecules",
    introduction: "Atoms are the basic units of elements. Molecules contain two or more atoms chemically bonded together.",
    points: [
      "An atom contains protons, neutrons and electrons.",
      "Protons have a positive charge.",
      "Electrons have a negative charge.",
      "Molecules form when atoms chemically combine.",
    ],
  },
  "cell-biology": {
    title: "Cell Biology",
    introduction: "Cell biology is the study of cells, the basic structural and functional units of living organisms.",
    points: [
      "The cell membrane controls movement of substances.",
      "The nucleus stores genetic information in many cells.",
      "Mitochondria release usable energy for cell activities.",
      "Cytoplasm contains many cell structures.",
    ],
  },
};

function formatTitle(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string; topic: string }>;
}) {
  const { slug, topic } = await params;
  const lesson = lessons[topic];
  const title = lesson?.title ?? formatTitle(topic);

  return (
    <main className="container">
      <a href={`/subjects/${slug}`}>← Back to Subject</a>

      <h1>{title}</h1>

      <section className="card">
        <h2>Introduction</h2>
        <p>
          {lesson?.introduction ??
            `Welcome to ${title}. This topic is part of ${formatTitle(slug)}. Detailed study notes for this topic are being prepared.`}
        </p>
      </section>

      <section className="card">
        <h2>Key Learning Points</h2>
        {lesson ? (
          <ul>
            {lesson.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : (
          <p>Detailed learning points will be added to this topic.</p>
        )}
      </section>

      <p>BlitBiz Learning • Free for students</p>
    </main>
  );
}
