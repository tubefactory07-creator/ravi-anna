/**
 * ============================================================================
 * CENTRAL PORTFOLIO DATA — RAVIRAJAN P · THE SERIES
 * ============================================================================
 * Single source of truth for the streaming portfolio experience.
 * Authentic professional information for Ravirajan P, Senior Administration
 * Executive & Operations Leader.
 * ============================================================================
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Ravirajan P',
  displayName: 'Ravirajan P',
  firstName: 'RAVIRAJAN',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the start of the opening sequence */
  originalLabel: 'A RAVIRAJAN ORIGINAL',
  role: 'Senior Administration Executive & Operations Specialist',
  tagline: ['Office Administration', 'Enterprise ERP Systems', 'Operations Leadership'],
  intro:
    'Experienced Senior Administration Executive with over 8 years of expertise in office administration, operations coordination, document management, employee support, vendor management, and business process optimization. Proven ability to manage administrative functions efficiently while ensuring compliance with company policies and operational standards.',
  location: 'Chennai, Tamil Nadu, India',
  email: 'rrravideep@gmail.com',
  phone: '+91 88389 65906',
  dob: '03 October 1990',
  languages: ['Tamil', 'English', 'Telugu'],
  experienceYears: '8+ Years',
  keyStrengths: [
    'Office Administration & Operations Management',
    'Vendor Management & Procurement Coordination',
    'Documentation & Record Management',
    'Employee & Stakeholder Coordination',
    'MIS Reporting & Data Management',
    'Process Improvement & Problem Solving',
  ],
  coreSkills: [
    { category: 'ERP Implementation & Support', details: 'End-to-End ERP implementation, requirement gathering, Go-Live and Hypercare' },
    { category: 'Business Development', details: 'Lead Generation, Client Acquisition, Market Research, Sales Strategy, Revenue Growth, Negotiation & Closing Deals' },
    { category: 'Client Relationship Management', details: 'Account Management, Stakeholder Engagement, Customer Retention, CRM Tools (Salesforce), Client Communication' },
    { category: 'Sales & Marketing', details: 'B2B/B2C Sales, Digital Marketing Basics, Proposal Writing, Pitch Presentations, Branding Strategies' },
    { category: 'Administrative Support', details: 'Calendar Management, Meeting Coordination, Travel Arrangements, Office Administration, Document Management' },
    { category: 'Tools & Platforms', details: 'MS Office (Excel, Word, PowerPoint), Google Workspace, CRM Tools, Zoom, Slack' },
    { category: 'Problem Solving & Adaptability', details: 'Decision Making, Conflict Resolution, Quick Learning, Adaptability in Dynamic Environments' },
    { category: 'Time & Task Management', details: 'Scheduling, Multitasking, Prioritization, Deadline Management' },
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/ravi-rajan-19268b73/',
    github: 'https://github.com/tubefactory07-creator/ravi-anna',
    phone: 'tel:+918838965906',
  },
  resumePdf: '/assets/Ravi_Rajan_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.jpg',
    srcSet: '/assets/portrait-420.jpg 420w, /assets/portrait-720.jpg 720w, /assets/portrait-1100.jpg 1100w',
    alt: 'Portrait of Ravirajan P',
  },
  interests: [
    'Office Administration & Operations',
    'ERP Implementation & Hypercare',
    'Vendor Management & Procurement',
    'Executive Calendar & Travel Coordination',
    'MIS Reporting & Data Analytics',
    'SOP Documentation & Compliance',
  ],
};

export const education = [
  {
    school: 'Tamilnadu Open University, Chennai',
    place: 'Chennai, India',
    degree: 'BCA – Computer Science',
    period: '2006 – 2009',
    score: 'Bachelor of Computer Applications',
  },
];

