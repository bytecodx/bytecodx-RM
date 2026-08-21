export type Technology = {
  name: string;
  icon: string;
  category: string;
};

export const technologies: Technology[] = [
  // Frontend
  {
    name: "HTML5",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "https://cdn.simpleicons.org/nextdotjs/white",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "https://cdn.simpleicons.org/express/white",
  },
  {
    name: "Python",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "PHP",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },

  // Databases
  {
    name: "MongoDB",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Firebase",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Supabase",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },

  // Tools & Platforms
  {
    name: "Git",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: "https://cdn.simpleicons.org/github/white",
  },
  {
    name: "REST APIs",
    category: "Tools",
    icon: "https://cdn.simpleicons.org/postman/FF6C37",
  },
  {
    name: "Vercel",
    category: "Tools",
    icon: "https://cdn.simpleicons.org/vercel/white",
  },
  {
    name: "Netlify",
    category: "Tools",
    icon: "https://cdn.simpleicons.org/netlify/00C7B7",
  },
];

export const techCategories = ["Frontend", "Backend", "Database", "Tools"];
