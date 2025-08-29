"use client";

import { Cloud, Lock, Share2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: "Cloud Storage",
      desc: "Store files securely in the cloud with instant access.",
    },
    {
      icon: <Share2 className="w-8 h-8 text-blue-600" />,
      title: "Easy Sharing",
      desc: "Generate shareable links for quick collaboration.",
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "Secure Access",
      desc: "End-to-end encryption keeps your files safe.",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-12">Why Choose CloudSync?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
