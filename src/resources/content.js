import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Michael",
  lastName: "Plymire",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.svg",
  email: "michael.plymire@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Michael, a software engineer passionate about solving complex IT issues. I specialize in building scalable web applications
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Michael is a US-based software engineer with a passion for solving complex IT issues
        and building innovative solutions. He specializes in full-stack development, system architecture,
        and tackling challenging technical problems with creative engineering approaches.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Tech Solutions Inc.",
        timeframe: "2023 - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Led the development of a microservices architecture, improving system scalability by 300% 
            and reducing deployment time by 60%.
          </>,
          <>
            Implemented automated testing pipelines, increasing code coverage to 95% and reducing 
            production bugs by 40%.
          </>,
          <>
            Resolved complex IT infrastructure issues, reducing system downtime by 80% through 
            proactive monitoring and optimization strategies.
          </>,
        ],
        images: [],
      },
      {
        company: "Innovation Labs",
        timeframe: "2021 - 2023",
        role: "Full Stack Developer",
        achievements: [
          <>
            Built and deployed multiple web applications using React, Node.js, and PostgreSQL,
            serving over 10,000 active users.
          </>,
          <>
            Optimized database queries and implemented caching strategies, reducing API response 
            times by 50%.
          </>,
          <>
            Diagnosed and solved complex integration issues between legacy and modern systems,
            ensuring seamless data flow and business continuity.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Self-Directed Learning",
        description: <>Continuous learning through online courses, technical documentation, and hands-on projects in software development.</>,
      },
      {
        name: "Industry Certifications",
        description: <>Pursuing cloud computing and full-stack development certifications to stay current with technology trends.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React & Next.js",
        description: <>Building modern web applications with React ecosystem and Next.js for optimal performance.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.svg",
            alt: "React Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.svg",
            alt: "Next.js Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Node.js & Python",
        description: <>Backend development with Node.js and Python, building robust APIs and microservices.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.svg",
            alt: "Backend Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Database & Cloud",
        description: <>Experience with PostgreSQL, MongoDB, and cloud platforms like AWS and Azure.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about software engineering and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
