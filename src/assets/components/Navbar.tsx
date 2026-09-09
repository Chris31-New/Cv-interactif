import { Link } from 'react-scroll';
//import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const links=[
'skills','timeline','projects','chat','contact','about'
]

export default function Navbar(){
return(
<motion.header
initial={{y:-80}}
animate={{y:0}}
transition={{duration:.7}}
className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-3"
>

<nav className="flex items-center gap-6 text-sm">

<span className="font-black gradient-text text-lg">
Christophe Autran
</span>

{links.map(link=>(
<Link
key={link}
to={link}
smooth
duration={600}
className="cursor-pointer hover:text-indigo-400 capitalize"
>
{link}
</Link>
))}

<div className="flex gap-3">
{/* <Github size={18}/>
<Linkedin size={18}/> */}
</div>

</nav>
</motion.header>
)
}