export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  image: string;
  images?: string[];
  liveUrl?: string;
  featured: boolean;
  result?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "business-website-placeholder",
    title: "Corporate Business Website",
    category: "Business Website",
    shortDescription:
      "A professional multi-page business website with modern design and SEO optimization.",
    description:
      "Designed and developed a comprehensive corporate website for a business client, featuring a clean modern design, fast performance, and full SEO optimization.",
    challenge:
      "The client needed a professional online presence that could effectively communicate their services and generate leads from their target market.",
    solution:
      "Built a fully custom Next.js website with optimized landing pages, clear CTAs, and an SEO structure targeting relevant keywords.",
    features: [
      "Responsive design",
      "SEO optimization",
      "Contact form",
      "Service pages",
      "Fast loading",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/project-1.png",
    featured: true,
    result:
      "The client saw a significant improvement in their online visibility and lead generation within weeks of launch.",
  },
  {
    id: "2",
    slug: "ecommerce-store-placeholder",
    title: "E-Commerce Store",
    category: "E-Commerce",
    shortDescription:
      "Full-featured online store with product management, cart, and secure checkout.",
    description:
      "Built a complete e-commerce solution with product listings, shopping cart, secure payment integration, and an admin dashboard for managing orders.",
    challenge:
      "The business needed an online store that was easy to manage and could handle a growing product catalog with secure payments.",
    solution:
      "Developed a custom e-commerce platform with a clean storefront, admin panel, and integrated Stripe for secure payments.",
    features: [
      "Product catalog",
      "Shopping cart",
      "Secure payments",
      "Admin dashboard",
      "Order management",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: "/projects/project-2.png",
    featured: true,
    result:
      "The client successfully launched their online business with a professional and fully functional e-commerce solution.",
  },
  {
    id: "3",
    slug: "web-application-placeholder",
    title: "Custom Web Application",
    category: "Web Application",
    shortDescription:
      "A custom MERN stack application with user authentication and real-time features.",
    description:
      "Developed a full-stack web application using the MERN stack, featuring user authentication, a dashboard, and dynamic data management.",
    challenge:
      "The client required a custom application to manage their business processes that was not available as an off-the-shelf solution.",
    solution:
      "Built a tailored web application with a React frontend, Express/Node backend, and MongoDB database with role-based access control.",
    features: [
      "User authentication",
      "Role-based access",
      "Dashboard",
      "Data management",
      "REST API",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/project-3.png",
    featured: true,
    result:
      "The application streamlined the client's internal operations significantly.",
  },
];
