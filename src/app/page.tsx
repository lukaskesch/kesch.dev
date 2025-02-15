import Image from "next/image";
import { Metadata } from "next";

const title = "Lukas Kesch | CTO & Entrepreneur";
const description =
  "CTO of SchulLV, software engineer, and entrepreneur. Building EduTech and personal development Apps. Specializing in Next.js, Spring Boot, MySQL and cloud infrastructure.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://kesch.dev",
    siteName: "Lukas Kesch",
    images: [
      {
        url: "/lukas-circle-min.png",
        width: 350,
        height: 350,
        alt: "Lukas Kesch",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/lukas-circle-min.png"],
  },
};

export default function Home() {
  return (
    <article className="min-h-screen max-w-screen-xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-8">
        <div className="order-2 md:order-1">
          <h1 className="text-6xl font-bold">Lukas Kesch</h1>
          <p className="mt-2 text-xl italic">CTO and Entrepreneur</p>
          <p className="mt-4">
            I am the CTO of the German EduTech Startup{" "}
            <strong>
              <a href="https://www.schullv.de" target="_blank">
                SchulLV
              </a>
            </strong>
            . On nights and weekends, I hack on various side projects to sharpen
            my saw and as a testground for new technology.
          </p>
          <p className="mt-2">
            When I am not in front of my MacBook, I am exercising (Gym, Running,
            Biking, Skiing, Swimming), reading, or with my girlfriend, friends,
            or family.
          </p>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2 mb-8 md:mt-0">
          <Image
            src="/lukas-circle-min.png"
            alt="Picture of Lukas Kesch"
            loading="eager"
            width={350}
            height={350}
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16">My Endeavors</h2>

      <EndeavorsCard
        title="SchulLV"
        descriptionParagraphs={[
          <>
            <strong>
              <a href="https://www.schullv.de" target="_blank">
                SchulLV
              </a>
            </strong>{" "}
            is the leading online learning platform in Germany for students to
            study for their exams and for teachers to create new learning
            materials. We offer many subjects (Maths, German, English, Biology,
            ...) with original graduation exams for nearly all German states and
            digital schoolbooks.
          </>,
          <>
            As CTO I am leading the development of the platform (website, mobile
            app, and backend) and the infrastructure. The tech stack includes
            Next.js (React), Expo (React Native), Spring Boot (Java), MySQL,
            AWS, ...
          </>,
        ]}
      />

      <EndeavorsCard
        title="Focus Journal"
        descriptionParagraphs={[
          <>
            <strong>
              <a href="https://focusjournal.io" target="_blank">
                FocusJournal.io
              </a>
            </strong>{" "}
            is a journal app that lets you record and have an overview of your
            focus sessions. A focus session can be any activity (learning,
            coding, exercise, ...) you want to keep track of.
          </>,
          <>
            I am developing this open source app to track my exercise, coding,
            and learning habits. The Web App is built with Next.js, TypeScript,
            Tailwind CSS, and MySQL. I am self-hosting the app on my own server
            with a Cloudflare proxy in front. You can find it on my{" "}
            <strong>
              <a
                href="https://github.com/lukaskesch/productivity-journal"
                target="_blank">
                GitHub
              </a>
            </strong>
            .
          </>,
        ]}
      />

      <EndeavorsCard
        title="Ubuntu Server"
        descriptionParagraphs={[
          <>
            This site and all my other personal projects run on an Ubuntu server
            in a datacenter in Germany. In the time of AWS, it is a great way to
            stay grounded in the basics.
          </>,
          <>
            I am running: Nginx as a reverse proxy with Certbot for my side
            projects, MySQL as my go to database, Docker for my Next.js apps,
            WireGuard as my VPN with AdGuard as my DNS Server, and some cron
            scripts for backups, monitoring, and maintenance.
          </>,
          <>
            Maybe in the future I will set up a server on my own hardware in my
            home or colocate it in a datacenter.
          </>,
        ]}
      />

      <EndeavorsCard
        title="University"
        descriptionParagraphs={[
          <>
            I studied Computer Science at the{" "}
            <strong>
              <a href="https://kit.edu/" target="_blank">
                Karlsruhe Institute of Technology
              </a>
            </strong>{" "}
            (KIT) in Germany. I finished my Bachelor study with a GPA of 3.7. My
            focus was on Algorithms, Software Engineering, and Linear Algebra.
          </>,
          <>
            I developed a lot of book smartness so to speak but most of our
            classes lacked the practical aspect. In the evenings and weekends, I
            was already coding and building my own projects eager to apply my
            knowledge.
          </>,
          <>
            During my time in university I also began working as a Student
            Software Engineer at SchulLV and got my first experience working on
            a large scale web application in a team.
          </>,
        ]}
      />

      {/* <h3 className="text-2xl font-bold mt-8">Youtube Tinder</h3> */}
      {/* <h3 className="text-2xl font-bold mt-8">Daily Journal</h3> */}

      <EndeavorsCard
        title="High School"
        descriptionParagraphs={[
          <>
            I graduated from the{" "}
            <strong>
              <a
                href="https://www.hgg-markgroeningen.de/pages/hgg/index.php"
                target="_blank">
                Hans-Grüninger-Gymnasium
              </a>
            </strong>{" "}
            (German high school) with the highest GPA in my class of 4.0. I
            selected my classes based on my deep interest in the STEM subjects:
            Computer Science, Mathmatics, Physics, and Chemistry.
          </>,
          <>
            I received multiple awards and scholarships: Ferry-Porsche Preis,
            Physik-Preis, Deutschlandstipendium
          </>,
          <>
            I spent my Junior year as an Exchange Student in the USA at the{" "}
            <strong>
              <a href="https://www.jacksboroisd.net/o/jhs" target="_blank">
                Jackboro High School
              </a>
            </strong>
            . I had a great time and tried out practically all sports they
            offered: Football, Cross Country, Powerlifting, Track & Field, and
            Baseball
          </>,
        ]}
      />

      <EndeavorsCard
        title="Bundeswettbewerb Informatik"
        descriptionParagraphs={[
          <>
            Two years in a row I participated in the highest German Informatics
            Competition: The{" "}
            <strong>
              <a href="https://bwinf.de/bundeswettbewerb/" target="_blank">
                Bundeswettbewerb Informatik
              </a>
            </strong>
            . I passed all rounds and was one of the 23 finalists from over 2000
            participants.
          </>,
          <>
            This victory qualified me to take part in the training for the
            german national team at the{" "}
            <strong>
              <a href="https://ioinformatics.org/" target="_blank">
                International Olympiad in Informatics
              </a>
            </strong>
            . The training was intense and we practiced a lot of algorithmic
            problems and programming exercises.
          </>,
        ]}
      />

      <h2 className="text-3xl font-bold mt-16">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mt-8">Frontend</h3>
          <p className="mt-2">
            My go to stack for the frontend is React, Next.js, TypeScript, and
            Tailwind CSS. For Mobile I use React Native with Expo.
          </p>
          <p className="mt-2">
            I have a deep understanding of the React principles, Hooks, when and
            why React re-renders. With Next.js I have both deployed the pages
            and app router and used the static generation and server side
            rendering.
          </p>
          <p className="mt-2">
            I keep a close eye on the react ecosystem and emerging trends.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mt-8">Backend</h3>
          <p className="mt-2">
            Depending on the situation my go to solution are either Next.js
            Server Actions or a full fleshed Spring Boot application which
            serves as a REST API. I have used both extensively and learned their
            strengths and weaknesses.
          </p>
          <p className="mt-2">
            In most cases prefer SQL Databases like MySQL and PostgreSQL over
            NoSQL databases like MongoDB. I have MySQL database for virtually
            all my projects and over time I became proficient in crafting
            queries and modeling the database schema.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mt-8">Infrastructure</h3>
          <p className="mt-2">
            I always found it fascinating how and on what the software we build
            is deployed. I can call AWS my home and have a deep understanding of
            over a dozen AWS services including EC2, S3, RDS, Lambda,
            CloudFront, Route 53, and many more.
          </p>
          <p className="mt-2">
            {/* Cicrling back on the home metapher, */}
            As a weekend getaway I also like to tinker with my own server. This
            is a great way to keep myself sharp on the basics. I run a SSL
            secured reverse proxy, MySQL database, VPN with a custom DNS Server,
            cron scripts for backups, monitoring, and maintenance and many more.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mt-8">DevOps</h3>
          <p className="mt-2">
            I love to optimize my development workflow and tools I use. It all
            started when I learned about Vim Motions and from there I just kept
            going. Some things as basic as reading the git reference manual.
            Others include having a custom keyboard layout to maximise code
            typing speed.
          </p>
          <p className="mt-2">
            These are the tools I use to make my development workflow more
            efficient: Neovim, Tmux, Git, Karabiner, Ripgrep, and more.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mt-8">Scripting</h3>
          <p className="mt-2">
            I like to hack a script together for one of tasks such as migrations
            or to automating recurring tasks.
          </p>
          <p className="mt-2">
            For simple tasks I stick with basic bash scripting with core utils
            sprinkled in. For more complex tasks I choose Node.js. Its fast
            to write and has a vast package ecosystem.
          </p>
        </div>
        {/* <div>
          <h3 className="text-2xl font-bold mt-8">SEO</h3>
          <p className="mt-2"></p>
          <p className="mt-2"></p>
        </div> */}
      </div>
    </article>
  );
}

function EndeavorsCard({
  title,
  descriptionParagraphs,
}: {
  title: string;
  descriptionParagraphs: React.ReactNode[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="order-2 md:order-1">
        <h3 className="text-2xl font-bold mt-8">{title}</h3>
        {descriptionParagraphs.map((paragraph, index) => (
          <p className="mt-2" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className="flex justify-center items-center order-1 md:order-2">
        {/* <img src="/focusjournal.png" alt="Screenshot of the Focus Journal Webapp" /> */}
      </div>
    </div>
  );
}
