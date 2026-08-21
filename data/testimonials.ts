export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  location?: string;
  image?: string;
  rating: number;
  review: string;
  project?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "James Harrison",
    role: "Founder & CEO",
    company: "Apex Digital Health",
    location: "London, UK",
    rating: 5,
    review:
      "ByteCodX delivered our web application ahead of schedule with flawless code and extraordinary UI design. Their attention to performance and user experience transformed our online presence completely.",
    project: "Full-Stack Web App",
  },
  {
    id: "2",
    name: "Aarav Sharma",
    role: "Co-Founder",
    company: "QuickCart India",
    location: "Bengaluru, India",
    rating: 5,
    review:
      "Working with the ByteCodX team was an absolute pleasure. They built our MERN stack e-commerce platform with seamless payment integration and extreme speed. Our conversion rates increased significantly!",
    project: "MERN Stack E-Commerce",
  },
  {
    id: "3",
    name: "Charlotte Davies",
    role: "Head of Product",
    company: "Lumina Fintech",
    location: "Manchester, UK",
    rating: 5,
    review:
      "Outstanding professionalism and technical expertise. ByteCodX built our custom web dashboard from scratch, perfectly matching our exact requirements. High-quality engineering at its finest.",
    project: "Custom Web App",
  },
  {
    id: "4",
    name: "Priya Patel",
    role: "Marketing Director",
    company: "Enterprise Flow",
    location: "Mumbai, India",
    rating: 5,
    review:
      "From initial concept to deployment, ByteCodX exceeded all expectations. They designed a sleek, high-converting corporate website with exceptional performance and 100% responsiveness.",
    project: "Business Website",
  },
  {
    id: "5",
    name: "Oliver Smith",
    role: "Managing Director",
    company: "Crestline Real Estate",
    location: "Birmingham, UK",
    rating: 5,
    review:
      "The team at ByteCodX is top-tier. Communication was effortless and direct throughout the project. They delivered a modern, fast, and secure platform that our users absolutely love.",
    project: "Web Portal",
  },
  {
    id: "6",
    name: "Rohan Verma",
    role: "Technical Lead",
    company: "CloudPulse Tech",
    location: "Chennai, India",
    rating: 5,
    review:
      "Incredible development speed without sacrificing quality. ByteCodX handled our complex full-stack requirements seamlessly. Highly recommended for any serious web project.",
    project: "Full-Stack Platform",
  },
];
