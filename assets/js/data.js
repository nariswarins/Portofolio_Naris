/**
 * Semua isi portofolio ada di file ini.
 * Untuk menambah/mengubah pengalaman, proyek, atau sertifikat, cukup edit data di bawah.
 */
window.PORTFOLIO = {
  roles: [
    'an AI Engineer',
    'a Machine Learning Enthusiast',
    'an NLP Researcher',
    'a UI/UX Designer',
  ],

  stats: [
    { value: 3.56, decimals: 2, label: 'GPA · Cum Laude' },
    { value: 14, label: 'Certifications' },
    { value: 8, label: 'Work & Study Experiences' },
    { value: 10, prefix: 'Top ', label: 'AI & Cybersecurity Project' },
  ],

  skills: [
    {
      group: 'AI & Data',
      items: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision / OCR', 'Signal Processing', 'Data Analysis', 'Python'],
    },
    {
      group: 'Tools & Platforms',
      items: ['VS Code', 'Google Colab', 'Jupyter Notebook', 'JarvisLabs', 'GitHub', 'VMware', 'TeamViewer', 'Maltego'],
    },
    {
      group: 'Design',
      items: ['Figma', 'Canva', 'Procreate', 'Usability Testing', 'Wireframing'],
    },
    {
      group: 'Documentation',
      items: ['Microsoft Office', 'Google Docs', 'OneNote', 'Mendeley', 'Scientific Writing'],
    },
    {
      group: 'Languages',
      items: ['Indonesian', 'English'],
    },
  ],

  /** category: professional | research | study | organization */
  experiences: [
    {
      category: 'professional',
      org: 'PT LAPI ITB',
      role: 'Programming',
      period: 'Aug 2026 – Present',
      image: 'assets/img/lapi-itb.jpg',
      points: [
        'Contributed to software development activities through programming implementation, system testing, and technical problem-solving.',
        'Improved programming skills through hands-on experience in developing and maintaining technology-based solutions.',
        'Collaborated with project teams to analyze requirements and implement effective programming solutions.',
      ],
    },
    {
      category: 'professional',
      org: 'NAKA',
      role: 'Content Planner',
      period: 'Jun 2025 – Feb 2026',
      points: [
        'Developed content plans and content calendars for social media platforms aligned with brand strategies.',
        'Collaborated with the design team in planning and developing engaging content.',
        'Monitored content performance and provided recommendations for improving content strategies.',
      ],
    },
    {
      category: 'research',
      org: 'Jenderal Achmad Yani University',
      role: 'Research Assistant',
      period: 'Apr 2025 – Nov 2025',
      points: [
        'Supported research activities through data processing and analysis.',
        'Developed and implemented algorithms to support research requirements.',
        'Prepared technical documentation, research reports, and scientific publications.',
      ],
    },
    {
      category: 'professional',
      org: 'Jenderal Achmad Yani University',
      role: 'Laboratory Assistant',
      period: 'Mar 2025 – Jul 2025',
      image: 'assets/img/lab-2.jpg',
      points: [
        'Assisted in organizing and preparing laboratory sessions and learning materials.',
        'Provided technical guidance to students during lab activities, helping them understand programming concepts and system implementation.',
        'Collaborated with lecturers in assessing student competency through practical evaluations and structured feedback.',
      ],
    },
    {
      category: 'professional',
      org: 'Regional Disaster Management Agency of Cimahi City (BPBD)',
      role: 'Web Development',
      period: 'Jul 2024 – Nov 2024',
      image: 'assets/img/bpbd.jpg',
      points: [
        'Developed and optimized a disaster information portal to improve public access to emergency-related information.',
        'Supported the implementation of a chatbot feature to facilitate information delivery and emergency response services.',
        'Contributed to interface design and enhanced user experience (UX) improvements for the website.',
      ],
    },
    {
      category: 'study',
      org: 'Skilvul × Kampus Merdeka',
      role: 'AI & Cybersecurity Independent Study',
      period: 'Feb 2024 – Sep 2024',
      image: 'assets/img/top10-cert.jpg',
      points: [
        'Developed a Machine Learning-based credit card fraud detection system.',
        'Built a handwriting extraction solution for document digitization.',
        'Applied AI, Cybersecurity, and Data Analysis concepts to industry-based case studies — finished as a Top 10 project.',
      ],
    },
    {
      category: 'study',
      org: 'Hacktiv8 × Kampus Merdeka',
      role: 'UI/UX Design Independent Study',
      period: 'Aug 2023 – Jan 2024',
      image: 'assets/img/figma-board.jpg',
      points: [
        'Designed user interface prototypes using Figma based on user requirements.',
        'Conducted usability testing to evaluate the effectiveness and usability of the designs.',
        'Improved design solutions based on evaluation results and user feedback.',
      ],
    },
    {
      category: 'professional',
      org: "Indonesia's Corruption Eradication Commission (KPK)",
      role: 'Administrative Verifier',
      period: 'Nov 2023',
      points: [
        'Verified CPNS candidate documents in accordance with applicable administrative requirements.',
        'Ensured data accuracy and document completeness throughout the verification process.',
        'Identified and minimized data discrepancies to support a smooth selection process.',
      ],
    },
    {
      category: 'organization',
      org: 'Community Service Department · HM KM J IF',
      role: 'Head of Department',
      period: 'Jan 2024 – Mar 2025',
      points: [
        'Led the planning and implementation of technology-based community service programs.',
        'Coordinated with various stakeholders to ensure the successful execution of departmental programs.',
        'Managed and guided team members in carrying out department activities.',
      ],
    },
    {
      category: 'organization',
      org: 'Department of Strategic Studies and Advocacy · HM KM J IF',
      role: 'Staff',
      period: 'Feb 2022 – Dec 2023',
      points: [
        'Participated in strategic studies and analysis of student-related issues.',
        'Supported the implementation of advocacy programs and organizational activities.',
        'Contributed to the development of recommendations and departmental work programs.',
      ],
    },
    {
      category: 'organization',
      org: 'University-Level Introduction to Campus Life',
      role: 'Mentor (2022) · Disciplinary Committee (2023)',
      period: 'Sep 2022 & Sep 2023',
      image: 'assets/img/campus-2.jpg',
      points: [
        'Mentored new students throughout orientation and supported their adaptation to academic and non-academic life.',
        'Served as a liaison between participants and the organizing committee.',
        'Monitored program activities to ensure participants complied with established rules and guidelines.',
      ],
    },
    {
      category: 'organization',
      org: 'Informatics Department New Student Orientation',
      role: 'Secretary (2022) · Disciplinary Committee (2023)',
      period: 'Sep 2022 & Sep 2023',
      points: [
        'Managed event administration, documentation, and archiving for reporting and evaluation.',
        'Developed rules and regulations as guidelines for program implementation.',
        'Collaborated with the committee to maintain discipline and resolve participant-related issues.',
      ],
    },
  ],

  /** tags dipakai untuk filter proyek */
  projects: [
    {
      title: 'Speech Emotion Recognition in Indonesian Conversations (BiLSTM)',
      context: 'PKM-RE 2025 · Team Leader',
      tags: ['AI/ML', 'Research'],
      badge: 'Passed university-level selection',
      image: 'assets/img/pkm-ser.jpg',
      summary: 'Deep Learning model that classifies emotional states in Indonesian conversational audio using Bidirectional LSTM.',
      points: [
        'Led a team developing a Deep Learning model for emotion recognition in Indonesian conversations.',
        'Handled dataset preparation, feature extraction from audio signals, model training, and performance evaluation.',
        'Conducted structured experimentation to improve classification accuracy and model stability.',
        'Prepared research proposals, coordinated implementation, and compiled progress reports — later published in JUTIF.',
      ],
      stack: ['Python', 'BiLSTM', 'Audio Processing', 'SMOTE'],
      links: [{ label: 'Read the paper', url: 'https://jutif.if.unsoed.ac.id/index.php/jurnal/article/view/5183' }],
    },
    {
      title: 'Brain-Computer Interface Using Wavelet Transform and UNETR',
      context: 'PKM-RE 2024 · Team Leader',
      tags: ['AI/ML', 'Research'],
      badge: 'Passed university-level selection',
      image: 'assets/img/pkm-bci.jpg',
      summary: 'EEG signal-based Brain-Computer Interface combining Wavelet Transform features with a U-Net Transformer (UNETR) model.',
      points: [
        'Led the development of a BCI system focused on signal processing and deep learning-based segmentation.',
        'Applied Wavelet Transform for feature extraction from brain signal data and implemented the UNETR architecture.',
        'Managed the research workflow: data preprocessing, model experimentation, evaluation, and technical documentation.',
      ],
      stack: ['Python', 'EEG', 'Wavelet Transform', 'UNETR'],
      links: [],
    },
    {
      title: 'Credit Flash — OCR & Loan Prediction for Banking',
      context: 'Skilvul × Kampus Merdeka · AI & Cybersecurity',
      tags: ['AI/ML'],
      badge: 'Top 10 Project · Finance & Banking',
      image: 'assets/img/skilvul.jpg',
      gallery: ['assets/img/ocr-demo.jpg', 'assets/img/top10-cert.jpg'],
      summary: 'OCR feature and loan prediction model integrated into a bank website to speed up and objectify credit applications.',
      points: [
        'Responsible for the machine learning components: the loan prediction model and the OCR processing pipeline.',
        'Designed and trained the credit scoring model — data preprocessing, feature selection, and evaluation with appropriate metrics.',
        'Designed the document processing workflow, optimized text extraction accuracy, and integrated OCR output with the loan assessment system.',
        'Built with a cross-university team: Pancasila University, Trisakti University, Gadjah Mada University, and STT Terpadu Nurul Fikri.',
      ],
      stack: ['Python', 'Machine Learning', 'OCR', 'Image Processing'],
      links: [{ label: 'View showcase', url: 'https://skilvul.com/showcases/clx5v9fhz0ss401mi96nlz4yw/' }],
    },
    {
      title: 'Credit Card Fraud Detection System',
      context: 'Skilvul × Kampus Merdeka · AI & Cybersecurity',
      tags: ['AI/ML'],
      summary: 'Machine Learning model that detects potentially fraudulent credit card transactions.',
      points: [
        'Performed data preprocessing, exploratory data analysis, and classification model performance evaluation.',
        'Applied Python and Convolutional Neural Network (CNN) techniques to build the fraud detection solution.',
      ],
      stack: ['Python', 'CNN', 'EDA', 'Classification'],
      links: [],
    },
    {
      title: 'Handwritten Extraction System',
      context: 'Skilvul × Kampus Merdeka · AI & Cybersecurity',
      tags: ['AI/ML'],
      image: 'assets/img/ocr-demo.jpg',
      summary: 'Handwriting extraction system that supports document digitization with image processing and OCR.',
      points: [
        'Applied Image Processing and Optical Character Recognition (OCR) to identify information in handwritten documents.',
        'Processed and extracted data automatically to improve document management efficiency.',
      ],
      stack: ['Python', 'OCR', 'Image Processing'],
      links: [],
    },
    {
      title: 'Disaster Information Portal — BPBD Cimahi',
      context: 'Regional Disaster Management Agency of Cimahi City',
      tags: ['Web'],
      image: 'assets/img/bpbd.jpg',
      summary: 'Public disaster information portal with a chatbot feature for emergency information delivery.',
      points: [
        'Developed and optimized the portal to improve public access to emergency-related information.',
        'Supported the implementation of a chatbot for information delivery and emergency response services.',
        'Contributed to interface design and UX improvements.',
      ],
      stack: ['Web Development', 'Chatbot', 'UX'],
      links: [],
    },
    {
      title: 'User-Centered App Prototype',
      context: 'Hacktiv8 × Kampus Merdeka · UI/UX Design',
      tags: ['UI/UX'],
      image: 'assets/img/figma-board.jpg',
      summary: 'User research, user flows, and interactive Figma prototypes refined through usability testing.',
      points: [
        'Conducted user research and translated user requirements into wireframes and interactive prototypes.',
        'Defined user flows, structured information architecture, and kept visual consistency across screens.',
        'Performed usability testing, analyzed feedback, and iteratively refined the design to improve task efficiency.',
      ],
      stack: ['Figma', 'User Research', 'Affinity Mapping', 'Usability Testing'],
      links: [],
    },
  ],

  achievements: [
    'Top 10 AI & Cybersecurity Project (Finance & Banking Category) — IBM SkillsBuild × Skilvul Demo Day 2024',
    'Team Leader of PKM-RE 2024 — "Brain-Computer Interface Using Wavelet Transform and UNETR", selected at the university level',
    'Team Leader of PKM-RE 2025 — "Speech Emotion Recognition in Indonesian Conversations Using BiLSTM", selected at the university level',
    'Graduated Cum Laude — GPA 3.56 / 4.00',
  ],

  certifications: [
    { name: 'Building AI Solutions Using Advanced Algorithms and Open Source Frameworks', issuer: 'IBM', url: 'https://www.credly.com/badges/8269173c-5184-4d67-b734-5d8f01758c66/public_url' },
    { name: 'Building Trustworthy AI Enterprise Solutions', issuer: 'IBM', url: 'https://www.credly.com/badges/053db13e-fd9d-4b6a-b723-4a8ede8c22a3/public_url' },
    { name: 'Enterprise Data Science in Practice', issuer: 'IBM', url: 'https://www.credly.com/badges/6db4bc20-759a-4215-926d-4845b9a77603/public_url' },
    { name: 'Enterprise Security in Practice', issuer: 'IBM', url: 'https://www.credly.com/badges/dde958aa-574f-4cbb-b978-641ab3564f28/public_url' },
    { name: 'Getting Started with Enterprise Data Science', issuer: 'IBM', url: 'https://www.credly.com/badges/d0097d93-e8d3-4c22-b32c-fcb0d211c603/public_url' },
    { name: 'Getting Started with Threat Intelligence and Hunting', issuer: 'IBM', url: 'https://www.credly.com/badges/4f6606f8-9494-426b-928d-b002b821af02/public_url' },
    { name: 'Machine Learning for Data Science Projects', issuer: 'IBM', url: 'https://www.credly.com/badges/c80295f8-638d-4c91-89d9-4b305133dcf0/public_url' },
    { name: 'Getting Started with Enterprise-grade AI', issuer: 'IBM', url: 'https://www.credly.com/badges/d082ea28-67b6-4754-8c90-81c7cc778c9a/public_url' },
    { name: 'Security Operations Center in Practice', issuer: 'IBM', url: 'https://www.credly.com/badges/8a15e967-6902-4fc2-8595-737c13196c02/public_url' },
    { name: 'AI Engineer For Milenial', issuer: 'Komdigi · Digital Talent Scholarship' },
    { name: 'Fundamental Cybersecurity', issuer: 'Komdigi · Digital Talent Scholarship · Google' },
    { name: 'Job Application Essentials', issuer: 'IBM', url: 'https://www.credly.com/badges/1e40e7ba-67c9-43e3-855c-772e3f7cd0e4/public_url' },
    { name: 'Working in a Digital World: Professional Skills', issuer: 'IBM', url: 'https://www.credly.com/badges/b8059b72-5547-4a15-933d-2f28fe4c1952/public_url' },
    { name: 'SKF100: Understanding the OWASP® Top 10 Security Threats', issuer: 'Linux Foundation', url: 'https://www.credly.com/badges/c6435fef-b6c2-4b9f-8176-e16aeafc7cf3/public_url' },
  ],
};
