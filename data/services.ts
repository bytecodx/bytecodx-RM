export type Service = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
  price?: string;
};

export const services: Service[] = [
  {
    id: "1",
    slug: "web-development",
    title: "Website Development",
    shortDescription:
      "Business websites, landing pages, portfolios, blogs and more.",
    description:
      "We design and develop professional websites that look stunning and convert visitors into clients. From landing pages to full business websites, we build it right.",
    icon: "Monitor",
    features: [
      "Responsive design for all devices",
      "SEO-optimized structure",
      "Fast loading performance",
      "Custom UI/UX design",
      "CMS integration",
      "Analytics integration",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "2",
    slug: "mern-stack-development",
    title: "MERN Stack Development",
    shortDescription:
      "Scalable and dynamic web applications using MERN stack.",
    description:
      "Build powerful full-stack web applications using MongoDB, Express.js, React, and Node.js. Perfect for dynamic platforms and data-driven applications.",
    icon: "Network",
    features: [
      "MongoDB database design",
      "RESTful API development",
      "React frontend",
      "Node.js backend",
      "Authentication & authorization",
      "Real-time features",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    id: "3",
    slug: "ecommerce-development",
    title: "E-Commerce Solutions",
    shortDescription:
      "Online stores with secure payments and admin panels.",
    description:
      "Launch your online store with a powerful, secure and scalable e-commerce solution. We build everything from product listings to payment gateways and admin dashboards.",
    icon: "ShoppingCart",
    features: [
      "Product catalog management",
      "Secure payment integration",
      "Admin dashboard",
      "Order management",
      "Inventory tracking",
      "Customer accounts",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: "4",
    slug: "full-stack-development",
    title: "Full-Stack Development",
    shortDescription:
      "Custom web applications from frontend to backend.",
    description:
      "End-to-end development of custom web applications. We handle everything — from database architecture and backend APIs to pixel-perfect frontends.",
    icon: "Layers",
    features: [
      "Database design & architecture",
      "Backend API development",
      "Frontend UI development",
      "Cloud deployment",
      "Performance optimization",
      "Security best practices",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
  },
  {
    id: "5",
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    shortDescription:
      "Tailored web applications built for your specific needs.",
    description:
      "Have a unique idea? We build fully custom web applications tailored to your exact requirements. No templates, no shortcuts — just clean, scalable code.",
    icon: "Code2",
    features: [
      "Requirements analysis",
      "Custom architecture design",
      "Scalable codebase",
      "Third-party integrations",
      "Testing & QA",
      "Ongoing support",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "Various"],
  },
];
