import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const learningAreas = [
  { icon: "📐", title: "Mathematics", description: "Algebra, geometry and calculus" },
  { icon: "⚛️", title: "Physics", description: "Motion, energy and mechanics" },
  { icon: "🧪", title: "Chemistry", description: "Atoms, elements and reactions" },
  { icon: "🧬", title: "Biology", description: "Cells, organisms and life sciences" },
  { icon: "💻", title: "Computer Science", description: "Programming and computing" },
  { icon: "🌍", title: "Sociology", description: "Society, culture and people" }
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth");
  }

  return (
    <main>
      <header className="navbar">
        <div className="container nav-inner">
          <a href="/" className="logo">BlitBiz.</a>
          <span>Student Dashboard</span>
          <form action="/auth/logout" method="post">
            <button className="btn" type="submit">Sign out</button>
          </form>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <span className="eyebrow">YOUR LEARNING SPACE</span>
          <h1>Welcome to BlitBiz!</h1>
          <p>
            Signed in as: <strong>{user.email}</strong>
          </p>

          <div className="section-heading" style={{ marginTop: 45 }}>
            <h2>Explore Your Learning Areas</h2>
            <p>Choose a subject and start learning.</p>
          </div>

          <div className="grid">
            {learningAreas.map((area) => (
              <article className="card" key={area.title}>
                <div className="card-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
            }
                  
