import React from "react";
import { Button } from "@/components/ui/button";

export const CaseStudies = (): JSX.Element => {
  const caseStudies = [
    {
      id: 1,
      title: "Global Tech Startup",
      category: "Commercial Campaign",
      challenge: "Brand awareness in a competitive market",
      solution: "Multi-platform video campaign",
      results: "3.2M views, 45% increase in sales",
      image: "/figmaAssets/1st-back-1-1.png",
      tags: ["Video Production", "Strategy", "Digital Marketing"],
    },
    {
      id: 2,
      title: "E-commerce Brand Launch",
      category: "Product Video",
      challenge: "Launching new product line with limited budget",
      solution: "High-impact short-form video content",
      results: "1.8M+ impressions, 32% conversion rate",
      image: "/figmaAssets/1st-back-2.png",
      tags: ["Product Video", "Social Media", "E-commerce"],
    },
    {
      id: 3,
      title: "Corporate Training Series",
      category: "Educational Content",
      challenge: "Engaging employee training across 50+ offices",
      solution: "Professional training video series",
      results: "89% completion rate, improved retention",
      image: "/figmaAssets/1st-back-3.png",
      tags: ["Training", "Corporate", "Video Series"],
    },
    {
      id: 4,
      title: "Documentary Production",
      category: "Long-form Content",
      challenge: "Telling a compelling brand story",
      solution: "Full-scale documentary production",
      results: "Award winner, viral marketing success",
      image: "/figmaAssets/1st-back-4.png",
      tags: ["Documentary", "Storytelling", "Production"],
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "200+" },
    { label: "Total Views", value: "50M+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Industry Awards", value: "25+" },
  ];

  return (
    <div className="bg-black overflow-hidden w-full min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full min-h-[500px] flex items-center justify-center px-8 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#e87aff]/5 opacity-50" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#42ff92]">Case</span> <span className="text-[#e87aff]">Studies</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore how we've helped brands across industries achieve their goals through strategic video production.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="relative w-full py-16 px-8 bg-gradient-to-r from-gray-950 via-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-[#42ff92] mb-2">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative w-full py-20 px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg mb-6 h-80">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#42ff92] text-sm font-semibold mb-2">{study.category}</p>
                    <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm font-semibold mb-2">CHALLENGE</p>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm font-semibold mb-2">SOLUTION</p>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm font-semibold mb-2">RESULTS</p>
                    <p className="text-[#42ff92] font-semibold">{study.results}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {study.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-900/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative w-full py-20 px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Our <span className="text-[#42ff92]">Process</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Discovery", desc: "Understand your goals and vision" },
              { step: "2", title: "Strategy", desc: "Develop a comprehensive plan" },
              { step: "3", title: "Production", desc: "Execute with precision and creativity" },
              { step: "4", title: "Delivery", desc: "Polish and optimize for impact" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 h-full">
                  <div className="w-10 h-10 bg-[#42ff92] text-black rounded-lg flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-1 bg-[#42ff92]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your <span className="text-[#42ff92]">Success</span> Story?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Let's collaborate to create compelling content that drives results
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-[#42ff92] text-black hover:bg-[#42ff92]/80 text-lg px-8 py-6">
              Start Your Project
            </Button>
            <Button variant="outline" className="border-[#e87aff] text-[#e87aff] hover:bg-[#e87aff]/10 text-lg px-8 py-6">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
