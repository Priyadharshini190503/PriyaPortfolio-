import { motion } from 'framer-motion'
import BlurText from './BlurText'

const groups = [
  { label:'Frontend', items:['React.js','Next.js','HTML','Tailwind CSS'] },
  { label:'Backend', items:['Node.js','Express','Node-RED','RESTful APIs'] },
  { label:'Database', items:['MongoDB','Firebase','DynamoDB','MySQL'] },
  { label:'Cloud & Tools', items:['AWS S3','Cloudinary','Postman','GitHub'] },
  { label:'Languages', items:['JavaScript','Java'] },
  { label:'Learning', items:['Flutter'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center py-24 px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      <div className="relative z-10 w-full max-w-5xl">
        <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          transition={{ duration:0.6 }} className="text-sm font-body text-white/80 mb-6">
          // Skills & Technologies
        </motion.p>
        <BlurText text="Stack mastered"
          className="text-6xl md:text-7xl lg:text-[6rem] font-heading italic text-white leading-[0.9] tracking-[-3px] mb-16 justify-start" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <motion.div key={g.label}
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay:gi*0.1, duration:0.6, ease:'easeOut' }}
              className="liquid-glass rounded-[1.25rem] p-5">
              <p className="text-xs font-body text-white/50 mb-3 uppercase tracking-widest">{g.label}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map(item => (
                  <span key={item} className="liquid-glass-strong rounded-full px-3 py-1 text-xs text-white font-body">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
