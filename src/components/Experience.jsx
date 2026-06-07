import { motion } from 'framer-motion'
import BlurText from './BlurText'

const jobs = [
  {
    role:'Software Engineer', company:'Least Action Pvt Ltd', period:'May 2025 – May 2026',
    desc:'Built dynamic web applications with React.js, Node.js, Express. Managed Firebase & MongoDB databases. Integrated Cloudinary for media, Postman for API testing. Expanding with Flutter for cross-platform mobile.',
  },
  {
    role:'Software Engineer', company:'Neartekpod Apac Pvt Ltd', period:'Feb 2025 – Apr 2025',
    desc:'Developed responsive UIs with React.js & Next.js. SQL operations for complex queries & data optimization. Node-RED visual workflows for API integration and automation.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-black py-24 px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.02)_0%,transparent_60%)]" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          transition={{ duration:0.6 }} className="text-sm font-body text-white/80 mb-6">
          // Experience
        </motion.p>
        <BlurText text="Work history"
          className="text-6xl md:text-7xl font-heading italic text-white leading-[0.9] tracking-[-3px] mb-16 justify-start" />
        <div className="flex flex-col gap-6">
          {jobs.map((job, i) => (
            <motion.div key={i}
              initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
              transition={{ delay:i*0.15, duration:0.7 }}
              className="liquid-glass rounded-[1.25rem] p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-6">
              <div className="md:w-48 flex-shrink-0">
                <p className="text-xs font-body text-white/50">{job.period}</p>
              </div>
              <div className="flex-1">
                <h3 className="font-heading italic text-white text-2xl md:text-3xl tracking-[-0.5px] leading-none">{job.role}</h3>
                <p className="text-sm font-body text-white/60 mt-1 mb-3">{job.company}</p>
                <p className="text-sm font-body font-light text-white/80 leading-relaxed">{job.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
