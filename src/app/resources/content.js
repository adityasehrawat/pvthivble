import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Hivble",
  lastName: " ",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Next-Gen Tech & Innovation Company",
  avatar: "/images/hivble-light-png.png",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const person1 = {
  firstName: "Aditya",
  lastName: "Sehrawat",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Founder: Hivble",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Big things are happening at Hivble! Comex Beta is making waves with its Gen Z humor, Ratios is redefining social media engagement, and MCPE PLUS is packed with fresh Minecraft Bedrock content. Stay tuned for more exciting innovations—we’re just getting started!
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hivble",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/company/hivble",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/hivble",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:adityaslayerpublic@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `Hivble`,
  description: `Explore Hivble`,
  headline: <>Introducing Comex Ai</>,
  subline: (
    <>
      Comex AI is a next-gen AI built for the modern era—witty, engaging, and always ready with a clever comeback. Designed for the new generation, it blends intelligence with humor, making interactions fun, fresh, and unforgettable.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Hivble",
  description: `Hivble`,
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
        In a world where technology is constantly evolving, Hivble is here to push the boundaries of innovation. From AI to social media to gaming resources, we create digital experiences that resonate with the newer generations. If you’ve used Comex AI, Ratios, or MCPE PLUS, you’ve already witnessed Hivble’s vision in action.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "What is Hivble?",
    experiences: [
      {
        company: "Hivble",
        timeframe: "2023 - Present",
        role: " ",
        achievements: [
          <>
           Hivble is more than just a tech company—we’re a movement. Our mission is to develop cutting-edge digital products that blend creativity, humor, and functionality to make technology more engaging and accessible.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        //  {
       //     src: "",
       //     alt: "hivble",
        //    width: 16,
         //   height: 9,
        //  },
        ],
      },
      {
        company: "What We’ve Built So Far:",
        timeframe: "2023 - Present",
        role: " ",
        achievements: [
          <>
         🚀 Comex AI – A Gen Z-inspired AI with humor and personality, designed for the modern internet culture.
          </>,
          <>
           📊 Ratios – A next-gen social media app redefining engagement and meaningful interactions.

          </>,
          <>
          🎮 MCPE PLUS – The ultimate Minecraft Bedrock resource hub, offering the best mods, texture packs, and custom maps.
          </>
        ],
        images: [],
      },
      {
        company: "Our Philosophy:",
        timeframe: " ",
        role: " ",
        achievements: [
          <>
            🔥 User-First Innovation – We build for the new generation, prioritizing creativity and usability.
          </>,
          <>
            💡 Tech with a Personality – Whether it’s AI, social media, or gaming, our products aren’t just functional—they’re fun.
          </>,
          <>
          🌍 Community-Driven – Our platforms thrive on user feedback, ensuring constant evolution and improvement.
          </>
        ],
        images: [],
      },
    ],
  },
  
  studies: {
    display: true, // set to false to hide this section
    title: "The Future of Hivble",
    institutions: [
      {
        name: " ",
        description: <>We’re just getting started. With a passion for tech and a focus on what’s next, Hivble is on a mission to redefine how people interact with AI, social media, and gaming. Expect more groundbreaking projects, bigger ideas, and an ever-expanding digital playground.   </>,
      },
    
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Skilled in prototyping using multiple design systems for intuitive and efficient UI/UX.        </>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
      {
        title: "Next.js",
        description: <> Developing next-gen applications with Next.js + Once UI, ensuring high performance and scalability.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Dart (w/Flutter)",
        description: <>  Currently learning and building Ratios using Dart for scalable development.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
   
      {
        title: "React & JavaScript",
        description: <> Strong frontend development skills, creating dynamic and interactive user experiences.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Python",
        description: <> Expert in Python, proficient in scripting, automation, and backend development.

        </>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "HTML, CSS",
        description: <>  Built multiple responsive and visually appealing websites.
        </>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Read our latest news.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "Projects by us",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

const aditya = {
  label: "About",
  title: "About me",
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
        I'm Aditya, founder of Hivble, dedicated to creating intuitive projects. As a frontend, software and game developer, I specialize in crafting visually appealing and user-friendly websites, apps and games. Currently, I am working on Ratios.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Hivble",
        timeframe: "2023 - Present",
        role: "Founder & Lead Developer",
        achievements: [
          <>
            Founded and established HIVBLE, a company dedicated to crafting intuitive and innovative projects.
          </>,
          <>
            Spearhead the development of engaging frontend experiences, combining aesthetics with functionality.
          </>,
          <> 
          Innovate and adapt to emerging technologies to cater to modern digital needs.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        //  {
       //     src: "",
       //     alt: "hivble",
        //    width: 16,
         //   height: 9,
        //  },
        ],
      },
      {
        company: "Ratios",
        timeframe: "2024 - Present",
        role: "Creator & Developer",
        achievements: [
          <>
            Conceptualized and developing Ratios, a next-gen social media app designed for modern users.
          </>,
          <>
            Manage the overall product vision, ensuring scalability and adaptability for future growth.

          </>,
        ],
        images: [],
      },
      {
        company: "Comex Ai",
        timeframe: "2025 - Present",
        role: "Creator & Developer",
        achievements: [
          <>
            Developed Comex AI, a next-gen AI designed to be humorous and engaging for newer generations.
          </>,
          <>
            Engineered a unique conversational style that blends intelligence with wit, making interactions fun and dynamic.
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
        name: "St. Mary's School, Gajraula",
        description: <>Currently pursuing my education, building a strong foundation in academics while developing skills in technology, design, and innovation. Engaged in various projects that enhance my creativity and problem-solving abilities.        </>,
      },
      {
        name: "Udemy",
        description: <>Completed online courses on software engineering, covering frontend and backend development, databases, algorithms, and best coding practices. Gained hands-on experience through practical projects and real-world applications.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Skilled in prototyping using multiple design systems for intuitive and efficient UI/UX.        </>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
      {
        title: "Next.js",
        description: <> Developing next-gen applications with Next.js + Once UI, ensuring high performance and scalability.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Dart (w/Flutter)",
        description: <>  Currently learning and building Ratios using Dart for scalable development.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
   
      {
        title: "React & JavaScript",
        description: <> Strong frontend development skills, creating dynamic and interactive user experiences.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Python",
        description: <> Expert in Python, proficient in scripting, automation, and backend development.

        </>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "HTML, CSS",
        description: <>  Built multiple responsive and visually appealing websites.
        </>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const social1 = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/adityasehrawat",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/adityasehrawat",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/aditya0sehrawat",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:adityaslayerpublic@gmail.com",
  },
];

export { person, person1, social, newsletter, home, about, blog, work, gallery, aditya, social1 };
