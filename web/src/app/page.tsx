import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-12">
      <section className="relative grid md:grid-cols-2 gap-10 items-center overflow-hidden rounded-3xl bg-white/90 dark:bg-black/90 backdrop-blur-sm p-8 border border-black/10 dark:border-white/10">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Software Engineer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Building scalable apps with React, FastAPI & modern infrastructure. 
            Founding Engineer at{" "}
            <a className="underline" href="https://bolna.ai" target="_blank" rel="noreferrer">Bolna</a>{" "}
            (YC 25) • Previously at ExactSpace Technologies
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              View Projects
            </Link>
            <a
              href="mailto:pavankapoor31@gmail.com"
              className="inline-flex items-center rounded-md border border-black/10 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-blue-200 via-fuchsia-200 to-rose-200 dark:from-blue-900/30 dark:via-fuchsia-900/30 dark:to-rose-900/30 rounded-3xl blur-2xl" />
          <Image
            src="/images/profile-1.jpg"
            alt="Pavan Kapoor profile"
            width={800}
            height={800}
            className="rounded-3xl shadow-2xl aspect-square object-cover"
            priority
          />
        </div>
      </section>

      <section className="grid gap-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">About</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Software Engineer with 2.5+ years building scalable product-led applications across AI, SaaS, and industrial domains. 
            At Bolna (YC F25), developed workflow automation and TypeScript/React dashboards powering daily customer usage. 
            At ExactSpace, optimized React apps for 50% faster loads, saving 60% on deployment costs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Work Experience</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">Founding Engineer</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Bolna (YC 25) • 2024 - Present</p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Built workflow automation systems serving daily active users</li>
                  <li>• Developed TypeScript/React dashboards with real-time data visualization</li>
                  <li>• Implemented AI-powered features for customer engagement</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">Software Developer</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">ExactSpace Technologies • 2023 - 2024</p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Optimized React applications achieving 50% faster load times</li>
                  <li>• Reduced deployment costs by 60% through infrastructure improvements</li>
                  <li>• Built full-stack features impacting millions of industrial users</li>
                </ul>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">Software Developer Intern</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Divum • 2023</p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Developed web applications using modern JavaScript frameworks</li>
                  <li>• Collaborated on full-stack projects with cross-functional teams</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Skills</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'TypeScript', 'Python', 'C++', 'HTML/CSS'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Vue.js'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['FastAPI', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Cloud & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "AI Ads Analyzer",
              href: "https://ai-ads-analyzer-4hhk.vercel.app/",
              img: "/images/banner.jpg",
              desc: "AI-powered ad copy analysis tool that improves conversion rates and marketing clarity. Built with React, FastAPI, and machine learning models.",
              tech: ["React", "FastAPI", "Python", "AI/ML"],
            },
            {
              title: "GigHub",
              href: "https://github.com/pavankapoor31/GigHub",
              img: "/images/banner.jpg",
              desc: "Full-stack freelancing platform with live chat, gig posting, and user authentication. Features real-time messaging and advanced filtering.",
              tech: ["React", "Node.js", "MongoDB", "Socket.io"],
            },
          ].map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-transparent hover:shadow-xl transition"
            >
              <div className="relative h-48">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-semibold group-hover:underline">{card.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{card.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {card.tech.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-6">
        <h2 className="text-2xl font-semibold">Education</h2>
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">Bachelor of Technology in Information Science</h3>
              <p className="text-gray-600 dark:text-gray-300">Dayananda Sagar College of Engineering</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2020 - 2024</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">CGPA: 8.79/10</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6">
        <h2 className="text-2xl font-semibold">Insights & Blog</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://medium.com/@pavankapoor31/how-to-use-vs-code-live-server-local-host-on-mobile-phone-8b38a62117d2"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 hover:shadow-lg transition-all group"
          >
            <h3 className="font-semibold mb-2 group-hover:underline">VS Code Live Server on Mobile</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              A comprehensive guide on how to use VS Code Live Server to test your local development on mobile devices, perfect for responsive web development.
            </p>
            <span className="text-xs text-blue-600 dark:text-blue-400">Read on Medium →</span>
          </a>
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Building AI-Powered Workflows</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              How we built intelligent automation systems at Bolna, serving daily active users with real-time data processing.
            </p>
            <span className="text-xs text-green-600 dark:text-green-400">Coming Soon</span>
          </div>
        </div>
      </section>
    </div>
  );
}
