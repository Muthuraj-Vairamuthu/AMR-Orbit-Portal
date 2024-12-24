// src/components/layout/ServicesLayout.jsx
"use client";
import Head from 'next/head';
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function ServicesLayout({ children }) {
    return (
        <>
            <Head>
                <title>Services | AMROrbit</title>
                <meta name="description" content="Explore our services and upload your dataset to get insights." />
            </Head>
            <Provider store={store}>
                <main className="mx-auto my-6">
                    {children}
                </main>
            </Provider>
        </>
    );
}
