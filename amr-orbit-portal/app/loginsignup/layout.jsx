"use client";
import Head from 'next/head';
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Login/Signup | AMROrbit</title>
                <meta name="description" content="Login or signup to access your account." />
            </Head>
            <Provider store={store}>
                <main className="mx-auto my-6">
                    {children}
                </main>
            </Provider>
        </>
    );
}
