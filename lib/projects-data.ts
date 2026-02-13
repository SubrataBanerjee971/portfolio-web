export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  role: string
  duration: string
  highlights: string[]
  liveUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription:
      "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    fullDescription:
      "Built a scalable e-commerce platform that handles thousands of concurrent users. The platform features real-time inventory tracking, Stripe payment integration, an admin dashboard with analytics, and a recommendation engine powered by collaborative filtering. Implemented server-side rendering for optimal SEO and performance.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis", "Tailwind CSS"],
    role: "Full Stack Developer",
    duration: "6 months",
    highlights: [
      "Reduced page load time by 60% with SSR and image optimization",
      "Processed over $500K in transactions in the first quarter",
      "Built a real-time inventory system using WebSockets",
      "Implemented CI/CD pipeline with automated testing",
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "ai-chat-assistant",
    title: "AI Chat Assistant",
    shortDescription:
      "An intelligent conversational AI assistant with context-aware responses and multi-model support.",
    fullDescription:
      "Developed an AI-powered chat assistant that leverages multiple language models to provide context-aware responses. Features include conversation history, document upload for RAG, streaming responses, and a clean, accessible interface. The system uses a vector database for semantic search across uploaded documents.",
    technologies: ["React", "Node.js", "OpenAI API", "Pinecone", "WebSocket", "Docker"],
    role: "Lead Developer",
    duration: "4 months",
    highlights: [
      "Integrated 3 different LLM providers with fallback mechanisms",
      "Built a RAG pipeline processing 10,000+ documents",
      "Achieved 95% user satisfaction rating in beta testing",
      "Reduced API costs by 40% through intelligent caching",
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    shortDescription:
      "A collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
    fullDescription:
      "Created a comprehensive task management application designed for remote teams. Features include drag-and-drop Kanban boards, real-time collaboration with live cursors, sprint planning tools, and detailed team analytics. The app supports integrations with GitHub, Slack, and calendar applications.",
    technologies: ["Next.js", "Supabase", "Prisma", "Tailwind CSS", "Framer Motion"],
    role: "Full Stack Developer",
    duration: "5 months",
    highlights: [
      "Used by 50+ teams during beta phase",
      "Real-time collaboration with conflict resolution",
      "Built custom drag-and-drop system for Kanban boards",
      "Integrated with 5 third-party services via webhooks",
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    shortDescription:
      "A beautiful weather visualization app with interactive maps, forecasts, and severe weather alerts.",
    fullDescription:
      "Designed and built an interactive weather dashboard that provides detailed forecasts, radar maps, and severe weather alerts. The app uses geolocation for automatic city detection and features animated weather visualizations. Users can save favorite locations and receive push notifications for weather alerts.",
    technologies: ["React", "TypeScript", "D3.js", "Mapbox", "Express", "MongoDB"],
    role: "Frontend Developer",
    duration: "3 months",
    highlights: [
      "Built interactive radar map with smooth animations",
      "Implemented push notifications for severe weather alerts",
      "Created custom D3.js charts for weather data visualization",
      "Optimized API calls with smart caching strategy",
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "social-media-analytics",
    title: "Social Media Analytics",
    shortDescription:
      "A comprehensive analytics dashboard for tracking social media performance across multiple platforms.",
    fullDescription:
      "Built an analytics platform that aggregates data from multiple social media platforms into a unified dashboard. Features include sentiment analysis, engagement tracking, competitor benchmarking, and automated reporting. The system processes millions of data points daily using a distributed architecture.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Apache Kafka", "AWS"],
    role: "Backend Developer",
    duration: "8 months",
    highlights: [
      "Processes 2M+ data points daily across 4 social platforms",
      "Built NLP pipeline for real-time sentiment analysis",
      "Reduced report generation time from hours to minutes",
      "Designed event-driven architecture with Kafka",
    ],
    repoUrl: "https://github.com",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    shortDescription:
      "A mobile-first fitness tracking app with workout plans, progress charts, and social features.",
    fullDescription:
      "Developed a progressive web app for fitness tracking that works offline and syncs when back online. Features include custom workout builders, progress visualization with charts, social challenges between friends, and integration with wearable devices. The app uses service workers for offline functionality.",
    technologies: ["React Native", "TypeScript", "Firebase", "Chart.js", "Node.js"],
    role: "Mobile Developer",
    duration: "4 months",
    highlights: [
      "Achieved 4.8-star rating on app stores",
      "Implemented offline-first architecture with background sync",
      "Built custom animation system for workout demonstrations",
      "Integrated with Apple Health and Google Fit APIs",
    ],
    liveUrl: "https://example.com",
  },
]
