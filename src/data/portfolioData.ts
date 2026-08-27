import { Project, ExperienceItem, ExplorationTopic, CommunityInvolvement, EducationItem, CertificationItem, ContactInfo } from '../types';

export const personalInfo = {
  name: 'Anirudh K',
  shortName: 'Anirudh',
  identity: 'Software developer, SWE intern at Brainwired, and builder exploring AI, developer tooling & open-source communities.',
  about: 'Computer Science undergrad at Toc H Institute of Science & Technology (2023–2027) with a focus on Python, software engineering, and machine learning. Currently a Software Engineer Intern at Brainwired, Learning Initiatives Intern at TinkerHub Foundation, and Licensee/Organizer for TEDxTIST.',
  status: 'Building & Exploring',
  location: 'Kochi, Kerala, India',
};

export const experiences: ExperienceItem[] = [
  {
    id: 'brainwired',
    role: 'Software Engineer Intern',
    organization: 'Brainwired (Drakon Innovations)',
    period: 'June 2026 — Present',
    location: 'Kochi, India',
    isCurrent: true,
    description: 'Working on software engineering tasks, backend integrations, and product development.',
  },
  {
    id: 'tinkerhub',
    role: 'Learning Initiatives Intern',
    organization: 'TinkerHub Foundation',
    period: 'September 2024 — Present',
    location: 'Kochi, Kerala',
    isCurrent: true,
    description: 'Organizing practical, community-driven tech learning programs and maker-first workshops for 100+ student developers across Kerala.',
    highlights: [
      'Planning and running hands-on tech learning tracks from scratch.',
      'Coordinating with industry mentors, speakers, and student builder groups.',
    ],
  },
  {
    id: 'ksum-nest',
    role: 'Program Associate — NEST 3.0',
    organization: 'Kerala Startup Mission (KSUM)',
    period: 'October 2024 — December 2025',
    location: 'Kochi, Kerala',
    description: 'Supported flagship startup summits including IEDC Summit ground operations, AI Day by Google logistics, and founder development workshops.',
  },
  {
    id: 'keltron',
    role: 'Data Science & AI Intern',
    organization: 'KELTRON Advanced Studies',
    period: 'June 2024 — July 2024',
    location: 'Kochi, Kerala',
    description: 'Hands-on exploration of Python data pipelines (NumPy, Pandas, Matplotlib), classical ML algorithms, and introductory neural network architectures.',
  },
];

