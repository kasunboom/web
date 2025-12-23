import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export const Reels = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "commercial", "tutorial", "behind-the-scenes", "trending"];

  const reels = [
    {
      id: 1,
      title: "Product Launch Teaser",
      category: "commercial",
      views: "2.4M",
      likes: "185K",
      shares: "45K",
      image: "/figmaAssets/1st-back-1-1.png",
    },
    {
      id: 2,
      title: "Trending Sound Challenge",
      category: "trending",
      views: "5.8M",
      likes: "420K",
      shares: "89K",
      image: "/figmaAssets/1st-back-2.png",
    },
    {
      id: 3,
      title: "Behind The Scenes Studio",
      category: "behind-the-scenes",
      views: "1.2M",
      likes: "95K",
      shares: "23K",
      image: "/figmaAssets/1st-back-3.png",
    },
    {
      id: 4,
      title: "Quick Tutorial Tips",
      category: "tutorial",
      views: "890K",
      likes: "67K",
      shares: "12K",
      image: "/figmaAssets/1st-back-4.png",
    },
    {
      id: 5,
      title: "Brand Story In 15 Seconds",
      category: "commercial",
      views: "3.1M",
      likes: "255K",
      shares: "58K",
      image: "/figmaAssets/picture4-2.png",
    },
    {
      id: 6,
      title: "Viral Moment Compilation",
      category: "trending",
      views: "7.2M",
      likes: "580K",
      shares: "120K",
      image: "/figmaAssets/picture5-2.png",
    },
    {
      id: 7,
      title: "Day In Our Studio",
      category: "behind-the-scenes",
      views: "640K",
      likes: "48K",
      shares: "9K",
      image: "/figmaAssets/picture7-2.png",
    },
    {
      id: 8,
      title: "Quick Editing Hacks",
      category: "tutorial",
      views: "1.5M",
      likes: "120K",
      shares: "28K",
      image: "/figmaAssets/pfp-qr2-1.png",
    },
  ];

  const filteredReels =
    selectedCategory === "all"
      ? reels
      : reels.filter((reel) => reel.category === selectedCategory);

  const stats = [
    { label: "Total Reels", value: "500+" },
    { label: "Avg Views", value: "2.3M" },
    { label: "Engagement Rate", value: "8.5%" },
    { label: "Followers Gained", value: "100K+" },
  ];

  return (
    <div className="bg-black overflow-hidden w-full min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full min-h-[500px] flex items-center justify-center px-8 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#42ff92]/5 opacity-50" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Short-Form <span className="text-[#42ff92]">Video</span> <span className="text-[#e87aff]">Content</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Viral-worthy reels and short videos that stop the scroll and keep your audience engaged.
          </p>
          
          <Button className="bg-[#42ff92] text-black hover:bg-[#42ff92]/80 text-lg px-8 py-6">
            Create Your Reel
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <section className="relative w-full py-16 px-8 bg-gradient-to-r from-gray-950 via-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#42ff92] mb-2">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative w-full py-8 px-8 bg-black sticky top-0 z-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 text-sm mb-4">Filter by category</p>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                  selectedCategory === category
                    ? "bg-[#42ff92] text-black"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reels Grid */}
      <section className="relative w-full py-20 px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredReels.map((reel) => (
              <div
                key={reel.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer h-96"
              >
                {/* Image Container */}
                <img
                  src={reel.image}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Top Badge */}
                  <div className="flex justify-between items-start">
                    <span className="bg-[#42ff92] text-black text-xs font-bold px-3 py-1 rounded-full">
                      {reel.category.replace("-", " ")}
                    </span>
                    <span className="text-white text-xs bg-black/50 px-2 py-1 rounded">
                      15 sec
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="space-y-2">
                    <h3 className="text-white font-bold text-sm">{reel.title}</h3>
                    <div className="flex gap-4 text-xs text-gray-300">
                      <span>👁️ {reel.views}</span>
                      <span>❤️ {reel.likes}</span>
                      <span>📤 {reel.shares}</span>
                    </div>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-[#42ff92] rounded-full flex items-center justify-center">
                    <span className="text-black text-2xl ml-1">▶</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredReels.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No reels found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative w-full py-20 px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Why Choose Our <span className="text-[#42ff92]">Reels</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Optimized for Virality",
                desc: "Every reel is crafted with trending sounds, hooks, and pacing to maximize engagement",
              },
              {
                title: "Platform-Specific",
                desc: "Content tailored for Instagram, TikTok, YouTube Shorts, and LinkedIn audiences",
              },
              {
                title: "Fast Turnaround",
                desc: "Quick production timelines without compromising on quality and creativity",
              },
              {
                title: "Data-Driven",
                desc: "We analyze metrics to continuously improve performance and engagement",
              },
              {
                title: "Trend-Focused",
                desc: "Always ahead of the curve with latest trending sounds, effects, and formats",
              },
              {
                title: "Authentic Stories",
                desc: "Content that connects emotionally and builds genuine audience loyalty",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-[#42ff92]/50 transition-colors"
              >
                <div className="w-12 h-12 bg-[#42ff92] rounded-lg flex items-center justify-center text-black font-bold mb-4 text-xl">
                  ✨
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Go <span className="text-[#42ff92]">Viral</span>?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Let's create short-form content that captures attention and drives results
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-[#42ff92] text-black hover:bg-[#42ff92]/80 text-lg px-8 py-6">
              Book a Strategy Call
            </Button>
            <Button variant="outline" className="border-[#e87aff] text-[#e87aff] hover:bg-[#e87aff]/10 text-lg px-8 py-6">
              View All Content
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
