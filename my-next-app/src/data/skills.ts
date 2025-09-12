export type SkillGroup = {
  title: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  { title: "Coding", items: ["Javascript", "Typescript", "Python"] },
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React",
      "Vite",
      "Vitest",
      "Wordpress",
    ],
  },
  {
    title: "Backend",
    items: [
      "Next.js",
      "Node.js",
      "Express.js",
      "SQL",
      "PostgreSQL",
      "SQLite",
      "RestAPI",
    ],
  },
  {
    title: "General",
    items: ["Git", "Github", "Bash", "VS Code", "Docker", "DBeaver", "Postman"],
  },
  {
    title: "Cloud, Hosting",
    items: ["Google Cloud", "Supabase", "Firebase", "Vercel", "Railway"],
  },
  {
    title: "Graphical",
    items: ["Figma", "Photoshop", "Autocad", "Revit", "3ds Max"],
  },
  { title: "Languages", items: ["Czech - native speaker", "English - C1"] },
  { title: "Other", items: ["Touch typing", "Driving license B"] },
];

export default skillGroups;
