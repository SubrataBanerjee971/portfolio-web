import { Project } from "./projects-data";

export const personalInfo = {
    name: "Subrata Banerjee",
    role: "Software Developer",
    headline: "MCA’26 @MSIT | MERN Stack Development | Python, Java | Problem-Solving",
    about: `I am currently pursuing a Master of Computer Applications (MCA) in my final year at Meghnad Saha Institute of Technology. I hold a Bachelor's degree in Computer Applications (BCA) from Swami Vivekanand Institute of Modern Science.

I have a solid foundation in programming languages such as C, Java, and Python, along with strong understanding of core computer science concepts including Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), System Design, and Operating Systems.`,
    email: "subratabanerjee971@gmail.com",
    github: "https://github.com/SubrataBanerjee971",
    linkedin: "https://www.linkedin.com/in/subrata-banerjee-532b9a227/",
};

export const education = [
    {
        degree: "Master of Computer Applications - MCA",
        institution: "Meghnad Saha Institute Of Technology (MSIT)",
        period: "Sep 2024 - Jul 2026",
        description: "Focus on MERN Stack, React.js, and core computer science concepts.",
    },
    {
        degree: "Bachelor of Computer Applications - BCA",
        institution: "Swami Vivekananda Institute of Modern Science",
        period: "2021 - 2024",
        description: "Grade: 8.37. Coursework included Computer Programming and Specific Applications.",
    },
];

export const experience = [
    {
        title: "Software Developer",
        company: "Swami Vivekananda University (Kolkata)",
        companyUrl: "", // URL not provided
        period: "Dec 2025 - Present",
        description: "Part-time software developer role.",
        technologies: [],
    },
];

export const skills = [
    "MERN Stack",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Java",
    "C",
    "Data Structures",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "PHP",
    "MySQL",
    "Git",
    "React Native",
    "Data Science",
];

export const projects: Project[] = [
    {
        id: "freelance-gaushala",
        title: "Freelance Project (Gaushala Website)",
        shortDescription: "A responsive website for a USA-based Gaushala client.",
        fullDescription: "Delivered a clean and responsive website for a USA-based Gaushala client, with easy client handling, clear communication, and good teamwork throughout the project.",
        technologies: ["Web Design", "Responsive Web Design"],
        role: "Freelance Developer",
        duration: "Sep 2024",
        highlights: ["Clean and responsive UI", "Client handling and communication"],
        repoUrl: "",
        liveUrl: "",
    },
    {
        id: "attendance-system",
        title: "Attendance Management System",
        shortDescription: "Web-based system for tracking attendance and class updates.",
        fullDescription: `Built a web-based Attendance Management System to make attendance tracking and class updates easier for both teachers and students.

Key Features:
- Teacher Panel: mark attendance, create class routines, manage subjects, and publish notices.
- Student Panel: view overall and subject-wise attendance, and check recent notifications.
- Clean and responsive UI for smooth use.
- Secure and reliable data handling using PHP and MySQL.`,
        technologies: ["PHP", "MySQL", "HTML", "CSS"],
        role: "Developer",
        duration: "Apr 2024 - May 2024",
        highlights: ["Teacher & Student Panels", "Routine Management", "Secure data handling"],
        repoUrl: "",
    },
    {
        id: "inventory-billing",
        title: "Inventory and Billing Management System",
        shortDescription: "Inventory system for makeup products with barcode integration.",
        fullDescription: `Completed a project titled "Inventory and Billing Management System" for makeup products.

Additionally, we integrated a barcode scanning system using the application 'Barcode to PC'. This allows the admin to scan barcodes and automatically add products to the inventory list.`,
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
        role: "Developer",
        duration: "Sep 2023 - Oct 2023",
        highlights: ["Barcode scanning integration", "Product management", "Billing system"],
        repoUrl: "",
    },
];

export type { Project };
