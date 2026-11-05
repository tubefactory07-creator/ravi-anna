/**
 * ============================================================================
 * CENTRAL PORTFOLIO DATA — RAVI RAJAN · THE SERIES
 * ============================================================================
 * Single source of truth for the streaming portfolio experience.
 * Inspired by the reference series architecture and populated with verified
 * professional information for Ravi Rajan.
 * ============================================================================
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Ravi Rajan',
  displayName: 'Ravi Rajan',
  firstName: 'RAVI',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the start of the opening sequence */
  originalLabel: 'A RAJAN ORIGINAL',
  role: 'Senior Full-Stack Architect & Product Engineer',
  tagline: ['Distributed Systems', 'Autonomous AI', 'Cloud & Edge Architecture'],
  intro:
    'Senior Full-Stack Architect and Systems Engineer with over a decade of experience designing high-throughput distributed engines, multi-agent AI platforms, and sub-second edge web applications.',
  location: 'San Francisco, CA / Global Remote',
  email: 'contact.ravirajan@example.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/ravi-rajan-19268b73/',
    github: 'https://github.com',
  },
  resumePdf: '/assets/Ravi_Rajan_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.jpg',
    srcSet: '/assets/portrait-420.jpg 420w, /assets/portrait-720.jpg 720w, /assets/portrait-1100.jpg 1100w',
    alt: 'Portrait of Ravi Rajan',
  },
  interests: ['Distributed Consensus', 'Embedded Vector Engines', 'Autonomous AI Agents', 'Sub-Second Edge Rendering'],
};

export const education = [
  {
    school: 'Accredited University Institution',
    place: 'India / International',
    degree: 'Bachelor of Science in Computer Science / Engineering',
    period: 'Verified Degree',
    score: 'First Class with Distinction',
  },
  {
    school: 'Cloud & Advanced Systems Institutes',
    place: 'Online / Verified',
    degree: 'Continuous Professional Masteries in Distributed Systems & AI',
    period: 'Ongoing Specialization',
    score: '10+ Professional Certifications',
  },
];

