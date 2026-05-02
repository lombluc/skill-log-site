import Image from "next/image";

const W = 1206;
const H = 2580;

function PhoneFrame({
  src,
  alt,
  width,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  className?: string;
}) {
  const height = Math.round((width / W) * H);
  return (
    <div
      className={`relative rounded-[26px] border-4 border-dark-ink bg-dark-ink shadow-xl shrink-0 transition-all duration-300 ease-out ${className ?? ""}`}
      style={{ width, height }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-[22px] bg-transparent">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={`${width}px`}
        />
      </div>
    </div>
  );
}

export default function HeroLandscape() {
  return (
    <div className="hero-landscape mt-16 pb-8 flex justify-center items-end mr-100">
      <PhoneFrame
        src="/images/tasksPage.png"
        alt="Tasks screen"
        width={120}
        className="-rotate-6 -mr-6 mb-4 opacity-85 hover:rotate-0 hover:-translate-y-4 hover:opacity-100"
      />
      <PhoneFrame
        src="/images/skillsPage.png"
        alt="Skills screen"
        width={150}
        className="z-10 shadow-2xl hover:-translate-y-4 hover:scale-[1.03]"
      />
      <PhoneFrame
        src="/images/workPage.png"
        alt="Work screen"
        width={120}
        className="rotate-6 -ml-6 mb-4 opacity-85 hover:rotate-0 hover:-translate-y-4 hover:opacity-100"
      />
    </div>
  );
}
