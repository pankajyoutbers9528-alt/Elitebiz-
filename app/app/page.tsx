
const subjects = [
  { icon: "📐", name: "Mathematics", detail: "Numbers, algebra, geometry and calculus." },
  { icon: "⚛️", name: "Physics", detail: "Explore motion, energy and the universe." },
  { icon: "🧪", name: "Chemistry", detail: "Learn atoms, reactions and chemical science." },
  { icon: "🧬", name: "Biology", detail: "Discover life, cells and living organisms." },
  { icon: "💻", name: "Computer Science", detail: "Programming, algorithms and technology." },
  { icon: "🌍", name: "Sociology", detail: "Understand society, culture and people." },
  { icon: "🔬", name: "Biotechnology", detail: "Explore modern biological technologies." },
  { icon: "📡", name: "Technology", detail: "Discover innovation and digital systems." },
  { icon: "📖", name: "Languages", detail: "Develop communication and language skills." }
];

const features = [
  { icon: "📚", title: "Study Materials", detail: "Organised learning resources and subject notes." },
  { icon: "✍️", title: "Practice & Quizzes", detail: "Test your knowledge with learning assessments." },
  { icon: "🤖", title: "AI Learning Assistant", detail: "Get help understanding difficult topics." },
  { icon: "📊", title: "Student Dashboard", detail: "Keep track of your learning progress." }
];

export default function HomePage() {
  return (
    <main>
      <header className="navbar">
        <div className="container nav-inner">
          <a className="logo" href="/">BlitBiz.</a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#subjects">Subjects</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
          </nav>

          <a className="btn" href="/auth">Student Login</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow">YOUR KNOWLEDGE. YOUR FUTURE.</span>

            <h1>
              Learn Without <span>Limits.</span>
            </h1>

            <p>
              Welcome to BlitBiz, a learning platform designed to make
              quality education, study resources and knowledge accessible
              to students from school to university.
            </p>

            <div className="hero-actions">
              <a href="#subjects" className="btn">
                Explore Subjects
              </a>
              <a href="#features" className="btn btn-light">
                Discover Features
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="subjects">
        <div className="container">
          <div className="section-heading">
            <h2>Explore Your Subjects</h2>
            <p>Build knowledge across science, technology and humanities.</p>
          </div>

          <div className="grid">
            {subjects.map((subject) => (
              <article className="card" key={subject.name}>
                <div className="card-icon" aria-hidden="true">
                  {subject.icon}
                </div>
                <h3>{subject.name}</h3>
                <p>{subject.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <div className="section-heading">
            <h2>Everything You Need to Learn</h2>
            <p>Tools designed to support your educational journey.</p>
          </div>

          <div className="grid">
            {features.map((feature) => (
              <article className="card" key={feature.title}>
                <div className="card-icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="section-heading">
            <h2>Education for Everyone</h2>
            <p>
              BlitBiz aims to make learning resources accessible to students
              across different educational levels, from primary school
              to higher education.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <a className="logo" href="/">BlitBiz.</a>
          <p>Learn Without Limits. Grow Without Boundaries.</p>
          <p>© {new Date().getFullYear()} BlitBiz. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
              }
                
