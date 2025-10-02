import Image from "next/image";
import { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import EndeavorsCard from "@/components/endeavors-card";
import { Fragment } from "react";
const title = "Lukas Kesch | CTO & Entrepreneur";
const description =
  "CTO, CAIO, and one of four Managing Directors of SchulLV, software engineer, and entrepreneur. Building EduTech and personal development Apps. Specializing in Next.js, Spring Boot, MySQL and cloud infrastructure.";

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
        url: "/images/lukas-circle-min.png",
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
    images: ["/images/lukas-circle-min-v2.png"],
  },
};

export default function Home() {
  return (
    <article className="min-h-screen max-w-screen-lg mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-8">
        <div className="order-2 md:order-1">
          <h1 className="text-6xl font-bold">Lukas Kesch</h1>
          <p className="mt-2 text-xl italic">CTO and Entrepreneur</p>
          <p className="mt-4">
            I am the CTO, CAIO, and one of four Managing Directors of the German
            EduTech Startup{" "}
            <strong>
              <a href="https://www.schullv.de" target="_blank">
                SchulLV
              </a>
            </strong>
            . On nights and weekends, I hack on various side projects to sharpen
            my saw and as a testground for new technology.
          </p>
          <p className="mt-2">
            When I am not in front of my MacBook, I am exercising (Gym,
            Triathlon, Skiing), reading, or with my girlfriend, friends, or
            family.
          </p>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2 mb-8 md:mt-0">
          <Image
            src="/images/lukas-circle-min-v2.png"
            alt="Picture of Lukas Kesch"
            loading="eager"
            width={350}
            height={350}
            priority
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16">My Endeavors</h2>

      <FadeInSection />

      <EndeavorsCard
        title="SchulLV"
        imagePath="/images/schullv-v3.png"
        descriptionParagraphs={[
          <Fragment key="1">
            <strong>
              <a href="https://www.schullv.de" target="_blank">
                SchulLV
              </a>
            </strong>{" "}
            is the leading online learning platform in Germany for students to
            study for their exams and for teachers to create new learning
            materials. We offer a variety of subjects including Maths, German,
            English, Biology, and more with original graduation exams for nearly
            all German states and digital schoolbooks.
          </Fragment>,
          <Fragment key="2">
            As CTO I am leading the development of the platform (website, mobile
            app, and backend) and the infrastructure. The tech stack includes
            Next.js (React), Expo (React Native), Spring Boot (Java), MySQL,
            AWS, ...
          </Fragment>,
          // <Fragment key="3">
          //   As CAIO
          // </Fragment>,
        ]}
      />

      <EndeavorsCard
        title="Life Journal"
        descriptionParagraphs={[
          <Fragment key="1">
            <strong>
              <a href="https://lifejournal.io" target="_blank">
                LifeJournal.io
              </a>
            </strong>{" "}
            is a journal app that lets you record and have an overview of your
            time spend. You can record or log any activity (learning, coding,
            exercise, ...) you want to keep track of.
          </Fragment>,
          <Fragment key="2">
            I am actively developing this open source app to track my exercise,
            coding, and learning habits. The Web App is built with Next.js,
            TypeScript, Tailwind CSS, and MySQL. I am self-hosting the app on my
            own server with a Cloudflare proxy in front. You can find it on my{" "}
            <strong>
              <a
                href="https://github.com/lukaskesch/lifejournal.io"
                target="_blank">
                GitHub
              </a>
            </strong>
            .
          </Fragment>,
        ]}
      />

      <EndeavorsCard
        title="Self Hosting"
        descriptionParagraphs={[
          <Fragment key="1">
            This site and all my other personal projects run on my Ubuntu server
            in a datacenter in Germany. In the time of AWS, it is a great way to
            stay grounded in the basics.
          </Fragment>,
          <Fragment key="2">
            I am running: Nginx as a reverse proxy with Certbot for my side
            projects, MySQL as my go to database, Docker for my Next.js apps,
            WireGuard as my VPN with AdGuard as my personal DNS Server, and some
            cron scripts for backups, monitoring, and maintenance.
          </Fragment>,
        ]}
      />

      <EndeavorsCard
        title="University"
        imagePath="/images/kit.jpeg"
        maxDimension={400}
        descriptionParagraphs={[
          <Fragment key="1">
            I studied Computer Science at the{" "}
            <strong>
              <a href="https://kit.edu/" target="_blank">
                Karlsruhe Institute of Technology
              </a>
            </strong>{" "}
            (KIT) in Germany. I finished my Bachelor studies with a GPA of 3.7
            (1.7 on the German scale). My focus was on Algorithms, Software
            Engineering, and Linear Algebra.
          </Fragment>,
          <Fragment key="2">
            I developed a lot of book smartness so to speak but most of our
            classes lacked the practical aspect. In the evenings and weekends, I
            was hacking on my own projects eager to apply my knowledge.
          </Fragment>,
          <Fragment key="3">
            During my time in university I also began working as a Student
            Software Engineer at SchulLV and got my first experience working on
            a large scale web application in a team.
          </Fragment>,
        ]}
      />

      {/* <h3 className="text-2xl font-bold mt-8">Youtube Tinder</h3> */}
      {/* <h3 className="text-2xl font-bold mt-8">Daily Journal</h3> */}

      <EndeavorsCard
        title="High School"
        imagePath="/images/hgg.jpeg"
        maxDimension={400}
        descriptionParagraphs={[
          <Fragment key="1">
            I graduated from the{" "}
            <strong>
              <a
                href="https://www.hgg-markgroeningen.de/pages/hgg/index.php"
                target="_blank">
                Hans-Grüninger-Gymnasium
              </a>
            </strong>{" "}
            (German high school) with the highest GPA in my class of 4.0 (1.1 on
            the German scale). I selected my classes based on my deep interest
            in the STEM subjects: Computer Science, Mathmatics, Physics, and
            Chemistry.
          </Fragment>,
          <Fragment key="2">
            I received multiple awards and scholarships: Ferry-Porsche Preis,
            Physik-Preis, Deutschlandstipendium
          </Fragment>,
          <Fragment key="3">
            I spent my Junior year as an Exchange Student in the USA at the{" "}
            <strong>
              <a href="https://www.jacksboroisd.net/o/jhs" target="_blank">
                Jackboro High School
              </a>
            </strong>
            . I had a great time and participated in practically all sports they
            offered: Football, Cross Country, Powerlifting, Track & Field, and
            Baseball.
          </Fragment>,
        ]}
      />

      <EndeavorsCard
        title="Bundeswettbewerb Informatik"
        imagePath="/images/bwinf.jpeg"
        maxDimension={300}
        descriptionParagraphs={[
          <Fragment key="1">
            Two years in a row I participated in the highest German Informatics
            Competition: The{" "}
            <strong>
              <a href="https://bwinf.de/bundeswettbewerb/" target="_blank">
                Bundeswettbewerb Informatik
              </a>
            </strong>
            . I passed all rounds and was one of the 23 finalists from over 2000
            competitors.
          </Fragment>,
          <Fragment key="2">
            This victory qualified me to take part in the training for the
            german national team at the{" "}
            <strong>
              <a href="https://ioinformatics.org/" target="_blank">
                International Olympiad in Informatics (IOI)
              </a>
            </strong>
            . The training was intense and we solved a lot of algorithmic
            problems and learned a lot about data structures. I really enjoyed
            it! In the end I prioritized my studies and left the team. This is
            something I would have done differently if I could do it over again.
            I would have loved to compete in the IOI.
          </Fragment>,
        ]}
      />

      <h2 className="text-3xl font-bold mt-16">My Engineering Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mt-8">AI & Machine Learning</h3>
          <p className="mt-2">
            I have built multiple AI applications using Retrieval-Augmented
            Generation (RAG) and Model Context Protocol (MCP) to expand on the
            capabilities of LLMs like Claude, ChatGPT, and Gemini.
          </p>
          <p className="mt-2">
            I actively use AI tools in my daily workflow. I love to use Claude
            and ChatGPT for learning and research. For coding I am always
            testing out the latest tools and am fascinated by the progress of
            AI.
          </p>
        </div>
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
            In most cases I prefer SQL Databases like MySQL and PostgreSQL over
            NoSQL databases like MongoDB. I have a MySQL database for virtually
            all my projects and became proficient in crafting performant queries
            and modeling the database schema.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mt-8">Infrastructure</h3>
          <p className="mt-2">
            I always find it fascinating how and on what the software we build
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
            sprinkled in. For more complex tasks I choose Node.js. Its fast to
            write and has a vast package ecosystem.
          </p>
        </div>

        {/* <div>
          <h3 className="text-2xl font-bold mt-8">SEO</h3>
          <p className="mt-2"></p>
          <p className="mt-2"></p>
        </div> */}
      </div>

      {/* <h2 className="text-3xl font-bold mt-16">Off topic</h2> */}

      {/* TODO: Hobby section: Conference, Triathlon, Skiing, Reading, Family, Friends */}

      <h2 className="text-3xl font-bold mt-16">Out and About</h2>

      <FadeInSection />

      <EndeavorsCard
        title="Running, Triathlon, Skiing"
        imagePath="/images/running.jpeg"
        descriptionParagraphs={[
          <Fragment key="1">
            In the beginning of 2024 I started running again. First it was a
            move to get my cardio back after years of "just" pumping iron but
            soon it became much more than that. In September 2024 I ran my first
            half marathon and ran many since then. I greatly improved my pace,
            endurance, and running form. Running has taught me consistently good
            beats occasionally great. In September 2025 I ran my first full marathon.
          </Fragment>,
          <Fragment key="2">
            Gradually I started expending my running with bike and swim sessions. I really enjoy the bike rides and start to get comfortable swimming longer distances in the pool or lake. I have completed a self supported Half Ironman (70.3) and have signed myself up and started training for the Ironman Hamburg 2026. Let's go!
          </Fragment>,
          <Fragment key="3">
            During the winter I love to ski. I started out as a complete
            beginner three years ago and now I am comfortable skiing all kinds
            of slopes except for black ones. They tend to make me fall more down
            than actually skiing. It was really humbling in the beginning to
            fall every few meters and to always stand up one more time than I
            fell!
          </Fragment>,
        ]}
      />

      <h2 className="text-3xl font-bold mt-16">Reaching out</h2>
      <p className="mt-2">
        Connect with me on{" "}
        <strong>
          <a href="https://linkedin.com/in/lukaskesch" target="_blank">
            LinkedIn
          </a>
        </strong>{" "}
        or shoot me an email at{" "}
        <strong>
          <a href="mailto:lukas@kesch.dev">lukas@kesch.dev</a>
        </strong>
        .
      </p>
    </article>
  );
}


