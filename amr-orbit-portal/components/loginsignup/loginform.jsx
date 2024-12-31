import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="space-y-6">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        Welcome to AMROrbit
      </h2>
      <h3 className="text-lg font-semibold text-white mb-4">Login</h3>
      <input
        type="text"
        placeholder="Username"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="text-right">
        <button
          type="button"
          className="text-sm text-blue-400 hover:underline"
        >
          Forgot password?
        </button>
      </div>
      <button
        type="submit"
        className="bg-[#0D1B32] hover:bg-[#0E2845] text-white font-bold py-2 px-4 w-full rounded-lg"
      >
        Sign in
      </button>
      <div className="flex items-center my-4">
        <div className="border-t border-gray-700 flex-grow"></div>
        <span className="mx-4 text-gray-400">or</span>
        <div className="border-t border-gray-700 flex-grow"></div>
      </div>
      <button
        type="button"
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 w-full rounded-lg flex items-center justify-center"
      >
        <span className="mr-2 text-xl">G</span> Sign in with Google
      </button>
    </form>
  );
}
