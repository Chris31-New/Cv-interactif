import { motion } from 'framer-motion';

export default function Background(){
return(
<div className="fixed inset-0 -z-10 overflow-hidden">

<motion.div
animate={{scale:[1,1.3,1]}}
transition={{duration:15,repeat:Infinity}}
className="absolute -top-40 -left-20 h-[600px] w-[600px] rounded-full bg-violet-700 blur-[150px] opacity-30"
/>

<motion.div
animate={{scale:[1.2,1,1.2]}}
transition={{duration:18,repeat:Infinity}}
className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500 blur-[140px] opacity-20"
/>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(3,7,18,0.95))]"/>

</div>
)
}