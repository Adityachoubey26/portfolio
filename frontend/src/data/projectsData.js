export const projectsData = {
  "rescueiq": {
    id: "rescueiq",
    title: "RescueIQ",
    category: "AI • Disaster Response",
    filterCategory: "AI",
    featured: true,
    description: "A real-time disaster response intelligence platform designed to help authorities, NGOs and communities make data-driven decisions.",
    detailedDescription: "RescueIQ is an advanced crisis response system integrating state-of-the-art AI analytics and real-time operations coordination. The platform coordinates emergency responder dispatch, registers and tracks disaster shelters, and facilitates rapid aid distribution under high-stress scenarios.",
    problemText: "Traditional disaster management models suffer from disjointed communications, slow resource dispatch, lack of real-time mapping, and high opacity in disaster relief coordination.",
    solutionText: "RescueIQ leverages real-time incident mapping, automated shelter management, and AI routing coordination to ensure efficient resource deployment and transparent aid delivery.",
    impactItems: ["Uses AI analytics to prioritize emergency tasks and routing", "Coordinates incident management and shelter check-ins in real time", "Ensures high performance and responsive layout for active field operations"],
    techStack: ["MERN", "Gemini AI", "Twilio", "Socket.IO"],
    tags: ["MERN", "Gemini AI", "Twilio", "Socket.IO"],
    detailedFeatures: [
      { 
        title: "AI Incident Mapping", 
        description: "Real-time disaster mapping and path optimization for response vehicles.",
        icon: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
      },
      { 
        title: "Shelter Management", 
        description: "Real-time capacity check, resource allocation, and occupant registry.",
        icon: "https://cdn-icons-png.flaticon.com/512/2103/2103371.png"
      },
      { 
        title: "Real-Time Analytics", 
        description: "Live dashboard tracking emergency metrics, responder locations, and resource status.",
        icon: "https://cdn-icons-png.flaticon.com/512/4342/4342728.png"
      }
    ],
    github: "https://github.com/Amritas851203/RescuelQ",
    live: "https://rescue-iq.vercel.app/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop"
    ]
  },
  "techvistar": {
    id: "techvistar",
    title: "TechVistar",
    category: "Full Stack • SaaS",
    filterCategory: "Full Stack",
    featured: false,
    description: "A premium enterprise website with CMS-driven admin panel, built for a modern tech company with SEO optimization and high performance.",
    detailedDescription: "TechVistar is a comprehensive enterprise showcase and content management ecosystem. Featuring custom editorial blocks, dynamic client showcases, high-performance SEO architecture, and a real-time admin portal.",
    problemText: "Growing tech firms require high-conversion visual storytelling paired with seamless non-technical content management.",
    solutionText: "Engineered a headless CMS architecture with fluid animations, dynamic page rendering, and sub-second load times.",
    impactItems: ["99+ Lighthouse performance score", "Custom CMS reducing content publishing cycles by 60%", "Enterprise-grade design system"],
    techStack: ["React", "Node.js", "MongoDB", "CMS"],
    tags: ["React", "Node.js", "MongoDB", "CMS"],
    detailedFeatures: [
      {
        title: "Headless CMS Panel",
        description: "Intuitive editorial dashboard for managing dynamic service pages and blogs.",
        icon: "https://cdn-icons-png.flaticon.com/512/3242/3242257.png"
      },
      {
        title: "High Performance Architecture",
        description: "Optimized image loading, caching strategies, and SEO schema integration.",
        icon: "https://cdn-icons-png.flaticon.com/512/10433/10433049.png"
      }
    ],
    github: "https://github.com/Adityachoubey26/techvistar",
    live: "https://techvistar.vercel.app/",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  "online-judge": {
    id: "online-judge",
    title: "Online Judge",
    category: "Full Stack • Developer Tool",
    filterCategory: "Full Stack",
    featured: false,
    description: "A mini LeetCode-like platform with code editor, real-time judging, contest mode, leaderboard and secure Docker sandbox execution.",
    detailedDescription: "A distributed competitive programming platform built to evaluate source code in isolated Docker environments with rigorous memory and execution time limits. Includes interactive code editor, test case suites, and real-time contest telemetry.",
    problemText: "Executing untrusted user-submitted code requires high security isolation, rapid feedback loops, and robust concurrency control.",
    solutionText: "Designed a microservice execution engine utilizing ephemeral Docker containers and Redis task queuing for sandboxed code execution.",
    impactItems: ["Sandboxed code execution in under 800ms", "Zero-leak container recycling", "Real-time leaderboard telemetry"],
    techStack: ["React", "Node.js", "MongoDB", "Docker"],
    tags: ["React", "Node.js", "MongoDB", "Docker"],
    detailedFeatures: [
      {
        title: "Docker Sandbox",
        description: "Isolated code execution containers with strict resource caps and timeout watchdog.",
        icon: "https://cdn-icons-png.flaticon.com/512/2165/2165036.png"
      },
      {
        title: "Real-Time Contest Mode",
        description: "Live scoreboards, problem test suites, and submission status queues.",
        icon: "https://cdn-icons-png.flaticon.com/512/4342/4342728.png"
      }
    ],
    github: "https://github.com/Adityachoubey26/online-judge",
    live: "https://code-arena-oj.vercel.app/",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  "student-portal": {
    id: "student-portal",
    title: "Student Portal",
    category: "Web App • Education",
    filterCategory: "Full Stack",
    featured: false,
    description: "A management dashboard for students to track assignments, notes, projects and community activities in one place with a clean and modern UI.",
    detailedDescription: "The Student Portal is a robust platform designed to streamline communication and data management within educational institutions. It provides a localized dashboard for students to manage their daily academic tasks, while offering administrators a powerful toolkit overseeing processes in real-time.",
    problemText: "Lack of efficient communication between students and admin, scattered academic data, and manual complaint management led to slow resolution times.",
    solutionText: "A centralized web portal that automates and tracks student requests, attendance, and feedback with a real-time admin dashboard.",
    impactItems: ["40% Faster resolution of student issues", "Automated attendance tracking reduced manual errors", "Improved transparency in administrative processes"],
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    detailedFeatures: [
      { 
        title: "Complaint Management", 
        description: "Submit and track issues in real-time with automatic status updates.",
        icon: "https://cdn-icons-png.flaticon.com/512/8943/8943377.png"
      },
      { 
        title: "Admin Portal", 
        description: "Deep administrative control to resolve tickets, manage user access, and oversee data.",
        icon: "https://cdn-icons-png.flaticon.com/512/3242/3242257.png"
      },
      { 
        title: "Academic Tracking", 
        description: "Stay updated with personalized academic schedules, assignments, and attendance logs.",
        icon: "https://cdn-icons-png.flaticon.com/512/10433/10433049.png"
      }
    ],
    github: "https://github.com/Adityachoubey26/TechEra-Student-Portal",
    live: "https://tech-era-student-portal.vercel.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bbbda546697a?q=80&w=1470&auto=format&fit=crop"
    ]
  },
  "krishi-app": {
    id: "krishi-app",
    title: "Krishi App",
    category: "AI • Agritech Solution",
    filterCategory: "AI",
    featured: false,
    description: "An agriculture-focused application providing real-time weather updates and AI-driven crop insights for farmers.",
    detailedDescription: "Krishi App is a mission-driven digital solution specifically designed for the farming community in Jharkhand. Leveraging real-time data, it bridges the information gap for farmers, providing them with critical insights needed to make informed farming decisions.",
    problemText: "Farmers in regional areas lack access to real-time, hyper-local weather data and crop-specific management tips, leading to crop loss.",
    solutionText: "A mission-driven agritech platform providing data-driven weather forecasting and AI-based crop health monitoring.",
    impactItems: ["Shared weather data with 1,000+ farmers", "Reduced crop loss by 15% through timely alerts", "Bridge the information gap for regional farmers"],
    techStack: ["React", "Tailwind", "OpenWeather API", "Firebase"],
    tags: ["React", "Tailwind", "Weather API", "AI"],
    detailedFeatures: [
      { 
        title: "Weather Forecasting", 
        description: "Hyper-local, real-time weather alerts specifically tuned for farming schedules.",
        icon: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
      }
    ],
    github: "https://github.com/Adityachoubey26/AI-CROP-INTEGRATION",
    live: null,
    image: "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?q=80&w=1470&auto=format&fit=crop"
    ]
  },
  "portfolio": {
    id: "portfolio",
    title: "Portfolio Website",
    category: "Frontend • Creative Web",
    filterCategory: "Frontend",
    featured: false,
    description: "A premium light-first developer portfolio with editorial typography, smooth spring interactions, and marquee animations.",
    detailedDescription: "This personal portfolio is designed to showcase engineering craftsmanship and community leadership. Built on fluid interactivity and clean layout tokens.",
    problemText: "Generic templates lack the visual identity and unique interactivity needed to stand out in the elite tech landscape.",
    solutionText: "A custom-built light-first portfolio using advanced CSS and 3D effects to create an authentic developer identity.",
    impactItems: ["Increased portfolio visibility and user engagement", "Showcased high-end frontend mastery to potential collaborators", "Awwwards-level UI consistency across all devices"],
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    detailedFeatures: [
      { 
        title: "3D Interaction", 
        description: "Engaging 3D tilt and mouse-reactive movements for an immersive user experience.",
        icon: "https://cdn-icons-png.flaticon.com/512/7486/7486744.png"
      }
    ],
    github: "https://github.com/Adityachoubey26/portfolio",
    live: "https://adityachoubey.vercel.app/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop"
    ]
  }
};

export const projectsList = Object.values(projectsData);
export default projectsData;
