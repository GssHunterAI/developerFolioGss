/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ahmed Tarek",
  title: "AI/ML Engineer & Data Science Consultant",
  subTitle: emoji(
    "🚀 Transforming Business Challenges into AI-Powered Solutions | Expert in Machine Learning, Deep Learning & Computer Vision | 10+ Production-Ready Projects | Specializing in Healthcare, Finance & Engineering Applications"
  ),
  resumeLink:
    "", // Set to empty to hide the button, or add your resume link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GssHunterAI",
  linkedin: "https://www.linkedin.com/in/ahmedtarek-ai", // Add your LinkedIn profile URL
  gmail: "", // Add your email address
  gitlab: "", // Add your GitLab profile if you have one
  facebook: "", // Add your Facebook profile if you want
  medium: "", // Add your Medium profile if you have one
  stackoverflow: "", // Add your Stack Overflow profile if you have one
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Deliver",
  subTitle: "FULL-STACK AI SOLUTIONS THAT DRIVE BUSINESS VALUE",
  skills: [
    emoji(
      "💼 Deploy production-ready ML applications with intuitive web interfaces that deliver real-time business insights"
    ),
    emoji("🧠 Engineer cutting-edge AI solutions using GANs, CNNs, and advanced neural architectures with TensorFlow/Keras and PyTorch"),
    emoji(
      "📊 Transform complex data into actionable intelligence across healthcare, finance, and engineering sectors"
    ),
    emoji(
      "⚡ Optimize business processes through strategic implementation of ML algorithms: SVM, Random Forest, Gradient Boosting, and Deep Learning"
    ),
    emoji(
      "📈 Deliver compelling data stories through interactive visualizations and comprehensive analytics that drive decision-making"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "n8n",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "automation",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "jupyter",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "numpy",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "opencv",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "keras",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Alexandria Higher Institute of Engineering and Technology",
      logo: require("./assets/images/small-logo.png"), // Replace with your institution logo
      subHeader: "Bachelor's Degree in Computer Engineering",
      duration: "September 2020 - May 2025",
      desc: "Computer Engineering degree with focus on software development and algorithmic problem-solving.",
      descBullets: [
        "Data Structures & Algorithms",
        "Software Engineering & System Design", 
        "Mathematics & Statistical Analysis"
      ]
    }
  ]
};