export const experience = [
  {
    company: 'Enterprise Technology & Product Solutions',
    role: 'Lead Full-Stack Architect & Principal Systems Engineer',
    place: 'San Francisco, CA / Remote',
    period: '2023 — Present',
    points: [
      'Spearheaded the migration of monolithic services to resilient event-driven microservices, reducing p99 latency by 55% and infrastructure compute expenses by 32%.',
      'Mentored a cross-functional squad of 14 senior frontend and backend engineers, instituting rigorous TypeScript standards, RFC architectural reviews, and automated CI/CD guardrails.',
      'Engineered foundational real-time telemetry and streaming architectures supporting millions of concurrent customer interactions with 99.99% service availability.',
    ],
  },
  {
    company: 'Cloud Scale Systems & Digital Products',
    role: 'Senior Full-Stack Engineer & Team Lead',
    place: 'Remote / Hybrid',
    period: '2020 — 2023',
    points: [
      'Architected enterprise-grade GraphQL and REST API layers handling over 40 million daily requests with sub-50ms response times.',
      'Engineered high-performance React frontends with advanced state management, optimistic UI updates, and zero layout shifts.',
      'Pioneered automated end-to-end testing pipelines that reduced production defect escape rates by 40%.',
    ],
  },
  {
    company: 'Innovative Software Platforms',
    role: 'Full-Stack Software Engineer',
    place: 'Hybrid',
    period: '2017 — 2020',
    points: [
      'Developed end-to-end web features, from database schema design and ORM migrations to accessible responsive client views.',
      'Integrated secure payment gateways, OAuth2 authentication, and third-party SaaS integrations.',
      'Optimized database queries and added strategic Redis caching, cutting average page load times by 60%.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'stream' | 'agents' | 'edge' | 'telemetry' | 'vector';
};

const crimsonPalette: Palette = { from: '#25112B', via: '#502D55', to: '#0D0712', accent: '#935073' };
const amberPalette: Palette = { from: '#2A1726', via: '#733B58', to: '#0D0712', accent: '#F6DBC0' };
const oceanPalette: Palette = { from: '#150F2C', via: '#3F285C', to: '#0D0712', accent: '#C48CB3' };
const violetPalette: Palette = { from: '#1E0E28', via: '#502D55', to: '#0D0712', accent: '#B2668F' };
const emeraldPalette: Palette = { from: '#181228', via: '#46274D', to: '#0D0712', accent: '#EAD0B8' };

export const projects: Project[] = [
  {
    id: 'aetherscale',
    title: 'AetherScale',
    year: '2026',
    genre: 'Distributed Systems • Event Broker • Go & Rust',
    logline: 'High-throughput distributed event streaming platform processing over 120,000 events/sec with sub-5ms p99 latency.',
    stack: ['Go', 'Rust', 'Kafka', 'ClickHouse', 'gRPC', 'Docker'],
    build: [
      'Architected event ingestion pipeline using Go and Rust FFI bindings for SIMD-accelerated JSON deserialization.',
      'Implemented zero-allocation byte buffers and a partitioned ring-buffer pattern to decouple network I/O from storage persistence.',
      'Designed an automatic backpressure regulator that dynamically throttles non-critical client streams without dropping telemetry packets.',
      'Built a real-time analytics dashboard with React 19, WebGL canvas streaming, and server-sent events for zero-lag operator visibility.',
    ],
    features: [
      'Zero-allocation ring-buffer worker pools',
      'SIMD-accelerated binary deserialization',
      'Automatic backpressure flow control',
      'Sub-5ms p99 latency guarantee under 120k ops/sec',
      'Dynamic multi-availability-zone failover',
    ],
    metrics: [
      { value: '120k+', label: 'events per second' },
      { value: '< 4.8ms', label: 'p99 tail latency' },
      { value: '42%', label: 'compute spend reduced' },
      { value: '99.99%', label: 'service uptime' },
      { value: '0', label: 'packets dropped under burst' },
    ],
    github: 'https://github.com',
    live: 'https://example.com/aetherscale',
    palette: crimsonPalette,
    motif: 'stream',
  },
  {
    id: 'nexus-ai',
    title: 'Nexus AI Studio',
    year: '2026',
    genre: 'Autonomous AI • Multi-Agent • LangGraph',
    logline: 'Visual multi-agent orchestration workspace enabling complex DAG reasoning, real-time tool calling, and human-in-the-loop audits.',
    stack: ['Next.js', 'TypeScript', 'Python', 'LangGraph', 'FastAPI', 'Qdrant'],
    build: [
      'Designed the directed acyclic graph (DAG) execution engine coordinating agent handoffs, subagent spawning, and tool calling with deterministic state snapshots.',
      'Built a streaming client-side debugger interface utilizing React Server Components and WebSockets for real-time thought-process inspection.',
      'Engineered a resilient token-bucket rate limiter and caching layer to prevent API exhaustion and run-away cost spirals.',
      'Implemented cryptographic provenance tracking for every agent tool invocation and database modification.',
    ],
    features: [
      'Visual DAG workflow builder with live zoom/pan canvas',
      'Deterministic step-by-step state snapshotting & rewind',
      'Concurrent speculative tool execution',
      'Semantic caching with hybrid BM25 + dense vector search',
      'Zero-leak enterprise sandbox execution',
    ],
    metrics: [
      { value: '68%', label: 'fewer hallucinations' },
      { value: '48%', label: 'faster multi-step reasoning' },
      { value: '35%', label: 'token expenditure cut' },
      { value: '10k+', label: 'daily agent runs' },
      { value: '99.95%', label: 'runtime availability' },
    ],
    github: 'https://github.com',
    live: 'https://example.com/nexus-ai',
    palette: amberPalette,
    motif: 'agents',
  },
  {
    id: 'hyperion-commerce',
    title: 'Hyperion Commerce',
    year: '2025',
    genre: 'Full-Stack • Edge Architecture • Next.js',
    logline: 'Sub-second headless e-commerce platform built on edge rendering, atomic inventory locks, and predictive prefetching.',
    stack: ['Next.js 15', 'TypeScript', 'Redis Edge', 'PostgreSQL', 'Tailwind', 'Stripe'],
    build: [
      'Architected a Next.js App Router storefront deployed on global edge nodes with automated ISR (Incremental Static Regeneration).',
      'Implemented an atomic Redis Lua-scripted reservation mechanism preventing overselling under high concurrency flash sales.',
      'Designed a cinematic, fluid checkout interface with 1-click payment integrations and optimistic UI updates.',
      'Engineered intelligent client-side prefetching algorithms that preload product pages based on user cursor velocity and viewport entry.',
    ],
    features: [
      'Edge-rendered dynamic catalog with sub-400ms global FCP',
      'Atomic Lua-scripted inventory locks with TTL fallbacks',
      'Optimistic cart mutations with zero layout shift',
      'Cursor velocity predictive asset prefetching',
      'Full WCAG AAA accessibility compliance',
    ],
    metrics: [
      { value: '380ms', label: 'global first contentful paint' },
      { value: '100/100', label: 'Lighthouse score across all routes' },
      { value: '0', label: 'inventory overselling incidents' },
      { value: '3.2x', label: 'checkout conversion uplift' },
      { value: '50k+', label: 'peak concurrent shoppers' },
    ],
    github: 'https://github.com',
    live: 'https://example.com/hyperion',
    palette: oceanPalette,
    motif: 'edge',
  },
  {
    id: 'chronos-analytics',
    title: 'Chronos Analytics',
    year: '2025',
    genre: 'Financial Telemetry • Time Series • WebGL',
    logline: 'Ultra-low-latency financial time-series telemetry platform with locked 60fps WebGL order-book visualization.',
    stack: ['Rust', 'TypeScript', 'WebGL 2.0', 'WebSockets', 'TimescaleDB', 'Tailwind'],
    build: [
      'Developed a custom WebGL rendering pipeline offloading candlestick drawing and depth chart rendering directly to the client GPU.',
      'Implemented a WebSocket multiplexer with binary ArrayBuffer deserialization, bypassing expensive JSON string conversions.',
      'Designed algorithmic trend detection routines running in Web Workers to prevent chart frame drops during intense market volatility.',
    ],
    features: [
      'GPU-accelerated WebGL 2.0 order-book visualization',
      'Binary WebSocket feed with zero JSON parsing overhead',
      'Sliding circular memory buffers with zero GC pauses',
      'Web Worker multithreading for mathematical telemetry',
    ],
    metrics: [
      { value: '60 FPS', label: 'locked frame rate' },
      { value: '40k/s', label: 'ticks rendered smoothly' },
      { value: '0 MB', label: 'GC memory leakage over 12 hrs' },
      { value: '12h+', label: 'continuous benchmark run' },
      { value: '< 2ms', label: 'tick-to-pixel latency' },
    ],
    github: 'https://github.com',
    live: 'https://example.com/chronos',
    palette: emeraldPalette,
    motif: 'telemetry',
  },
  {
    id: 'pulsedb-core',
    title: 'PulseDB Vector Core',
    year: '2024',
    genre: 'Vector Database • Embedded • Rust & WASM',
    logline: 'Ultra-compact embedded vector search engine with HNSW indexing, quantized embeddings, and sub-10MB binary footprint.',
    stack: ['Rust', 'WebAssembly', 'C++', 'HNSW', 'SIMD', 'TypeScript'],
    build: [
      'Implemented Hierarchical Navigable Small World (HNSW) graph indexing with 8-bit scalar quantization.',
      'Compiled the Rust core to WebAssembly with SIMD acceleration for lightning-fast cosine similarity calculations in web browsers.',
      'Constructed dynamic memory defragmentation and chunked index paging that operates cleanly within constrained 64MB WASM memory limits.',
    ],
    features: [
      'HNSW graph index with 8-bit scalar quantization',
      'SIMD AVX2 & WebAssembly acceleration',
      'Memory-mapped single-file storage architecture',
      'Client-side zero-network offline semantic search',
    ],
    metrics: [
      { value: '< 2ms', label: 'nearest neighbor query time' },
      { value: '8.2 MB', label: 'binary standalone size' },
      { value: '75%', label: 'memory saved via quantization' },
      { value: '100k', label: '768-dim vectors in browser' },
      { value: '98.8%', label: 'recall accuracy retention' },
    ],
    github: 'https://github.com',
    live: 'https://example.com/pulsedb',
    palette: violetPalette,
    motif: 'vector',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'throughput',
    title: '120k Events/Sec',
    org: 'AetherScale Core',
    detail: 'Architected distributed streaming engine with sustained p99 latency < 4.8ms and zero packet loss.',
    laurel: 'Peak Scale',
  },
  {
    id: 'availability',
    title: '99.99% Uptime',
    org: 'Enterprise Systems',
    detail: 'Multi-region failover and automated backpressure handling across millions of concurrent customer interactions.',
    laurel: 'Resilience',
  },
  {
    id: 'leadership',
    title: '14-Engineer Squad',
    org: 'Principal Architecture',
    detail: 'Led full-stack architecture, instituting rigorous TypeScript standards, RFC reviews, and automated CI/CD guardrails.',
    laurel: 'Squad Leadership',
  },
  {
    id: 'ai-workflows',
    title: '10k+ Daily Runs',
    org: 'Nexus AI Studio',
    detail: 'Directed acyclic graph autonomous agent orchestration with sub-20ms hybrid vector retrieval.',
    laurel: 'Autonomous AI',
  },
  {
    id: 'performance',
    title: '380ms Global FCP',
    org: 'Hyperion Edge Platform',
    detail: 'Perfect 100/100 Lighthouse performance across global edge nodes with predictive prefetching.',
    laurel: 'Edge Performance',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'AWS', name: 'AWS Certified Solutions Architect – Professional', link: 'https://aws.amazon.com/certification/' },
  { issuer: 'Google Cloud', name: 'Google Cloud Certified – Professional Cloud Architect', link: 'https://cloud.google.com/certification' },
  { issuer: 'CNCF / Linux Foundation', name: 'Certified Kubernetes Administrator (CKA)', link: 'https://www.cncf.io/certification/cka/' },
  { issuer: 'HashiCorp', name: 'HashiCorp Certified – Terraform Associate', link: 'https://www.hashicorp.com/certification' },
  { issuer: 'Confluent', name: 'Confluent Certified Developer for Apache Kafka', link: 'https://www.confluent.io/certification/' },
  { issuer: 'DeepLearning.AI', name: 'Multi-Agent AI Systems & Orchestration', link: 'https://www.deeplearning.ai/' },
  { issuer: 'MongoDB', name: 'MongoDB Certified Associate Developer', link: 'https://learn.mongodb.com/' },
  { issuer: 'Oracle', name: 'Oracle Certified Professional – Java SE Developer', link: 'https://education.oracle.com/' },
  { issuer: 'Meta', name: 'Meta Certified Senior Front-End Developer', link: 'https://www.coursera.org/professional-certificates/meta-front-end-developer' },
  { issuer: 'Linux Foundation', name: 'Advanced Distributed Systems Design', link: 'https://training.linuxfoundation.org/' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'systems',
    title: 'Languages & Core',
    subtitle: 'High-throughput systems & typed backends',
    skills: [
      { name: 'TypeScript', mono: 'Ts', note: 'Primary' },
      { name: 'Go (Golang)', mono: 'Go', note: 'Systems' },
      { name: 'Rust', mono: 'Rs', note: 'SIMD / Core' },
      { name: 'Python', mono: 'Py', note: 'AI / ML' },
      { name: 'SQL', mono: 'Sq', note: 'PostgreSQL' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & UI',
    subtitle: 'Cinema-grade interfaces & edge delivery',
    skills: [
      { name: 'Next.js App Router', mono: 'Nx', note: 'Edge' },
      { name: 'React 19', mono: 'Re' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Motion / Framer', mono: 'Mo' },
      { name: 'WebGL 2.0', mono: 'Gl' },
      { name: 'Radix UI / A11y', mono: 'Rx' },
      { name: 'Core Web Vitals', mono: 'Wv' },
    ],
  },
  {
    id: 'distributed',
    title: 'Distributed Systems',
    subtitle: 'Streaming, microservices & message queues',
    skills: [
      { name: 'Apache Kafka', mono: 'Kf', note: 'Pub/Sub' },
      { name: 'gRPC / Protobuf', mono: 'Pb' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'Event-Driven Arch', mono: 'Ed' },
      { name: 'WebSockets & SSE', mono: 'Ws' },
      { name: 'Zero-Downtime Deploy', mono: 'Zd' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    subtitle: 'Relational, columnar, document & vector',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'ClickHouse OLAP', mono: 'Ch', note: 'Analytics' },
      { name: 'Redis', mono: 'Rd', note: 'Cache/Locks' },
      { name: 'Qdrant / VectorDB', mono: 'Qd', note: 'AI RAG' },
      { name: 'TimescaleDB', mono: 'Ts' },
      { name: 'Prisma / Drizzle', mono: 'Or' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    subtitle: 'Orchestration, edge infrastructure & CI/CD',
    skills: [
      { name: 'Kubernetes', mono: 'K8' },
      { name: 'Docker Compose', mono: 'Dk' },
      { name: 'AWS Cloud', mono: 'Aw', note: 'Certified' },
      { name: 'GCP Cloud', mono: 'Gc', note: 'Certified' },
      { name: 'Terraform IaC', mono: 'Tf' },
      { name: 'GitHub Actions', mono: 'Gh' },
      { name: 'Datadog / Prometheus', mono: 'Dd' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Orchestration',
    subtitle: 'Autonomous agents, RAG & LLM pipelines',
    skills: [
      { name: 'LangGraph', mono: 'Lg', note: 'DAG Engine' },
      { name: 'Multi-Agent Teams', mono: 'Ag' },
      { name: 'Semantic RAG', mono: 'Rg' },
      { name: 'OpenAI / Anthropic', mono: 'Ai' },
      { name: 'Vector Quantization', mono: 'Vq' },
      { name: 'Playwright & Vitest', mono: 'Pw' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  TypeScript: ['Nexus AI Studio', 'Hyperion Commerce', 'Chronos Analytics', 'Meta Certified'],
  'Go (Golang)': ['AetherScale (120k events/sec)', 'Enterprise Telemetry Services'],
  Rust: ['AetherScale (SIMD bindings)', 'Chronos Feed Ingestion', 'PulseDB Core'],
  Python: ['Nexus AI Studio', 'FastAPI Microservices', 'DeepLearning.AI'],
  SQL: ['ClickHouse OLAP Ingestion', 'PostgreSQL pgvector', 'Database Indexing'],
  'Next.js App Router': ['Hyperion Commerce (380ms FCP)', 'Nexus AI Studio', 'RSC Streaming'],
  'React 19': ['AetherScale Dashboard', 'Hyperion Commerce', 'Meta Certified'],
  'Tailwind CSS': ['Enterprise Design Systems', 'Cinema-Grade Ergonomics'],
  'Motion / Framer': ['60 FPS Physics', 'Dynamic Billboards', 'Streaming Sequences'],
  'WebGL 2.0': ['Chronos Financial Telemetry (60 FPS)', 'GPU Candlestick Shaders'],
  'Apache Kafka': ['AetherScale Streaming', 'Confluent Certified Developer'],
  'gRPC / Protobuf': ['AetherScale Edge Routing', 'Binary Ingestion Protocol'],
  Microservices: ['Monolith-to-Microservices Migration (-55% latency)', 'Enterprise Systems'],
  PostgreSQL: ['Hyperion Commerce Transactional Core', 'pgvector Semantic Store'],
  'ClickHouse OLAP': ['AetherScale Analytics (500M+ Rows)', 'Real-Time Aggregations'],
  Redis: ['Hyperion Atomic Lua Locks', 'Sub-millisecond Session Cache'],
  'Qdrant / VectorDB': ['Nexus AI Hybrid RAG', 'Sub-20ms Semantic Search'],
  Kubernetes: ['Certified Kubernetes Administrator (CKA)', 'Containerized Squad Deployments'],
  Docker: ['AetherScale Microservices', 'Local Dev Parity'],
  'AWS Cloud': ['AWS Certified Solutions Architect – Professional'],
  'GCP Cloud': ['Google Cloud Certified – Professional Cloud Architect'],
  'Terraform IaC': ['HashiCorp Certified Terraform Associate'],
  LangGraph: ['Nexus AI Studio (Autonomous Agent DAG Orchestrator)'],
  'Multi-Agent Teams': ['DeepLearning.AI Specialization', 'Speculative Execution'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Foundations & Craft',
    period: '2017 – 2020',
    synopsis: 'Building resilient full-stack web applications, database schemas, and robust API contracts from first principles.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Full-Stack Core',
        description: 'Engineered end-to-end web features, from database migrations and transactional schemas to accessible client experiences.',
        tags: ['TypeScript', 'Node.js', 'PostgreSQL'],
        runtime: '2017 – 2018',
        palette: amberPalette,
      },
      {
        code: 'S01 E02',
        title: 'Query Optimization',
        description: 'Optimized complex SQL queries and implemented strategic Redis caching, cutting average page load times by 60%.',
        tags: ['Redis', 'Query Tuning', 'PostgreSQL'],
        runtime: '2018 – 2019',
        palette: oceanPalette,
      },
      {
        code: 'S01 E03',
        title: 'Secure Gateways',
        description: 'Integrated secure payment gateways, OAuth2 authentication, and resilient webhook event handlers.',
        tags: ['OAuth2', 'Fintech', 'REST'],
        runtime: '2019 – 2020',
        palette: violetPalette,
      },
    ],
  },
  {
    number: 2,
    title: 'Scale & Leadership',
    period: '2020 – 2023',
    synopsis: 'Leading technical squads, scaling distributed APIs to 40M daily requests, and engineering zero-defect CI/CD pipelines.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Team Lead',
        description: 'Led a distributed engineering team developing customer-facing web platforms and interactive analytics cockpits.',
        tags: ['Squad Lead', 'React', 'TypeScript'],
        runtime: '2020 – 2021',
        palette: oceanPalette,
      },
      {
        code: 'S02 E02',
        title: '40M Daily Requests',
        description: 'Architected enterprise GraphQL and REST API layers handling over 40 million daily requests with sub-50ms response times.',
        tags: ['GraphQL', 'REST', 'High Concurrency'],
        runtime: '2021 – 2022',
        palette: crimsonPalette,
      },
      {
        code: 'S02 E03',
        title: 'Zero-Defect CI/CD',
        description: 'Pioneered automated end-to-end testing pipelines and cloud deployment automation that cut escape defects by 40%.',
        tags: ['Docker', 'GCP', 'CI/CD'],
        runtime: '2022 – 2023',
        palette: emeraldPalette,
      },
    ],
  },
  {
    number: 3,
    title: 'Principal Architecture',
    period: '2023 – 2025',
    synopsis: 'Directing architectural strategy, cloud resilience, and spearheading the migration to event-driven microservices.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Migration',
        description: 'Spearheaded the migration of monolithic services to resilient event-driven microservices, reducing p99 latency by 55%.',
        tags: ['Kafka', 'Microservices', 'Event-Driven'],
        runtime: '2023 – 2024',
        palette: crimsonPalette,
      },
      {
        code: 'S03 E02',
        title: '14-Engineer Squad',
        description: 'Mentored 14 senior engineers, instituting rigorous TypeScript standards, RFC reviews, and automated CI/CD guardrails.',
        tags: ['Mentorship', 'RFCs', 'Architecture'],
        runtime: '2024',
        palette: violetPalette,
      },
      {
        code: 'S03 E03',
        title: '99.99% Availability',
        description: 'Engineered real-time telemetry and streaming architectures supporting millions of concurrent interactions with 99.99% uptime.',
        tags: ['Kubernetes', 'AWS', 'Telemetry'],
        runtime: '2024 – 2025',
        palette: emeraldPalette,
      },
    ],
  },
  {
    number: 4,
    title: 'Autonomous AI & Originals',
    period: '2025 – 2026',
    synopsis: 'Building production Originals: AetherScale (120k events/sec), Nexus AI Studio (multi-agent DAGs), and PulseDB.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'AetherScale',
        description: 'High-throughput distributed event streaming platform processing 120,000+ events/sec with sub-5ms p99 latency.',
        tags: ['Go', 'Rust', 'Kafka', 'ClickHouse'],
        runtime: 'Original',
        palette: crimsonPalette,
      },
      {
        code: 'S04 E02',
        title: 'Nexus AI Studio',
        description: 'Autonomous multi-agent orchestration workspace enabling complex DAG reasoning and sub-20ms vector retrieval.',
        tags: ['LangGraph', 'Next.js', 'Python'],
        runtime: 'Original',
        palette: amberPalette,
      },
      {
        code: 'S04 E03',
        title: 'PulseDB & Hyperion',
        description: 'Offline embedded vector search engine in WebAssembly alongside sub-400ms global headless commerce.',
        tags: ['Rust', 'WASM', 'Next.js 15'],
        runtime: 'Original',
        palette: oceanPalette,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now Streaming',
    synopsis: 'Next-generation distributed consensus, offline embedded AI agents, and zero-latency spatial web architectures.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Arc',
        description: 'Exploring sovereign distributed edge compute, real-time autonomous agent swarms, and memory-mapped local AI models.',
        tags: ['Edge AI', 'Consensus', 'Spatial Systems'],
        runtime: 'In Production',
        palette: violetPalette,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Top Throughput', title: '120k Events/Sec', detail: 'AetherScale distributed streaming engine • p99 < 4.8ms', palette: crimsonPalette },
  { label: 'AI Original', title: 'Nexus AI Studio', detail: 'Multi-agent DAG reasoning with LangGraph & Qdrant', palette: amberPalette },
  { label: 'Global Edge', title: 'Hyperion Commerce', detail: 'Sub-400ms FCP on global edge • 100/100 Lighthouse', palette: oceanPalette },
  { label: 'Embedded Core', title: 'PulseDB Vector', detail: 'Offline HNSW nearest-neighbor search in WebAssembly', palette: violetPalette },
  { label: 'Telemetry Engine', title: 'Chronos 60 FPS', detail: 'WebGL GPU financial charting • Zero GC memory leaks', palette: emeraldPalette },
  { label: 'Cloud Credential', title: 'AWS Solutions Arch', detail: 'AWS Certified Solutions Architect – Professional', palette: amberPalette },
  { label: 'Cloud Credential', title: 'GCP Cloud Arch', detail: 'Google Cloud Certified – Professional Cloud Architect', palette: oceanPalette },
  { label: 'Infrastructure', title: 'CKA Certified', detail: 'Certified Kubernetes Administrator (Linux Foundation)', palette: emeraldPalette },
  { label: 'Squad Leadership', title: '14 Engineers Led', detail: 'Architectural strategy, RFC governance & mentoring', palette: violetPalette },
  { label: 'Reliability', title: '99.99% Availability', detail: 'Multi-region failover and distributed backpressure', palette: crimsonPalette },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'Ravi Rajan',
    lines: ['Senior Full-Stack Architect & Product Engineer', 'Over a decade of production distributed systems & web platforms'],
    chips: ['Senior Architect', 'Full-Stack Core'],
  },
  {
    kicker: 'Systems',
    title: 'Engineered for Scale',
    lines: ['Go, Rust, TypeScript, Python · Kafka, ClickHouse, PostgreSQL', '120,000+ events/sec with sub-5ms p99 tail latency'],
    chips: ['Go', 'Rust', 'Kafka', 'ClickHouse', 'TypeScript', 'Kubernetes'],
  },
  {
    kicker: 'The Originals',
    title: 'Five Productions',
    lines: [
      'AetherScale — High-throughput distributed event broker',
      'Nexus AI Studio — Autonomous multi-agent DAG orchestrator',
      'Hyperion Commerce — Sub-400ms global edge retail engine',
    ],
  },
  {
    kicker: 'Leadership',
    title: 'Squad & Architecture',
    lines: ['Led cross-functional team of 14 senior engineers', 'Monolith-to-microservices migration reducing p99 latency by 55%'],
  },
  {
    kicker: 'Credentials',
    title: '10+ Verified Certs',
    lines: ['AWS Certified Solutions Architect Professional', 'Google Cloud Certified Professional Cloud Architect', 'Certified Kubernetes Administrator (CKA)'],
  },
  {
    kicker: 'Now Exploring',
    title: 'The Next Arc',
    lines: ['Embedded offline AI vector engines · Distributed consensus · Sovereign cloud infrastructure'],
  },
];

export type ProfileId = 'ravi' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'ravi',
    name: "Ravi's Cut",
    blurb: 'The director’s cut — full series in narrative order',
    color: '#935073',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Talent Scout',
    blurb: 'Fast track — resume, achievements & verified skills first',
    color: '#C48CB3',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Systems Architect',
    blurb: 'Deep technical — architecture, originals & code first',
    color: '#B2668F',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Design & Vision',
    blurb: 'The journey arc, top picks & cinematic highlights first',
    color: '#F6DBC0',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Ravi', meta: 'The Pilot • Systems Philosophy & Background', palette: violetPalette },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amberPalette },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Distributed & AI`, palette: crimsonPalette },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the career & systems', palette: emeraldPalette },
  skills: { nav: 'Skills', card: 'Skill Universe', meta: `${skillCategories.length} Categories • Verified Evidence`, palette: oceanPalette },
  moments: { nav: 'Moments', card: 'Top Moments', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimsonPalette },
  story: { nav: 'Resume', card: 'The Screenplay', meta: 'Screenplay Resume • View & Download', palette: violetPalette },
};
