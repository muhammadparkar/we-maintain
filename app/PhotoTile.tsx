import { ReactNode } from "react";
import Image from "next/image";

const TONES = {
  amber: "from-[#3a2c14] via-[#20180c] to-[#0b0b0d]",
  navy: "from-[#1c2440] via-[#12172a] to-[#0b0b0d]",
  slate: "from-[#333] via-[#1c1c1c] to-[#0b0b0d]",
};

export default function PhotoTile({
  imageSrc,
  alt = "We Maintain Technical Services",
  icon,
  tone = "amber",
  className = "",
}: {
  imageSrc?: string;
  alt?: string;
  icon?: ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden group bg-gradient-to-br ${TONES[tone]} flex items-center justify-center ${className}`}
    >
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-500 group-hover:opacity-75" />
          {icon && (
            <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-brand flex items-center justify-center p-2.5 z-10 transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          )}
        </>
      ) : (
        <>
          <div className="texture-dots absolute inset-0 opacity-40" />
          <div className="relative w-[34%] h-[34%] text-brand/80">{icon}</div>
        </>
      )}
    </div>
  );
}
