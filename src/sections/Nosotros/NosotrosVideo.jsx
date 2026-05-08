export default function NosotrosVideo() {
  return (
    <div className="flex w-full h-lvh justify-center items-center">
      <div className="w-[60%] portrait:w-[95%] lg:w-[clamp(466.41px,80.46875vw,980px)] aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/bohAeeNjI6U?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1&playlist=bohAeeNjI6U"
          title="Piamonte Residencial Campestre - Xperience AI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
