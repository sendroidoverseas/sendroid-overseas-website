"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Enter a valid business email.");
      return;
    }
    setMessage("Thank you. You are on the insights list.");
    setEmail("");
  }

  return (
    <form onSubmit={submit} className="mt-6" noValidate>
      <label className="sr-only" htmlFor="newsletter-email">
        Business email
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Business email"
          className="min-h-11 min-w-0 flex-1 rounded-md border border-white/15 bg-white/8 px-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#b9964a]"
          type="email"
          autoComplete="email"
        />
        <button className="rounded-md bg-[#b9964a] px-4 text-sm font-bold text-[#071b33]" type="submit">
          Join
        </button>
      </div>
      {message ? <p className="mt-2 text-xs text-white/65">{message}</p> : null}
    </form>
  );
}
