import { ReactNode } from "react";

const TONES = {
  amber: "from-[#3a2c14] via-[#20180c] to-[#0b0b0d]",
  navy: "from-[#1c2440] via-[#12172a] to-[#0b0b0d]",
  slate: "from-[#333] via-[#1c1c1c] to-[#0b0b0d]",
};

export default function PhotoTile({
  icon,
  tone = "amber",
  className = "",
}: {
  icon: ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${TONES[tone]} flex items-center justify-center ${className}`}
    >
      <div className="texture-dots absolute inset-0 opacity-40" />
      <div className="relative w-[34%] h-[34%] text-brand/80">{icon}</div>
    </div>
  );
}
