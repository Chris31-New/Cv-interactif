import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiTailwindcss,
  SiVite,
  SiGitlab,
  SiCypress,
  SiAxios,
  SiReactrouter,
  SiLeaflet,
  SiStripe,
  SiFramer,
  SiPostman,
  SiSwagger,
  //SiZustand,
  SiTanstack,
} from "react-icons/si";

import { BsOpenai } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { TbBrandOauth } from "react-icons/tb";

export const skills = [
  // FRONTEND
  { name: "React", icon: SiReact, level: 4, category: "Frontend", color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, level: 4, category: "Frontend", color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 4, category: "Frontend", color: "#38BDF8" },
  { name: "React Router", icon: SiReactrouter, level: 4, category: "Frontend", color: "#CA4245" },
  { name: "TanStack Query", icon: SiTanstack, level: 3, category: "Frontend", color: "#FF4154" },
  //{ name: "Zustand", icon: SiZustand, level: 3, category: "Frontend", color: "#D08A2E" },
  { name: "Axios", icon: SiAxios, level: 4, category: "Frontend", color: "#5A29E4" },
  { name: "Framer Motion", icon: SiFramer, level: 3, category: "Frontend", color: "#0055FF" },
  { name: "Leaflet", icon: SiLeaflet, level: 3, category: "Frontend", color: "#199900" },
  { name: "Next.js", icon: SiNextdotjs, level: 4, category: "Frontend", color: "#FFFFFF" },

  // BACKEND
  { name: "Node.js", icon: SiNodedotjs, level: 3, category: "Backend", color: "#5FA04E" },
  { name: "NestJS", icon: SiNestjs, level: 4, category: "Backend", color: "#E0234E" },
  { name: "Prisma ORM", icon: SiPrisma, level: 4, category: "Backend", color: "#5A67D8" },
  { name: "JWT Authentication", icon: FaLock, level: 3, category: "Backend", color: "#F59E0B" },
  { name: "Passport.js", icon: TbBrandOauth, level: 3, category: "Backend", color: "#34D399" },
  { name: "Swagger / OpenAPI", icon: SiSwagger, level: 3, category: "Backend", color: "#85EA2D" },

  // DATABASE
  { name: "MySQL", icon: SiMysql, level: 3, category: "Database", color: "#00758F" },
  { name: "MongoDB / Mongoose", icon: SiMongodb, level: 3, category: "Database", color: "#47A248" },

  // AI
  { name: "OpenAI API", icon: BsOpenai, level: 3, category: "AI", color: "#10A37F" },
  { name: "Stripe API", icon: SiStripe, level: 3, category: "AI", color: "#635BFF" },

  // DEVOPS
  { name: "Docker", icon: SiDocker, level: 3, category: "DevOps", color: "#2496ED" },
  { name: "GitLab", icon: SiGitlab, level: 3, category: "DevOps", color: "#FC6D26" },

  // TOOLING
  { name: "Vite", icon: SiVite, level: 4, category: "Tooling", color: "#A855F7" },
  { name: "Postman", icon: SiPostman, level: 3, category: "Tooling", color: "#FF6C37" },
  { name: "Cypress", icon: SiCypress, level: 2, category: "Testing", color: "#69D3A7" },
];