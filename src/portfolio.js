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
  title: "Hi all, I'm Ahmed Tarek",
  subTitle: emoji(
    "AI/ML Engineer with 10+ hands-on projects 🚀 Experienced in building end-to-end machine learning applications, computer vision systems, and deep learning solutions using Python, TensorFlow, and scikit-learn."
  ),
  resumeLink:
    "", // Set to empty to hide the button, or add your resume link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GssHunterAI",
  linkedin: "", // Add your LinkedIn profile URL
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
  title: "What I do",
  subTitle: "EXPERIENCED AI/ML ENGINEER WITH PROVEN PROJECT PORTFOLIO",
  skills: [
    emoji(
      "🤖 Build complete ML applications with Flask web interfaces and real-time prediction APIs"
    ),
    emoji("🧠 Develop advanced deep learning models including GANs, CNNs, and neural networks using TensorFlow/Keras and PyTorch Lightning"),
    emoji(
      "📊 Perform comprehensive data analysis and feature engineering across healthcare, finance, and engineering domains"
    ),
    emoji(
      "� Implement various ML algorithms: SVM, Random Forest, Gradient Boosting, CNNs, and Neural Network Embeddings"
    ),
    emoji(
      "📈 Create interactive visualizations and conduct exploratory data analysis with advanced statistical insights"
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
      skillName: "matplotlib",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "seaborn",
      fontAwesomeClassname: "fas fa-chart-area"
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
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
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
      desc: "Focused on Machine Learning, Artificial Intelligence, and Data Science. Currently building expertise in ML engineering.",
      descBullets: [
        "Studied core AI/ML concepts: supervised/unsupervised learning, neural networks",
        "Completed projects in computer vision, NLP, and predictive analytics",
        "Learning advanced topics: deep learning, reinforcement learning, MLOps"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python Programming", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning (scikit-learn)",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Analysis & Visualization",
      progressPercentage: "85%"
    },
    {
      Stack: "Deep Learning (TensorFlow/Keras)",
      progressPercentage: "80%"
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "75%"
    },
    {
      Stack: "Web Development (Flask)",
      progressPercentage: "70%"
    },
    {
      Stack: "Generative Models (GANs)",
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
      role: "AI/ML Project Developer",
      company: "Personal Portfolio Development",
      companylogo: require("./assets/images/facebookLogo.png"), // Replace with appropriate logo
      date: "2024 – Present",
      desc: "Developed 10+ comprehensive machine learning projects covering the full spectrum from basic algorithms to advanced deep learning applications.",
      descBullets: [
        "Built full-stack ML web applications with Flask for real-time predictions",
        "Implemented computer vision projects using CNNs and TensorFlow/Keras",
        "Created recommendation systems with neural network embeddings",
        "Developed medical prediction systems for healthcare applications",
        "Applied various ML algorithms: SVM, Random Forest, Gradient Boosting, Linear/Logistic Regression"
      ]
    },
    {
      role: "Data Science & Analytics",
      company: "Machine Learning Projects",
      companylogo: require("./assets/images/quoraLogo.png"), // Replace with appropriate logo
      date: "2024 – Ongoing",
      desc: "Specialized in exploratory data analysis, feature engineering, and building predictive models for various domains including finance, healthcare, and engineering."
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
  title: "AI/ML Projects",
  subtitle: "COMPREHENSIVE MACHINE LEARNING PROJECTS FROM BEGINNER TO ADVANCED LEVEL",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // Replace with credit score project image
      projectName: "Credit Score & Default Risk Prediction",
      projectDesc: "Complete ML project with Flask web app for financial risk assessment. Features regression & classification models with API endpoints and real-time predictions.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/GssHunterAI/AI-Projects/tree/main/01_Credit_Score_Prediction"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Replace with diabetes project image
      projectName: "Diabetes Prediction System",
      projectDesc: "Healthcare ML application with dual prediction models and web interface. Analyzes patient health metrics using classification & regression algorithms.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/GssHunterAI/AI-Projects/tree/main/02_Diabetes_Prediction"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // Replace with computer vision project image
      projectName: "Computer Vision: Cup & Pen Classifier",
      projectDesc: "Deep learning computer vision project using CNNs for image classification. Custom dataset with TensorFlow/Keras implementation.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/GssHunterAI/AI-Projects/tree/main/07_Computer_Vision_Cup_Pen_Classifier"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Replace with recommender project image
      projectName: "Movie Recommender System",
      projectDesc: "Advanced deep learning recommendation system with neural network embeddings and collaborative filtering. Built with MovieLens 1M dataset.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/GssHunterAI/AI-Projects/tree/main/10_Movie_Recommender"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // Replace with heart disease project image
      projectName: "Heart Disease Classification",
      projectDesc: "Medical data analysis project for heart disease prediction using classification algorithms. Comprehensive Jupyter notebook analysis with medical insights.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/GssHunterAI/AI-Projects/tree/main/03_Heart_Disease_Classification"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Replace with california housing project image
      projectName: "California Housing EDA",
      projectDesc: "Comprehensive exploratory data analysis with geographical visualization and feature correlation analysis of California housing market data.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/GssHunterAI/AI-Projects/tree/main/04_California_Housing_EDA"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // Replace with GAN project image
      projectName: "Fashion MNIST GAN with PyTorch Lightning",
      projectDesc: "Advanced Generative Adversarial Network for synthetic fashion image generation. Built with PyTorch Lightning, featuring comprehensive analysis of GAN-generated data impact on CNN performance.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/GssHunterAI/We-Training-GAN"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Projects 🏆 "),
  subtitle:
    "Comprehensive AI/ML Project Portfolio - From Fundamentals to Advanced Applications!",

  achievementsCards: [
    {
      title: "10+ Complete ML Projects",
      subtitle:
        "Built a comprehensive collection of machine learning projects covering classification, regression, deep learning, and computer vision applications.",
      image: require("./assets/images/codeInLogo.webp"), // Replace with AI/ML related image
      imageAlt: "ML Projects Collection",
      footerLink: [
        {
          name: "View All Projects",
          url: "https://github.com/GssHunterAI/AI-Projects"
        }
      ]
    },
    {
      title: "Full-Stack ML Applications",
      subtitle:
        "Developed complete web applications with Flask for Credit Score Prediction and Diabetes Prediction, featuring real-time ML predictions and API endpoints.",
      image: require("./assets/images/googleAssistantLogo.webp"), // Replace with web app logo
      imageAlt: "Full-Stack ML Apps",
      footerLink: [
        {
          name: "Credit Score App",
          url: "https://github.com/GssHunterAI/AI-Projects/tree/main/01_Credit_Score_Prediction"
        },
        {
          name: "Diabetes Prediction App",
          url: "https://github.com/GssHunterAI/AI-Projects/tree/main/02_Diabetes_Prediction"
        }
      ]
    },
    {
      title: "Deep Learning & Generative AI",
      subtitle: "Implemented advanced architectures including GANs, CNNs, and neural embeddings using TensorFlow/Keras and PyTorch Lightning for computer vision and generative modeling.",
      image: require("./assets/images/pwaLogo.webp"), // Replace with DL related image
      imageAlt: "Deep Learning Projects",
      footerLink: [
        {name: "Fashion MNIST GAN", url: "https://github.com/GssHunterAI/We-Training-GAN"},
        {name: "Computer Vision Project", url: "https://github.com/GssHunterAI/AI-Projects/tree/main/07_Computer_Vision_Cup_Pen_Classifier"},
        {
          name: "Movie Recommender",
          url: "https://github.com/GssHunterAI/AI-Projects/tree/main/10_Movie_Recommender"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Documenting my AI/ML project journey, sharing insights from building real-world applications, and helping others learn machine learning.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/GssHunterAI/AI-Projects", // Replace with your actual blog links
      title: "Building End-to-End ML Projects: From Data to Deployment",
      description:
        "A comprehensive guide on creating full-stack machine learning applications including Credit Score Prediction and Diabetes Prediction systems with Flask web interfaces."
    },
    {
      url: "https://github.com/GssHunterAI/AI-Projects/tree/main/07_Computer_Vision_Cup_Pen_Classifier", // Replace with your actual blog links
      title: "Computer Vision in Practice: CNN Image Classification Project",
      description:
        "Deep dive into building a custom image classifier using Convolutional Neural Networks, covering data preprocessing, model architecture, and training optimization."
    },
    {
      url: "https://github.com/GssHunterAI/AI-Projects/tree/main/10_Movie_Recommender", // Replace with your actual blog links
      title: "Building Recommendation Systems with Neural Network Embeddings",
      description:
        "Exploring advanced recommendation algorithms using deep learning embeddings and collaborative filtering techniques with the MovieLens dataset."
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
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in collaborating on AI/ML projects or want to discuss machine learning? Let's connect!",
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
