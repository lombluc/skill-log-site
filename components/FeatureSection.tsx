import Image from "next/image";

type FetureDetails = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  index: number;
  maxIndex: number;
  feature: FetureDetails;
};

export default function FeatureSection({ index, maxIndex, feature }: Props) {
  return (
    <div key={index}>
      <div
        className={`max-w-7xl mx-auto px-6 flex flex-col items-center gap-12 md:flex-row ${
          index % 2 !== 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{feature.title}</h2>
          <p className="text-base text-slate-600 leading-relaxed font-description">
            {feature.description}
          </p>
        </div>

        {/* Visual Content */}
        <div className="md:w-1/2 w-full">
          <div className="aspect-video relative">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-scale-down"
            />
          </div>
        </div>
      </div>
      {index < maxIndex - 1 && (
        <div className="max-w-4xl mx-auto px-6 mt-24">
          <hr className="border-slate-100" />
        </div>
      )}
    </div>
  );
}
