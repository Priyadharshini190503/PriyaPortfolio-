import { motion } from 'framer-motion'
import BlurText from './BlurText'
import { ArrowUpRight, Github, LinkedIn } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-24 px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.02)_0%,transparent_60%)]" />
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          className="text-sm font-body text-white/80 mb-6">
          // Let's Connect
        </motion.p>
        <BlurText text="Ready to build something remarkable together"
          className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.9] tracking-[-3px] max-w-3xl" />
        <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          transition={{ delay:0.4, duration:0.6 }}
          className="mt-6 text-sm md:text-base text-white/60 font-body font-light max-w-lg">
          Priyadharshini Murugan · Software Engineer<br/>
          priyadharshini190503@gmail.com · +91 7305573342
        </motion.p>
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          transition={{ delay:0.6, duration:0.6 }}
          className="flex items-center gap-4 mt-8 flex-wrap justify-center">
          <a href="mailto:priyadharshini190503@gmail.com"
            className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2">
            Send Email <ArrowUpRight />
          </a>
          <a href="https://linkedin.com/in/priyadharshini190503" target="_blank" rel="noreferrer"
            className="liquid-glass rounded-full w-11 h-11 flex items-center justify-center text-white">
            <LinkedIn />
          </a>
          <a href="https://github.com/Priyadharshini1905" target="_blank" rel="noreferrer"
            className="liquid-glass rounded-full w-11 h-11 flex items-center justify-center text-white">
            <Github />
          </a>
        </motion.div>
        <div className="mt-16 pt-8 border-t border-white/10 w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="liquid-glass w-8 h-8 rounded-full flex items-center justify-center">
              <span className="font-heading italic text-white text-sm">p</span>
            </div>
            <span className="font-body text-xs text-white/40">Priyadharshini Murugan · B.E. Computer Science · CGPA 8.45</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-body text-xs text-white/30">Tamil (Native)</span>
            <span className="font-body text-xs text-white/30">English (Professional)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