// Core Technical Proficiencies

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning & AI", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Deep Learning & Neural Networks",
      progressPercentage: "85%"
    },
    {
      Stack: "Workflow Automation & n8n",
      progressPercentage: "92%"
    },
    {
      Stack: "Data Science & Analytics",
      progressPercentage: "88%"
    },
    {
      Stack: "Full-Stack Development",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI/ML Engineer & Consultant",
      company: "Independent Consulting",
      companylogo: require("./assets/images/best-ai-consulting-firms-1.webp"), // AI/ML consulting image
      date: "2024 – Present",
      desc: "Specializing in end-to-end AI/ML solutions, automation workflows, and intelligent system development for businesses and research applications.",
      descBullets: [
        "Developed 15+ production-ready ML models including GANs, CNNs, and recommendation systems",
        "Built automated workflows using n8n for data processing and business automation",
        "Created intelligent automation solutions connecting AI models with business processes",
        "Designed full-stack ML applications with Flask/React for real-time inference",
        "Implemented computer vision solutions for healthcare and industrial applications"
      ]
    },
    {
      role: "Automation Specialist",
      company: "Workflow Development",
      companylogo: require("./assets/images/n8n.jpg"), // n8n automation platform logo
      date: "2024 – Present",
      desc: "Proficient in using n8n's visual workflow builder to create automation solutions, connecting various services and streamlining business processes.",
      descBullets: [
        "Built automated workflows using n8n to connect APIs, databases, and third-party services",
        "Created workflow-based agents for data processing and task automation",
        "Designed automation solutions to streamline repetitive business operations",
        "Integrated AI/ML models with n8n workflows for enhanced processing capabilities",
        "Implemented automated data collection and reporting systems using visual workflows"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured AI/ML Solutions",
  subtitle: "PRODUCTION-READY MACHINE LEARNING APPLICATIONS & INTELLIGENT AUTOMATION SYSTEMS",
  projects: [
    {
      image: require("./assets/images/projects.webp"),
      projectName: "Comprehensive AI/ML Project Suite",
      projectDesc: "End-to-end machine learning solutions covering classification, regression, computer vision, and deep learning. Features 15+ production-ready models with web interfaces and automated deployment pipelines.",
      footerLink: [
        {
          name: "View Portfolio",
          url: "https://github.com/GssHunterAI/AI-Projects"
        }
      ]
    },
    {
      image: require("./assets/images/gan.png"),
      projectName: "Advanced GAN Architecture with PyTorch Lightning",
      projectDesc: "State-of-the-art Generative Adversarial Network for fashion image synthesis. Comprehensive analysis of synthetic data impact on model performance, featuring distributed training and automated hyperparameter optimization.",
      footerLink: [
        {
          name: "View Research",
          url: "https://github.com/GssHunterAI/We-Training-GAN"
        }
      ]
    },
    {
      image: require("./assets/images/n8n.jpg"),
      projectName: "Workflow Automation Solutions",
      projectDesc: "Business process automation using n8n visual workflows. Built solutions for connecting APIs, automating data processing, and integrating AI models with existing business systems for improved efficiency.",
      footerLink: [
        {
          name: "Learn More",
          url: "#contact" // Link to contact section for business inquiries
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Professional Achievements 🏆 "),
  subtitle:
    "Key Milestones in AI/ML Engineering & Intelligent Automation",

  achievementsCards: [
    {
      title: "15+ Production ML Models Deployed",
      subtitle:
        "Successfully developed and deployed machine learning models across various domains including healthcare, finance, and computer vision with real-world business impact.",
      image: require("./assets/images/projects.webp"),
      imageAlt: "ML Production Models",
      footerLink: [
        {
          name: "View Portfolio",
          url: "https://github.com/GssHunterAI/AI-Projects"
        }
      ]
    },
    {
      title: "Advanced GAN Research Implementation",
      subtitle:
        "Pioneered research in Generative Adversarial Networks with comprehensive analysis of synthetic data impact on deep learning model performance using PyTorch Lightning.",
      image: require("./assets/images/gan.png"),
      imageAlt: "GAN Research",
      footerLink: [
        {
          name: "View Research",
          url: "https://github.com/GssHunterAI/We-Training-GAN"
        }
      ]
    },
    {
      title: "Workflow Automation Solutions",
      subtitle:
        "Built workflow automation systems using n8n to streamline business processes, connecting various services and integrating AI models for enhanced functionality.",
      image: require("./assets/images/n8n.jpg"),
      imageAlt: "Automation Solutions",
      footerLink: [
        {
          name: "Contact for Solutions",
          url: "#contact"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Technical Insights & Solutions",
  subtitle:
    "Sharing expertise in AI/ML implementation, automation workflows, and enterprise solutions to help businesses leverage intelligent systems.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/GssHunterAI/AI-Projects",
      title: "Enterprise AI/ML Solutions: From Proof of Concept to Production",
      description:
        "Comprehensive guide on building scalable machine learning systems for business applications, covering model deployment, monitoring, and integration with existing enterprise infrastructure."
    },
    {
      url: "https://github.com/GssHunterAI/We-Training-GAN",
      title: "Advanced Generative AI: Research and Business Applications",
      description:
        "Deep dive into Generative Adversarial Networks implementation and their practical applications in synthetic data generation, data augmentation, and creative AI solutions for enterprises."
    },
    {
      url: "#contact",
      title: "Streamlining Business Processes with n8n Workflow Automation",
      description:
        "A practical guide to using n8n's visual workflow builder for business automation, connecting services, and integrating AI models with existing systems for improved efficiency."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS & PRESENTATIONS",
  subtitle: emoji(
    "SHARING KNOWLEDGE ABOUT AI/ML AND LEARNING FROM THE COMMUNITY 🤖"
  ),

  talks: [
    {
      title: "Introduction to Machine Learning",
      subtitle: "Learning Session - AI/ML Fundamentals",
      slides_url: "", // Add your slides URL when available
      event_url: ""
    },
    {
      title: "Building Your First Neural Network",
      subtitle: "Deep Learning Workshop - From Theory to Implementation",
      slides_url: "", // Add your slides URL when available
      event_url: ""
    }
  ],
  display: false // Set true when you have actual talks to show
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "SHARING INSIGHTS ABOUT AI/ML AND TECH TRENDS",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // Add your podcast links here when available
  ],
  display: false // Set true when you have podcasts to show
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's Build Something Amazing Together 🚀"),
  subtitle:
    "Ready to transform your business with AI? From concept to deployment, I deliver custom machine learning solutions that drive real results. Let's discuss your project!",
  number: "", // Add your phone number if you want to share it
  email_address: "" // Add your email address here
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace with your twitter username without @ when you have one
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set true if you are looking for opportunities in AI/ML field

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
