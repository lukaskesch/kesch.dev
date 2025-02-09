import Image from "next/image";
export default function Home() {
  return (
    <article className="min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-8">
        <div>
          <h1 className="text-6xl font-bold">Lukas Kesch</h1>
          <p className="mt-2 text-xl italic">
            CTO, Software Engineer, and Entrepreneur
          </p>
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
        <div className="flex justify-center items-center">
          <Image
            src="/lukas-circle.png"
            alt="Picture of Lukas Kesch"
            width={350}
            height={350}
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16">My Endevors</h2>
      <h3 className="text-2xl font-bold mt-8">SchulLV</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="mt-2">
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
          </p>
          <p className="mt-2">
            As CTO I am leading the development of the platform (website, mobile
            app, and backend) and the infrastructure. The tech stack includes
            Next.js, TypeScript, Spring Boot, MySQL, AWS, ...
          </p>
        </div>
        <div>
          {/* <img src="/schullv.png" alt="Screenshot of the SchulLV online learning platform" /> */}
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-8">Focus Journal</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="mt-2">
            <strong>
              <a href="https://focusjournal.io" target="_blank">
                FocusJournal.io
              </a>
            </strong>{" "}
            is a journal app that lets you record and have an overview of your
            focus sessions. A focus session can be any activity (learning,
            coding, exercise, ...) you want to keep track of.
          </p>
          <p className="mt-2">
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
          </p>
        </div>
        <div>
          {/* <img src="/focusjournal.png" alt="Screenshot of the Focus Journal Webapp" /> */}
        </div>
      </div>

      {/* <h3 className="text-2xl font-bold mt-8">Youtube Tinder</h3> */}
    </article>
  );
}
