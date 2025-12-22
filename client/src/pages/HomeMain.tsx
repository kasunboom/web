import React from "react";
import { Button } from "@/components/ui/button";

export const HomeMain = (): JSX.Element => {
  const contactPersons = [
    {
      name: "Murray",
      lastName: "William",
      role: "CRO",
      location: "Bahrain",
      phone: "973 3613 2469",
      email: "murray@pfp.online",
    },
    {
      name: "Dan",
      lastName: "Joseph",
      role: "Director",
      location: "Sri Lanka",
      phone: "947 253 803 39",
      email: "dan@pfp.online",
    },
  ];

  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[4997px] relative">
      <div className="absolute top-[-17px] left-0 w-[1440px] h-[9778px] bg-black" />

      <div className="absolute top-0 left-[calc(50.00%_-_720px)] w-[1440px] h-[9778px]">
        <div className="absolute top-[4618px] left-[3px] w-[1437px] h-[754px] bg-black" />

        <section className="absolute top-[4673px] left-[calc(50.00%_-_602px)] w-[1216px] h-[250px]">
          <h2 className="absolute w-[12.99%] h-[16.29%] top-[14.40%] left-[19.08%] [font-family:'Arial_Nova-Bold',Helvetica] font-normal text-transparent text-[32px] leading-[normal]">
            <span className="font-bold text-[#42ff92] tracking-[-0.10px]">
              Contact
            </span>
            <span className="font-bold text-[#333333] text-[28px] tracking-[0]">
              &nbsp;
            </span>
            <span className="font-bold text-[#f6f6f6] text-[28px] tracking-[0]">
              Us
            </span>
          </h2>

          <p className="absolute w-[24.59%] h-[7.94%] top-[33.01%] left-[19.08%] [font-family:'Inter',Helvetica] font-normal text-[#f6f6f6] text-base tracking-[-0.16px] leading-[normal]">
            Bahrain – Saudi – UAE – India – Sri Lanka
          </p>

          {contactPersons.map((person, index) => (
            <div
              key={index}
              className={`absolute w-[15.05%] h-[8.00%] top-[56.80%] ${index === 0 ? "left-[19.08%]" : "left-[35.69%]"}`}
            >
              <p className="[font-family:'Arial_Nova-Regular',Helvetica] font-normal text-transparent text-base leading-[normal]">
                <span className="text-[#42ff92] tracking-[0]">
                  {person.name}
                </span>
                <span className="text-[#f6f6f6] tracking-[0]">
                  {" "}
                  {person.lastName} -{" "}
                </span>
                <span className="text-[#e87aff] tracking-[0]">
                  {person.role}
                </span>
              </p>
            </div>
          ))}

          <div className="absolute top-0 left-[784px] w-[414px] h-[250px]">
            <h3 className="absolute w-[63.20%] h-[16.28%] top-0 left-0 [font-family:'Arial_Nova-Bold',Helvetica] font-normal text-transparent text-2xl tracking-[-0.24px] leading-[normal]">
              <span className="font-bold text-[#f6f6f6] tracking-[-0.06px]">
                Send Us a{" "}
              </span>
              <span className="font-bold text-[#42ff92] tracking-[-0.06px]">
                Message
              </span>
            </h3>

            <form className="absolute top-[58px] left-0 w-[418px] h-[123px]">
              <label className="absolute w-[9.15%] h-[14.44%] top-0 left-0 [font-family:'Arial_Nova-Regular',Helvetica] font-normal text-[#42ff92] text-sm tracking-[-0.14px] leading-[normal]">
                Name
              </label>

              <img
                className="absolute w-[45.45%] h-[26.02%] top-[19.11%] left-0"
                alt="Vector"
                src="/figmaAssets/vector.svg"
              />

              <img
                className="w-[45.45%] top-[18.29%] left-[52.99%] absolute h-[26.02%]"
                alt="Vector"
                src="/figmaAssets/vector.svg"
              />

              <img
                className="w-[98.56%] top-[73.58%] left-0 absolute h-[26.02%]"
                alt="Vector"
                src="/figmaAssets/vector.svg"
              />

              <label className="absolute w-[25.36%] h-[14.63%] top-0 left-[53.11%] [font-family:'Arial_Nova-Regular',Helvetica] font-normal text-[#42ff92] text-sm tracking-[-0.14px] leading-[normal]">
                Phone
              </label>

              <label className="absolute w-[17.70%] h-[14.63%] top-[55.28%] left-0 [font-family:'Arial_Nova-Regular',Helvetica] font-normal text-[#42ff92] text-sm tracking-[-0.14px] leading-[normal]">
                Email
              </label>
            </form>

            <Button className="absolute top-[209px] left-[calc(50.00%_-_207px)] w-[163px] h-[41px] bg-[#42ff92] hover:bg-[#42ff92]/90 text-black">
              <span className="[font-family:'Arial_Nova-Bold',Helvetica] font-bold text-xs tracking-[1.00px]">
                SEND
              </span>
            </Button>
          </div>

          {contactPersons.map((person, index) => (
            <div
              key={`contact-${index}`}
              className={`absolute ${index === 0 ? "left-[calc(50.00%_-_447px)]" : "left-[calc(50.00%_-_174px)]"}`}
            >
              <p className="absolute top-[200px] [font-family:'Arial_Nova-Light',Helvetica] font-light text-[#42ff92] text-sm tracking-[0] leading-[30px] text-center whitespace-nowrap">
                {person.location}
              </p>

              <p
                className={`absolute top-[166px] ${index === 0 ? "w-[237px]" : ""} [font-family:'Arial_Nova-Light',Helvetica] font-light text-white text-sm text-center tracking-[0] leading-[30px] whitespace-nowrap`}
              >
                {person.phone}
              </p>

              <p
                className={`absolute top-[182px] ${index === 0 ? "w-[237px]" : "w-[94px]"} [font-family:'Arial_Nova-Light',Helvetica] font-light text-[#e87aff] text-sm text-center tracking-[0] leading-[30px] whitespace-nowrap`}
              >
                {person.email}
              </p>
            </div>
          ))}

          <img
            className="absolute top-11 left-0 w-[180px] h-[180px] object-cover"
            alt="Pfp"
            src="/figmaAssets/pfp-qr2-1.png"
          />
        </section>

        <div className="absolute top-0 left-[-882px] w-[2378px] h-[5126px]">
          <img
            className="absolute top-0 left-[886px] w-[1436px] h-[821px] object-cover"
            alt="Element back"
            src="/figmaAssets/1st-back-1-1.png"
          />

          <img
            className="absolute top-[852px] left-[891px] w-[1422px] h-[2126px]"
            alt="Element back"
            src="/figmaAssets/1st-back-2.png"
          />

          <img
            className="absolute top-[2359px] left-[882px] w-[1434px] h-[821px] object-cover"
            alt="Element back"
            src="/figmaAssets/1st-back-1-1.png"
          />

          <img
            className="absolute top-[2748px] left-[882px] w-[1440px] h-[2249px]"
            alt="Element back"
            src="/figmaAssets/1st-back-4.png"
          />

          <img
            className="absolute top-[2979px] left-[888px] w-[1428px] h-[1639px]"
            alt="Element back"
            src="/figmaAssets/1st-back-3.png"
          />
        </div>

        <section className="absolute top-[3796px] left-[27px] w-[1293px] h-[705px]">
          <h2 className="absolute top-11 left-[72px] w-[390px] [font-family:'Noto_Serif_Display',Helvetica] font-semibold italic text-[#42ff92] text-[55px] text-center tracking-[-3.00px] leading-[25px]">
            Studies
          </h2>

          <h2 className="absolute top-0 left-0 w-[390px] [font-family:'Arial_Nova-Bold',Helvetica] font-normal text-white text-[45px] text-center tracking-[1.00px] leading-[25px]">
            <span className="font-bold tracking-[0.45px]">Case</span>
            <span className="[font-family:'Noto_Serif_Display',Helvetica] font-semibold tracking-[0.45px]">
              {""}
            </span>
          </h2>

          <Button className="absolute top-[520px] left-[calc(50.00%_-_338px)] w-[158px] h-[41px] bg-[#42ff92] hover:bg-[#42ff92]/90 text-black">
            <span className="[font-family:'Arial_Nova-Bold',Helvetica] font-bold text-xs text-center tracking-[1.00px]">
              EXPLORE
            </span>
          </Button>

          <article className="absolute top-[61px] left-[110px] w-[1179px] h-[644px]">
            <div className="absolute w-[37.15%] h-[45.47%] top-[18.16%] left-[5.09%]">
              <p className="absolute w-[99.54%] h-[81.91%] top-[18.09%] left-0 [font-family:'Arial_Nova-Regular',Helvetica] font-normal text-[#f6f6f6d6] text-xl text-center tracking-[-0.80px] leading-[normal]">
                SwirlCraft had a powerful product—multi-purpose, skin-friendly
                pigments—but the market didn&apos;t understand its potential.
                PFP created a brand profile video that blended story and
                education, showing both the science and the soul behind the
                product.
                <br /> The film drove 80 inquiries in two weeks, improved market
                understanding, and strengthened the brand by sharing
                Vinitha&apos;s personal story.
              </p>

              <header className="absolute top-0 left-3.5 w-[412px] h-[27px] flex gap-1">
                <h3 className="w-[97px] h-[27px] opacity-80 [font-family:'Arial_Nova-Bold',Helvetica] font-normal text-transparent text-[22px] text-center leading-[normal]">
                  <span className="font-bold text-[#42ff92] tracking-[-0.19px]">
                    SwirlCraft
                  </span>
                  <span className="font-bold text-slate-900 tracking-[-0.19px]">
                    {""}
                  </span>
                </h3>

                <h3 className="w-[307px] h-[27px] opacity-80 [font-family:'Arial_Nova-Bold',Helvetica] font-normal text-transparent text-[22px] text-center leading-[normal]">
                  <span className="font-bold text-[#f6f6f6] tracking-[-0.19px]">
                    —
                  </span>
                  <span className="font-bold text-slate-900 tracking-[-0.19px]">
                    &nbsp;
                  </span>
                  <span className="font-bold text-[#f6f6f6] tracking-[-0.19px]">
                    Turning Pigments into a Story
                  </span>
                </h3>
              </header>
            </div>

            <div className="absolute w-[49.28%] h-full top-0 left-[50.72%]">
              <img
                className="absolute w-[68.32%] top-[391px] left-0 h-[253px] object-cover"
                alt="Picture"
                src="/figmaAssets/picture7-2.png"
              />

              <img
                className="absolute w-[65.86%] top-0 left-0 h-[231px] object-cover"
                alt="Picture"
                src="/figmaAssets/picture5-2.png"
              />

              <img
                className="absolute w-[60.07%] top-[201px] left-[39.93%] h-[218px] object-cover"
                alt="Picture"
                src="/figmaAssets/picture4-2.png"
              />
            </div>
          </article>
        </section>
      </div>

      <img
        className="absolute top-[2852px] left-[120px] w-[1204px] h-[766px]"
        alt="Services"
        src="/figmaAssets/services.svg"
      />

      <img
        className="absolute top-[1972px] left-[calc(50.00%_-_597px)] w-[1181px] h-[734px]"
        alt="Map"
        src="/figmaAssets/map.png"
      />

      <img
        className="absolute top-[1021px] left-[calc(50.00%_-_606px)] w-[1154px] h-[834px]"
        alt="Industres section"
        src="/figmaAssets/industres-section.png"
      />

      <div className="absolute top-[874px] left-[calc(50.00%_-_700px)] w-[1400px] h-10 bg-[url(/figmaAssets/frame-3.svg)] bg-[100%_100%]" />

      <img
        className="absolute top-[278px] left-[265px] w-[911px] h-[370px]"
        alt="Over bullion views"
        src="/figmaAssets/over-1-bullion-views-text-and-get-your-first-virol-video-button-.svg"
      />

      <nav className="absolute top-0 left-0 w-[1440px] h-[100px]">
        <img alt="Navigation" src="/figmaAssets/navigation.svg" />
      </nav>
    </div>
  );
};
