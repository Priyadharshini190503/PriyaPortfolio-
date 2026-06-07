import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function BlurText({ text, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.1, once: true })
  const words = text.split(' ')

  return (
    <p ref={ref} className={className}
      style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', rowGap:'0.1em' }}>
      {words.map((word, i) => (
        <motion.span key={i}
          initial={{ filter:'blur(10px)', opacity:0, y:50 }}
          animate={isInView ? {
            filter:['blur(10px)','blur(5px)','blur(0px)'],
            opacity:[0,0.5,1], y:[50,-5,0]
          } : {}}
          transition={{ duration:0.7, delay:i*0.1, ease:'easeOut', times:[0,0.5,1] }}
          style={{ display:'inline-block', marginRight:'0.28em' }}>
          {word}
        </motion.span>
      ))}
    </p>
  )
}
