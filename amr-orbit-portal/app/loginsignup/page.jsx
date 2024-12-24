"use client";
import React from 'react';
import LoginForm from '@/components/loginsignup/loginform';
import SignupForm from '@/components/loginsignup/signupform';
import { useState } from 'react';


export default function LoginSignupPage() {
    const [isLogin, setIsLogin] = useState(true);
    return (
   <div className="flex items-center justify-center min-h-screen bg-[#2A2F36]"> {/* Ensures full screen height and centers content */}
    <div className="card w-full max-w-3xl p-12 shadow-2xl bg-white rounded-2xl mx-8"> {/* Increased max-width, padding, and rounded corners */}
        {isLogin ? (
            <>
                <LoginForm />
                <p className="text-center mt-8 text-xl"> {/* Increased text size and spacing */}
                    Don't have an account?{' '}
                    <button onClick={() => setIsLogin(false)} className="text-blue-600 hover:underline font-semibold">
                        Signup here
                    </button>
                </p>
            </>
        ) : (
            <>
                <SignupForm />
                <p className="text-center mt-8 text-xl"> {/* Increased text size and spacing */}
                    Already have an account?{' '}
                    <button onClick={() => setIsLogin(true)} className="text-blue-600 hover:underline font-semibold">
                        Login here
                    </button>
                </p>
            </>
        )}
    </div>
</div>


);

}