export default function YoutubeVideos() {
  const YT_LINK = "https://www.youtube.com/playlist?list=PLWirMGDxLU7syhSZntePhofPPfDki6Zlv"; // <-- Update this

  return (
    <div className="w-full py-10 px-4 text-center">
      
      {/* Clickable Heading */}
      <a
        href={YT_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[#174b80] mb-6 cursor-pointer hover:text-[#0f355c] transition">
          Youtube Videos By Lien Collaborative
        </h2>
      </a>

      {/* Clickable YouTube Logo */}
      <a
        href={YT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center"
      >
        <img
          src="/youtube.png"
          alt="YouTube"
          className="w-40 md:w-56 lg:w-64 cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </a>
    </div>
  );
}