export const projects: Project[] = [
  {
    id: 'sahay-ai',
    title: 'SAHAY AI',
    tagline: 'Neural telephony orchestrator bridging global PSTN to high-end AI',
    description: 'An end-to-end voice-intelligence platform that connects the Public Switched Telephone Network (PSTN) with modern neural stacks. Uses a custom DSP layer to transcode 8kHz narrow-band phone audio into 16kHz streams for regional speech-to-text and real-time generative reasoning on standard button phones without internet or smartphone requirements.',
    tech: ['Python', 'PSTN / Telephony', 'DSP (8kHz→16kHz)', 'Speech-to-Text', 'FastAPI', 'LLM'],
    githubUrl: 'https://github.com/slothrulez/sahay-ai',
    details: [
      'Bypasses smartphone and internet dependency by fielding voice interactions over standard telephone lines.',
      'Custom digital signal processing (DSP) layer upsamples narrow-band 8kHz telephony audio into 16kHz acoustic streams.',
      'Integrates multi-lingual Indian speech recognition (STT) and LLM inference for low-latency bidirectional voice dialogue.',
    ],
    pipelineFile: 'telephony_orchestrator.py',
    pipelineTitle: 'PSTN to Neural Voice Stream',
    pipelineSteps: [
      { step: '1. PSTN Ingress', detail: 'Receives analog phone calls via telephony gateway & establishes duplex audio stream' },
      { step: '2. DSP Transcoding', detail: 'Converts 8kHz G.711 narrow-band stream into 16kHz linear PCM acoustic buffer' },
      { step: '3. Regional STT', detail: 'Transcribes multi-lingual Indian language voice inputs with dialect handling' },
      { step: '4. Neural Reasoning', detail: 'Executes contextual LLM inference & streams synthetic voice responses back to caller' },
    ],
  },
  {
    id: 'mediagent',
    title: 'MediAgent',
    tagline: 'AI medical scribe & consultation-to-EMR clinical assistant',
    description: 'An intelligent medical assistant that listens to patient-doctor consultations, transcribes multi-lingual speech across Indian languages, and automatically converts raw clinical dialogue into standardized Electronic Medical Records (EMRs) with AI-assisted treatment suggestions.',
    tech: ['TypeScript', 'React', 'MediaRecorder API', 'LLM Prompt Pipelines', 'Tailwind CSS'],
    githubUrl: 'https://github.com/slothrulez/mediagent',
    details: [
      'Captures consultation audio directly in-browser using MediaRecorder API or accepts multi-format audio uploads (WAV, MP3, M4A, OGG).',
      'Supports multi-lingual Indian language conversations, isolating symptoms, vitals, history, and physical findings.',
      'Transforms unstructured consultation transcripts into standard subjective/objective EMR formats with diagnosis drafts.',
    ],
    pipelineFile: 'emr_scribe_pipeline.ts',
    pipelineTitle: 'Clinical Scribe & Extraction Flow',
    pipelineSteps: [
      { step: '1. Audio Capture', detail: 'In-browser MediaRecorder stream capture or multi-format audio file ingestion' },
      { step: '2. Multi-lingual STT', detail: 'Acoustic transcription handling mixed regional language consultations' },
      { step: '3. Entity Extraction', detail: 'Isolates symptoms, dosages, vitals, test results, and patient history' },
      { step: '4. EMR Synthesis', detail: 'Generates structured clinical records and physician summaries' },
    ],
  },
  {
    id: 'todo-monitoring-grafana',
    title: 'TODO API Observability Pipeline',
    tagline: 'Flask REST API with Prometheus metrics & custom Grafana dashboards',
    description: 'A containerized backend and observability pipeline featuring a RESTful Flask API backed by MariaDB, instrumented with Prometheus telemetry exporters and a custom 15-panel real-time Grafana dashboard for latency, connection, and throughput monitoring.',
    tech: ['Python', 'Flask', 'Prometheus', 'Grafana', 'MariaDB', 'Docker Compose'],
    githubUrl: 'https://github.com/slothrulez/todo-monitoring-grafana',
    details: [
      'Implements REST endpoints with MariaDB persistence for structured task lifecycle management.',
      'Custom Prometheus metrics collector in metrics.py tracking request latency, endpoint hit rates, and DB connections.',
      'Pre-configured 15-panel Grafana dashboard with Docker Compose multi-service container orchestration.',
    ],
    pipelineFile: 'metrics.py & docker-compose.yml',
    pipelineTitle: 'Telemetry & Monitoring Stack',
    pipelineSteps: [
      { step: '1. Flask REST Endpoints', detail: 'Serves CRUD requests with MariaDB query handlers' },
      { step: '2. Metrics Exporter', detail: 'Captures latency percentiles, error rates & connection counts' },
      { step: '3. Prometheus Scraper', detail: 'Pulls telemetry timeseries on periodic scraping intervals' },
      { step: '4. Grafana Visualizer', detail: 'Renders 15-panel live dashboard for traffic & performance analysis' },
    ],
  },
  {
    id: 'Namma-GPT',
    title: 'Namma GPT',
    tagline: 'Lightweight, containerized Bangalore-inspired chatbot API',
    description: 'A minimal, containerized Flask chatbot API providing location-inspired conversational responses with zero external LLM latency and instant Docker deployment.',
    tech: ['Python', 'Flask', 'Docker', 'REST API'],
    githubUrl: 'https://github.com/slothrulez/Namma-GPT',
    details: [
      'Fast rule-based conversational matcher with Bangalore colloquialisms.',
      'Containerized for instant local execution or lightweight cloud deployment.',
    ],
    pipelineFile: 'app.py & Dockerfile',
    pipelineTitle: 'Chatbot Inference API',
    pipelineSteps: [
      { step: '1. Request Handler', detail: 'Accepts user queries via JSON POST endpoints' },
      { step: '2. Pattern Matcher', detail: 'Processes intent and extracts location context' },
      { step: '3. Response Generator', detail: 'Formulates contextual responses' },
      { step: '4. JSON Dispatcher', detail: 'Returns structured payload with minimal latency' },
    ],
  },
];

export const explorationTopics: ExplorationTopic[] = [
  {
    id: 'ai-harnesses',
    title: 'AI Coding Harnesses & Agents',
    description: 'Studying how coding agents interface with editors and terminal environments. Experimenting with OpenRouter, OpenCode, and Claude Code to evaluate agent loops and tool-calling reliability.',
    tools: ['OpenRouter', 'OpenCode', 'Claude Code'],
  },
  {
    id: 'local-llms',
    title: 'Local LLMs & Inference',
    description: 'Running quantized open models locally using Ollama and llama.cpp. Exploring latency, memory constraints, and practical offline developer utilities.',
    tools: ['Ollama', 'llama.cpp', 'vLLM'],
  },
  {
    id: 'voice-ai-telephony',
    title: 'Voice AI & Telephony Pipelines',
    description: 'Experimenting with real-time audio transcoding (8kHz to 16kHz DSP), low-latency speech-to-text, and PSTN/SIP telephony integrations to connect AI voice assistants with everyday cellular devices.',
    tools: ['Python', 'FastAPI', 'DSP / Audio DSP', 'Whisper / STT'],
  },
  {
    id: 'ui-ux-craft',
    title: 'UI/UX & Design Systems',
    description: 'Refining software interface design: typographic scale, strict spatial math, accessible contrast, and minimalist layouts without decorative bloat.',
    tools: ['Tailwind CSS', 'TypeScript', 'React'],
  },
];

