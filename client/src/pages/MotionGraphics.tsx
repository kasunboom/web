import React from "react";
import { Button } from "@/components/ui/button";

export const MotionGraphics = (): JSX.Element => {
  const services = [
    {
      icon: "✨",
      title: "Logo Animation",
      description: "Bring your brand identity to life with stunning animated logos",
    },
    {
      icon: "📱",
      title: "UI/UX Animation",
      description: "Smooth, intuitive animations that enhance user experience",
    },
    {
      icon: "🎬",
      title: "Explainer Videos",
      description: "Complex concepts made simple with motion graphics",
    },
    {
      icon: "📊",
      title: "Data Visualization",
      description: "Turn raw data into compelling animated stories",
    },
    {
      icon: "🎨",
      title: "Title Sequences",
      description: "Cinematic opening and closing sequences for videos",
    },
    {
      icon: "🌐",
      title: "Web Animation",
      description: "Interactive animations that engage your audience",
    },
  ];

  const portfolio = [
    {
      title: "Tech Brand Explainer",
      duration: "60 sec",
      views: "2.3M",
      image: "/figmaAssets/1st-back-1-1.png",
    },
    {
      title: "Product Demo Animation",
      duration: "45 sec",
      views: "1.8M",
      image: "/figmaAssets/1st-back-2.png",
    },
    {
      title: "Corporate Intro",
      duration: "30 sec",
      views: "950K",
      image: "/figmaAssets/1st-back-3.png",
    },
    {
      title: "Social Media Campaign",
      duration: "15 sec",
      views: "3.2M",
      image: "/figmaAssets/1st-back-4.png",
    },
  ];

  const tools = [
    { name: "After Effects", level: "Expert" },
    { name: "Cinema 4D", level: "Advanced" },
    { name: "Motion Design", level: "Expert" },
    { name: "Premiere Pro", level: "Advanced" },
    { name: "Figma", level: "Expert" },
    { name: "Blender", level: "Advanced" },
  ];

  return (
    <div className="bg-black overflow-hidden w-full min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full min-h-[600px] flex items-center justify-center px-8 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#e87aff]/5 opacity-50" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-[#e87aff]">Motion</span> Graphics
            <br />
            That <span className="text-[#42ff92]">Captivate</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            From concept to final render, we create stunning motion graphics that bring your vision to life and engage your audience.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-[#e87aff] text-black hover:bg-[#e87aff]/80 text-lg px-8 py-6">
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
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Our <span className="text-[#e87aff]">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-[#e87aff]/50 transition-all hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="relative w-full py-20 px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16">
            Featured <span className="text-[#e87aff]">Works</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {portfolio.map((work, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{work.title}</h3>
                      <div className="flex justify-between text-sm text-[#42ff92]">
                        <span>Duration: {work.duration}</span>
                        <span>Views: {work.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card Info */}
                <div className="bg-gray-900/50 p-4 border-t border-gray-800">
                  <p className="text-white font-semibold">{work.title}</p>
                  <p className="text-gray-400 text-sm">{work.duration} • {work.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="relative w-full py-20 px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Tools & <span className="text-[#e87aff]">Technologies</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-6"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                  <span className="text-[#42ff92] text-sm font-semibold">{tool.level}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 mt-3">
                  <div
                    className="bg-gradient-to-r from-[#42ff92] to-[#e87aff] h-2 rounded-full"
                    style={{
                      width: tool.level === "Expert" ? "95%" : "80%",
                    }}
                  />
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
              { step: "1", title: "Concept", desc: "Develop creative direction and storyboards" },
              { step: "2", title: "Design", desc: "Create detailed design mockups and assets" },
              { step: "3", title: "Animation", desc: "Bring designs to life with motion" },
              { step: "4", title: "Polish", desc: "Color grade, sound design, final delivery" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 h-full">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#42ff92] to-[#e87aff] rounded-lg flex items-center justify-center font-bold text-black mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-1 bg-gradient-to-r from-[#42ff92] to-[#e87aff]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full py-16 px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Animations Created" },
              { value: "150+", label: "Clients Served" },
              { value: "15M+", label: "Total Views" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl font-bold text-[#e87aff] mb-2">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 px-8 bg-gradient-to-t from-gray-950 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your <span className="text-[#e87aff]">Brand</span>?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Let's create motion graphics that leave a lasting impression on your audience
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-[#e87aff] text-black hover:bg-[#e87aff]/80 text-lg px-8 py-6">
              Get Started Now
            </Button>
            <Button variant="outline" className="border-[#42ff92] text-[#42ff92] hover:bg-[#42ff92]/10 text-lg px-8 py-6">
              Schedule Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
