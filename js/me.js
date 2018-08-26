var data = {
  meta:{
    fullName: "Swastik Roy",
    tagLine:"{{Computer Scientist}}",
    about: "Full​ ​Stack​ ​Software​ ​Engineer​​ ​with​​ ​​+2​ ​Years​​ ​​of​ ​Experience.​ ​Hands-on​ ​experience​ ​on​ ​various​ ​End-to-End​ ​Development technologies,​ ​caching​ ​techniques,​ ​latency,​ ​throughput​ ​management​ ​and​ ​code​ ​refactoring.",
    linkedin: "https://www.linkedin.com/in/swastikroy/",
    github: "https://github.com/royswastik/",
    facebook: "https://www.facebook.com/swastik.roy",
    twitter: "",
    gplus: ""
  },
  projects : [
    {
      name: "Labor Room Register",
      time: "Feb 2017 – Apr 2017",
      description: "This application is used at the TSU/ health facilities (Primary Health Centers, Sick Newborn Care Units (SNCUs) etc.), and support existing efforts to manage vLBW(Very Low Birth Weight) babies.",
      bullets: [
          "Managed a team of developers to deliver weekly milestones.",
          "Built android application to allow health workers to track and follow-up on vLBW(Very Low Birth Weight) birth and digitizes current paper-based tracking methods used at the health facilities, including case registry, follow up records etc.",
          "Developed map visualization to monitor survival rate of very low birth weight babies."
      ],
      img: "images/project/labor-room-register.webp",
      jobIndex:0,
      githubUrl: "",
      videoUrl: "",
      viewProjectUrl: "https://play.google.com/store/apps/details?id=com.care.india.vlbw"
    },
    {
      name: "Outbreak Responder",
      time: "Nov 2016 – May 2017",
      description: "The Outbreak Responder is a decision-support and epidemiology platform for use during diarrheal disease outbreaks. The app automates World Health Organization guidelines for how to assess and rehydrate a patient.",
      bullets: [
          "Extended Android application for the medical diagnosis of individuals and to prevent outbreak of communicable diseases.",
      ],
      img: "images/project/outbreak-responder.webp",
      viewProjectUrl: "https://play.google.com/store/apps/details?id=com.stooltool"
    },
    {
      name: "Beehyv.com",
      time: "Nov 2016 – May 2017",
      description: "BeeHyv is an Outsourced Software Product Development (OPD) firm partnering several start-ups and established enterprises across the world in building their software.",
      bullets: [
          "Redesigned​ ​and​ ​optimized​ ​official​ ​website​ ​of​ ​Beehyv​ ​for​ ​search​ ​engines.",
      ],
      img: "images/project/beehyv.svg",
      imgColor: "#EEE",
      viewProjectUrl: "http://www.beehyv.com"
    }
    ,
    {
      name: "Scorenexus",
      time: "",
      description: "Scorenexus is world's biggest online test taking platform used daily by TOEFL test takers. ",
      bullets: [
          "Extended​ ​Scorenexus​ ​website ​using​ ​PHP​ ​Codigniter​ ​framework.",
          "Developed browser checking module for the test using Modernizer.js.",
          "Implemented​ ​in-browser​ ​audio​ ​encoding(mp3, ogg and wav) using libmp3lame.js.",
          "Integrate​ ​payment​ ​gateway​ ​using​ ​Foxycart​ ​framework.",
          "Implemented sidecart functionality to enable users to have rich experience when buying tests on the website",
          "Optimized time to encode mp3 audio from 20 seconds to minimum 0.5 seconds",
          "Implemented user authentication functionality with support of multiple types of users"
      ],
      note: false,
      img: "images/project/scorenexus.png",
      imgColor: "black",
      viewProjectUrl: 'https://scorenexus.com'
    }
    ,
    {
      name: "Munchbot",
      time: "",
      description: "Munchbot is a data extraction tool to extract semi-structured data from web, pdf, doc and docx documents.",
      bullets: [
          "Implemented HTML based approch to extract semi-structured data from web pages using 'HTMLUnit', 'Jsoup' and 'Apache Nutch'.",
          "Improved accuracy of HTML DOM based approach to​extract semi-structured data from web from 51% to 65% by extending with​ ​visual​ ​approach​ ​using​ ​CSSBox​ ​library."
      ],
      img: "images/project/munchbot.png",
      imgColor: "#3961ad",
      note: "Sorry, the project is not in public domain yet. Contact me to know more the project.",
      viewProjectUrl: false
    },
    {
      name: "MayAIHelp",
      time: "",
      description: "MayAIHelp is a Question-Answering system to answer user queries on ecommerce platform.",
      bullets: [
          "Increased accuracy of the software to interpret questions by 18% using Natural Language Processing techniques such as dependency parsing, named entity recognition, relationship extraction; and classifying sentences using Machine Learning.",
          "Programmed​ ​​crawlers​​ ​and​ ​​parsers​​ ​to​ ​extract​ ​text​ ​from​ ​documents(DOC,​ ​PDF)​ ​&​ ​Web​ ​using​ ​Apache​ ​Nutch,​ ​JSoup,​ ​HTMLUnit.",
          "Implemented​ ​ranking​ ​algorithm​ ​to​ ​rank​ ​answer​ ​responses​ ​based​ ​on​ ​the​ ​cosine​ ​similarity​ ​of​ ​their​ ​word​ ​vectors.",
          "Developed web application to debug the platform using Angular 2 framework. Used SockJS and STOMP protocol to send log messages to web app via web sockets; android application to test the platform; and Javascript SDK to integrate the platform to third party websites.",
          "Developed Magento Plugin for Ecommerce magento platforms using Magento Framework in PHP scripting language, and Atlassian Jira Plugin in Java.",
          "Worked in a team to store information extracted from documents into Elasticsearch(a search and analytics engine built on top of Lucene). I was responsible to dynamically generate 'queries' from keywords."
      ],
      img: "images/project/may-ai-help.png",
      imgColor: "#5dab46",
      note: "Sorry, the project is not in public domain yet. Contact me to know more the project.",
      viewProjectUrl: false
    }
    //
    // {
    //   name: "WeCare",
    //   time: "Nov 2016 – May 2017",
    //   description: "The Outbreak Responder is a decision-support and epidemiology platform for use during diarrheal disease outbreaks. There are two components. The first component is a rehydration calculator that automates World Health Organization guidelines for how to assess and rehydrate a patient with diarrheal disease. The calculator is designed to be used in 30 seconds and does not require an account or connectivity.",
    //   bullets: [
    //       "Extended Android application for the medical diagnosis of individuals and to prevent outbreak of communicable diseases.",
    //   ],
    //   img: "images/project/outbreak-responder.webp",
    //   viewProjectUrl: "https://play.google.com/store/apps/details?id=com.stooltool"
    // },
    // {
    //   name: "Tento",
    //   time: "Nov 2016 – May 2017",
    //   description: "The Outbreak Responder is a decision-support and epidemiology platform for use during diarrheal disease outbreaks. There are two components. The first component is a rehydration calculator that automates World Health Organization guidelines for how to assess and rehydrate a patient with diarrheal disease. The calculator is designed to be used in 30 seconds and does not require an account or connectivity.",
    //   bullets: [
    //       "Extended Android application for the medical diagnosis of individuals and to prevent outbreak of communicable diseases.",
    //   ],
    //   img: "images/project/outbreak-responder.webp",
    //   viewProjectUrl: "https://play.google.com/store/apps/details?id=com.stooltool"
    // },
    // {
    //   name: "iQuit",
    //   time: "Nov 2016 – May 2017",
    //   description: "The Outbreak Responder is a decision-support and epidemiology platform for use during diarrheal disease outbreaks. There are two components. The first component is a rehydration calculator that automates World Health Organization guidelines for how to assess and rehydrate a patient with diarrheal disease. The calculator is designed to be used in 30 seconds and does not require an account or connectivity.",
    //   bullets: [
    //       "Extended Android application for the medical diagnosis of individuals and to prevent outbreak of communicable diseases.",
    //   ],
    //   img: "images/project/outbreak-responder.webp",
    //   viewProjectUrl: "https://play.google.com/store/apps/details?id=com.stooltool"
    // }
  ],
  skillsets:[
  {
    name:"Programming​ ​Languages",
    score: 90,
    description: "Java​ ​•​ ​JavaScript​ ​•​ ​C/C++​ ​​ ​•​ ​Python​ ​•​ ​C#"
  },
  {
    name:"Databases",
    score: 60,
    description: " ​​MySQL​ ​•​ ​MongoDB​ ​•​ ​Elasticsearch​ ​•​ ​SQLite"
  },
  {
    name:"Web Development",
    score: 80,
    description: "HTML5​ ​•​ ​CSS/SCSS/LESS​ ​•​ ​Grunt/Gulp​ ​•​ ​Bower​ ​•​ ​JQuery,​ ​Angular,​ ​​ ​React​ ​•​ ​Bootstrap,​ ​​ ​SemanticUI​ ​•​ ​SEO"
  },{
    name:"Mobile Development",
    score: 85,
    description: "Native​ ​Android​ ​•​ ​Ionic(Hybrid)​ ​•​ ​Windows​ ​Phone​ ​•​ ​Desktop"
  },{
    name:"Frameworks",
    score: 60,
    description: "Java​ ​Spring​ ​•​ ​Python​ ​Django​ ​•​ ​PHP​ ​Codigniter​ ​•​ ​NodeJS​ ​•​ ​Apache​ ​Spark​ ​•​ ​Turf​ ​•​ ​Twig​ ​•​ ​SockJS​ ​•​ ​Highcharts"
  },{
    name:"Natural​ ​Language​ ​Processing​",
    score: 30,
    description: " ​​OpenNLP​ ​•​ ​WordNet​ ​•​ ​Word2Vec​ ​IBM​ ​Watson​ ​•​ ​Stanford​ ​CoreNLP"
  }],
  experience: [
    {
      employerName: "GOLDMAN​ ​SACHS",
      jobTitle: "TECHNOLOGY​ ​SUMMER​ ​ANALYST",
      description: "I​ ​was​ ​a​ ​summer​ ​analyst​ ​at​ ​Salt​ ​Lake​ ​City Office.",
      bullets: false,
      dataDate: "May​ ​2018​ ​–​ ​August​ ​2018"
    },
    {
      employerName: "ARIZONA​ ​STATE​ ​UNIVERSITY",
      jobTitle: "GRADUATE​ ​TEACHING​ ​ASSISTANT",
      description: "Teaching​ ​Assistant​ ​for​ ​course​ ​CSE340​ ​“Principles​ ​of​ ​Programming​ ​Languages.",
      bullets: false,
      dataDate: "August​ ​2017​ ​–​ ​December​ ​2017"
    },
    {
      employerName: "BEEHYV​ ​SOFTWARE​ ​SOLUTIONS",
      jobTitle: "Software Developer",
      description: "Beehyv has provided me a plethora of learning opportunities. I have been working as a Full Stack Developer.",
      bullets: "Engineered​ ​end​ ​to​ ​end​ ​modules​ ​for​ ​a​ ​Question-Answering​ ​Platform​ ​used​ ​to​ ​answer​ ​user​ ​queries​ ​on​ ​ecommerce​ ​websites.  \nIncreased accuracy of the software to interpret questions by 18% using​ Natural Language Processing techniques such as dependency​ ​parsing,​ ​named​ ​entity​ ​recognition,​ ​relationship​ ​extraction​ ​and​​ ​​Machine​ ​Learning​​ ​to​ ​classify​ ​questions. \nDeveloped​ ​​crawlers​​ ​and​ ​​parsers​​ ​to​ ​extract​ ​text​ ​from​ ​documents(DOC,​ ​PDF)​ ​&​ ​Web​ ​using​ ​Apache​ ​Nutch,​ ​JSoup,​ ​HTMLUnit. \nImproved accuracy of HTML DOM based approach to ​extract semi-structured data from web by extending with visual approach​ ​using​ ​CSSBox​ ​library,​ ​from​ ​51%​ ​to​ ​65%. \nProgrammed​ ​REST​ ​services​ ​using​​ ​Java​ ​Spring​​ ​Backend​ ​and​ ​​Hibernate​. \nImplemented​ ranking​ ​algorithm​ ​to​ ​rank​ ​answer​ ​responses​ ​based​ ​on​ ​the​ ​cosine​ ​similarity​ ​of​ ​their​ ​word​ ​vectors. \nBuilt​ ​plugins(​Magento,​ ​Jira​ ​&​ ​Standalone​ ​Javascript​ ​SDK​)​ ​to​ ​integrate​ ​the​ ​platform​ ​into​ ​third​ ​party​ ​websites. \nRedesigned​ ​and​ ​optimized​ ​official​ ​website​ ​of​ ​Beehyv​ ​for​ ​search​ ​engines. \nCreated​ ​kiosk​ ​app​ ​to​ ​control​ ​​salad​ ​making​ ​robot​ ​Sally(Chowbotics​ ​Inc.)​ ​using​ ​Android​ ​and​ ​GCode​ ​to​ ​operate​ ​CNC​ ​machine. \nManaged a team of developers, built android application and map visualization to monitor survival of low birth weight babies using​ ​​Highcharts​ ​charting​ ​library​ ​​and​ ​​TurfJS​. ",
      dataDate: "June, 2015 - June, 2017"
    },
    {
      employerName: "SCORENEXUS",
      jobTitle: "WEB​ ​DEVELOPER​ ​&​ ​INDEPENDENT​ ​CONTRACTOR",
      description: "Scorenexus is an online test taking platform used daily by TOEFL test takers.",
      bullets: "Extended​ ​Scorenexus​ ​website ​using​ ​PHP​ ​Codigniter​ ​framework. \nImplemented​ ​in-browser​ ​audio​ ​encoding(mp3, ogg and wav) using libmp3lame.js.\nIntegrate​ ​payment​ ​gateway​ ​using​ ​Foxycart​ ​framework ",
      dataDate: "June​ ​2017​ ​–​ ​August​ ​2017"
    },
    {
      employerName: "SOCIALHOOP​​",
      jobTitle: "SOFTWARE​ ​ENGINEERING​ ​INTERN",
      description: "Worked as a Software Engineer Intern. ",
      bullets: "Implemented real-time chat and notifications for the website using Socket.io and MongoDB NoSQL database.\nDeveloped UI widgets using JQuery, HTML5 and PHP Codigniter Framework",
      dataDate: "May​ ​2014​ ​–​ ​July​ ​2014"
    }
  ],
  education: [
    {
      university_name: "ARIZONA​ ​STATE​ ​UNIVERSITY",
      from: "2017",
      to: "2019",
      degree: "Masters in Computer Engineering",
      graduation_date: "Expected 2019",
      gpa: "3.89/4",
      courseWork: ["Statistical Machine Learning", "Distributed Database Systems", "Data Mining", "Mobile Computing" , "Foundation of Algorithms", "Principles of Programming Languages(Teaching Assistant)"]
    },
    {
      university_name: "INDIAN​ ​INSTITUTE​ ​OF​ ​TECHNOLOGY,​ ​DHANBAD",
      from: "2011",
      to: "2015",
      degree: "Bachelor of Technology",
      graduation_date: "2015",
      gpa: "7.56",
      courseWork: ["Data Structures and Algorithms", "Computer Networks", "Mathematics"]
    }
  ],
  skills: {
    expert: ("Java,Python, Javascript, HTML5, CSS3, SCSS, LESS, NodeJS, Elasticsearch, MongoDB, PHP, MySQL, Angular, VueJS").split(',')
  },
  attributes: [
    "Currently, pursuing Graduate Studies at Arizona State University",
    "Experience with backend frameworks and RESTful API technologies like Java Spring, Jersey REST, Django REST, Express.JS",
    "Experience with frontend web frameworks like Angular, VueJS, React, Twig",
    "Experience with Android app development and cross platform development using Ionic",
    "Experience with Linux , UNIX terminal,  application packaging and development",
    "Think analytically to solve complex problems with most optimized solutions",
    "Encourage teamwork and collaboration"
  ]
}

for(var x in data.projects){
  data.projects[x].detailBox = false;
}
data.projectView = {
  list: true
};
