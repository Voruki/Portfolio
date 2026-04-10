/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true,
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
    name: "Superhive",
    link: "https://superhivemarket.com/creators/vorky",
    fontAwesomeIcon: "fa-cube", 
    backgroundColor: "#EA7600",
  },
  {
    name: "Fiverr",
    link: "https://www.fiverr.com/vorky_ngoh",
    fontAwesomeIcon: "fa-briefcase",
    backgroundColor: "#1DBF73",
  },
  {
    name: "Gmail",
    link: "mailto:yongming914@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Intralogistics Automation",
      fileName: "image1", 
      skills: [
        "⚙️ Spearheading the first AirRob & T-Sort implementations across Thailand and Malaysia",
        "⚙️ Architecting bespoke solutions delivering the average of 40-60% operational efficiency gains",
        "⚙️ Leading technical lifecycles from site audits to finalized system design architecture",
      ],
      softwareSkills: [
        {
          skillName: "AutoCAD",
          fontAwesomeClassname: "simple-icons:autodesk",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "ZWCAD",
          fontAwesomeClassname: "simple-icons:zig",
          style: { backgroundColor: "transparent", color: "#D00000" },
        },
        {
          skillName: "Internal Simulation Tools",
          fontAwesomeClassname: "simple-icons:analogue",
          style: { backgroundColor: "transparent" },
        }
      ],
    },
    {
      title: "3D Design & Simulation",
      fileName: "image2", 
      skills: [
        "📐 Creating high-fidelity 3D design simulations using Blender and SketchUp",
        "📐 Producing cinematic renderings to secure stakeholder buy-in for large-scale projects",
        "📐 Developing immersive project visualizations for complex automation transitions",
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
      fileName: "image3", 
      skills: [
        "📦 Managing multi-million Ringgit projects from conceptualization to construction",
        "📦 Leveraging stock data analysis to reduce facility processing time by 25%",
        "📦 Bridging global R&D and regional sales to ensure 100% technical feasibility",
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
      fileName: "image4", 
      skills: [
        "🤖 Overseeing technical governance from conceptual BOM to pre-execution infrastructure",
        "🤖 Finalizing Network Topology, Electrical Diagrams, and Technical Agreements for zero-error handovers",
        "🤖 Conducting high-frequency site audits to engineer optimal warehouse design modifications",
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

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      logo_path: "leetcode_logo.png",
      style: { color: "#F79F1B" },
      profileLink: "https://leetcode.com/Voruki/",
    },
    {
      siteName: "IEM Malaysia",
      iconifyClassname: "simple-icons:engineering",
      logo_path: "iem_logo.png",
      style: { color: "#000000" },
      profileLink: "https://www.myiem.org.my/",
    },
    {
      siteName: "CIDB Malaysia",
      iconifyClassname: "simple-icons:construction",
      logo_path: "cidb_logo.png",
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
        "🥇 Achieved First-Class Honours with a CGPA of 3.9/4.0",
        "🥇 Consecutively awarded the Dean’s Honours List for every semester throughout the 4-year tenure, demonstrating sustained academic excellence",
        "🥇 Specialized in mechanical systems and engineering design principles",
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
      title: "Microsoft Project Management",
      subtitle: "Microsoft Professional Certificate",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/professional-cert/GSAW1DOXXU7Y",
      alt_name: "Microsoft",
      color_code: "#00A4EF99",
    },
    {
      title: "IBM Project Manager",
      subtitle: "IBM Professional Certificate",
      logo_path: "ibm_logo.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/professional-cert/OOQRCNJMV7W1",
      alt_name: "IBM",
      color_code: "#F5F7FA99",
    },
    {
      title: "CS50 Introduction to Programming with Python",
      subtitle: "Harvard University",
      logo_path: "harvard_logo.png",
      certificate_link: "https://certificates.cs50.io/5858ed45-fe4c-4932-9edb-afc616c0ca4c.png",
      alt_name: "Harvard University",
      color_code: "#A51C30",
    },
    {
      title: "Android Certified Application Developer",
      subtitle: "Android ATC",
      logo_path: "android_logo.png",
      certificate_link: "https://androidatc.com/_transcript.php",
      alt_name: "Android ATC",
      color_code: "#3DDC8499",
    },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Robotics, Automation & Solutions Design",
  description:
    "I manage the end-to-end technical lifecycle for major intralogistics projects across the APAC region, delivering data-driven efficiency for global clients.",
  header_image_path: "image7.png", 
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
          location: "Singapore",
          description: "Leading automation design & solution deployments in Malaysia, Singapore, Thailand, Vietnam, Indonesia, Australia and New Zealand.",
          color: "#EE2C2C",
        },
        {
          title: "Sr. Solutions Design Engineer",
          company: "LSI Logistics Solutions Integrator",
          company_url: "https://lsi-lsi.com/",
          logo_path: "lsi_logo.png",
          duration: "Sep 2021 - Aug 2025",
          location: "Kuala Lumpur, Malaysia",
          description: "Integrated ASRS and AutoStore systems, achieving a 30% improvement in space utilization for major DC projects",
          color: "#0879bf",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Industrial Projects",
  description:
    "Engineering high-efficiency automation systems for the APAC region. My work focuses on spearheading the technical lifecycle of intralogistics solutions—from conceptual site audits to the deployment of robotic systems like AirRob and T-Sort.",
  avatar_image_path: "image8.png",
};

// CLEANUP: Setting this to empty to remove generic MDP/CNN projects
const projects = {
  data: [],
};

const publicationsHeader = {
  title: "Special Projects",
  description: "A showcase of specialized warehouse design consultations and community-driven engineering initiatives, leveraging high-fidelity 3D simulations and technical throughput modeling. Click the projects listed below for more info!",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "cold-storage-tech-open-day",
      name: "Cold Storage Technology Open Day: Simulation Project",
      createdAt: "2024-07-06T00:00:00Z",
      description: "Delivered technical sessions on CAPEX/OPEX modeling for Tier-1 stakeholders. Developed 3D renderings and simulations to visualize operational flow and pallet capacity.",
      url: "https://drive.google.com/file/d/1OBBWGtfF-LMd24RUzQPVYStHeWudXoWE/view",
    },
    {
      id: "tlfp-warehouse-development",
      name: "The Lost Food Project (TLFP) Central Warehouse Development",
      createdAt: "2023-03-19T00:00:00Z",
      description: "Led 2D & 3D warehouse layout designs and project management for a 10,000+ sq. ft. charity facility. Successfully increased pallet capacity by 300%.",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7103392957772267522/",
    },
    {
      id: "fpsc-thermal-enhancement",
      name: "Thermal Enhancement via Design Optimization (FPSC Research Article)",
      createdAt: "2022-05-01T00:00:00Z",
      description: "Published research on optimizing flat plate solar collectors. Utilized ANSYS Fluent for mathematical modeling, achieving a 79.32% thermal efficiency and 25.68% lower pressure drop compared to conventional models.",
      url: "https://www.linkedin.com/posts/ngohyongming_design-solarenergy-heat-activity-6934755664581816320-_Nrp",
    },
  ],
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vorky.png", 
    description:
      "I am open to technical discussions regarding warehouse automation, intralogistics strategy, and 3D industrial simulations. Connect with me on LinkedIn or reach out via email for regional project collaborations.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Primary Location",
    subtitle: "Kuala Lumpur, Malaysia (Managing SEAO/APAC Region)",
    locality: "Kuala Lumpur",
    country: "Malaysia",
    region: "SEA",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "photo9.png",
    location_map_link: "https://www.google.com/maps/search/Kuala+Lumpur+Malaysia",
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
  projects,
  publicationsHeader,
  publications,
  contactPageData,
};
