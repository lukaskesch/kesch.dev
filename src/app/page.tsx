import Image from "next/image";
import { Metadata } from "next";

const title = "Lukas Kesch | CTO & Software Engineer";
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
    <article className="min-h-screen p-8">
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
            . On nights and weekends, I hack on various side projects. When
            I&apos;m not in front of my MacBook, I am exercising (Gym, Running,
            Biking, Skiing, ...), reading, or with my girlfriend, friends, or
            family.
          </p>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2 mb-8 md:mt-0">
          <Image
            src="/lukas-circle-min.png"
            alt="Picture of Lukas Kesch"
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
            digital schoolbooks on our online platform.
          </>,
          <>
            As CTO I am leading the development of the platform (website, mobile
            app, and backend) and the infrastructure. The tech stack includes
            Next.js, TypeScript, Spring Boot, MySQL, AWS, ...
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
            (KIT) in Germany. I finished my Bachelor study with a GPA of 3.7. I
            focused on Algorithms, Software Engineering, and Linear Algebra.
          </>,
          <>
            During my studies I was already working as a Software Engineer at
            SchulLV part time and got my first experience working on a large
            scale web application.
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
            . I learned a lot about the American culture and tried out
            practically all sports they offered: Football, Cross Country,
            Powerlifting, Track & Field, and Baseball
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="order-2 md:order-1">
        <h3 className="text-2xl font-bold mt-8">{title}</h3>
        {descriptionParagraphs.map((paragraph) => (
          <p className="mt-2">{paragraph}</p>
        ))}
      </div>
      <div className="flex justify-center items-center order-1 md:order-2">
        {/* <img src="/focusjournal.png" alt="Screenshot of the Focus Journal Webapp" /> */}
      </div>
    </div>
  );
}