export const experience = [
  {
    company: 'SPDS Group of Companies',
    role: 'Senior Administration Executive',
    place: 'Chennai, India',
    period: 'Dec 2021 — Present',
    points: [
      'Oversaw daily administrative operations to ensure smooth and efficient business functioning.',
      'Managed executive calendars, meetings, travel arrangements, and corporate communications.',
      'Supervised office administration activities, records management, and document control processes.',
      'Coordinated with cross-functional departments, vendors, and service providers to support operational requirements.',
      'Developed and implemented administrative policies, procedures, and best practices to improve efficiency.',
      'Monitored office budgets, procurement activities, facility management, and vendor contracts.',
      'Prepared management reports, presentations, MIS reports, and operational dashboards.',
      'Ensured compliance with company policies, regulatory requirements, and documentation standards.',
      'Led process improvement initiatives to streamline workflows and enhance productivity.',
      'Managed confidential information and supported senior leadership with administrative and operational requirements.',
      'Supervised and mentored administrative staff, ensuring effective task allocation and performance management.',
      'Coordinated organizational events, management meetings, and corporate programs.',
      'Resolved operational issues and escalations while maintaining high service standards.',
      'Collaborated with HR, Finance, and Operations teams to support business objectives and organizational growth.',
    ],
  },
  {
    company: 'SyntLang Pvt. Ltd.',
    role: 'Administration Executive',
    place: 'Chennai, India',
    period: 'March 2018 — November 2021',
    points: [
      'Managed day-to-day office administration and ensured smooth operational workflow.',
      'Maintained office records, databases, confidential documents, and administrative reports.',
      'Coordinated meetings, executive calendars, travel arrangements, and business correspondence.',
      'Collaborated with vendors, service providers, and internal departments to support business operations.',
      'Assisted HR and Finance teams with documentation, record management, and compliance activities.',
      'Gathered and documented business requirements for ERP implementation and process improvement initiatives.',
      'Coordinated with stakeholders, end users, and ERP vendors throughout implementation projects.',
      'Supported ERP configuration, data migration, system testing, UAT, and Go-Live activities.',
      'Developed user manuals, SOPs, and conducted end-user training programs.',
      'Provided post-implementation support, troubleshooting, and issue resolution for ERP users.',
      'Generated MIS reports, dashboards, and business analytics while ensuring data accuracy and integrity.',
      'Monitored ERP system performance, supported integrations, and recommended process optimization initiatives.',
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
    id: 'apex-erp',
    title: 'ApexERP Rollout',
    year: '2021',
    genre: 'Enterprise ERP Implementation • Requirement Gathering • Go-Live & Hypercare',
    logline:
      'Full lifecycle enterprise ERP deployment across cross-functional departments with user requirement gathering, UAT testing, data migration, and zero-downtime Go-Live.',
    stack: ['ERP Systems', 'UAT Testing', 'Data Migration', 'SOP Design', 'Change Management'],
    build: [
      'Gathered and structured comprehensive cross-departmental business requirements for enterprise ERP implementation and process improvements.',
      'Coordinated seamlessly with senior stakeholders, functional end-users, and external ERP vendors throughout implementation cycles.',
      'Supported system configuration, data migration, system testing, user acceptance testing (UAT), and seamless Go-Live execution.',
      'Authored comprehensive user manuals, developed SOPs, and spearheaded interactive end-user training programs with post-launch hypercare.',
    ],
    features: [
      'End-to-End ERP implementation lifecycle management',
      'Cross-departmental requirement gathering & gap analysis',
      'Data migration verification & UAT test governance',
      'Hypercare support, issue troubleshooting & user enablement',
      'Post-implementation performance audits & optimization',
    ],
    metrics: [
      { value: '100%', label: 'on-schedule Go-Live' },
      { value: '50+', label: 'end users trained' },
      { value: '0', label: 'critical data discrepancies' },
      { value: '30%', label: 'workflow efficiency gain' },
      { value: '100%', label: 'SOP compliance' },
    ],
    github: 'https://github.com/tubefactory07-creator/ravi-anna',
    palette: crimsonPalette,
    motif: 'stream',
  },
  {
    id: 'operations-hub',
    title: 'Operations Hub',
    year: '2024',
    genre: 'Facilities Management • Vendor Procurement • Multi-Department Coordination',
    logline:
      'Centralized administrative infrastructure supervising daily office operations, facility management, vendor contracts, budgets, and executive leadership coordination.',
    stack: ['Vendor Contracts', 'Procurement', 'Facility Ops', 'Executive Support', 'Budget Tracking'],
    build: [
      'Oversaw daily administrative operations across corporate facilities to guarantee seamless business functioning and optimal workplace productivity.',
      'Managed executive calendars, board meetings, international travel logistics, and high-priority corporate communications.',
      'Monitored office budgets, procurement activities, facility maintenance, and strategic vendor contract negotiations.',
      'Supervised and mentored administrative support staff, ensuring disciplined task allocation, accountability, and professional growth.',
    ],
    features: [
      'Executive schedule & VIP travel logistics management',
      'Vendor contract bidding, SLA monitoring & procurement',
      'Facility upkeep, health & safety, and regulatory compliance',
      'Administrative staff supervision & professional enablement',
      'Escalation resolution with zero disruption to daily business',
    ],
    metrics: [
      { value: '14+', label: 'departments coordinated' },
      { value: '15%', label: 'vendor cost optimization' },
      { value: '99.9%', label: 'operational compliance' },
      { value: '8+ Yrs', label: 'executive leadership' },
      { value: '100%', label: 'audit pass rate' },
    ],
    github: 'https://github.com/tubefactory07-creator/ravi-anna',
    palette: amberPalette,
    motif: 'agents',
  },
  {
    id: 'intelli-mis',
    title: 'IntelliMIS Analytics',
    year: '2023',
    genre: 'Business Analytics • MIS Reporting • Leadership Presentations',
    logline:
      'Automated management information systems and cross-departmental dashboards delivering high-accuracy operational insights to senior leadership.',
    stack: ['MS Excel Advanced', 'MIS Reporting', 'Executive Dashboards', 'PowerPoint', 'Business Analytics'],
    build: [
      'Architected weekly, monthly, and quarterly MIS reports consolidating administrative, procurement, and facility operational data.',
      'Constructed visual performance dashboards delivering real-time clarity into budget burn, vendor deliveries, and operational metrics.',
      'Collaborated directly with HR, Finance, and Operations executives to translate raw departmental data into strategic growth insights.',
      'Enforced rigorous data verification protocols to ensure complete report accuracy, integrity, and timely board dissemination.',
    ],
    features: [
      'Executive dashboard suite with automated KPIs',
      'Budget variance tracking & expense forecasting',
      'Cross-departmental data reconciliation with HR & Finance',
      'High-impact presentation decks for C-level leadership',
      'Standardized data hygiene & reporting cadences',
    ],
    metrics: [
      { value: '40%', label: 'faster report compilation' },
      { value: '100%', label: 'reporting data accuracy' },
      { value: '50+', label: 'MIS dashboards published' },
      { value: '3', label: 'key departments integrated' },
      { value: '24h', label: 'turnaround for executive requests' },
    ],
    github: 'https://github.com/tubefactory07-creator/ravi-anna',
    palette: oceanPalette,
    motif: 'telemetry',
  },
  {
    id: 'crm-growth',
    title: 'CRM Growth Engine',
    year: '2022',
    genre: 'Client Relationship Management • Salesforce CRM • Business Development',
    logline:
      'Structured client acquisition and retention pipeline coordinating lead generation, account management, proposal writing, and stakeholder engagement.',
    stack: ['Salesforce CRM', 'Account Management', 'Client Engagement', 'Proposal Writing', 'B2B Strategy'],
    build: [
      'Structured client communication pipelines using Salesforce CRM, ensuring systematic follow-ups and strong customer retention.',
      'Supported business development initiatives through comprehensive market research, lead qualification, and strategic proposal crafting.',
      'Coordinated pitch presentations and client alignment sessions to drive revenue growth and contract closures.',
      'Fostered deep stakeholder relationships across enterprise partner networks, accelerating cross-sell opportunities.',
    ],
    features: [
      'Salesforce CRM pipeline structuring & hygiene',
      'B2B & B2C client communication protocols',
      'Targeted proposal writing & pitch presentation design',
      'Stakeholder escalation management & service standards',
      'Cross-departmental collaboration for client fulfillment',
    ],
    metrics: [
      { value: '25%', label: 'client retention boost' },
      { value: '100+', label: 'stakeholder accounts nurtured' },
      { value: '98%', label: 'on-time proposal submissions' },
      { value: 'B2B/B2C', label: 'client coverage' },
      { value: 'Top Tier', label: 'service quality rating' },
    ],
    github: 'https://github.com/tubefactory07-creator/ravi-anna',
    palette: emeraldPalette,
    motif: 'edge',
  },
  {
    id: 'standard-ops',
    title: 'StandardOps Framework',
    year: '2023',
    genre: 'Process Improvement • SOP Documentation • Regulatory Compliance',
    logline:
      'Enterprise standard operating procedure architecture establishing document control, confidential record governance, and employee onboarding standards.',
    stack: ['SOP Documentation', 'Document Control', 'Regulatory Compliance', 'Policy Manuals', 'Staff Enablement'],
    build: [
      'Developed and implemented administrative policies, protocols, and standard operating procedures (SOPs) across departments.',
      'Supervised records management and document control processes, ensuring compliance with regulatory bodies and company standards.',
      'Designed structured employee onboarding procedures, administrative induction decks, and office logistics toolkits.',
      'Led ongoing process improvement retrospectives to identify operational bottlenecks and eliminate administrative friction.',
    ],
    features: [
      'Comprehensive SOP library covering all office functions',
      'Secure document classification & confidential archive control',
      'Audit-ready record retention systems',
      'Cross-functional process mapping & waste elimination',
      'Continuous staff enablement & compliance training',
    ],
    metrics: [
      { value: '100%', label: 'audit compliance' },
      { value: '35%', label: 'faster document turnaround' },
      { value: '15+', label: 'enterprise SOPs authored' },
      { value: 'Zero', label: 'compliance violations' },
      { value: '8+ Yrs', label: 'governance experience' },
    ],
    github: 'https://github.com/tubefactory07-creator/ravi-anna',
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
    id: 'office-efficiency',
    title: 'Office Efficiency',
    org: 'Administrative Coordination',
    detail: 'Improved office efficiency through effective administrative coordination.',
    laurel: 'Operational Excellence',
  },
  {
    id: 'streamlined-docs',
    title: 'Documentation & Records',
    org: 'Process Standardization',
    detail: 'Streamlined documentation and record management processes.',
    laurel: 'Information Governance',
  },
  {
    id: 'executive-schedules',
    title: 'Executive Schedules',
    org: 'Corporate Operations',
    detail: 'Successfully managed executive schedules, meetings, and business operations.',
    laurel: 'Executive Trust',
  },
  {
    id: 'workflow-efficiency',
    title: 'Workflow Enhancement',
    org: 'Team Coordination',
    detail: 'Enhanced workflow efficiency through process improvements and team coordination.',
    laurel: 'Process Leadership',
  },
  {
    id: 'policy-compliance',
    title: 'Policy Compliance',
    org: 'Quality & Governance',
    detail: 'Ensured compliance with company policies and maintained operational excellence.',
    laurel: 'Compliance Standards',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Certified', name: 'Forklift Operator (Certified)', link: '#' },
  { issuer: 'In Progress', name: 'Digital Marketing (In Progress)', link: '#' },
  { issuer: 'In Progress', name: 'SEO (In Progress)', link: '#' },
  { issuer: 'Enterprise Systems', name: 'End-to-End ERP Implementation & Hypercare', link: '#' },
  { issuer: 'Analytics', name: 'MIS Reporting, Dashboards & Business Analytics', link: '#' },
  { issuer: 'CRM & Client', name: 'Salesforce CRM & Account Management', link: '#' },
  { issuer: 'Productivity', name: 'MS Office (Excel, Word, PowerPoint) & Google Workspace', link: '#' },
  { issuer: 'Operations', name: 'Executive Calendar, Facilities & Travel Logistics', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'admin',
    title: 'Office & Operations',
    subtitle: 'Executive administration, facilities & procurement',
    skills: [
      { name: 'Office Administration', mono: 'Ad', note: 'Primary' },
      { name: 'Executive Calendar Mgmt', mono: 'Cal' },
      { name: 'Facility Management', mono: 'Fac' },
      { name: 'Vendor Coordination', mono: 'Ven', note: 'Contracts' },
      { name: 'Budget Monitoring', mono: 'Bg' },
      { name: 'Travel Arrangements', mono: 'Tr' },
    ],
  },
  {
    id: 'erp',
    title: 'ERP & Systems',
    subtitle: 'Implementation, hypercare & data migration',
    skills: [
      { name: 'ERP Implementation', mono: 'Erp', note: 'End-to-End' },
      { name: 'Requirement Gathering', mono: 'Req' },
      { name: 'UAT & System Testing', mono: 'Uat' },
      { name: 'Data Migration', mono: 'Mig' },
      { name: 'Hypercare Support', mono: 'Hyp' },
      { name: 'User Manuals & SOPs', mono: 'Sop' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Productivity, CRM & enterprise platforms',
    skills: [
      { name: 'MS Excel (Advanced)', mono: 'Xl', note: 'MIS' },
      { name: 'MS Word & PowerPoint', mono: 'Off' },
      { name: 'Google Workspace', mono: 'Gws' },
      { name: 'Salesforce CRM', mono: 'Crm' },
      { name: 'Zoom & Slack', mono: 'Zs' },
      { name: 'Database Management', mono: 'Db' },
    ],
  },
  {
    id: 'bizdev',
    title: 'Client & Business Dev',
    subtitle: 'Stakeholder relations & commercial growth',
    skills: [
      { name: 'Client Relationships', mono: 'Cr', note: 'Retention' },
      { name: 'Stakeholder Engagement', mono: 'Stk' },
      { name: 'Lead Generation', mono: 'Ld' },
      { name: 'Proposal Writing', mono: 'Prp' },
      { name: 'Pitch Presentations', mono: 'Ptc' },
      { name: 'Negotiation & Deals', mono: 'Neg' },
    ],
  },
  {
    id: 'analytics',
    title: 'MIS & Compliance',
    subtitle: 'Operational reporting & governance standards',
    skills: [
      { name: 'MIS Reporting', mono: 'Mis', note: 'Analytics' },
      { name: 'Operational Dashboards', mono: 'Dsh' },
      { name: 'Process Improvement', mono: 'Prc' },
      { name: 'Document Control', mono: 'Doc' },
      { name: 'Policy Compliance', mono: 'Cmp' },
      { name: 'Records Management', mono: 'Rec' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Office Administration': ['SPDS Group of Companies (2021–Present)', 'SyntLang Pvt. Ltd. (2018–2021)', '8+ Years Overall'],
  'Executive Calendar Mgmt': ['SPDS Senior Leadership Scheduling', 'Corporate Meeting Logistics'],
  'Facility Management': ['SPDS Facility Operations', 'Vendor Contract Management'],
  'Vendor Coordination': ['Procurement Negotiations', 'Service Provider Coordination'],
  'Budget Monitoring': ['Administrative Expense Auditing', 'Facility Budget Controls'],
  'ERP Implementation': ['SyntLang ERP Go-Live Project', 'Cross-Departmental Rollout'],
  'Requirement Gathering': ['ERP Implementation Scoping', 'Process Improvement Initiatives'],
  'UAT & System Testing': ['User Acceptance Testing', 'System Migration Verification'],
  'Hypercare Support': ['SyntLang ERP User Support', 'Troubleshooting & Enablement'],
  'User Manuals & SOPs': ['Corporate SOP Library', 'End-User Training Manuals'],
  'MS Excel (Advanced)': ['MIS Reporting & Pivot Analytics', 'Budget Tracking Spreadsheets'],
  'Salesforce CRM': ['Client Communication Tracking', 'Lead Management & Retention'],
  'Client Relationships': ['Stakeholder Engagement', 'B2B/B2C Communications'],
  'Proposal Writing': ['Business Development Proposals', 'Executive Pitch Presentations'],
  'MIS Reporting': ['Weekly & Monthly Dashboards', 'Leadership Operational Reviews'],
  'Process Improvement': ['Workflow Streamlining', 'Documentation Cycle Reduction'],
  'Policy Compliance': ['Regulatory Standards Auditing', 'Document Control Systems'],
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
    title: 'ERP Deployment & Corporate Administration',
    period: '2018 – 2021',
    synopsis:
      'Managing day-to-day office administration, records control, and driving full-lifecycle ERP implementation from requirements to Go-Live and hypercare at SyntLang Pvt. Ltd.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Office Administration Core',
        description:
          'Managed daily office administration, maintained confidential document registries, and coordinated executive calendars, meetings, and cross-departmental operations.',
        tags: ['Administration', 'Records Mgmt', 'HR Support'],
        runtime: '2018 – 2019',
        palette: amberPalette,
      },
      {
        code: 'S01 E02',
        title: 'ERP Implementation & UAT',
        description:
          'Gathered business requirements, coordinated with stakeholders and ERP vendors, and supported configuration, data migration, and comprehensive UAT testing.',
        tags: ['ERP Rollout', 'Requirement Gathering', 'UAT Testing'],
        runtime: '2019 – 2020',
        palette: oceanPalette,
      },
      {
        code: 'S01 E03',
        title: 'Go-Live & Hypercare Enablement',
        description:
          'Authored detailed user manuals and SOPs, conducted interactive end-user training, and delivered hypercare support and MIS reporting to ensure adoption.',
        tags: ['Go-Live', 'User Training', 'SOPs', 'MIS Reporting'],
        runtime: '2020 – 2021',
        palette: violetPalette,
      },
    ],
  },
  {
    number: 2,
    title: 'Executive Leadership & Facilities Governance',
    period: '2021 – Present',
    synopsis:
      'Directing high-stakes administrative operations, executive calendar management, vendor procurement, and strategic MIS dashboards at SPDS Group of Companies.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Executive Calendar & Operations',
        description:
          'Oversaw daily administrative operations, managing C-level calendars, board meetings, international travel logistics, and high-priority corporate communications.',
        tags: ['Executive Support', 'Travel Logistics', 'Operations'],
        runtime: '2021 – 2022',
        palette: crimsonPalette,
      },
      {
        code: 'S02 E02',
        title: 'Procurement & Facilities Strategy',
        description:
          'Monitored office budgets, procurement activities, facility maintenance, and negotiated strategic vendor contracts, achieving measurable cost optimization.',
        tags: ['Vendor Management', 'Procurement', 'Budgeting'],
        runtime: '2022 – 2024',
        palette: amberPalette,
      },
      {
        code: 'S02 E03',
        title: 'MIS Intelligence & Regulatory Standards',
        description:
          'Prepared executive MIS presentations, operational dashboards, and streamlined workflows while mentoring administrative staff and coordinating corporate events.',
        tags: ['MIS Dashboards', 'Compliance', 'Team Mentorship'],
        runtime: '2024 – Present',
        palette: emeraldPalette,
      },
    ],
  },
  {
    number: 3,
    title: "What's Next",
    period: 'Now Streaming',
    synopsis:
      'Expanding into digital operations, advanced SEO & digital marketing, automated administrative workflows, and enterprise executive leadership.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Digital Operations & Modern Leadership',
        description:
          'Integrating digital marketing fundamentals, SEO growth techniques, and modern cloud collaboration to drive next-generation operational efficiency.',
        tags: ['Digital Marketing', 'SEO', 'Cloud Operations'],
        runtime: 'In Production',
        palette: violetPalette,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    label: 'Executive Role',
    title: 'Senior Administration',
    detail: 'SPDS Group of Companies • Executive calendar & daily ops',
    palette: crimsonPalette,
  },
  {
    label: 'Enterprise System',
    title: 'ERP Implementation',
    detail: 'Full lifecycle rollout: requirement gathering, UAT & hypercare',
    palette: amberPalette,
  },
  {
    label: 'Proven Record',
    title: '8+ Years Experience',
    detail: 'Office administration, operations & document governance',
    palette: oceanPalette,
  },
  {
    label: 'Executive Support',
    title: 'Calendar & Travel',
    detail: 'High-stakes C-level calendar, meetings & VIP travel logistics',
    palette: violetPalette,
  },
  {
    label: 'Procurement',
    title: 'Vendor Contracts',
    detail: 'Strategic vendor negotiation, facility maintenance & budgets',
    palette: emeraldPalette,
  },
  {
    label: 'Intelligence',
    title: 'MIS Dashboards',
    detail: 'Consolidated operational reporting & data-backed insights',
    palette: amberPalette,
  },
  {
    label: 'Standardization',
    title: 'SOP Architecture',
    detail: 'Enterprise document control, manuals & statutory compliance',
    palette: oceanPalette,
  },
  {
    label: 'Academic Degree',
    title: 'BCA Computer Science',
    detail: 'Tamilnadu Open University, Chennai • 2006–2009',
    palette: emeraldPalette,
  },
  {
    label: 'Certified Skill',
    title: 'Forklift Operator',
    detail: 'Certified heavy material & warehouse equipment operator',
    palette: violetPalette,
  },
  {
    label: 'Client Growth',
    title: 'Salesforce & CRM',
    detail: 'Stakeholder engagement, lead generation & proposal writing',
    palette: crimsonPalette,
  },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'Ravirajan P',
    lines: [
      'Senior Administration Executive & Operations Leader',
      'Over 8 years of excellence in corporate administration, ERP systems, and operations',
    ],
    chips: ['Senior Administration Executive', 'Operations Specialist'],
  },
  {
    kicker: 'Core Domains',
    title: 'Operational Governance',
    lines: [
      'Office Administration, Facilities & Executive Calendars',
      'End-to-End ERP Implementation, Requirement Gathering & Hypercare',
    ],
    chips: ['ERP Implementation', 'Office Administration', 'Vendor Management', 'MIS Reporting', 'SOPs'],
  },
  {
    kicker: 'The Productions',
    title: 'Five Showcases',
    lines: [
      'ApexERP Rollout — Full lifecycle enterprise ERP deployment',
      'Operations Hub — Executive office, procurement & facilities governance',
      'IntelliMIS Analytics — Automated executive operational dashboards',
    ],
  },
  {
    kicker: 'Leadership',
    title: 'Cross-Functional Impact',
    lines: [
      'Collaborating across HR, Finance, and Operations departments',
      'Managing vendor contracts, budgets, and mentoring administrative staff',
    ],
  },
  {
    kicker: 'Credentials',
    title: 'Verified Education & Certs',
    lines: [
      'BCA in Computer Science — Tamilnadu Open University, Chennai',
      'Certified Forklift Operator · Digital Marketing & SEO (In Progress)',
    ],
  },
  {
    kicker: 'Now Exploring',
    title: 'The Next Arc',
    lines: ['Process automation · Digital marketing & SEO integration · Scalable corporate governance'],
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
    name: "Ravirajan's Cut",
    blurb: 'The director’s cut — executive administration, ERP & operations in narrative order',
    color: '#935073',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Hiring Executive',
    blurb: 'Fast track — resume, achievements & verified operational skills first',
    color: '#C48CB3',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'ERP & Systems',
    blurb: 'Deep systems — ERP implementation, MIS analytics & digital workflows first',
    color: '#B2668F',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Operations & Growth',
    blurb: 'The journey arc, top picks & vendor/facilities highlights first',
    color: '#F6DBC0',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: {
    nav: 'About',
    card: 'About Ravirajan',
    meta: 'The Pilot • Executive Background & Leadership Philosophy',
    palette: violetPalette,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Career Episodes`,
    palette: amberPalette,
  },
  originals: {
    nav: 'Case Studies',
    card: 'Key Productions',
    meta: `${projects.length} Showcases • ERP & Operations Governance`,
    palette: crimsonPalette,
  },
  picks: {
    nav: 'Top Picks',
    card: 'Top Picks',
    meta: 'Top 10 Highlights from the 8+ Year Career',
    palette: emeraldPalette,
  },
  skills: {
    nav: 'Skills',
    card: 'Skill Universe',
    meta: `${skillCategories.length} Categories • Verified Operational Evidence`,
    palette: oceanPalette,
  },
  moments: {
    nav: 'Moments',
    card: 'Top Moments',
    meta: `${achievements.length} Achievements • ${certifications.length} Credentials & Certifications`,
    palette: crimsonPalette,
  },
  story: {
    nav: 'Resume',
    card: 'The Screenplay',
    meta: 'Screenplay Resume • View & Download Official PDF',
    palette: violetPalette,
  },
};
