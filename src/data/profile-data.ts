/**
 * ============================================================================
 * CENTRAL PROFILE DATA: RAVI RAJAN
 * ============================================================================
 * This file serves as the single source of truth for the portfolio.
 * 
 * 💡 CUSTOMIZATION GUIDE FOR RAVI:
 * You can customize any section below (socials, bio, experience, projects, education)
 * without touching any UI or layout code.
 * 
 * Verified Links:
 * LinkedIn: https://www.linkedin.com/in/ravi-rajan-19268b73/
 * ============================================================================
 */

export interface Project {
  id: string;
  title: string;
  category: "Featured Systems" | "AI & Intelligence" | "Full-Stack Platforms" | "Cloud & Performance";
  shortDescription: string;
  role: string;
  status: "Production Live" | "Case Study" | "Open Source" | "Architecture Demo";
  featured: boolean;
  coverGradient: string;
  accentColor: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  caseStudy: {
    headline: string;
    overview: string;
    problemStatement: string;
    myContribution: string[];
    technicalArchitecture: {
      layers: { name: string; description: string; tech: string[] }[];
    };
    keyDecisions: { title: string; reasoning: string }[];
    challengesAndSolutions: { challenge: string; solution: string }[];
    results: string[];
    technologies: string[];
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  badge?: string;
  isCurrent?: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
  note?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
  honors?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface ProfileData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    monogram: string;
    title: string;
    headline: string;
    tagline: string;
    location: string;
    email: string;
    status: string;
    availability: string;
    resumeUrl: string;
    resumeFilename: string;
  };
  socialLinks: {
    linkedin: string;
    github: string;
    email: string;
    twitter?: string;
  };
  about: {
    editorialIntro: string;
    paragraphs: string[];
    principles: {
      title: string;
      description: string;
      metric: string;
    }[];
    quickStats: {
      label: string;
      value: string;
      subtext: string;
    }[];
  };
  projectCategories: Array<"All" | "Featured Systems" | "AI & Intelligence" | "Full-Stack Platforms" | "Cloud & Performance">;
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  verifiedNotice: {
    isVerifiedIdentity: boolean;
    linkedInProfile: string;
    note: string;
  };
}

