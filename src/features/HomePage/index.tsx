"use client";
import AuthLayout from "@/@layouts/authLayout";
import { useSession } from "next-auth/react";
import Image from "next/image";
import FoodBannerSlider from "./FoodBanner/FoodBannerSlider";

const features = [
  {
    title: "Order Homemade Food",
    description: "Browse delicious meals made by verified home chefs.",
    icon: "🍲",
  },
  {
    title: "Become a Home Chef",
    description: "Share your culinary skills and earn from your kitchen.",
    icon: "👩‍🍳",
  },
  {
    title: "Fast Delivery",
    description: "Get your food delivered hot and fresh, right to your door.",
    icon: "🚚",
  },
];

const testimonials = [
  {
    name: "Ayesha R.",
    text: "She Cooks helped me discover amazing home-cooked meals! The experience was delightful.",
  },
  {
    name: "Chef Samira",
    text: "I love sharing my recipes and earning from my passion. Highly recommended!",
  },
];

const HomePage = () => {
  const session = useSession();
  return (
    <AuthLayout>
      <main className="bg-gradient-to-br from-orange-100 to-yellow-50 min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-16 text-center relative">
          {/* Glassmorphism Card */}
          <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
          <div className="backdrop-blur-lg bg-white/30 rounded-2xl shadow-2xl p-10 max-w-2xl mx-auto border border-white/40">
            <div className="flex flex-col items-center">
              {/* Cloud Kitchen Logo */}
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                width={80}
                height={80}
                alt="Cloud Kitchen Logo"
                className="mb-4 drop-shadow-lg"
              />
              <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg tracking-tight">
                She Cooks
              </h1>
              <p className="text-xl text-gray-800 max-w-xl mb-6 font-medium">
                Discover and order delicious homemade food from passionate home
                chefs. Or, become a chef and share your culinary creations with
                the world!
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="/cooks"
                  className="px-8 py-3 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-all backdrop-blur-md border border-white/30"
                >
                  Order Food
                </a>
                <a
                  href="/signup?cook=true"
                  className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-all backdrop-blur-md border border-white/30"
                >
                  Become a Chef
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Slider */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/30 backdrop-blur-lg bg-white/30">
            <FoodBannerSlider />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-10 max-w-5xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 rounded-2xl shadow-xl bg-white/40 backdrop-blur-lg border border-white/30"
            >
              <span className="text-5xl mb-4 drop-shadow-lg">
                {feature.icon}
              </span>
              <h3 className="text-xl font-bold mb-2 text-orange-500 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-700 font-medium text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </section>

        {/* How It Works Section */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="rounded-2xl shadow-xl bg-white/40 backdrop-blur-lg border border-white/30 p-8">
            <h2 className="text-3xl font-bold text-center text-orange-500 mb-6 tracking-tight">
              How It Works
            </h2>
            <ol className="list-decimal list-inside text-lg text-gray-800 space-y-2 font-medium">
              <li>Sign up as a food lover or home chef.</li>
              <li>Browse or create delicious homemade meals.</li>
              <li>Order, track, and enjoy your food!</li>
            </ol>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="rounded-2xl shadow-xl bg-white/40 backdrop-blur-lg border border-white/30 p-8">
            <h2 className="text-2xl font-bold text-center text-orange-500 mb-6 tracking-tight">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-orange-50/60 p-6 rounded-xl shadow text-gray-800 border border-orange-100"
                >
                  <p className="mb-2 italic">“{t.text}”</p>
                  <span className="font-semibold text-orange-400">
                    - {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full bg-white/40 backdrop-blur-lg border-t border-white/30 py-8 mt-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              width={40}
              height={40}
              alt="Cloud Kitchen Logo"
            />
            <span className="text-xl font-bold text-orange-500 tracking-tight">
              Cloud Kitchen
            </span>
          </div>
          <div className="text-gray-700 text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} Cloud Kitchen. All rights
            reserved.
            <br />
            <span className="text-orange-400">
              Made with love for food lovers & chefs.
            </span>
          </div>
        </div>
      </footer>
    </AuthLayout>
  );
};

export default HomePage;
