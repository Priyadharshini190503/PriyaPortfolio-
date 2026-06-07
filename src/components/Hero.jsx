import { motion } from 'framer-motion'
import FadingVideo from './FadingVideo'
import BlurText from './BlurText'
import Navbar from './Navbar'
import { ArrowUpRight, Play } from './Icons'

const base = { filter:'blur(10px)', opacity:0, y:20 }
const show = { filter:'blur(0px)', opacity:1, y:0 }
const ease = 'easeOut'

export default function Hero() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col">
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width:'120%', height:'120%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-black z-[-1]" />
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
          <motion.div initial={base} animate={show} transition={{ delay:0.4, duration:0.7, ease }}
            className="liquid-glass rounded-full px-1.5 py-1.5 flex items-center gap-2 mb-6">
            <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold font-body">New</span>
            <span className="text-sm text-white/90 font-body pr-3">Open to Opportunities · Fullstack Developer</span>
          </motion.div>
          <BlurText text="Building Products That Scale Beyond Boundaries"
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.9] max-w-3xl tracking-[-3px] md:tracking-[-4px]" />
          <motion.p initial={base} animate={show} transition={{ delay:0.8, duration:0.7, ease }}
            className="mt-4 text-sm md:text-base text-white/80 max-w-2xl font-body font-light leading-relaxed">
            Fullstack Developer with 1+ year crafting responsive, scalable web applications.
            React · Next.js · Node.js · Firebase · MongoDB — clean code, real impact.
          </motion.p>
          <motion.div initial={base} animate={show} transition={{ delay:1.1, duration:0.7, ease }}
            className="flex items-center gap-6 mt-6 flex-wrap justify-center">
            <a href="mailto:priyadharshini190503@gmail.com"
              className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2">
              Get In Touch <ArrowUpRight />
            </a>
            <a href="#projects" className="flex items-center gap-2 text-white text-sm font-body font-medium">
              View Projects <Play />
            </a>
          </motion.div>
          <motion.div initial={base} animate={show} transition={{ delay:1.3, duration:0.7, ease }}
            className="flex items-stretch gap-4 mt-8 flex-wrap justify-center">
            <div className="liquid-glass p-5 w-[200px] rounded-[1.25rem] flex flex-col">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              <div className="mt-6">
                <p className="font-heading italic text-white text-4xl tracking-[-1px] leading-none">1+ Yr</p>
                <p className="text-xs text-white/70 font-body font-light mt-2">Professional Experience</p>
              </div>
            </div>
            <div className="liquid-glass p-5 w-[200px] rounded-[1.25rem] flex flex-col">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
              </svg>
              <div className="mt-6">
                <p className="font-heading italic text-white text-4xl tracking-[-1px] leading-none">5+</p>
                <p className="text-xs text-white/70 font-body font-light mt-2">Production Projects Shipped</p>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div initial={base} animate={show} transition={{ delay:1.4, duration:0.7, ease }}
          className="flex flex-col items-center gap-4 pb-8 px-4">
          <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Proficient across the modern web stack
          </span>
          <div className="flex items-center gap-8 md:gap-16 flex-wrap justify-center">
            {['React','Next.js','Node.js','Firebase','MongoDB'].map(t => (
              <span key={t} className="font-heading italic text-white text-2xl md:text-3xl tracking-tight">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
