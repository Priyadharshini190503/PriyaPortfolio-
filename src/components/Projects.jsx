import { motion } from 'framer-motion'
import FadingVideo from './FadingVideo'

const projects = [
  {
    name: 'MiloCabs',
    desc: 'Online cab booking platform with real-time ride tracking, driver assignment, and user authentication. Built end-to-end with responsive UI and robust backend APIs.',
    tags: ['React.js','Node.js','MongoDB','Firebase'],
    icon: <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5zm-8-4c-.83 0-1.5.67-1.5 1.5S10.17 16 11 16s1.5-.67 1.5-1.5S11.83 13 11 13zm6 0c-.83 0-1.5.67-1.5 1.5S16.17 16 17 16s1.5-.67 1.5-1.5S17.83 13 17 13z"/>
  },
  {
    name: 'SimplifAI',
    desc: 'AI-powered expense management & project tracker. OpenAI integration extracts receipt data; dashboards visualize sprints, tasks, and team workload.',
    tags: ['React.js','DynamoDB','OpenAI','Node.js'],
    icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
  },
  {
    name: 'CityWash',
    desc: 'Online laundry & dry-cleaning platform. Users schedule pickups, track orders, and manage cleaning preferences with a seamless cross-device experience.',
    tags: ['React.js','Express','MongoDB','Firebase'],
    icon: <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative w-full min-h-screen bg-black overflow-hidden">
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[1]" />
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        <div className="mb-auto">
          <p className="text-sm font-body text-white/80 mb-6">// Featured Projects</p>
          <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            Code<br/>delivered
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {projects.map((proj, idx) => (
            <motion.div key={proj.name}
              initial={{ opacity:0, y:40, filter:'blur(8px)' }}
              whileInView={{ opacity:1, y:0, filter:'blur(0px)' }}
              viewport={{ once:true, amount:0.15 }}
              transition={{ delay:idx*0.15, duration:0.7, ease:'easeOut' }}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="liquid-glass w-11 h-11 rounded-[0.75rem] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">{proj.icon}</svg>
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {proj.tags.map(tag => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex-1" />
              <div className="mt-6">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">{proj.name}</h3>
                <p className="mt-3 text-sm text-white/80 font-body font-light leading-snug">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
