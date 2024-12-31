import React, { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="space-y-6">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        Welcome to AMROrbit
      </h2>
      <h3 className="text-lg font-semibold text-white mb-4">
        Healthcare Provider Registration
      </h3>
      <input
        type="text"
        placeholder="Organization Name"
        className="input-field"
      />
      <input
        type="email"
        placeholder="Organization Email"
        className="input-field"
      />
      <input
        type="text"
        placeholder="Organization Address"
        className="input-field"
      />
      <input
        type="password"
        placeholder="Password"
        className="input-field"
      />
      <button
        type="submit"
        className="bg-[#0D1B32] hover:bg-[#0E2845] text-white font-bold py-2 px-4 w-full rounded-lg"
      >
        Sign Up
      </button>
    </form>
  );
}
