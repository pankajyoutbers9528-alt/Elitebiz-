
"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;

      setMessage("Login link sent! Please check your email.");
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <a href="/" className="logo">BlitBiz.</a>

        <h1>Welcome to BlitBiz</h1>
        <p>Sign in or create your free student account.</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email address</label>

          <input
            id="email"
            type="email"
            placeholder="student@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Please wait..." : "Continue with Email"}
          </button>
        </form>

        {message && <p role="status">{message}</p>}

        <p className="auth-note">
          Free learning for everyone. No paid subscription required.
        </p>
      </div>
    </main>
  );
        }
            
