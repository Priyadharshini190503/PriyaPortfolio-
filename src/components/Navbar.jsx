import { ArrowUpRight } from './Icons'
const links = ['About','Projects','Skills','Experience','Contact']

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
      <div className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="font-heading italic text-white text-xl">p</span>
      </div>
      <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-1.5 py-1.5">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors whitespace-nowrap">
            {l}
          </a>
        ))}
        <a href="mailto:priyadharshini190503@gmail.com"
          className="ml-1 bg-white text-black px-4 py-2 rounded-full text-sm font-medium font-body whitespace-nowrap flex items-center gap-1.5 hover:bg-white/90 transition-colors">
          Hire Me <ArrowUpRight />
        </a>
      </div>
      <div className="w-12 h-12 flex-shrink-0" />
    </nav>
  )
}
