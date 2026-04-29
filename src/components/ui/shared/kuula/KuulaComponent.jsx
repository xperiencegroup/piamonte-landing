export default function KuulaComponent({ src }) {
  return (
    <iframe
      src={src}
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      className="absolute inset-0 w-full h-full pointer-events-auto border-0"
      referrerPolicy="strict-origin-when-cross-origin"
      playsInline
    />
  );
}