export const communityInvolvements: CommunityInvolvement[] = [
  {
    id: 'tedx-tist',
    organization: 'TEDxTIST',
    role: 'Licensee / Organizer',
    period: 'Sep 2025 – Sep 2026',
    roleDescription: 'Leading the organization of TEDxTIST, overseeing event planning, team coordination, operations, and execution of the independently organized TEDx event.',
  },
  {
    id: 'iedc-tist-ops',
    organization: 'IEDC TIST',
    role: 'Operations Lead',
    period: 'Apr 2025 – Present',
    roleDescription: 'Lead operations for the campus innovation and entrepreneurship community, coordinating events, initiatives, and execution across student teams.',
  },
  {
    id: 'iedc-tist-community',
    organization: 'IEDC TIST',
    role: 'Community Lead',
    period: 'Sep 2024 – Apr 2025',
    roleDescription: 'Built and engaged the student community through initiatives, events, and programs focused on innovation, entrepreneurship, and technology.',
  },
  {
    id: 'tink-her-hack',
    organization: 'Tink-Her-Hack',
    role: 'Mentor',
    period: 'Feb 2025, Feb 2026',
    roleDescription: 'Mentored participants across Tink-Her-Hack 2.0 and 3.0, providing technical guidance and helping teams develop, troubleshoot, and refine their hackathon projects.',
  },
  {
    id: 'iedc-kerala-x-spaces',
    organization: 'IEDC Kerala',
    role: 'Inaugural X Spaces Speaker',
    period: 'Nov 2024',
    roleDescription: "Selected as the inaugural speaker for IEDC Kerala's first official X Space, leading a discussion on pitching, storytelling, presentation, and communicating ideas effectively to founders and student entrepreneurs.",
  },
  {
    id: 'foss-hacks',
    organization: 'FOSS Hacks / MITS FOSS',
    role: 'Coordinator',
    period: '2024',
    roleDescription: 'Coordinated logistics, participant registration, sponsor partnerships, and on-site challenge tracks for FOSS Hacks 2024, a 36-hour hackathon.',
  },
  {
    id: 'elna-ai',
    organization: 'ELNA AI',
    role: 'AI DAO Hackathon Coordinator & Mentor',
    roleDescription: 'Coordinated and mentored participants at an AI DAO hackathon held alongside an ICPCC Meetup, supporting developers building projects in decentralized AI.',
  },
  {
    id: 'gdg-cloud-kochi',
    organization: 'GDG Cloud Kochi',
    role: 'Cloud Community Days 2025 Volunteer',
    period: 'Sep 2025',
    roleDescription: 'Supported Cloud Community Days 2025, contributing to event operations and attendee experience for the local cloud developer community.',
  },
  {
    id: 'gdg-cochin',
    organization: 'GDG Cochin',
    role: 'DevFest 2024 Volunteer',
    roleDescription: 'Supported DevFest 2024, managing attendee registration, check-in operations, and speaker-session logistics.',
  },
];

export const educationList: EducationItem[] = [
  {
    institution: 'Toc H Institute of Science & Technology',
    degree: 'Bachelor of Technology (BTech), Computer Science',
    period: 'August 2023 — April 2027',
    location: 'Kochi, Kerala',
  },
  {
    institution: 'SBOA Public Sr. Sec. School',
    degree: 'Senior Secondary Schooling',
    period: 'Graduated',
    location: 'Ernakulam, Kerala',
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 'gen-ai',
    name: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    field: 'Artificial Intelligence & LLMs',
    skills: ['Large Language Models', 'Generative AI Principles', 'Attention Mechanisms', 'Responsible AI'],
  },
  {
    id: 'cybersecurity',
    name: 'Foundations of Cybersecurity',
    issuer: 'Google',
    field: 'Information Security',
    skills: ['Security Frameworks', 'Threat & Vulnerability Assessment', 'Network Defense', 'SIEM Tools'],
  },
  {
    id: 'seo',
    name: 'Search Engine Optimization (SEO) with Squarespace',
    issuer: 'Coursera / Squarespace',
    field: 'Technical SEO & Web Indexing',
    skills: ['Technical SEO Auditing', 'Information Architecture', 'Metadata Optimization', 'Search Analytics'],
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing Foundations',
    issuer: 'LinkedIn Learning',
    field: 'Product Distribution & Analytics',
    skills: ['Marketing Analytics', 'Conversion Funnels', 'Attribution Modeling', 'Campaign Strategy'],
  },
];

export const contactInfo: ContactInfo = {
  email: 'anirudhksixten@gmail.com',
  github: 'https://github.com/slothrulez',
  linkedin: 'https://www.linkedin.com/in/anirudhwork',
  location: 'Kochi, Kerala, India',
};
