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
      I occasionally write about software engineering, technology trends, and share insights on 
      building scalable applications and innovative solutions.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mikeknows",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/michaelplymire/",
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
  headline: <>Building innovative software solutions</>,
  featured: {
    display: true,
    title: <>Featured project: <strong className="ml-4">E-Commerce Platform</strong></>,
    href: "/work/ecommerce-platform",
  },
  subline: (
    <>
      I'm Michael, a software engineer passionate about creating robust applications and elegant code.
      <br /> I love solving complex problems and building tools that make a difference.
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
        Michael is a passionate software engineer with expertise in full-stack development. 
        He specializes in building scalable web applications, working with modern technologies, 
        and solving complex technical challenges with elegant solutions.
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
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Software Project",
            width: 16,
            height: 9,
          },
        ],
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
        name: "University of Technology",
        description: <>Studied Computer Science with focus on Software Engineering.</>,
      },
      {
        name: "Continuous Learning",
        description: <>Always exploring new technologies, frameworks, and best practices.</>,
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
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "React Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
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
            src: "/images/projects/project-01/cover-04.jpg",
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
  description: `Software engineering projects by ${person.name}`,
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