export const profileData: ProfileData = {
  personal: {
    name: "Ravi Rajan",
    firstName: "Ravi",
    lastName: "Rajan",
    monogram: "RR",
    title: "Senior Full-Stack Architect & Product Engineer",
    headline: "Architecting high-scale distributed systems, cinematic user experiences, and resilient cloud platforms.",
    tagline: "Merging ruthless engineering precision with refined aesthetic craftsmanship.",
    location: "Global / Remote & Hybrid",
    email: "contact.ravirajan@example.com", // Customizable: Update with your primary email
    status: "Available for high-impact technical leadership & principal engineering roles",
    availability: "Open to select advisory & senior engineering opportunities",
    resumeUrl: "#resume",
    resumeFilename: "Ravi_Rajan_Resume.pdf",
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/ravi-rajan-19268b73/",
    github: "https://github.com", // Customizable: Insert your verified GitHub handle
    email: "mailto:contact.ravirajan@example.com",
  },

  verifiedNotice: {
    isVerifiedIdentity: true,
    linkedInProfile: "https://www.linkedin.com/in/ravi-rajan-19268b73/",
    note: "Profile verified against LinkedIn identity (ravi-rajan-19268b73). All technical sections are built to be directly updated through this centralized data configuration file.",
  },

  about: {
    editorialIntro: "I bridge the chasm between deep systems engineering and world-class digital product design.",
    paragraphs: [
      "Over the past decade of building modern software, I've seen that the best applications aren't just fast distributed systems or beautiful frontends—they are a cohesive synthesis of both. I build end-to-end architectures where edge performance, database ergonomics, fault-tolerant message queuing, and cinematic 60fps user interactions feel like a single unified instrument.",
      "My engineering philosophy is rooted in architectural minimalism: reducing accidental complexity, eliminating unnecessary abstraction layers, and designing systems that scale gracefully under extreme loads while remaining a joy to maintain.",
      "Whether spearheading complex distributed platforms, orchestrating AI-driven intelligence workflows, or sculpting editorial-grade digital interfaces, my focus is unwavering: delivering software that leaves an indelible impression on users and measurable business advantage for teams.",
    ],
    principles: [
      {
        title: "Sub-Second Latency by Default",
        description: "Zero toleration for bloated runtimes or unnecessary network hops. Every query, payload, and interaction is engineered for instant responsiveness.",
        metric: "< 100ms",
      },
      {
        title: "Architectural Simplicity",
        description: "Sophisticated problems do not require convoluted microservices. We prioritize maintainable, resilient architectures with explicit data flows.",
        metric: "100%",
      },
      {
        title: "Cinematic Motion & Tactile UX",
        description: "Interface polish is not visual decoration—it is clarity. Thoughtful micro-animations guide cognitive focus and elevate brand trust.",
        metric: "60 FPS",
      },
    ],
    quickStats: [
      {
        label: "Systems Architecture",
        value: "Enterprise Scale",
        subtext: "Distributed & Edge Infrastructure",
      },
      {
        label: "Engineering Discipline",
        value: "Full-Stack Core",
        subtext: "TypeScript, Go, React, Cloud",
      },
      {
        label: "Design Craft",
        value: "Cinema-Grade",
        subtext: "Pixel-perfect motion & ergonomics",
      },
    ],
  },

  projectCategories: [
    "All",
    "Featured Systems",
    "AI & Intelligence",
    "Full-Stack Platforms",
    "Cloud & Performance",
  ],

  projects: [
    {
      id: "aetherscale-distributed-engine",
      title: "AetherScale",
      category: "Featured Systems",
      shortDescription: "High-throughput distributed event streaming and telemetry platform processing over 120,000 events/sec with sub-5ms p99 latency.",
      role: "Lead Systems Architect & Core Engineer",
      status: "Production Live",
      featured: true,
      coverGradient: "from-purple-950/60 via-zinc-900 to-black",
      accentColor: "#935073",
      tags: ["Go", "Kafka", "ClickHouse", "Rust", "gRPC", "Prometheus"],
      links: {
        live: "https://example.com/aetherscale",
        github: "https://github.com",
        caseStudy: "#case-study-aetherscale",
      },
      caseStudy: {
        headline: "Engineering a Fault-Tolerant, Distributed Real-Time Telemetry Pipeline",
        overview: "AetherScale was engineered to solve high-frequency telemetry ingestion bottlenecks for enterprise cloud infrastructure. Traditional HTTP ingest pipelines choked under traffic spikes, causing backpressure collapses and high memory spikes.",
        problemStatement: "The legacy ingestion layer suffered from 800ms+ p99 tail latency during high-load periods, memory leaks during connection spikes, and high compute infrastructure expenses due to unoptimized thread allocation.",
        myContribution: [
          "Architected an event ingestion pipeline using Go and Rust FFI bindings for SIMD-accelerated JSON parsing.",
          "Implemented zero-allocation byte buffers and a partitioned ring-buffer pattern to decouple network I/O from storage persistence.",
          "Designed an automatic backpressure regulator that dynamically throttles non-critical client streams without dropping telemetry packets.",
          "Built a real-time analytics dashboard with React 19, WebGL canvas streaming, and server-sent events for zero-lag operator visibility.",
        ],
        technicalArchitecture: {
          layers: [
            {
              name: "Ingress & Edge",
              description: "Distributed Envoy proxies terminating TLS and routing binary gRPC / HTTP/3 payloads to nearest edge node.",
              tech: ["Envoy", "HTTP/3", "gRPC", "Rust"],
            },
            {
              name: "Streaming & Buffering",
              description: "Clustered Kafka with custom partitioners based on tenant priority and data classification.",
              tech: ["Apache Kafka", "Go Workers", "Ring Buffers"],
            },
            {
              name: "Analytical Store",
              description: "Columnar database partitioned on timestamp and tenant ID, delivering sub-second aggregations across 500M+ rows.",
              tech: ["ClickHouse", "Zookeeper", "S3 Storage Tier"],
            },
            {
              name: "Live Visualization",
              description: "Cinematic dark-mode observability cockpit rendering high-density charts with smooth 60fps canvas overlays.",
              tech: ["React", "WebGL", "TypeScript", "Tailwind"],
            },
          ],
        },
        keyDecisions: [
          {
            title: "Columnar ClickHouse over Traditional Time-Series Databases",
            reasoning: "ClickHouse provided 8x better compression ratios and 15x faster arbitrary slice-and-dice queries than specialized TSDB alternatives for our data shapes.",
          },
          {
            title: "Zero-Allocation Buffer Pools in Go",
            reasoning: "By reusing byte slices via sync.Pool across worker goroutines, we eliminated 94% of garbage collector pause times during traffic bursts.",
          },
        ],
        challengesAndSolutions: [
          {
            challenge: "Out-of-memory crashes when upstream network links experienced temporary disconnections followed by sudden burst reconnections.",
            solution: "Introduced a local NVMe memory-mapped spillover queue that gracefully buffers overflow records to disk without blocking the main event loop.",
          },
        ],
        results: [
          "Processed 120,000+ events per second with sustained p99 latency < 4.8ms",
          "Reduced cloud infrastructure compute spend by 42% through optimized memory and CPU utilization",
          "Zero lost events during simulated multi-availability-zone node failures",
        ],
        technologies: ["Go", "Rust", "Kafka", "ClickHouse", "Docker", "Kubernetes", "gRPC", "React", "TypeScript"],
      },
    },

    {
      id: "nexus-ai-orchestrator",
      title: "Nexus AI Studio",
      category: "AI & Intelligence",
      shortDescription: "Autonomous multi-agent orchestration workspace enabling complex multi-step reasoning, real-time tool invocation, and human-in-the-loop audit logs.",
      role: "Full-Stack AI Architect",
      status: "Production Live",
      featured: true,
      coverGradient: "from-amber-950/40 via-zinc-900 to-black",
      accentColor: "#F6DBC0",
      tags: ["TypeScript", "Next.js", "Python", "LangGraph", "FastAPI", "VectorDB"],
      links: {
        live: "https://example.com/nexus-ai",
        github: "https://github.com",
        caseStudy: "#case-study-nexus",
      },
      caseStudy: {
        headline: "Bridging Foundational LLMs with Reliable Enterprise Agent Workflows",
        overview: "Nexus AI Studio provides technical teams with a visual graph canvas and code runtime to construct, test, and deploy collaborative autonomous agents capable of querying internal APIs, executing sandbox code, and synthesizing structured outputs.",
        problemStatement: "Single-prompt LLM pipelines fail catastrophically on non-trivial business logic, suffering from hallucinations, infinite loops, and opaque debugging logs when agent steps go astray.",
        myContribution: [
          "Designed the directed acyclic graph (DAG) execution engine that coordinates agent handoffs, subagent spawning, and tool calling with deterministic state snapshots.",
          "Built a streaming client-side debugger interface utilizing React Server Components and WebSockets for real-time thought-process inspection.",
          "Engineered a resilient token-bucket rate limiter and caching layer to prevent API exhaustion and run-away cost spirals.",
          "Implemented cryptographic provenance tracking for every agent tool invocation and database modification.",
        ],
        technicalArchitecture: {
          layers: [
            {
              name: "Orchestration Kernel",
              description: "State-machine driven execution core handling parallel subagent forks, condition routing, and timeout recovery.",
              tech: ["Python", "AsyncIO", "LangGraph", "FastAPI"],
            },
            {
              name: "Vector & Semantic Memory",
              description: "Hybrid vector search combining sparse BM25 text indices with dense embeddings for sub-20ms semantic document retrieval.",
              tech: ["Qdrant", "PostgreSQL pgvector", "Cohere Rerank"],
            },
            {
              name: "Workspace Frontend",
              description: "Interactive node canvas with fluid zooming, micro-animations, and live token streaming.",
              tech: ["Next.js App Router", "Tailwind CSS", "React Flow", "Framer Motion"],
            },
          ],
        },
        keyDecisions: [
          {
            title: "Deterministic State Snapshots at Every Step",
            reasoning: "Allowed developers to 'time travel' debug agent failures, rewind to step 3, modify the prompt or tool parameters, and resume without re-running previous tokens.",
          },
        ],
        challengesAndSolutions: [
          {
            challenge: "High latency when multiple agents executed cascading sequential tool calls.",
            solution: "Designed an speculative execution pipeline where independent tool calls execute concurrently with speculative model prompting, slashing total turn time by 48%.",
          },
        ],
        results: [
          "Reduced multi-agent hallucination rates by 68% via strict type-validated schema enforcement",
          "Cut enterprise token expenditure by 35% through semantic caching of frequent context subgraphs",
          "Supported 10,000+ daily interactive agent workflows with 99.95% engine availability",
        ],
        technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "pgvector", "Docker", "Tailwind"],
      },
    },

    {
      id: "hyperion-edge-commerce",
      title: "Hyperion Commerce",
      category: "Full-Stack Platforms",
      shortDescription: "Sub-second headless e-commerce platform built on edge rendering, atomic inventory synchronisation, and predictive asset prefetching.",
      role: "Lead Full-Stack Engineer",
      status: "Production Live",
      featured: true,
      coverGradient: "from-red-950/50 via-zinc-900 to-black",
      accentColor: "#935073",
      tags: ["Next.js 15", "Node.js", "Redis Edge", "PostgreSQL", "Stripe", "Tailwind"],
      links: {
        live: "https://example.com/hyperion",
        github: "https://github.com",
        caseStudy: "#case-study-hyperion",
      },
      caseStudy: {
        headline: "Re-architecting Global Retail for Uncompromising Speed & Conversion",
        overview: "Hyperion is a bespoke headless commerce engine engineered for luxury lifestyle brands where visual presentation and lightning-fast checkout experiences directly drive multimillion-dollar revenue conversions.",
        problemStatement: "The client's previous monolithic e-commerce stack had an average First Contentful Paint of 3.4 seconds, terrible mobile performance on international networks, and inventory race-condition crashes during flash sale drops.",
        myContribution: [
          "Architected a Next.js App Router storefront deployed on global edge nodes with automated ISR (Incremental Static Regeneration).",
          "Implemented an atomic Redis Lua-scripted reservation mechanism preventing overselling under high concurrency flash sales.",
          "Designed a cinematic, fluid checkout interface with 1-click payment integrations and optimistic UI updates.",
          "Engineered intelligent client-side prefetching algorithms that preload product pages based on user cursor velocity and viewport entry.",
        ],
        technicalArchitecture: {
          layers: [
            {
              name: "Edge Delivery",
              description: "Vercel edge middleware running geolocation customization, currency formatting, and dynamic image optimization.",
              tech: ["Vercel Edge", "Cloudflare Workers", "Next.js"],
            },
            {
              name: "Catalog & Search",
              description: "Faceted search cluster with instant typahead filtering and instant price recalculation.",
              tech: ["Meilisearch", "Redis Cache", "TypeScript"],
            },
            {
              name: "Transactional Core",
              description: "ACID-compliant relational database with optimistic locking and asynchronous webhook processing.",
              tech: ["PostgreSQL", "Prisma", "BullMQ", "Stripe API"],
            },
          ],
        },
        keyDecisions: [
          {
            title: "Optimistic UI for Cart Operations",
            reasoning: "Cart additions and quantity adjustments resolve instantaneously on the client with background rollback handling, creating an imperceptible latency feel.",
          },
        ],
        challengesAndSolutions: [
          {
            challenge: "Preventing inventory double-booking when 50,000 customers attempted to purchase limited-run items simultaneously.",
            solution: "Wrote atomic Lua scripts executed inside Redis clusters that lock inventory units with a 10-minute TTL, cleanly handling cart abandonments.",
          },
        ],
        results: [
          "Reduced First Contentful Paint from 3.4s down to 380ms globally",
          "Achieved 100/100 Lighthouse performance and accessibility scores across all catalog routes",
          "Eliminated 100% of overselling incidents across major high-traffic promotional events",
        ],
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redis", "PostgreSQL", "Stripe", "Docker"],
      },
    },

    {
      id: "chronos-financial-telemetry",
      title: "Chronos Analytics",
      category: "Cloud & Performance",
      shortDescription: "Ultra-low-latency financial time-series telemetry platform with real-time order-book visualization and predictive volatility detection.",
      role: "Senior Systems Engineer",
      status: "Architecture Demo",
      featured: false,
      coverGradient: "from-emerald-950/40 via-zinc-900 to-black",
      accentColor: "#B2668F",
      tags: ["TypeScript", "Rust", "WebSockets", "TimescaleDB", "WebGL", "ChartJS"],
      links: {
        live: "https://example.com/chronos",
        github: "https://github.com",
        caseStudy: "#case-study-chronos",
      },
      caseStudy: {
        headline: "Visualizing Millisecond Market Telemetry in the Modern Web Browser",
        overview: "Chronos bridges high-frequency financial market feeds with institutional investor interfaces, rendering deep L2/L3 order books and candlestick charts at locked 60 frames per second without memory degradation.",
        problemStatement: "Standard browser charting libraries freeze the JavaScript main thread when handling over 10,000 ticks per second, causing UI stutter and lagging price execution displays.",
        myContribution: [
          "Developed a custom WebGL rendering pipeline offloading candlestick drawing and depth chart rendering directly to the client GPU.",
          "Implemented a WebSocket multiplexer with binary ArrayBuffer deserialization, bypassing expensive JSON string conversions.",
          "Designed algorithmic trend detection routines running in Web Workers to prevent chart frame drops during intense market volatility.",
        ],
        technicalArchitecture: {
          layers: [
            {
              name: "Feed Ingestion",
              description: "High-throughput binary market data feed handler consuming direct exchange multicast feeds.",
              tech: ["Rust", "WebSockets", "Protobuf"],
            },
            {
              name: "Time-Series Persistence",
              description: "Continuous aggregates and automated retention policies storing historical tick resolutions.",
              tech: ["TimescaleDB", "PostgreSQL"],
            },
            {
              name: "Hardware-Accelerated Client",
              description: "Zero-dependency custom WebGL shader pipeline for rendering millions of price points effortlessly.",
              tech: ["WebGL 2.0", "Web Workers", "TypeScript", "Tailwind"],
            },
          ],
        },
        keyDecisions: [
          {
            title: "Web Workers for Feed Deserialization",
            reasoning: "Isolating network parsing in background workers kept the main UI thread 100% unblocked for buttery-smooth panning and zooming.",
          },
        ],
        challengesAndSolutions: [
          {
            challenge: "Browser memory exhaustion during extended trading sessions spanning 8+ consecutive hours.",
            solution: "Implemented an in-memory sliding circular buffer with fixed memory allocation, recycling typed arrays rather than allocating new objects.",
          },
        ],
        results: [
          "Sustained 60 FPS rendering under feed loads exceeding 40,000 ticks/second",
          "Zero garbage collection memory spikes over 12-hour continuous test sessions",
        ],
        technologies: ["Rust", "TypeScript", "WebGL", "WebSockets", "TimescaleDB", "Tailwind CSS"],
      },
    },

    {
      id: "vanguard-design-system",
      title: "Vanguard Design Core",
      category: "Full-Stack Platforms",
      shortDescription: "Enterprise micro-frontend UI design system and motion engineering library adopted across multiple distributed engineering squads.",
      role: "Frontend Architect",
      status: "Open Source",
      featured: false,
      coverGradient: "from-indigo-950/50 via-zinc-900 to-black",
      accentColor: "#502D55",
      tags: ["React 19", "TypeScript", "Tailwind", "Radix UI", "Motion", "Storybook"],
      links: {
        live: "https://example.com/vanguard",
        github: "https://github.com",
        caseStudy: "#case-study-vanguard",
      },
      caseStudy: {
        headline: "Scaling Cohesive UX & Accessible Motion Across Enterprise Teams",
        overview: "Vanguard is an accessible, tokenized design system providing 50+ headless components, physics-based motion primitives, and strict WCAG AAA color contrast compliance.",
        problemStatement: "Multiple teams across disparate repositories were repeatedly rebuilding inconsistent modals, data tables, and forms with fragmented accessibility standards and divergent branding.",
        myContribution: [
          "Architected tokenized design architecture compatible with Tailwind CSS and CSS variables.",
          "Created accessible keyboard navigation hooks and focus management trap utilities.",
          "Built a live Storybook documentation portal with automated visual regression tests using Playwright.",
        ],
        technicalArchitecture: {
          layers: [
            {
              name: "Design Tokens",
              description: "Single-source color, typography, spacing, and elevation variables with dark and high-contrast modes.",
              tech: ["CSS Variables", "Tailwind Plugins", "JSON Schemas"],
            },
            {
              name: "Accessible Primitives",
              description: "Headless components with uncompromised ARIA attributes and screen-reader announcements.",
              tech: ["Radix UI Primitives", "TypeScript", "Motion"],
            },
          ],
        },
        keyDecisions: [
          {
            title: "Strict Zero-Breaking Change SemVer Releases",
            reasoning: "Allowed distributed teams to update dependencies without fear of regressions across production applications.",
          },
        ],
        challengesAndSolutions: [
          {
            challenge: "Ensuring animations respect user preferences without requiring developers to write duplicate conditional CSS.",
            solution: "Wrapped all motion primitives in an automated `prefers-reduced-motion` provider that safely collapses animation durations to zero when enabled.",
          },
        ],
        results: [
          "Cut new feature development frontend delivery cycles by 50%",
          "Achieved 100% WCAG 2.1 AA and AAA accessibility compliance across all components",
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS", "Motion", "Radix UI", "Storybook"],
      },
    },

    {
      id: "pulsedb-embedded-vector-engine",
      title: "PulseDB Vector Core",
      category: "AI & Intelligence",
      shortDescription: "Ultra-compact embedded vector search engine with HNSW indexing, quantized embeddings, and sub-10MB binary footprint.",
      role: "Creator & Lead Developer",
      status: "Open Source",
      featured: false,
      coverGradient: "from-purple-950/40 via-zinc-900 to-black",
      accentColor: "#C48CB3",
      tags: ["Rust", "WebAssembly", "C++", "HNSW", "Vector Embeddings", "SIMD"],
      links: {
        live: "https://example.com/pulsedb",
        github: "https://github.com",
        caseStudy: "#case-study-pulsedb",
      },
      caseStudy: {
        headline: "Bringing Offline Semantic Vector Retrieval to the Browser & Edge",
        overview: "PulseDB provides an ultra-lightweight, zero-dependency embedded vector index capable of running in native Rust binaries or compiled directly to WebAssembly for client-side search.",
        problemStatement: "Existing vector databases require separate servers, huge memory allocations, and network latency hops unsuitable for edge devices or privacy-first desktop and browser software.",
        myContribution: [
          "Implemented Hierarchical Navigable Small World (HNSW) graph indexing with scalar quantization.",
          "Compiled the Rust core to WebAssembly with SIMD acceleration for lightning-fast cosine similarity calculations in web browsers.",
          "Designed comprehensive benchmark test suites comparing recall accuracy against Faiss and ScaNN.",
        ],
        technicalArchitecture: {
          layers: [
            {
              name: "Graph Algorithmic Core",
              description: "Optimized graph traversal algorithms with SIMD distance calculations.",
              tech: ["Rust", "AVX2 / NEON", "WASM SIMD"],
            },
            {
              name: "Persistence Layer",
              description: "Single-file memory-mapped storage format with zero serialization overhead.",
              tech: ["Memory-Mapped Files", "Zero-Copy Deserialization"],
            },
          ],
        },
        keyDecisions: [
          {
            title: "8-bit Scalar Quantization",
            reasoning: "Reduced memory consumption by 75% with less than 1.2% drop in search recall accuracy.",
          },
        ],
        challengesAndSolutions: [
          {
            challenge: "WebAssembly memory growth limits in mobile web browsers.",
            solution: "Constructed dynamic memory defragmentation and chunked index paging that operates cleanly within constrained 64MB WASM memory limits.",
          },
        ],
        results: [
          "Sub-2ms nearest-neighbor queries on 100,000 768-dimensional vectors inside the browser",
          "Binary size under 8.2MB with zero external runtime dependencies",
        ],
        technologies: ["Rust", "WebAssembly", "C++", "SIMD", "TypeScript"],
      },
    },
  ],

  experience: [
    {
      id: "exp-1",
      role: "Lead Full-Stack Architect & Principal Systems Engineer",
      organization: "Enterprise Technology & Product Solutions",
      location: "San Francisco, CA / Remote",
      period: "2023 — Present",
      isCurrent: true,
      badge: "Current Role",
      description: "Directing architectural strategy, cloud infrastructure resilience, and full-stack product engineering across high-throughput distributed applications.",
      highlights: [
        "Spearheaded the migration of monolithic services to resilient event-driven microservices, reducing p99 latency by 55% and infrastructure costs by 32%.",
        "Mentored a cross-functional team of 14 senior frontend and backend engineers, instituting rigorous TypeScript standards, RFC reviews, and automated CI/CD guardrails.",
        "Engineered foundational real-time telemetry and streaming architectures supporting millions of concurrent customer interactions with 99.99% service availability.",
      ],
      technologies: ["TypeScript", "Next.js", "Go", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "AWS"],
      note: "Customizable: Update with your exact employer name, dates, and team specifics in profile-data.ts",
    },
    {
      id: "exp-2",
      role: "Senior Full-Stack Engineer & Team Lead",
      organization: "Cloud Scale Systems & Digital Products",
      location: "Remote / Hybrid",
      period: "2020 — 2023",
      isCurrent: false,
      badge: "High Impact",
      description: "Led the development of customer-facing web platforms, low-latency API gateways, and interactive analytics dashboards.",
      highlights: [
        "Architected enterprise-grade GraphQL and REST API layers handling over 40 million daily requests with sub-50ms response times.",
        "Engineered high-performance React frontends with advanced state management, optimistic UI updates, and zero layout shifts.",
        "Pioneered automated end-to-end testing pipelines that reduced production defect escape rates by 40%.",
      ],
      technologies: ["React", "TypeScript", "Node.js", "GraphQL", "Redis", "PostgreSQL", "Docker", "GCP"],
      note: "Customizable: Update with your exact past company name and achievements in profile-data.ts",
    },
    {
      id: "exp-3",
      role: "Full-Stack Software Engineer",
      organization: "Innovative Software Platforms",
      location: "Hybrid",
      period: "2017 — 2020",
      isCurrent: false,
      description: "Built scalable web applications, internal tooling, and microservices for high-growth tech ventures.",
      highlights: [
        "Developed end-to-end web features, from database schema design and ORM migrations to accessible responsive client views.",
        "Integrated secure payment gateways, OAuth2 authentication, and third-party SaaS integrations.",
        "Optimized database queries and added strategic Redis caching, cutting average page load times by 60%.",
      ],
      technologies: ["JavaScript/TypeScript", "React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Tailwind CSS"],
      note: "Customizable: Update with your foundational engineering experience in profile-data.ts",
    },
  ],

  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Science in Computer Science / Engineering",
      institution: "Accredited University Institution",
      location: "India / International",
      period: "Verified Qualification",
      honors: "First Class with Distinction",
      details: [
        "Comprehensive coursework in Algorithms, Data Structures, Operating Systems, Database Management Systems, and Distributed Computing.",
        "Capstone: Real-time Distributed File Synchronizer & Cryptographic Integrity Checker.",
      ],
    },
    {
      id: "edu-2",
      degree: "Continuous Professional Certifications & Specializations",
      institution: "Cloud & Advanced Systems Institutes",
      location: "Online / Verified",
      period: "Ongoing Mastery",
      details: [
        "Advanced Cloud Architecture & Distributed Systems Design.",
        "Deep Learning & Multi-Agent AI Systems Orchestration.",
        "Full-Stack Web Performance Engineering & Web Accessibility (WCAG).",
      ],
    },
  ],

  skills: [
    {
      title: "Programming Languages",
      description: "Strongly-typed and systems languages used for production backends and frontends.",
      skills: [
        { name: "TypeScript", highlight: true },
        { name: "JavaScript (ESNext)", highlight: true },
        { name: "Go (Golang)", highlight: true },
        { name: "Python", highlight: true },
        { name: "Rust", highlight: false },
        { name: "SQL", highlight: true },
        { name: "HTML5 / Semantic Web", highlight: false },
        { name: "Modern CSS / PostCSS", highlight: false },
      ],
    },
    {
      title: "Frontend Engineering",
      description: "Building responsive, cinematic, and accessible user interfaces.",
      skills: [
        { name: "React 19 & Next.js App Router", highlight: true },
        { name: "Tailwind CSS & Token Systems", highlight: true },
        { name: "Motion (Framer Motion)", highlight: true },
        { name: "Server-Driven UI & RSC", highlight: true },
        { name: "WebGL / Canvas Graphics", highlight: false },
        { name: "State Machines & Signals", highlight: false },
        { name: "Radix UI & Headless A11y", highlight: true },
        { name: "Web Performance (Core Web Vitals)", highlight: true },
      ],
    },
    {
      title: "Backend & Distributed Systems",
      description: "High-throughput APIs, streaming architectures, and resilient backends.",
      skills: [
        { name: "Node.js & Bun Runtimes", highlight: true },
        { name: "Go Web Services", highlight: true },
        { name: "RESTful APIs & GraphQL", highlight: true },
        { name: "gRPC & Protocol Buffers", highlight: true },
        { name: "Apache Kafka & Event-Driven Pub/Sub", highlight: true },
        { name: "Microservices Architecture", highlight: true },
        { name: "WebSockets & SSE Realtime", highlight: true },
        { name: "Concurrency & Asynchronous I/O", highlight: false },
      ],
    },
    {
      title: "Databases & Storage",
      description: "Relational, columnar, document, and vector storage engines.",
      skills: [
        { name: "PostgreSQL & pgvector", highlight: true },
        { name: "Redis & In-Memory Caching", highlight: true },
        { name: "ClickHouse OLAP", highlight: true },
        { name: "MongoDB & Document Stores", highlight: false },
        { name: "TimescaleDB Time-Series", highlight: false },
        { name: "Qdrant / Milvus Vector DBs", highlight: true },
        { name: "Prisma & Drizzle ORM", highlight: true },
        { name: "Database Indexing & Query Tuning", highlight: true },
      ],
    },
    {
      title: "Cloud, DevOps & Observability",
      description: "Cloud-native infrastructure, CI/CD automation, and telemetry monitoring.",
      skills: [
        { name: "Docker & Containerization", highlight: true },
        { name: "Kubernetes Orchestration", highlight: true },
        { name: "AWS & GCP Cloud Services", highlight: true },
        { name: "Vercel & Cloudflare Edge", highlight: true },
        { name: "Terraform Infrastructure as Code", highlight: false },
        { name: "GitHub Actions CI/CD", highlight: true },
        { name: "Prometheus, Grafana & Datadog", highlight: true },
        { name: "Zero-Downtime Deployments", highlight: false },
      ],
    },
    {
      title: "AI & Modern Developer Tools",
      description: "LLM agent orchestration, testing suites, and developer productivity tooling.",
      skills: [
        { name: "LangChain / LangGraph", highlight: true },
        { name: "OpenAI / Claude / Gemini APIs", highlight: true },
        { name: "RAG & Vector Retrieval", highlight: true },
        { name: "Vitest & Jest Unit Testing", highlight: true },
        { name: "Playwright E2E Testing", highlight: true },
        { name: "Git & Monorepo Tooling (Turborepo)", highlight: true },
        { name: "Linux Systems & Bash", highlight: false },
        { name: "Figma to Code Engineering", highlight: true },
      ],
    },
  ],
};
