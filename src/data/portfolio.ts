/** All portfolio content is kept here so the presentation stays data-driven. */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Ganja Nilesh',
  displayName: 'Ganja Nilesh',
  firstName: 'NILESH',
  seriesTag: 'THE SERIES',
  originalLabel: 'A NILESH ORIGINAL',
  role: 'AI Engineer · AI Product Analyst',
  tagline: ['AI Engineering', 'Agentic Systems', 'AI Product'],
  intro:
    'AI Engineer and AI Product Analyst building multi-agent systems, multimodal AI workflows and production RAG products. At Kookar AI, shipped workflows across 24 production agents, achieving 90% accuracy while reducing LLM spend by 92%.',
  location: 'Amalapuram, Andhra Pradesh',
  email: 'nilesh30062004@gmail.com',
  phone: '+91-9381541130',
  links: {
    linkedin: 'https://www.linkedin.com/in/nilesh-ganja-020401282',
    github: 'https://github.com/nilesh07g',
    leetcode: 'https://leetcode.com/u/Nilesh_Ganja/',
  },
  resumes: [
    { label: 'AI Engineering', src: '/assets/Nilesh-ai_engineer_resume.pdf', fileName: 'Nilesh_AI_Engineering_Resume.pdf' },
    { label: 'Product', src: '/assets/Nilesh_product_resume.pdf', fileName: 'Nilesh_Product_Resume.pdf' },
  ],
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Nilesh Ganja',
  },
  interests: ['Multi-Agent Systems', 'Generative AI & Agentic AI', 'RAG & LLM Engineering', 'AI Product Development'],
};

export const education = [
  {
    school: 'IIIT Sri City',
    place: 'Sri City, Andhra Pradesh',
    degree: 'B.Tech in Computer Science & Engineering',
    period: 'August 2022 – June 2026',
    score: 'CGPA 8.13 / 10',
  },
];

