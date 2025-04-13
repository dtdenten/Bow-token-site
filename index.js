import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-6">
      <section className="text-center py-16">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo-dark-bow.png"
            alt="BOW Token Logo"
            width={160}
            height={160}
            className="rounded-xl shadow-lg"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4">BOW Token</h1>
        <p className="text-xl mb-6">Aim true with BOW – the crypto project hitting the mark.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg">Buy Now</button>
          <button className="border border-white text-white px-6 py-3 rounded-lg">View Chart</button>
          <button className="bg-gray-700 text-white px-6 py-3 rounded-lg">Connect Wallet</button>
          <Link href="/BOW_Token_Whitepaper.pdf" target="_blank">
            <button className="border border-white text-white px-6 py-3 rounded-lg">Whitepaper</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
