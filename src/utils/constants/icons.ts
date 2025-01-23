import {
 SiBootstrap,
 SiChakraui,
 SiComposer,
 SiCss3,
 SiDart,
 SiExpress,
 SiFramer,
 SiGit,
 SiGithub,
 SiHtml5,
 SiJavascript,
 SiJson,
 SiLaravel,
 SiMongodb,
 SiMysql,
 SiNextdotjs,
 SiNodedotjs,
 SiNestjs,
 SiFirebase,
 SiSupabase,
 SiFlutter,
 SiGraphql,
 SiNpm,
 SiPhp,
 SiPnpm,
 SiPostgresql,
 SiPython,
 SiReact,
 SiRedux,
 SiTailwindcss,
 SiTypescript,
 SiVercel,
 SiVite,
 SiXampp,
 SiAmazonwebservices,
 SiGooglecloud,
 SiShadcnui,
 SiStyledcomponents,
 SiAlpinedotjs,
 SiMarkdown,
 SiPrisma,
 SiDocker,
} from "@icons-pack/react-simple-icons";
import { IconType } from "@icons-pack/react-simple-icons";

interface IconItem {
 name: string;
 icon: IconType;
 color: string;
}

interface IconCategory {
 category: string;
 props: IconItem[];
}

export const icons: IconCategory[] = [
 {
  category: "Language",
  props: [
   { name: "HTML", icon: SiHtml5, color: "#E34F26" },
   { name: "CSS", icon: SiCss3, color: "#1572B6" },
   { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
   { name: "TypeScript", icon: SiTypescript, color: "#377cc8" },
   { name: "PHP", icon: SiPhp, color: "#777BB4" },
   { name: "Dart", icon: SiDart, color: "#0175C2" },
   { name: "Python", icon: SiPython, color: "#3776AB" },
   { name: "Markdown", icon: SiMarkdown, color: "#f7df1e" },
   { name: "JSON", icon: SiJson, color: "#ffffff" },
  ],
 },
 {
  category: "Front-end",
  props: [
   { name: "React JS", icon: SiReact, color: "#2C94B1FF" },
   { name: "Next JS", icon: SiNextdotjs, color: "#ffffff" },
   { name: "React Native", icon: SiReact, color: "#53c1de" },
   { name: "Redux", icon: SiRedux, color: "#764ABC" },
   { name: "Shadcn/ui", icon: SiShadcnui, color: "#D4D4D4FF" },
   { name: "Framer", icon: SiFramer, color: "#0055FF" },
   { name: "ChakraUI", icon: SiChakraui, color: "#319795" },
   { name: "Emotion/css", icon: SiStyledcomponents, color: "#DB7093" },
   { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
   { name: "Bootstrap", icon: SiBootstrap, color: "#764ABC" },
   { name: "Vite JS", icon: SiVite, color: "#646CFF" },
   { name: "Alpine JS", icon: SiAlpinedotjs, color: "#8BC0D0" },
  ],
 },
 {
  category: "Back-end",
  props: [
   { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
   { name: "Express JS", icon: SiExpress, color: "#ffffff" },
   { name: "Nest JS", icon: SiNestjs, color: "#E0234E" },
   { name: "MySQL", icon: SiMysql, color: "#4479A1" },
   { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
   { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
   { name: "Node JS", icon: SiNodedotjs, color: "#4caf50" },
   { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
   { name: "Prisma", icon: SiPrisma, color: "#D4D4D4FF" },
  ],
 },
 {
  category: "Tools",
  props: [
   { name: "Git", icon: SiGit, color: "#f4511e" },
   { name: "GitHub", icon: SiGithub, color: "#ffffff" },
   { name: "NPM", icon: SiNpm, color: "#CB3837" },
   { name: "PNPM", icon: SiPnpm, color: "#f69220" },
   { name: "Composer", icon: SiComposer, color: "#ffffff" },
   { name: "XAMPP", icon: SiXampp, color: "#FB7A24" },
   { name: "Vercel", icon: SiVercel, color: "#ffffff" },
   { name: "Docker", icon: SiDocker, color: "#2496ED" },
   { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
   { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
   { name: "AWS", icon: SiAmazonwebservices, color: "#D4D4D4FF" },
   { name: "GCP", icon: SiGooglecloud, color: "#F9AB00" },
  ],
 },
];
