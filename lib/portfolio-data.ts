export interface Project {
  id: string
  title: string
  summary: string
  description: string
  tags: string[]
  highlights: string[]
  link?: string
  github?: string
}

export interface Education {
  degree: string
  institution: string
  period: string
  description: string
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    summary: "A full-stack e-commerce application with real-time inventory management and payment processing.",
    description:
      "Built a comprehensive e-commerce platform from the ground up using Next.js and TypeScript. The application features a dynamic product catalog, user authentication, shopping cart functionality, and integrated Stripe payment processing. Implemented real-time inventory tracking with WebSocket connections and an admin dashboard for managing orders and products.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    highlights: [
      "Achieved 98 Lighthouse performance score with optimized image loading and code splitting",
      "Implemented real-time inventory updates using WebSocket connections",
      "Built an admin dashboard with role-based access control",
      "Integrated Stripe for secure payment processing with webhook support",
      "Deployed with CI/CD pipeline on Vercel with preview environments",
    ],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    summary: "An AI-powered tool that generates blog posts, social media content, and marketing copy.",
    description:
      "Developed an AI-powered content generation tool that leverages large language models to create high-quality written content. Users can input topics, tone preferences, and target audience details to receive tailored content suggestions. The application includes a rich text editor for refinement and a content calendar for scheduling.",
    tags: ["React", "Python", "OpenAI", "FastAPI"],
    highlights: [
      "Integrated OpenAI GPT models with custom prompt engineering for content quality",
      "Built a rich text editor with real-time collaborative editing",
      "Implemented content scheduling with cron-based automation",
      "Added tone analysis and readability scoring for content optimization",
      "Achieved 5,000+ active users within the first three months of launch",
    ],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    summary: "A collaborative project management tool with real-time updates and Kanban boards.",
    description:
      "Created a feature-rich task management application designed for small to medium teams. The app includes Kanban-style boards, Gantt chart views, time tracking, and team collaboration features. Real-time synchronization ensures all team members see updates instantly across devices.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    highlights: [
      "Built drag-and-drop Kanban boards with smooth animations",
      "Implemented real-time collaboration with Socket.io for instant updates",
      "Added Gantt chart visualization for project timeline management",
      "Created automated notification system for task assignments and deadlines",
      "Integrated time tracking with detailed reporting and analytics",
    ],
    link: "https://example.com",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    summary: "An interactive weather dashboard with geolocation, forecasts, and historical data visualization.",
    description:
      "Designed and built a comprehensive weather dashboard that provides real-time weather data, 7-day forecasts, and historical weather pattern analysis. The application uses geolocation APIs for automatic location detection and features interactive charts for visualizing temperature, humidity, and precipitation trends.",
    tags: ["Next.js", "D3.js", "REST API", "Tailwind"],
    highlights: [
      "Integrated multiple weather APIs for accurate and comprehensive data",
      "Built interactive D3.js charts for visualizing weather trends",
      "Implemented geolocation-based automatic weather detection",
      "Added severe weather alerts with push notification support",
      "Created a responsive design optimized for both desktop and mobile",
    ],
    github: "https://github.com",
  },
]

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    period: "2018 — 2022",
    description:
      "Focused on software engineering, data structures, and algorithms. Graduated with honors and completed a senior thesis on distributed systems optimization.",
  },
  {
    degree: "Full-Stack Web Development Certificate",
    institution: "Tech Bootcamp",
    period: "2022",
    description:
      "Intensive program covering modern web technologies including React, Node.js, databases, and cloud deployment strategies.",
  },
]

export const experiences: Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "TechCorp",
    period: "2024 — Present",
    description:
      "Lead frontend development for the company's flagship SaaS product. Architect and implement new features, mentor junior developers, and drive improvements in code quality and development processes.",
    tags: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    role: "Full-Stack Developer",
    company: "StartupHub",
    period: "2022 — 2024",
    description:
      "Built and maintained multiple client-facing web applications from concept to deployment. Worked closely with designers and product managers to deliver polished user experiences.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    role: "Frontend Developer Intern",
    company: "DigitalAgency",
    period: "2021 — 2022",
    description:
      "Contributed to building responsive websites and web applications for various clients. Gained hands-on experience with modern frontend frameworks and development workflows.",
    tags: ["JavaScript", "React", "CSS", "Git"],
  },
]
