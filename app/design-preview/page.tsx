"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Play, ArrowUpRight, Volume2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const work = [
  { name: "SilverLining", type: "Thought leadership / strategic communications", image: "/images/case_studies/silverlining_casestudy.png" },
  { name: "Exactly AI", type: "Creative storytelling / digital content", image: "/images/case_studies/exactlyai_casestudy.png" },
  { name: "LDPR", type: "Editorial content / communications", image: "/images/case_studies/ldpr_casestudy.png" },
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>;
}

export default function DesignPreviewPage() {
  const [showVideoNote, setShowVideoNote] = useState(false);
  return (
    <main className="min-h-screen bg-[#F8F6F0] text-[#242720] selection:bg-[#D7C9B4]">
      <div className="border-b border-[#DCD9D0] bg-[#EAE4D8] px-5 py-2 text-center text-[11px] font-medium tracking-[0.12em] text-[#303A30] uppercase">Design prototype · Existing website remains unchanged</div>
      <header className="sticky top-0 z-40 border-b border-[#DCD9D0] bg-[#F8F6F0]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12">
          <Link href="/design-preview" className="text-[22px] font-semibold tracking-[-0.06em]">blaven<span className="text-[#65725C]">.</span></Link>
          <nav className="hidden items-center gap-9 text-[12px] font-medium tracking-wide md:flex">
            <a href="#work" className="hover:text-[#65725C]">Our work</a><a href="#approach" className="hover:text-[#65725C]">What we do</a><a href="#in-action" className="hover:text-[#65725C]">In action</a>
          </nav>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#303A30] px-5 py-3 text-xs font-semibold text-[#F8F6F0] transition-colors hover:bg-[#65725C]">Let's talk <ArrowUpRight size={14}/></Link>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-4 py-5 md:px-8 md:py-8">
        <section className="grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="flex min-h-[530px] flex-col justify-between bg-[#EEEAE1] p-8 md:p-14 lg:min-h-[640px]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#65725C]">Independent communications & creative studio / London</div>
            <div>
              <h1 className="max-w-[680px] font-serif text-[clamp(3.8rem,7vw,7.7rem)] leading-[0.92] tracking-[-0.065em]">Good ideas deserve to be <em className="font-normal text-[#65725C]">heard.</em></h1>
              <p className="mt-9 max-w-[480px] text-[15px] leading-[1.85] text-[#4B5049]">Strategic communications for organisations with meaningful ideas. We turn expertise into stories, conversations, and content that build lasting influence.</p>
              <Link href="#work" className="mt-9 inline-flex items-center gap-3 border-b border-[#303A30] pb-2 text-xs font-semibold uppercase tracking-[0.12em]">Explore our work <ArrowDownRight size={16}/></Link>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#777A70]">Strategy / Storytelling / Production</span>
          </Reveal>
          <Reveal className="relative min-h-[390px] overflow-hidden bg-[#65725C] lg:min-h-[640px]">
            <Image src="/images/case_studies/silverlining_casestudy.png" alt="SilverLining project imagery" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover transition-transform duration-1000 hover:scale-[1.04]"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B241D]/80 via-transparent to-transparent"/>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-[#F8F6F0] md:p-10"><span className="text-[10px] uppercase tracking-[0.22em]">Selected project / 01</span><p className="mt-3 font-serif text-4xl">Ideas with impact.</p></div>
          </Reveal>
        </section>

        <section id="approach" className="grid gap-3 pt-3 md:grid-cols-3">
          <Reveal className="flex min-h-[270px] flex-col justify-between bg-[#65725C] p-8 text-[#F8F6F0] md:p-10"><span className="text-[11px] uppercase tracking-[0.2em]">01 / Think</span><div><h2 className="font-serif text-4xl">Find the story.</h2><p className="mt-4 max-w-xs text-sm leading-7 text-[#E8EAE3]">Uncover the ideas, insights, and expertise that make your perspective worth hearing.</p></div></Reveal>
          <Reveal className="flex min-h-[270px] flex-col justify-between bg-[#D7C9B4] p-8 md:p-10"><span className="text-[11px] uppercase tracking-[0.2em]">02 / Make</span><div><h2 className="font-serif text-4xl">Make it matter.</h2><p className="mt-4 max-w-xs text-sm leading-7">From thoughtful interviews to beautifully crafted writing and video.</p></div></Reveal>
          <Reveal className="flex min-h-[270px] flex-col justify-between bg-[#303A30] p-8 text-[#F8F6F0] md:p-10"><span className="text-[11px] uppercase tracking-[0.2em]">03 / Share</span><div><h2 className="font-serif text-4xl">Build influence.</h2><p className="mt-4 max-w-xs text-sm leading-7 text-[#E8EAE3]">A consistent presence across the channels where your audience is paying attention.</p></div></Reveal>
        </section>

        <section id="in-action" className="py-24 md:py-32">
          <Reveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#65725C]">Thought leadership / In action</p><h2 className="max-w-[820px] font-serif text-[clamp(3.2rem,6vw,6.4rem)] leading-[0.98] tracking-[-0.05em]">One conversation.<br/><em className="text-[#65725C]">A world of content.</em></h2></div><p className="max-w-[270px] text-sm leading-7 text-[#64685F]">See how a single meaningful conversation becomes a whole ecosystem of ideas.</p></Reveal>
          <Reveal className="grid gap-3 lg:grid-cols-[1.5fr_0.5fr]">
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#303A30] md:min-h-[560px]">
              <Image src="/images/case_studies/silverlining_casestudy.png" alt="Illustrative podcast feature, awaiting a real video thumbnail" fill sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover opacity-70"/>
              <div className="absolute inset-0 bg-[#17221A]/25"/>
              <button onClick={() => setShowVideoNote(true)} aria-label="About the video showcase prototype" className="relative z-10 flex size-20 items-center justify-center rounded-full border border-white/80 bg-[#F8F6F0]/95 text-[#303A30] shadow-xl transition-transform duration-300 hover:scale-110 md:size-24"><Play size={30} fill="currentColor" className="ml-1"/></button>
              <div className="absolute bottom-7 left-7 right-7 flex justify-between gap-4 text-white"><div><span className="text-[10px] uppercase tracking-[0.2em]">The conversation / Featured film</span><h3 className="mt-2 font-serif text-3xl md:text-4xl">Ideas worth exploring.</h3></div><span className="self-end text-[10px] uppercase tracking-widest">Video placeholder</span></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {["A moment worth sharing","The insight that sticks"].map((name, index)=><div key={name} className="relative flex min-h-[260px] flex-col justify-end overflow-hidden bg-[#65725C] p-7 text-white"><Image src={index===0?"/images/case_studies/exactlyai_casestudy.png":"/images/case_studies/ldpr_casestudy.png"} alt="Illustrative short-form video thumbnail" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover opacity-60 transition-transform duration-700 hover:scale-105"/><div className="relative z-10"><span className="mb-4 inline-flex size-10 items-center justify-center rounded-full border border-white/70"><Play size={14} fill="currentColor"/></span><p className="font-serif text-2xl">{name}</p><span className="mt-2 inline-block text-[10px] uppercase tracking-[0.15em]">Short-form video / Placeholder</span></div></div>)}
            </div>
          </Reveal>
          {showVideoNote && <div role="status" className="mt-4 flex items-center justify-between gap-3 border border-[#B9BBAE] bg-[#EEEAE1] p-4 text-sm"><span>Video player prototype: supply your interview video and thumbnail to enable playback.</span><button onClick={()=>setShowVideoNote(false)} className="underline">Dismiss</button></div>}
          <Reveal className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="bg-[#EEEAE1] p-8 md:p-10"><span className="text-[10px] uppercase tracking-[0.2em] text-[#65725C]">Editorial / Newsletter</span><h3 className="mt-12 font-serif text-3xl">The story continues in writing.</h3><p className="mt-5 text-sm leading-7 text-[#60665E]">Articles and newsletters that give ideas room to breathe.</p></div>
            <div className="bg-[#D7C9B4] p-8 md:p-10"><span className="text-[10px] uppercase tracking-[0.2em]">Distribution / LinkedIn</span><h3 className="mt-12 font-serif text-3xl">From insight to conversation.</h3><p className="mt-5 text-sm leading-7">Thoughtful posts, compelling clips, and an ongoing presence.</p></div>
            <div className="bg-[#65725C] p-8 text-[#F8F6F0] md:p-10"><span className="text-[10px] uppercase tracking-[0.2em]">Impact / Presence</span><h3 className="mt-12 font-serif text-3xl">A voice people remember.</h3><p className="mt-5 text-sm leading-7 text-[#E5E9E1]">Not more noise. A distinctive point of view, consistently expressed.</p></div>
          </Reveal>
        </section>

        <section id="work" className="pb-24 md:pb-32">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6"><div><p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#65725C]">Selected work / Portfolio</p><h2 className="font-serif text-[clamp(3.2rem,6vw,6rem)] leading-none tracking-[-0.05em]">Work that <em>speaks.</em></h2></div><Link href="/case-studies" className="inline-flex items-center gap-3 border-b border-[#303A30] pb-2 text-xs font-semibold uppercase tracking-widest">All case studies <ArrowUpRight size={16}/></Link></Reveal>
          <div className="grid gap-3 md:grid-cols-3">{work.map((item,i)=><Reveal key={item.name}><Link href="/case-studies" className="group block bg-[#EEEAE1]"><div className="relative aspect-[4/3] overflow-hidden bg-[#65725C]"><Image src={item.image} alt={item.name+" case study"} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105"/></div><div className="flex items-start justify-between gap-4 p-6 md:p-8"><div><span className="text-[10px] uppercase tracking-[0.15em] text-[#65725C]">0{i+1} / Case study</span><h3 className="mt-3 font-serif text-3xl">{item.name}</h3><p className="mt-2 text-xs leading-6 text-[#656B62]">{item.type}</p></div><ArrowUpRight size={19}/></div></Link></Reveal>)}</div>
        </section>
        <Reveal className="flex flex-col items-start justify-between gap-10 bg-[#303A30] p-9 text-[#F8F6F0] md:flex-row md:items-end md:p-16"><div><p className="mb-7 text-[11px] uppercase tracking-[0.2em] text-[#D7C9B4]">Let's make something meaningful</p><h2 className="font-serif text-[clamp(3.2rem,6vw,6rem)] leading-[0.98] tracking-[-0.04em]">Have a story<br/>worth telling?</h2></div><Link href="/contact" className="inline-flex items-center gap-3 bg-[#F8F6F0] px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[#303A30] transition-colors hover:bg-[#D7C9B4]">Let's talk <ArrowRight size={16}/></Link></Reveal>
      </div>
      <footer className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-4 px-8 py-9 text-xs text-[#6A6F65]"><span>© Blaven Media · Editorial redesign concept</span><Link href="/" className="underline underline-offset-4">Return to existing homepage</Link></footer>
    </main>
  );
}
