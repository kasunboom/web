import React from "react";
import { Button } from "@/components/ui/button";

export const VideoProduction = (): JSX.Element => {
  const services = [
    {
      title: "Pre-Production",
      description: "Conceptualization, scriptwriting, storyboarding, and planning",
    },
    {
      title: "Production",
      description: "Professional filming, equipment, crew, and on-set management",
    },
    {
      title: "Post-Production",
      description: "Editing, color grading, sound design, and final delivery",
    },
  ];

  const portfolio = [
    {
      title: "Commercial Campaigns",
      views: "1.2M+ Views",
      image: "/figmaAssets/1st-back-1-1.png",
    },
    {
      title: "Corporate Videos",
      views: "850K+ Views",
      image: "/figmaAssets/1st-back-2.png",
    },
    {
      title: "Social Media Content",
      views: "2.5M+ Views",
      image: "/figmaAssets/1st-back-3.png",
    },
  ];

  return (
    <div className="bg-black overflow-hidden w-full min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full min-h-[600px] flex items-center justify-center px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#42ff92]/5 opacity-50" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-[#42ff92]">Video</span> Production
            <br />
            That Stands Out
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We create compelling video content that captures your brand's story and engages your audience. From concept to final delivery, we handle everything.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-[#42ff92] text-black hover:bg-[#42ff92]/80 text-lg px-8 py-6">
              Start Your Project
            </Button>
            <Button variant="outline" className="border-[#42ff92] text-[#42ff92] hover:bg-[#42ff92]/10 text-lg px-8 py-6">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="relative w-full py-20 px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16">
            Our <span className="text-[#42ff92]">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-[#42ff92]/50 transition-colors"
              >
                <div className="w-12 h-12 bg-[#42ff92] rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-black font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative w-full py-20 px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16">
            Featured <span className="text-[#42ff92]">Work</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-[#42ff92]">{item.views}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to <span className="text-[#42ff92]">Create</span> Something Amazing?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Let's bring your vision to life with professional video production
          </p>
          
          <Button className="bg-[#42ff92] text-black hover:bg-[#42ff92]/80 text-lg px-8 py-6">
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};
