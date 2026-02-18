import React, { useMemo, useState } from 'react';
import { siteContent } from './content';
import heroImg from './assets/hero-arch.jpeg';
import tool1 from './assets/tool-privacy.jpeg';
import tool2 from './assets/tool-block.jpeg';
import tool3 from './assets/tool-legal.jpeg';
import tool4 from './assets/tool-support.jpeg';
import spotlightImg from './assets/spotlight-person.jpeg';

function App() {
  const [page, setPage] = useState('hero');
  const [selectedToolId, setSelectedToolId] = useState(null);

  const tools = useMemo(
    () => [
      {
        ...siteContent.safetyToolkit[0],
        image: tool1,
        mobileTitle: 'Privacy',
        detailTitle: 'Privacy Check',
        detailText:
          'Review profile visibility, remove sensitive public info, and enable two-factor authentication across your accounts.',
      },
      {
        ...siteContent.safetyToolkit[1],
        image: tool2,
        mobileTitle: 'Block & Report',
        detailTitle: 'Block & Report',
        detailText:
          'Use platform safety tools immediately. Document harmful activity and report repeat behavior with screenshots and timestamps.',
      },
      {
        ...siteContent.safetyToolkit[2],
        image: tool3,
        mobileTitle: 'Legal Rights',
        detailTitle: 'Legal Rights',
        detailText:
          'If someone shares private content without consent, blackmails you, or stalks you online, you can file a complaint with FIA Cyber Crime Wing and local police. Save screenshots, URLs, usernames, and timestamps as evidence before reporting. You can also seek legal aid and request platform takedown of harmful content.',
      },
      {
        ...siteContent.safetyToolkit[3],
        image: tool4,
        mobileTitle: 'Support',
        detailTitle: 'Get Support',
        detailText:
          'Talk to trusted people, reach support networks, and use helplines. Safety improves when you do not handle abuse alone. If you are in immediate danger, contact emergency services first.',
      },
    ],
    []
  );

  const selectedTool = tools.find((tool) => tool.id === selectedToolId);

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-body text-forme-brown">
      <div className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full bg-forme-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-[28rem] h-72 w-72 rounded-full bg-forme-brown/10 blur-3xl" />

      <main className="relative z-10 w-full">
        {page === 'hero' && (
          <section className="page-fade flex flex-col gap-5 px-4 pb-8 pt-4 md:px-8 md:pb-10">
            <div className="soft-ring relative overflow-hidden rounded-forme-arch h-[48vh] min-h-[300px] md:h-[56vh] md:min-h-[560px]">
              <img
                src={heroImg}
                alt="Secure digital life"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/15" />
            </div>
            <div className="rounded-forme-card border border-forme-brown/10 bg-forme-beige/70 p-5 text-center text-lg italic tracking-wide text-forme-brown/95 shadow-sm">
              "{siteContent.hero.tagline}"
            </div>
            <button
              type="button"
              onClick={() => setPage('hub')}
              className="soft-ring rounded-forme-pill bg-forme-brown p-6 text-center text-4xl font-display uppercase tracking-[0.18em] text-forme-beige transition hover:-translate-y-0.5 hover:bg-[#2f211c]"
            >
              {siteContent.hero.title}
            </button>
          </section>
        )}

        {page === 'hub' && (
          <section className="page-fade flex flex-col gap-6 px-4 pb-8 pt-6 md:px-8 md:pb-12">
            <div className="flex items-center justify-between">
              <h2 className="text-5xl font-display leading-none md:text-6xl">Safety Hub</h2>
              <button
                type="button"
                onClick={() => setPage('hero')}
                className="rounded-full border border-forme-brown/20 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition hover:bg-white"
              >
                Back
              </button>
            </div>

            <div className="soft-ring rounded-forme-card border border-forme-brown/10 bg-[#f2e8e2] p-8 md:p-10">
              <p className="max-w-2xl text-xl leading-relaxed text-forme-brown/75">{siteContent.hero.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => {
                    setSelectedToolId(tool.id);
                    setPage('detail');
                  }}
                  className={`${tool.color} soft-ring flex flex-col gap-4 rounded-[40px] p-5 text-left transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="aspect-square w-full overflow-hidden rounded-[24px]">
                    <img
                      src={tool.image}
                      alt={tool.title}
                      className="h-full w-full object-cover grayscale-[0.15] transition duration-500 hover:scale-105 hover:grayscale-0"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1 truncate whitespace-nowrap text-sm font-extrabold uppercase tracking-tight md:text-base">
                      <span className="md:hidden">{tool.mobileTitle}</span>
                      <span className="hidden md:inline">{tool.title}</span>
                    </h3>
                    <p className="text-sm font-medium leading-tight opacity-70">{tool.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {page === 'detail' && selectedTool && (
          <section className="page-fade min-h-screen">
            <div className="h-[58vh] min-h-[420px] overflow-hidden">
              <img
                src={selectedTool.id === 4 ? spotlightImg : selectedTool.image}
                alt={selectedTool.detailTitle}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative -mt-14 rounded-t-[46px] bg-forme-brown px-6 pb-12 pt-10 text-forme-beige md:px-10 md:pt-12">
              <h3 className="mb-4 text-5xl font-display leading-[0.95]">{selectedTool.detailTitle}</h3>
              <p className="max-w-3xl text-xl leading-relaxed opacity-90">{selectedTool.detailText}</p>

              {selectedTool.id === 4 && (
                <div className="mt-6 rounded-3xl border border-forme-beige/20 bg-forme-beige/10 p-5">
                  <h4 className="text-lg font-bold uppercase tracking-[0.08em]">Pakistan Helplines</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed opacity-95 md:text-base">
                    <li>Police Emergency: 15</li>
                    <li>Rescue Service: 1122</li>
                    <li>FIA Cyber Crime Helpline: 1991 / 9911</li>
                    <li>DRF Cyber Harassment Helpline: 0800-39393</li>
                    <li>Madadgaar Helpline: 1098</li>
                  </ul>
                  <p className="mt-3 text-xs opacity-80">Numbers can vary by region, so verify if a line is unavailable.</p>
                </div>
              )}

              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setPage('hub')}
                  className="rounded-full bg-forme-beige px-7 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-forme-brown transition hover:bg-white"
                >
                  Back To Hub
                </button>
                <button
                  type="button"
                  onClick={() => setPage('hero')}
                  className="rounded-full border border-forme-beige/40 px-7 py-3 text-xs font-extrabold uppercase tracking-[0.16em] transition hover:bg-forme-beige/10"
                >
                  Home
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

    </div>
  );
}

export default App;
