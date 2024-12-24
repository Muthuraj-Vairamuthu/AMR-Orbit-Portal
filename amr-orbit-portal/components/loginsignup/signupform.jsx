import React, { useState } from 'react';

export default function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="space-y-6">
            <h3 className="text-lg font-semibold text-center">Healthcare Provider Registration</h3>
            <input type="text" placeholder="Organization Name" className="input-field" />
            <input type="email" placeholder="Organization Email" className="input-field" />
            <input type="text" placeholder="Organization Address" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <button type="submit" className="button">Sign Up</button>
        </form>
    );
}