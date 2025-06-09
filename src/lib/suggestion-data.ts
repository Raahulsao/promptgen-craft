
import { SuggestionData } from '@/types/suggestions';

export const suggestionData: SuggestionData = {
  'Coding/Tech': {
    'Frameworks': [
      'React', 'Next.js', 'Django', 'Flask', 'Express', 'Vue.js', 'Angular', 'Svelte'
    ],
    'Libraries': [
      'Tailwind CSS', 'Axios', 'Redux', 'Chart.js', 'Lodash', 'Moment.js', 'D3.js', 'Three.js'
    ],
    'Databases': [
      'MongoDB', 'PostgreSQL', 'Firebase', 'MySQL', 'Redis', 'Supabase', 'PlanetScale', 'Prisma'
    ],
    'Components': [
      'Card', 'Modal', 'Sidebar', 'Chart', 'File Uploader', 'Form', 'Table', 'Navigation'
    ],
    'Pages': [
      'Dashboard', 'Profile', 'Settings', 'Login', 'Signup', 'Landing', 'About', 'Contact'
    ],
    'Deployment': [
      'Vercel', 'Netlify', 'Firebase', 'AWS', 'Heroku', 'DigitalOcean', 'Railway', 'Render'
    ]
  },
  'Academic/Research': {
    'Document Types': [
      'Research Paper', 'Thesis', 'Survey Report', 'Case Study', 'Literature Review', 'Abstract'
    ],
    'Tools': [
      'LaTeX', 'Overleaf', 'Zotero', 'Mendeley', 'EndNote', 'Google Scholar', 'ResearchGate'
    ],
    'Sections': [
      'Abstract', 'Introduction', 'Literature Review', 'Methodology', 'Results', 'Discussion', 'Conclusion'
    ],
    'Citation Styles': [
      'APA', 'MLA', 'Chicago', 'IEEE', 'Harvard', 'Vancouver', 'ASA', 'APSA'
    ],
    'Resources': [
      'Google Scholar', 'ResearchGate', 'Semantic Scholar', 'JSTOR', 'PubMed', 'arXiv'
    ]
  },
  'Business': {
    'Pages': [
      'About Us', 'Testimonials', 'Team', 'Careers', 'Pricing', 'Services', 'Portfolio', 'Blog'
    ],
    'Components': [
      'Client Logo Strip', 'Case Study Card', 'Stats Counter', 'Testimonial Slider', 'CTA Banner'
    ],
    'Tools': [
      'CRM Integration', 'Stripe', 'Calendly', 'Mailchimp', 'HubSpot', 'Salesforce', 'Slack'
    ],
    'Features': [
      'Contact Form', 'Newsletter Signup', 'Live Chat', 'Booking System', 'Payment Gateway'
    ],
    'Analytics': [
      'Google Analytics', 'Mixpanel', 'Hotjar', 'Amplitude', 'Segment', 'PostHog'
    ]
  },
  'Healthcare': {
    'Pages': [
      'Services', 'Book Appointment', 'Doctors List', 'FAQ', 'Patient Portal', 'Health Tips'
    ],
    'Components': [
      'Patient Card', 'Appointment Scheduler', 'Doctor Bio', 'Health Records', 'Symptom Checker'
    ],
    'Tools': [
      'Health APIs', 'HIPAA Compliance', 'Telemedicine', 'EHR Integration', 'Medical Forms'
    ],
    'Features': [
      'Online Consultation', 'Prescription Management', 'Health Tracking', 'Emergency Contact'
    ],
    'Compliance': [
      'HIPAA', 'GDPR', 'FDA Guidelines', 'Medical Privacy', 'Data Security'
    ]
  },
  'Legal': {
    'Pages': [
      'Case Studies', 'Disclaimer', 'Terms of Service', 'Privacy Policy', 'Consultation Booking'
    ],
    'Components': [
      'Agreement Upload', 'Legal Chat', 'FAQ Accordion', 'Case Timeline', 'Document Viewer'
    ],
    'Compliance': [
      'GDPR', 'CCPA', 'Bar Council', 'Legal Ethics', 'Client Confidentiality'
    ],
    'Features': [
      'Document Management', 'Client Portal', 'Billing System', 'Case Tracking', 'Legal Forms'
    ],
    'Practice Areas': [
      'Corporate Law', 'Family Law', 'Criminal Law', 'Immigration', 'Intellectual Property'
    ]
  }
};

export const categoryThemes = {
  'Coding/Tech': {
    bg: 'bg-blue-50 dark:bg-blue-950/20',
    border: 'border-blue-200 dark:border-blue-800',
    text: 'text-blue-900 dark:text-blue-100',
    accent: 'text-blue-600 dark:text-blue-400',
    chipBg: 'bg-white dark:bg-blue-900/50',
    chipSelected: 'bg-blue-100 dark:bg-blue-800',
    chipBorder: 'border-blue-200 dark:border-blue-700',
    chipSelectedBorder: 'border-blue-300 dark:border-blue-600'
  },
  'Academic/Research': {
    bg: 'bg-purple-50 dark:bg-purple-950/20',
    border: 'border-purple-200 dark:border-purple-800',
    text: 'text-purple-900 dark:text-purple-100',
    accent: 'text-purple-600 dark:text-purple-400',
    chipBg: 'bg-white dark:bg-purple-900/50',
    chipSelected: 'bg-purple-100 dark:bg-purple-800',
    chipBorder: 'border-purple-200 dark:border-purple-700',
    chipSelectedBorder: 'border-purple-300 dark:border-purple-600'
  },
  'Business': {
    bg: 'bg-green-50 dark:bg-green-950/20',
    border: 'border-green-200 dark:border-green-800',
    text: 'text-green-900 dark:text-green-100',
    accent: 'text-green-600 dark:text-green-400',
    chipBg: 'bg-white dark:bg-green-900/50',
    chipSelected: 'bg-green-100 dark:bg-green-800',
    chipBorder: 'border-green-200 dark:border-green-700',
    chipSelectedBorder: 'border-green-300 dark:border-green-600'
  },
  'Healthcare': {
    bg: 'bg-teal-50 dark:bg-teal-950/20',
    border: 'border-teal-200 dark:border-teal-800',
    text: 'text-teal-900 dark:text-teal-100',
    accent: 'text-teal-600 dark:text-teal-400',
    chipBg: 'bg-white dark:bg-teal-900/50',
    chipSelected: 'bg-teal-100 dark:bg-teal-800',
    chipBorder: 'border-teal-200 dark:border-teal-700',
    chipSelectedBorder: 'border-teal-300 dark:border-teal-600'
  },
  'Legal': {
    bg: 'bg-gray-50 dark:bg-gray-950/20',
    border: 'border-gray-200 dark:border-gray-800',
    text: 'text-gray-900 dark:text-gray-100',
    accent: 'text-gray-600 dark:text-gray-400',
    chipBg: 'bg-white dark:bg-gray-900/50',
    chipSelected: 'bg-gray-100 dark:bg-gray-800',
    chipBorder: 'border-gray-200 dark:border-gray-700',
    chipSelectedBorder: 'border-gray-300 dark:border-gray-600'
  }
};
