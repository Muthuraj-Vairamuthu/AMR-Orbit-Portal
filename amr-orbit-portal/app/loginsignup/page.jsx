"use client";
import React, { useState } from "react";
import LoginForm from "@/components/loginsignup/loginform";
import SignupForm from "@/components/loginsignup/signupform";

export default function LoginSignupPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2A2F36]">
      <div className="w-full max-w-lg p-8 rounded-lg bg-[#191D23] shadow-xl">
        {isLogin ? (
          <>
            <LoginForm />
            <p className="text-center mt-6 text-white">
              Don't have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-500 hover:underline font-semibold"
              >
                Signup here
              </button>
            </p>
          </>
        ) : (
          <>
            <SignupForm />
            <p className="text-center mt-6 text-white">
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-blue-500 hover:underline font-semibold"
              >
                Login here
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
