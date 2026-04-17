export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  contribution: string;
  techStack: string[];
  videoUrl?: string;
  imageUrl?: string;
  caseStudy: {
    overview: string;
    myContribution: string;
    techStackDetailed: string;
    challenges: string;
    performanceWork: string;
  };
}

export const projects: Project[] = [
  {
    slug: "cat-chef-ava",
    title: "Cat Chef Ava",
    videoUrl: "https://www.youtube.com/watch?v=peHROYqKBuM",
    shortDescription:
      "Polished iOS simulation game with scalable gameplay systems, live updates, and optimized performance on low-end devices.",
    contribution:
      "Led gameplay system architecture and UI flows, managed iOS release pipeline, and optimized performance for smooth gameplay on low-end devices.",
    techStack: ["Unity", "C#", "iOS"],
    caseStudy: {
      overview:
        "A mobile simulation game focused on cooking mechanics and player progression, requiring smooth interactions and consistent performance across devices.",
      myContribution:
        "Designed and implemented a scalable gameplay state machine, built gesture-driven interaction systems, and handled end-to-end iOS releases with live feature updates.",
      techStackDetailed: "Unity 2022 LTS, C# (.NET 4.x), Addressables, Firebase Remote Config",
      challenges:
        "Maintaining stable 60 FPS on older iPhones while rendering dynamic kitchen elements. Solved using object pooling, GPU instancing, and render optimization.",
      performanceWork:
        "Reduced memory usage by 28%, optimized draw calls from 180 to 95, and implemented dynamic LOD systems for consistent performance.",
    },
  },
  {
    slug: "food-truck-chef",
    title: "Food Truck Chef",
    videoUrl: "https://www.youtube.com/watch?v=uTSEzJ3RZ64",
    shortDescription:
      "Live mobile cooking game with 1M+ downloads, focused on engagement, retention, and continuous feature updates.",
    contribution:
      "Improved core gameplay loops and UI systems, contributed to live feature updates, and enhanced player retention through gameplay and progression tuning.",
    techStack: ["Unity", "C#", "Mobile"],
    caseStudy: {
      overview:
        "A highly engaging cooking simulation game with a large user base, requiring continuous updates and gameplay improvements.",
      myContribution:
        "Refined gameplay mechanics and UI interactions, contributed to live updates, and improved retention systems through gameplay balancing and feature iteration.",
      techStackDetailed: "Unity 2D, DOTween, Unity Analytics, REST APIs",
      challenges:
        "Ensuring smooth gameplay across a wide range of devices while maintaining engaging player progression systems.",
      performanceWork:
        "Optimized UI rendering and reduced unnecessary updates to maintain stable frame rates across mid- and low-end devices.",
    },
  },
  {
    slug: "wordninja",
    title: "WordNinja",
    videoUrl: "https://www.youtube.com/watch?v=p1MQ3XyYljg", // Replace with actual video ID
    shortDescription:
      "Mobile puzzle game focused on engagement, level progression, and data-driven improvements.",
    contribution:
      "Built core gameplay loop and progression systems, developed internal level editor tools, and integrated analytics for player behavior tracking.",
    techStack: ["Unity", "C#", "Firebase"],
    caseStudy: {
      overview:
        "A word puzzle game designed for high engagement and retention through level-based progression.",
      myContribution:
        "Implemented gameplay loops, built level creation tools for faster content production, and integrated analytics systems to track and improve player engagement.",
      techStackDetailed: "Unity UI Toolkit, ScriptableObjects, Firebase Events, Leaderboards",
      challenges:
        "Balancing difficulty progression while maintaining player engagement over multiple levels.",
      performanceWork:
        "Optimized scene loading and reduced redundant computations to ensure smooth gameplay experience.",
    },
  },
  {
    slug: "mpl-sdk",
    title: "MPL Unity SDK",
    imageUrl: "/images/mpl.png", // Fixed path: must start with slash and be inside public/
    shortDescription:
      "Reusable Unity SDK powering multiplayer and real-money gaming experiences.",
    contribution:
      "Developed reusable SDK components, improved multiplayer integration workflows, and streamlined API-based feature implementation.",
    techStack: ["Unity", "C#", "Multiplayer", "REST APIs"],
    caseStudy: {
      overview:
        "A Unity SDK used across multiple multiplayer games, enabling faster integration and consistent gameplay features.",
      myContribution:
        "Built modular SDK components, improved API integration flows, and supported multiplayer feature implementation across multiple games.",
      techStackDetailed: "Unity DLL, RESTSharp, JWT auth, async patterns, Editor tooling",
      challenges:
        "Ensuring scalability and ease of integration across different game projects.",
      performanceWork:
        "Reduced integration complexity and improved runtime efficiency through modular design and optimized API calls.",
    },
  },
  {
    slug: "automotive-hmi",
    title: "Automotive HMI System",
    videoUrl: "https://www.youtube.com/watch?v=TEqoXg08BUk&t=73s",
    shortDescription:
      "Real-time Unity-based infotainment UI system with high performance and responsiveness requirements.",
    contribution:
      "Built modular UI systems, integrated Unity with embedded C++ systems, and optimized real-time performance for automotive environments.",
    techStack: ["Unity", "C#", "HMI", "Embedded Systems"],
    caseStudy: {
      overview:
        "A real-time automotive infotainment system requiring high responsiveness, reliability, and performance under constrained environments.",
      myContribution:
        "Designed modular UI architecture, implemented real-time interaction systems, and integrated Unity with embedded platforms.",
      techStackDetailed: "Unity UI Toolkit, custom shaders, CAN bus simulation, multithreaded rendering",
      challenges:
        "Maintaining responsiveness under strict real-time constraints and limited hardware resources.",
      performanceWork:
        "Optimized rendering pipelines and reduced latency in UI interactions to ensure smooth real-time performance.",
    },
  },
];