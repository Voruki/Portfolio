/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yong Ming Ngoh | Professional Portfolio",
  description:
    "APAC Presales Solution Manager and First-Class Mechanical Engineer specializing in warehouse automation and 3D industrial simulations.",
  og: {
    title: "Yong Ming Ngoh Portfolio",
    type: "website",
    url: "https://voruki.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Yong Ming Ngoh",
  logo_name: "YongMing",
  nickname: "Yong Ming",
  subTitle:
    "APAC Presales Solution Manager at Libiao Robotics & First-Class Mechanical Engineer (3.9 CGPA). I architect bespoke automation for SEAO, delivering 40-60% efficiency gains through T-Sort & AirRob systems.",
  resumeLink:
    "https://drive.google.com/file/d/1Wl2DxDzZ2yQiQ_c0S2T6LpCYms2869VN/view",
  portfolio_repository: "https://github.com/Voruki/voruki.github.io",
  githubProfile: "https://github.com/Voruki",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ngohyongming/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Github",
    link: "https://github.com/Voruki",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/voruki_studio/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
  {
    name: "Gmail",
    link: "mailto:yongming914@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  }
];

const skills = {
  data: [
    {
      title: "Intralogistics Automation",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Spearheading the first AirRob & T-Sort implementations across Thailand and Malaysia",
        "⚡ Architecting bespoke solutions delivering average 40-60% operational efficiency gains",
        "⚡ Leading technical lifecycles from site audits to finalized system design architecture",
      ],
      softwareSkills: [
        {
          skillName: "AutoCAD",
          fontAwesomeClassname: "simple-icons:autodesk",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "ZWCAD",
          fontAwesomeClassname: "simple-icons:keras",
          style: { backgroundColor: "white", color: "#D00000" },
        },
        {
          skillName: "Internal Simulation Tools",
          fontAwesomeClassname: "simple-icons:ansys",
          style: { backgroundColor: "transparent" },
        }
      ],
    },
    {
      title: "3D Design & Simulation",
      fileName: "DesignImg",
      skills: [
        "⚡ Creating high-fidelity 3D design simulations using Blender and SketchUp",
        "⚡ Producing cinematic renderings to secure stakeholder buy-in for large-scale projects",
        "⚡ Developing immersive project visualizations for complex automation transitions",
      ],
      softwareSkills: [
        {
          skillName: "Blender",
          fontAwesomeClassname: "simple-icons:blender",
          style: { color: "#F5792A" },
        },
        {
          skillName: "SketchUp",
          fontAwesomeClassname: "simple-icons:sketchup",
          style: { color: "#005F9E" },
        },
        {
          skillName: "DaVinci Resolve",
          fontAwesomeClassname: "simple-icons:davinciresolve",
          style: { color: "#1D2A47" },
        }
      ],
    },
    {
      title: "Strategy & Data Leadership",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Managing multi-million Ringgit projects from conceptualization to construction",
        "⚡ Leveraging stock data analysis to reduce facility processing time by 25%",
        "⚡ Bridging global R&D and regional sales to ensure 100% technical feasibility",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Project",
          fontAwesomeClassname: "simple-icons:microsoftproject",
          style: { color: "#31752f" },
        },
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "simple-icons:googleanalytics",
          style: { color: "#E37400" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: { color: "transparent" },
        },
        {
          skillName: "Office 365",
          fontAwesomeClassname: "simple-icons:microsoftoffice",
          style: { color: "#D83B01" },
        },
      ],
    },
    {
      title: "Industrial Systems Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Overseeing technical governance from conceptual BOM to pre-execution infrastructure",
        "⚡ Finalizing Network Topology, Electrical Diagrams, and Technical Agreements",
        "⚡ Conducting high-frequency site audits to engineer optimal warehouse designs",
      ],
      softwareSkills: [
        {
          skillName: "Mechanical Design",
          fontAwesomeClassname: "simple-icons:blueprint",
          style: { color: "#000000" },
        },
        {
          skillName: "Simulation Tools",
          fontAwesomeClassname: "simple-icons:analogue",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Infrastructure",
          fontAwesomeClassname: "simple-icons:serverfault",
          style: { color: "#FF9900" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "IEM Malaysia",
      iconifyClassname: "simple-icons:engineering",
      style: { color: "#000000" },
      profileLink: "https://www.myiem.org.my/",
    },
    {
      siteName: "CIDB Malaysia",
      iconifyClassname: "simple-icons:construction",
      style: { color: "#009B4D" },
      profileLink: "https://www.cidb.gov.my",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "UCSI University",
      subtitle: "Bachelor of Mechanical Engineering with Honours",
      logo_path: "ucsi_logo.png",
      alt_name: "UCSI",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Achieved First-Class Honours with a CGPA of 3.9/4.0",
        "⚡ Consecutively awarded the Dean’s Honours List for every semester",
        "⚡ Specialized in mechanical systems and engineering design principles",
      ],
      website_link: "https://www.ucsiuniversity.edu.my/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Data Analytics",
      subtitle: "Google Professional Certificate",
      logo_path: "google_logo.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/professional-cert/EW3WGO0X3KHF",
      alt_name: "Google",
      color_code: "#4285F499",
    },
    {
      title: "Google Project Management",
      subtitle: "Google Professional Certificate",
      logo_path: "google_logo.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/professional-cert/KHS5MQHILXM2",
      alt_name: "Google",
      color_code: "#4285F499",
    },
    {
      title: "CS50 Introduction to Programming with Python",
      subtitle: "Harvard University",
      logo_path: "harvard_logo.png",
      certificate_link: "https://certificates.cs50.io/5858ed45-fe4c-4932-9edb-afc616c0ca4c.png",
      alt_name: "Harvard University",
      color_code: "#A51C30",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Robotics, Automation & Solutions Design",
  description: "I manage the end-to-end technical lifecycle for major intralogistics projects across the APAC region.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "APAC Presales Solution Manager",
          company: "Libiao Robotics",
          company_url: "https://libiaorobot.com/en",
          logo_path: "libiao_logo.png",
          duration: "Aug 2025 - Present",
          location: "Kuala Lumpur, Malaysia",
          description: "Leading automation design & solution deployments in Malaysia, Singapore, Thailand, Vietnam, Indonesia, Australia and NZ.",
          color: "#EE2C2C",
        },
        {
          title: "Sr. Solutions Design Engineer",
          company: "LSI Logistics Solutions Integrator",
          company_url: "https://lsi-lsi.com/",
          logo_path: "lsi_logo.png",
          duration: "Sep 2021 - Aug 2025",
          location: "Kuala Lumpur, Malaysia",
          description: "Integrated ASRS and AutoStore systems, achieving a 30% improvement in space utilization.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Industrial Projects",
  description: "Engineering high-efficiency automation systems for the APAC region. Focus on robotic deployments like AirRob and T-Sort.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Special Projects",
  description: "Showcase of specialized warehouse design consultations and community-driven engineering initiatives.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "cold-storage-tech-open-day",
      name: "Cold Storage Technology Open Day: Simulation Project",
      createdAt: "2024-07-06T00:00:00Z",
      description: "Technical sessions on CAPEX/OPEX modeling. Developed 3D renderings to visualize operational flow.",
      url: "https://drive.google.com/file/d/1OBBWGtfF-LMd24RUzQPVYStHeWudXoWE/view",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "your_profile_photo.png",
    description: "I am open to technical discussions regarding warehouse automation and 3D industrial simulations.",
  },
  blogSection: { title: "", subtitle: "", link: "", avatar_image_path: "" },
  addressSection: {
    title: "Primary Location",
    subtitle: "Kuala Lumpur, Malaysia",
    locality: "Kuala Lumpur",
    country: "Malaysia",
    region: "SEA",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/x8TzHEx6Z6hS96Xp8",
  },
  phoneSection: {
    title: "Contact Number",
    subtitle: "+60 16-6903345",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