export const experience = [
  {
    company: 'Kookar AI',
    role: 'AI Product Analyst Intern',
    place: 'Gurugram, India',
    period: 'August 2025 – May 2026',
    points: [
      'Owned product discovery and roadmap prioritization for the Preferences & Memory pod across 3 LLM workflows and 24 production agents; authored PRDs, user stories and acceptance criteria.',
      'Designed and shipped a multi-agent memory system spanning 6 memory types, capturing preferences from onboarding calls and WhatsApp text, audio, images and links.',
      'Built a Customer Approval Agent for meal-plan approval, grocery-cart approval, order placement and wallet-recharge nudges; increased approval and order-completion rates 2× and reduced approval time by 67%.',
      'Managed onboarding for 15+ households, contributing to 10+ D7-to-D14 retention conversions.',
      'Used LangSmith analytics, issue triage, engineering hand-offs and RCA/SOP refinement to reach 90% production accuracy.',
      'Led evaluation-driven migration of 24 agents to lightweight LLMs, reducing LLM spend by 92% while retaining 90% accuracy.',
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
  demo?: string;
  drive?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'geo-auditor',
    title: 'GEO Auditor',
    year: '2026',
    genre: 'AI Search • NLP • API',
    logline: 'An automated Generative Engine Optimization audit API that evaluates website AI-readiness.',
    stack: ['Python', 'FastAPI', 'BeautifulSoup4', 'httpx', 'NLP Heuristics'],
    build: [
      'Built an audit API that evaluates website AI-readiness across four deterministic checks using targeted crawling and content analysis.',
      'Implemented HTTP crawling, HTML/JSON-LD parsing, robots.txt and llms.txt analysis, and NLP heuristics for extractability signals.',
      'Developed a weighted 0–100 readiness score with evidence-backed findings and prioritized remediation plans.',
    ],
    features: ['Four deterministic checks', 'HTML and JSON-LD parsing', 'robots.txt and llms.txt analysis', 'Weighted 0–100 readiness score', 'Prioritized remediation plans'],
    metrics: [{ value: '4', label: 'deterministic checks' }, { value: '0–100', label: 'readiness score' }],
    github: 'https://github.com/nilesh07g/Geo-Auditor',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'multimodal-ai-agent',
    title: 'Multimodal AI Agent',
    year: '2026',
    genre: 'Multimodal AI • Agentic Systems',
    logline: 'A multimodal workflow that processes PDFs, images and audio through a custom agentic orchestrator.',
    stack: ['Python', 'FastAPI', 'Groq Whisper', 'PyMuPDF', 'Tesseract', 'Pydantic', 'Docker'],
    build: [
      'Engineered a custom Clarifier, Planner, Executor and Composer orchestration flow in pure Python, with Pydantic validation and retry logic.',
      'Combined PyMuPDF with Tesseract OCR fallback for scanned PDFs, image text extraction, and Groq Whisper audio transcription.',
      'Built a three-panel interface for extracted content, generated answers and execution-plan traces.',
    ],
    features: ['PDF and image extraction', 'OCR fallback for scanned PDFs', 'Audio transcription', 'Validated agent stages with retries', 'Execution-plan traces'],
    metrics: [{ value: '3', label: 'input modalities' }, { value: '4', label: 'orchestrated agent stages' }],
    github: 'https://github.com/nilesh07g/multimodal-agent',
    demo: 'https://multimodal-agent-w198.onrender.com/',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'askmydocs',
    title: 'AskMyDocs',
    year: '2026',
    genre: 'RAG • Document Q&A',
    logline: 'A chat-with-PDF product that answers natural-language questions with cited page references.',
    stack: ['Python', 'RAG', 'FAISS', 'BM25', 'Cross-Encoder', 'RAGAS', 'LangSmith'],
    build: [
      'Built a production RAG pipeline with hybrid BM25 and dense retrieval, reciprocal-rank fusion, cross-encoder reranking and token streaming.',
      'Used an agentic 8B router with Gemini 2.5 Flash for answers and cited page references.',
      'Instrumented development and production with LangSmith and evaluated retrieval and answer quality using RAGAS.',
    ],
    features: ['PDF upload and question answering', 'Hybrid retrieval with RRF', 'Cross-encoder reranking', 'Streaming answers with cited pages', 'LangSmith and RAGAS evaluation'],
    metrics: [{ value: '1.00', label: 'context recall' }, { value: '0.67', label: 'faithfulness' }, { value: '83%', label: 'page-hit on 10-Q golden set' }],
    github: 'https://github.com/nilesh07g/askmydocs',
    demo: 'https://askmydocs-nilesh.streamlit.app/',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'tenants',
  },
  {
    id: 'font-recognition-cnn',
    title: 'Font Recognition CNN',
    year: '2025',
    genre: 'Deep Learning • Computer Vision',
    logline: 'A LeNet-based CNN for OCR font-style recognition and font-size regression.',
    stack: ['Python', 'Deep Learning', 'CNN', 'LeNet'],
    build: [
      'Built a LeNet convolutional neural network for font recognition.',
      'Reduced overfitting by 20% using early stopping and learning-rate scheduling.',
    ],
    features: ['Font-style classification', 'Font-size regression', 'Early stopping', 'Learning-rate scheduling'],
    metrics: [{ value: '93.3%', label: 'font-style classification' }, { value: '0.03 px', label: 'font-size MAE' }, { value: '95%', label: 'combined accuracy' }],
    github: 'https://github.com/nilesh07g/BTP',
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'book-store-mern',
    title: 'Book Store MERN',
    year: '2025',
    genre: 'Full-Stack • MERN',
    logline: 'A full-stack bookstore with role-based access for users and admins, Firebase authentication, and an inventory dashboard.',
    stack: ['MERN', 'Tailwind CSS', 'Firebase'],
    build: [
      'Developed a full-stack bookstore with role-based access for users and admins using an MVC architecture.',
      'Implemented Firebase email/password and Google OAuth authentication, with complete protection for admin routes.',
      'Designed an admin dashboard to manage inventory and track orders, revenue, and user counts.',
    ],
    features: [
      'Role-based access for users and admins',
      'MVC architecture for modular, maintainable code',
      'Email/password and Google OAuth authentication',
      'Admin dashboard for inventory, orders, revenue, and user counts',
    ],
    metrics: [{ value: '100%', label: 'admin route protection' }, { value: '80%', label: 'improved admin visibility' }],
    github: 'https://github.com/nilesh07g/book-store',
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'breast-cancer-prediction',
    title: 'Breast Cancer Prediction',
    year: 'Jul – Aug 2024',
    genre: 'Machine Learning • Classification',
    logline: 'An SVM-based model that classifies tumors as malignant or benign, with hyperparameters tuned using GridSearchCV.',
    stack: ['Python', 'Machine Learning', 'SVM', 'GridSearchCV'],
    build: [
      'Developed an SVM classifier to distinguish malignant and benign tumors.',
      'Applied feature engineering and hyperparameter tuning with GridSearchCV.',
      'Evaluated results using a confusion matrix and classification report.',
    ],
    features: ['Malignant/benign tumor classification', 'Feature engineering', 'GridSearchCV hyperparameter tuning', 'Confusion matrix and classification report'],
    metrics: [{ value: '91%', label: 'accuracy' }],
    github: 'https://github.com/nilesh07g/Data-Science-2',
    palette: ocean,
    motif: 'shield',
  },
  {
    id: 'climate-change-on-birds',
    title: 'Climate Change on Birds',
    year: 'Nov – Dec 2024',
    genre: 'Machine Learning • Environmental Analysis',
    logline: 'A Random Forest analysis of climate effects across 243 bird families, supporting ecological studies, wildlife conservation, and population forecasting.',
    stack: ['Python', 'Machine Learning', 'Random Forest'],
    build: [
      'Analyzed climate impacts across 243 bird families using a Random Forest model.',
      'Applied the analysis to ecological studies, wildlife conservation, and population forecasting.',
    ],
    features: ['Climate impact analysis across 243 bird families', 'Random Forest modeling', 'Wildlife conservation and population forecasting'],
    metrics: [{ value: '30.11', label: 'MSE' }, { value: '0.86', label: 'R² score' }],
    drive: 'https://drive.google.com/drive/folders/1qaH2eFhESrJb_Xx4aUaYIaIif6j6YQTu',
    palette: jade,
    motif: 'flow',
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
    id: 'tcs-nqt',
    title: '87%',
    org: 'TCS NQT · February 2025',
    detail: 'Scored 87% in the TCS National Qualifier Test.',
    laurel: 'National Qualifier',
  },
  {
    id: 'thrive-hackathon',
    title: 'Top 10',
    org: 'Thrive Digital National Healthcare Hackathon · 2023',
    detail: 'Ranked in the top 10 among 300 teams.',
    laurel: 'National Hackathon',
  },
  {
    id: 'kookar-recommendation',
    title: 'Letter of Recommendation',
    org: 'Kookar AI',
    detail: 'Received a letter of recommendation from Kookar AI.',
    laurel: 'Recognition',
  },
];

export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-llm',
    title: 'AI & LLM',
    subtitle: 'Agentic, multimodal and retrieval systems',
    skills: [
      { name: 'LLMs', mono: 'LL' }, { name: 'GenAI', mono: 'AI' }, { name: 'RAG', mono: 'Rg' },
      { name: 'Agents', mono: 'Ag' }, { name: 'Multimodal AI', mono: 'Mm' }, { name: 'Prompt Engineering', mono: 'PE' },
      { name: 'LLM Evaluation', mono: 'Ev' }, { name: 'LangGraph', mono: 'Lg' }, { name: 'LangChain', mono: 'Lc' },
      { name: 'FAISS', mono: 'Fa' }, { name: 'BM25', mono: 'Bm' }, { name: 'RAGAS', mono: 'Ra' },
      { name: 'LangSmith', mono: 'Ls' }, { name: 'MCP', mono: 'Mc' },
    ],
  },
  {
    id: 'ml',
    title: 'ML & Deep Learning',
    subtitle: 'Models, frameworks and evaluation',
    skills: [
      { name: 'Python', mono: 'Py' }, { name: 'Java', mono: 'Jv' }, { name: 'TensorFlow', mono: 'Tf' }, { name: 'Keras', mono: 'Ke' },
      { name: 'scikit-learn', mono: 'Sk' }, { name: 'CNNs', mono: 'Cn' }, { name: 'Machine Learning', mono: 'ML' },
      { name: 'Deep Learning', mono: 'DL' },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    subtitle: 'Building and operating AI services',
    skills: [
      { name: 'FastAPI', mono: 'Fa' }, { name: 'Pydantic', mono: 'Pd' }, { name: 'Docker', mono: 'Dk' },
      { name: 'pytest', mono: 'Py' }, { name: 'Git', mono: 'Gt' }, { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'product',
    title: 'Product & Agile',
    subtitle: 'Discovery, quality and delivery',
    skills: [
      { name: 'PRDs', mono: 'Pd' }, { name: 'Agent Workflow Design', mono: 'Aw' }, { name: 'RCA', mono: 'Rc' },
      { name: 'SOP Authoring', mono: 'So' }, { name: 'A/B Iteration', mono: 'AB' }, { name: 'Stakeholder Communication', mono: 'Sc' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Core foundations',
    skills: [
      { name: 'Data Structures & Algorithms', mono: 'DS' }, { name: 'Operating Systems', mono: 'OS' }, { name: 'DBMS', mono: 'Db' },
      { name: 'System Design', mono: 'Sd' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['GEO Auditor', 'Multimodal AI Agent', 'AskMyDocs', 'Font Recognition CNN'],
  FastAPI: ['GEO Auditor', 'Multimodal AI Agent'],
  RAG: ['AskMyDocs'],
  FAISS: ['AskMyDocs'],
  BM25: ['AskMyDocs'],
  RAGAS: ['AskMyDocs'],
  LangSmith: ['Kookar AI production workflows', 'AskMyDocs'],
  Docker: ['Multimodal AI Agent'],
  'Multimodal AI': ['Multimodal AI Agent'],
  'Agent Workflow Design': ['Kookar AI production workflows', 'Multimodal AI Agent'],
  'LLM Evaluation': ['Kookar AI production workflows', 'AskMyDocs'],
  CNNs: ['Font Recognition CNN'],
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
    title: 'The Foundations',
    period: '2022 – 2026',
    synopsis: 'Computer Science & Engineering at IIIT Sri City.',
    episodes: [
      { code: 'S01 E01', title: 'The Engineer', description: 'B.Tech in Computer Science & Engineering, IIIT Sri City — CGPA 8.13 / 10.', tags: ['B.Tech', 'Computer Science'], runtime: 'August 2022 – June 2026', palette: ocean },
      { code: 'S01 E02', title: 'The Researcher', description: 'Built a LeNet CNN for font recognition, classification and size regression.', tags: ['CNN', 'Deep Learning'], runtime: '2025', palette: violet },
    ],
  },
  {
    number: 2,
    title: 'Shipping AI Products',
    period: '2025 – 2026',
    synopsis: 'AI product work at Kookar AI across discovery, production workflows and quality improvement.',
    episodes: [
      { code: 'S02 E01', title: 'The Product Analyst', description: 'Owned product discovery, roadmap priorities, PRDs, user stories and acceptance criteria for 3 LLM workflows and 24 production agents.', tags: ['Product Discovery', 'PRDs', 'LLMs'], runtime: 'August 2025 – May 2026', palette: amber },
      { code: 'S02 E02', title: 'The Memory System', description: 'Designed a multi-agent memory system spanning 6 preference and operations memory types.', tags: ['Agents', 'Memory', 'Multimodal'], runtime: 'Kookar AI', palette: jade },
      { code: 'S02 E03', title: 'The Optimizer', description: 'Reduced LLM spend by 92% while maintaining 90% production accuracy.', tags: ['Evaluation', 'RCA', 'Optimization'], runtime: 'Kookar AI', palette: crimson },
    ],
  },
  {
    number: 3,
    title: 'The AI Originals',
    period: '2026',
    synopsis: 'Projects in website AI-readiness, multimodal agents and retrieval-augmented document Q&A.',
    episodes: [
      { code: 'S03 E01', title: 'GEO Auditor', description: 'A four-check audit API with evidence-backed website AI-readiness scoring.', tags: ['Python', 'FastAPI', 'NLP'], runtime: '2026 – Present', palette: ocean },
      { code: 'S03 E02', title: 'Multimodal AI Agent', description: 'A custom agent workflow for PDF, image and audio inputs.', tags: ['Python', 'OCR', 'Whisper'], runtime: 'July – August 2026', palette: violet },
      { code: 'S03 E03', title: 'AskMyDocs', description: 'Hybrid retrieval, reranking and cited answers for PDF questions.', tags: ['RAG', 'FAISS', 'BM25'], runtime: 'May – June 2026', palette: jade },
    ],
  },
  {
    number: 4,
    title: 'The Next Chapter',
    period: 'Now streaming',
    synopsis: 'The engineering and product disciplines behind AI systems that work in production.',
    episodes: [
      { code: 'S04 E01', title: 'Build & Evaluate', description: 'Combining agent design, observability and evaluation to improve production AI quality.', tags: ['AI Engineering', 'Product'], runtime: 'In progress', palette: amber },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Production systems', title: '24 Agents', detail: 'Across three LLM workflows at Kookar AI', palette: ocean },
  { label: 'Cost optimization', title: '−92%', detail: 'LLM spend reduction while retaining 90% accuracy', palette: jade },
  { label: 'Memory architecture', title: '6 Types', detail: 'Customer-side and cook-side memories', palette: violet },
  { label: 'GEO Auditor', title: '0–100', detail: 'Evidence-backed website AI-readiness score', palette: amber },
  { label: 'Multimodal AI', title: '3 Inputs', detail: 'PDFs · Images · Audio', palette: crimson },
  { label: 'AskMyDocs', title: '1.00', detail: 'Context recall on the 10-Q golden set', palette: ocean },
  { label: 'Font Recognition CNN', title: '95%', detail: 'Combined accuracy', palette: violet },
  { label: 'Customer Approval Agent', title: '−67%', detail: 'Approval time reduction', palette: jade },
  { label: 'National qualifier', title: '87%', detail: 'TCS NQT · February 2025', palette: amber },
  { label: 'Healthcare hackathon', title: 'Top 10', detail: 'Among 300 teams · Thrive Digital · 2023', palette: crimson },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  { kicker: 'The Engineer', title: 'AI & Product', lines: ['B.Tech in Computer Science & Engineering', 'IIIT Sri City · CGPA 8.13 / 10'], chips: ['AI Engineer', 'AI Product Analyst'] },
  { kicker: 'Production', title: '24 Agents', lines: ['Three LLM workflows at Kookar AI', '90% production accuracy · 92% lower LLM spend'], chips: ['Memory', 'Evaluation', 'Optimization'] },
  { kicker: 'Originals', title: 'AI in Practice', lines: ['GEO Auditor · Multimodal AI Agent', 'AskMyDocs · Font Recognition CNN'], chips: ['RAG', 'Agents', 'Multimodal'] },
  { kicker: 'Recognition', title: 'Top Moments', lines: ['87% · TCS NQT · February 2025', 'Top 10 of 300 teams · Thrive Digital Hackathon 2023'] },
  { kicker: 'Current mission', title: 'Build with impact', lines: ['AI engineering · Product discovery', 'Reliable systems · Useful experiences'] },
];

export type ProfileId = 'nilesh' | 'recruiter' | 'engineer' | 'product';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  { id: 'nilesh', name: 'Nilesh', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Experience, impact & resume first', color: '#4cc9ff', order: ['story', 'moments', 'about', 'skills', 'originals', 'journey', 'picks'] },
  { id: 'engineer', name: 'AI Engineer', blurb: 'Projects, systems & technical skills first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'product', name: 'Product', blurb: 'Product work, impact & outcomes first', color: '#ffb547', order: ['journey', 'moments', 'picks', 'about', 'originals', 'skills', 'story'] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from my experience', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Highlights`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'AI Engineering & Product resumes', palette: violet },
};
