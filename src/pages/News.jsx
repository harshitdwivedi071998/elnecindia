import { useEffect, useState } from 'react'
import { FaCalendarAlt } from "react-icons/fa";

export default function News() {

  
const EVENT_CARDS = [
  {
    tag: "Upcoming Events",
    title: "There are many variations of passages",
    // date: "October 12, 2022",
    excerpt:
      "There are many variations of passages Lorem Ipsum is dummy text used in printing industry...",
    img: "/images/event1.jpg",
    link: "/commingevents", // <--- Add your URL
  },
  // {
  //   tag: "Upcoming Events",
  //   title: "Contrary to popular belief",
  //   // date: "October 12, 2022",
  //   excerpt:
  //     "Contrary to popular belief Lorem Ipsum is simply dummy text used in printing industry...",
  //   img: "/images/event2.jpg",
  //   link: "/commingevents", // <--- Add your URL
  // },
];

const ANNOUNCE_CARDS = [
  {
    tag: "Announcements",
    title: "It is a long established fact that a reader",
    // date: "October 12, 2022",
    excerpt:
      "It is a long established fact that a reader Lorem Ipsum dummy text of printing industry...",
    img: "/images/announce1.jpg",
    link: "/announcment", // <--- Add your URL
  },
  // {
  //   tag: "Announcements",
  //   title: "Lorem Ipsum is simply dummy text",
  //   // date: "October 12, 2022",
  //   excerpt:
  //     "Lorem Ipsum is simply dummy text used in printing and typesetting industry...",
  //   img: "/images/announce2.jpg",
  //   link: "/announcment", // <--- Add your URL
  // },
];

const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const animClass = (i) =>
    `transform transition-all duration-700 ease-out ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    } delay-[${i * 100}ms]`;
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* EVENTS */}
        <div>
          <h3 className="text-3xl font-bold text-[#1d4c7c] mb-6">Upcoming Events</h3>
          <div className="space-y-6">
            {EVENT_CARDS.map((c, i) => (
              <article
                key={i}
                className={`flex flex-col md:flex-row gap-5 bg-white/60 dark:bg-white/5 border 
                  border-white/30 dark:border-white/10 backdrop-blur-sm rounded-2xl 
                  p-4 md:p-6 shadow-sm ${animClass(i)}`}
              >
                {/* <img
                  src={c.img}
                  alt={c.title}
                  className="w-full md:w-48 h-40 rounded-xl object-cover transition-transform duration-500 hover:scale-105"
                /> */}

                <div className="flex-1">
                  {/* CLICKABLE TAG */}
                  <a
                    href={c.link}
                    className="inline-block bg-[#1d4c7c] text-white text-xs font-semibold px-3 py-1 rounded hover:bg-[#163a5c]"
                  >
                    {c.tag}
                  </a>

                  {/* CLICKABLE TITLE */}
                  <a
                    href={c.link}
                    className="block mt-3 text-xl font-semibold text-slate-800 dark:text-slate-100 hover:text-[#1d4c7c] transition"
                  >
                    {c.title}
                  </a>

                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    {/* <FaCalendarAlt /> */}
                    <span>{c.date}</span>
                  </div>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{c.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ANNOUNCEMENTS */}
        <div>
          <h3 className="text-3xl font-bold text-[#1d4c7c] mb-6">Announcements</h3>
          <div className="space-y-6">
            {ANNOUNCE_CARDS.map((c, i) => (
              <article
                key={i}
                className={`flex flex-col md:flex-row gap-5 bg-white/60 dark:bg-white/5 border 
                  border-white/30 dark:border-white/10 backdrop-blur-sm rounded-2xl 
                  p-4 md:p-6 shadow-sm ${animClass(i + 4)}`}
              >
                {/* <img
                  src={c.img}
                  alt={c.title}
                  className="w-full md:w-48 h-40 rounded-xl object-cover transition-transform duration-500 hover:scale-105"
                /> */}

                <div className="flex-1">
                  {/* CLICKABLE TAG */}
                  <a
                    href={c.link}
                    className="inline-block bg-[#1d4c7c] text-white text-xs font-semibold px-3 py-1 rounded hover:bg-[#163a5c]"
                  >
                    {c.tag}
                  </a>

                  {/* CLICKABLE TITLE */}
                  <a
                    href={c.link}
                    className="block mt-3 text-xl font-semibold text-slate-800 dark:text-slate-100 hover:text-[#1d4c7c] transition"
                  >
                    {c.title}
                  </a>

                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    {/* <FaCalendarAlt /> */}
                    <span>{c.date}</span>
                  </div>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{c.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
