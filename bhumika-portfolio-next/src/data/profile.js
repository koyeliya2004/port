export const profileData = {
  name: 'BHUMIKA TEWARI',
  email: 'bhumikatewariit@gmail.com',
  phone: '+91 8420399560',
  location: 'Kolkata, India',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  summary: `Innovative software engineer with hands-on experience in full-stack development, AI/ML systems, data engineering pipelines, cyber security and cloud-based solutions. Proven ability to build scalable, data-driven products using modern frameworks, machine learning models, and enterprise tools. Actively involved in development, teaching and tech — converting real business problems into functioning products. Passionate about building tech products that improve focus, efficiency, and user wellbeing.`,
  skills: [
    { title: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C Programming'] },
    { title: 'Web Development', items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MERN Stack', 'REST APIs', 'JWT Auth', 'WebSockets'] },
    { title: 'AI/ML & LLMs', items: ['LangChain', 'Transformers', 'RAG Systems', 'TensorFlow', 'Llama/GPT/Gemini Models', 'Prompt Engineering', 'Machine Learning', 'Gen AI', 'NLP', 'GAN', 'FAISS', 'ChromaDB'] },
    { title: 'Data Engineering & Analysis', items: ['ETL Pipelines', 'SQL', 'PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Power BI', 'DAX', 'Tableau', 'Apache Airflow', 'Data Modeling', 'Data Lakes and Warehousing', 'Incremental Loads', 'Vector Databases'] },
    { title: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes (Basics)', 'Git/GitHub', 'CI/CD Mindset'] },
    { title: 'Tools & Frameworks', items: ['Flask', 'Redis', 'Prisma', 'Streamlit', 'FastAPI', 'Tailwind CSS', 'Clerk/AuthJS', 'n8n', 'Zapier'] },
    { title: 'Project Management & Collaboration', items: ['Jira', 'Trello', 'Agile Practices', 'Stakeholder Communication'] },
    { title: 'Soft Skills', items: ['Analytical Thinking', 'Product Thinking', 'Technical Mentoring', 'Team Collaboration', 'Detail-Oriented'] }
  ],
  experience: [
    {
      company: 'Wipro Limited (CRS Team)',
      logo: '/logos/wipro.svg',
      role: 'Cybersecurity Intern (CRS Team)',
      duration: 'Jan 2026 – Present',
      bullets: [
        'Assisted the CRS team in implementing security controls aligned with ISO 27001 and NIST frameworks for enterprises.',
        'Conducted risk assessments and control mapping across 10+ domains including IAM, data protection, and incident response.',
        'Supported vulnerability analysis and security monitoring, identifying 20+ potential risks with mitigation recommendations.',
        'Prepared security documentation and compliance artifacts (policies, SOPs, risk registers), improving audit readiness by 30%.'
      ]
    },
    {
      company: 'Stealth Startup (Ed-Tech Platform)',
      logo: '/logos/stealth.svg',
      role: 'MERN Stack and AI Engineer (Teaching Assistant)',
      duration: 'Nov 2025 – Dec 2025',
      bullets: [
        'Mentored 120+ learners in MERN development, simplifying full-stack architecture, debugging workflows.',
        'Resolved 250+ frontend/backend issues and delivered 20+ sessions on APIs, routing, authentication, and schemas.',
        'Developed and trained LLM-powered chat assistants to support student queries, improving explanation accuracy.',
        'Designed AI-driven learning workflows using structured prompts and contextual retrieval to improve chatbot performance.'
      ]
    },
    {
      company: 'Bihar Innovation',
      logo: '/logos/bihar.svg',
      role: 'SDE Intern (Full Stack)',
      duration: 'Feb 2025 – Oct 2025',
      bullets: [
        'Developed 30+ full-stack applications using React.js, Node.js, Express.js, MongoDB, MySQL.',
        'Built 45+ REST APIs improving data flow & response time across multiple feature modules.',
        'Improved query performance by 40–60% with optimized indexing and schema-level refactors.',
        'Integrated AWS/Azure microservices & external API layers enhancing platform reliability.'
      ]
    }
  ],
  projects: [
    {
      title: 'AI-Driven Precision Agriculture Decision Support System',
      image: '/projects/project1.jpg',
      description: `Designed and developed an AI-powered end-to-end decision support platform for precision agriculture, integrating crop
recommendation, fertilizer optimization, disease detection, pest outbreak prediction, and market price forecasting into a
unified system. Designed an end-to-end ML pipeline covering data ingestion, preprocessing, feature engineering, model
training, and inference.
Built and trained machine learning models (Random Forest, XGBoost, Linear Regression) for crop selection, fertilizer
dosage, loan eligibility scoring, and yield-linked decision support using soil, weather, and historical crop datasets.
Implemented CNN-based plant disease detection using image classification models (MobileNet/ResNet), enabling earlystage disease identification and reducing potential crop loss.
Integrated geo-climate data to generate early warning signals for pest outbreaks and crop risks
Developed ETL pipelines for ingesting and preprocessing multi-source structured and unstructured data (soil data, weather
APIs, market prices), ensuring scalable and clean data flow.
Created an interactive farmer dashboard with visual analytics for crop health, weather risks, irrigation planning, and
profitability insights. Built API-based model inference services using Flask/FastAPI to deliver real-time recommendations.
Focused on model generalization, modular design, and scalability across crops and regions.
Tech Stack: Python, Scikit-learn, TensorFlow, CNN, Pandas, NumPy, Flask/FastAPI, SQL/NoSQL, Weather APIs, GIS`,
      bullets: [
        'Designed and developed an AI-powered end-to-end decision support platform for precision agriculture, integrating crop recommendation, fertilizer optimization, disease detection, pest outbreak prediction, and market price forecasting into a unified system. Designed an end-to-end ML pipeline covering data ingestion, preprocessing, feature engineering, model training, and inference.',
        'Built and trained machine learning models (Random Forest, XGBoost, Linear Regression) for crop selection, fertilizer dosage, loan eligibility scoring, and yield-linked decision support using soil, weather, and historical crop datasets.',
        'Implemented CNN-based plant disease detection using image classification models (MobileNet/ResNet), enabling early-stage disease identification and reducing potential crop loss.',
        'Integrated geo-climate data to generate early warning signals for pest outbreaks and crop risks',
        'Developed ETL pipelines for ingesting and preprocessing multi-source structured and unstructured data (soil data, weather APIs, market prices), ensuring scalable and clean data flow.',
        'Created an interactive farmer dashboard with visual analytics for crop health, weather risks, irrigation planning, and profitability insights. Built API-based model inference services using Flask/FastAPI to deliver real-time recommendations.',
        'Focused on model generalization, modular design, and scalability across crops and regions.',
        'Tech Stack: Python, Scikit-learn, TensorFlow, CNN, Pandas, NumPy, Flask/FastAPI, SQL/NoSQL, Weather APIs, GIS'
      ],
      stack: ['Python','Scikit-learn','TensorFlow','CNN','Pandas','NumPy','Flask/FastAPI','SQL/NoSQL','Weather APIs','GIS']
    },
    {
      title: 'Next-Gen Classroom Automation System',
      image: '/projects/project2.jpg',
      description: `Designed and implemented an AI-driven classroom automation platform to support academic integrity, assessment evaluation, and data-driven educator decision-making using LLMs and ML models.`,
      bullets: [
        'Built a scalable plagiarism detection pipeline using FAISS + BM25, enabling semantic and keyword-based similarity analysis across large volumes of PDF and text submissions.',
        'Developed an AI-generated text detection pipeline leveraging NLP preprocessing and transformer-based models to identify machine-generated content in student assignments.',
        'Architected role-based APIs and dashboards for teachers and students with JWT-based authentication, submission tracking, performance analytics, and automated evaluation insights.',
        'Integrated LLM-powered workflows for research paper generation, citation assistance, and exam analytics to surface curriculum trends and learning gaps.',
        'Improved system responsiveness and scalability using Redis caching and asynchronous background workers.',
        'Deployed the application with a cloud-ready architecture following secure authentication and modular service design.'
      ],
      stack: ['Python','FastAPI','Transformers','Next.js','TypeScript','Node.js','PostgreSQL','Redis','LangChain','AWS S3','AWS EC2']
    },
    {
      title: 'Automated ETL Data Engineering Pipeline',
      image: '/projects/project3.jpg',
      description: `Designed and implemented an end-to-end ETL pipeline to ingest, clean, transform, and store large volumes of structured and semi-structured data using AWS Lambda, AWS Glue, and Python.`,
      bullets: [
        'Automated data extraction from multiple sources, performed schema validation, normalization, and data quality checks, and converted raw data into optimized Parquet format for analytics efficiency.',
        'Built a cloud-based data warehouse using Amazon Redshift, enabling fast querying and scalable analytics for business intelligence use cases. Used AWS Athena to run SQL queries on the data lake for validation and analysis.',
        'Developed Power BI dashboards to track KPIs, demand trends, revenue metrics, and operational insights with scheduled refresh and automated reporting.',
        'Improved query performance and storage efficiency through partitioning, indexing strategies, and optimized data modeling.',
        'Implemented event-driven workflows and logging for monitoring pipeline health and failure handling.'
      ],
      stack: ['Python','AWS Lambda','AWS Glue','Athena','Redshift','Parquet','Power BI','SQL','Data Modeling','ETL Pipelines']
    }
  ],
  certifications: [
    'AWS Certified Solutions Architect – Associate (SAA-C03)',
    'Oracle AI Foundations Associate (OCI)',
    'IBM AI Product Management Professional Certificate',
    'Google Cloud GenAI + Responsible AI + Gemini Tooling',
    'Machine Learning Crash Course (MLCC) – Google',
    'Google Analytics Individual Qualification (GA4)',
    'Google Advanced Data Analytics Professional Certificate',
    'SQL for Data Science – University of California',
    'Google Cybersecurity Professional Certificate',
    'Harvard CS50 – Introduction to Computer Science',
    'Cybersecurity Fundamentals — LinkedIn Learning',
    'ISB Executive Education — Investing Fundamentals'
  ],
  education: [
    { degree: 'Bachelor in Information Technology', school: 'RCC Institute of Information Technology, Kolkata', period: 'Aug 2024 – Present' }
  ],
  achievements: [
    'Second Runner-Up, Igniters Tank Competition – engineered a tech-driven solution for an impact challenge.',
    'Top 12 National Finalist, LaunchX at National Business Summit, Jadavpur University.',
    'Cloud & DevOps Associate, Ignite X Club — cloud, containerization & CI/CD basics.',
    'Finalist, Innovate for Impact (Loreto College) – sustainable, tech-enabled Cloud Kitchen business model.',
    'Marketing Team Member, HackInverse – East India’s first theme-based hackathon.',
    'Finalist, Market Maelstrom (ECONOVISION’25) — sustainability-focused market strategy case study.'
  ]
  ,
  virtualSimulations: [
    { category: 'Software & Cloud', companies: ['AWS', 'Walmart', 'Goldman Sachs', 'HPE', 'Accenture', 'AIG', 'Verizon'] },
    { category: 'Data & Analytics', companies: ['Microsoft', 'PwC', 'Tata', 'Quantium', 'British Airways', 'Mastercard'] },
    { category: 'Finance & Consulting', companies: ['JPMorgan', 'Fidelity', 'HP', 'KPMG US', 'HSBC', 'Bank of America', 'BCG'] },
    { category: 'PM & Leadership', companies: ['Siemens', 'CBRE', 'GE', 'NY Jobs CEO Council'] }
  ]
}
