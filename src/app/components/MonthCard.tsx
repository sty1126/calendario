import { motion } from "motion/react";
import { Sparkles, Heart, Cake, Ghost, Plane } from "lucide-react";

interface MonthCardProps {
  month: string;
  year: number;
  media: Array<{ type: "photo" | "video"; url: string; caption: string }>;
  special?: {
    type: "birthday" | "halloween" | "first-love" | "girlfriend" | "trip";
    title: string;
    description: string;
  };
  index: number;
  onClick: () => void;
}

const rotations = [-2, 1, -1, 2, -3, 1.5, -1.5, 3, -2.5, 1.5, -1, 2.5, -2];
const colors = [
  "bg-gradient-to-br from-pink-200 to-pink-300",
  "bg-gradient-to-br from-purple-200 to-purple-300",
  "bg-gradient-to-br from-blue-200 to-blue-300",
  "bg-gradient-to-br from-yellow-200 to-yellow-300",
  "bg-gradient-to-br from-green-200 to-green-300",
  "bg-gradient-to-br from-indigo-200 to-indigo-300",
  "bg-gradient-to-br from-rose-200 to-rose-300",
  "bg-gradient-to-br from-cyan-200 to-cyan-300",
  "bg-gradient-to-br from-violet-200 to-violet-300",
  "bg-gradient-to-br from-fuchsia-200 to-fuchsia-300",
  "bg-gradient-to-br from-teal-200 to-teal-300",
  "bg-gradient-to-br from-orange-200 to-orange-300",
  "bg-gradient-to-br from-lime-200 to-lime-300",
];

export function MonthCard({
  month,
  year,
  media,
  special,
  index,
  onClick,
}: MonthCardProps) {
  const rotation = rotations[index % rotations.length];
  const bgColor = colors[index % colors.length];

  const getSpecialIcon = () => {
    if (!special) return null;
    switch (special.type) {
      case "birthday":
        return <Cake className="text-pink-600" size={18} />;
      case "halloween":
        return <Ghost className="text-orange-600" size={18} />;
      case "first-love":
        return <Heart className="text-red-600" fill="currentColor" size={18} />;
      case "girlfriend":
        return (
          <Heart className="text-rose-600" fill="currentColor" size={18} />
        );
      case "trip":
        return <Plane className="text-blue-600" size={18} />;
      default:
        return null;
    }
  };

  const getStickerColor = () => {
    if (!special) return "bg-white";
    switch (special.type) {
      case "birthday":
        return "bg-pink-100 border-pink-400";
      case "halloween":
        return "bg-orange-100 border-orange-400";
      case "first-love":
        return "bg-red-100 border-red-400";
      case "girlfriend":
        return "bg-rose-100 border-rose-400";
      case "trip":
        return "bg-blue-100 border-blue-400";
      default:
        return "bg-white";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        zIndex: 10,
        transition: { duration: 0.2 },
      }}
      onClick={onClick}
      className="cursor-pointer group relative"
      style={{ transformOrigin: "center center" }}
    >
      {/* Polaroid style card */}
      <div
        className={`relative ${bgColor} border-4 border-white rounded-sm p-4 shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300`}
      >
        {/* Tape effect */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-100/80 border border-yellow-200 -rotate-2 shadow-sm" />

        {/* Special sticker */}
        {special && (
          <div
            className={`absolute -top-3 -right-3 ${getStickerColor()} rounded-full p-2 shadow-md border-2 rotate-12`}
          >
            {getSpecialIcon()}
          </div>
        )}

        {/* Month name with handwritten feel */}
        <div className="text-center mb-3">
          <h3
            className="text-2xl font-bold text-gray-800"
            style={{ fontFamily: "'Montserrat', serif" }}
          >
            {month}
          </h3>
          <p
            className="text-xs text-gray-600"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {year}
          </p>
        </div>

        {/* Scribble divider */}
        <div className="flex justify-center mb-3">
          <svg width="60" height="4" viewBox="0 0 60 4" className="opacity-40">
            <path
              d="M0 2 Q15 0, 30 2 T60 2"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-600"
            />
          </svg>
        </div>

        {/* Media thumbnails - messy grid */}
        {media.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-3">
            {media.slice(0, 4).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ rotate: 0 }}
                whileHover={{ rotate: [-1, 1, -1] }}
                transition={{ duration: 0.2 }}
                className="aspect-square bg-white rounded-sm shadow-inner relative overflow-hidden border-2 border-gray-200"
                style={{
                  transform: `rotate(${(idx % 2 === 0 ? -1 : 1) * (idx + 1)}deg)`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                    {item.type === "video" ? (
                      <div className="w-0 h-0 border-t-5 border-t-transparent border-l-7 border-l-purple-700 border-b-5 border-b-transparent ml-0.5" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-purple-700 rounded-sm" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Special note */}
        {special && (
          <div className="bg-white/70 rounded-sm p-2 border border-dashed border-gray-400 -rotate-1">
            <p
              className="text-xs text-gray-700 text-center font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {special.title}
            </p>
          </div>
        )}

        {/* Dots indicator */}
        {media.length > 0 && (
          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(Math.min(media.length, 4))].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-gray-600/40"
                style={{ transform: `rotate(${i * 5}deg)` }}
              />
            ))}
            {media.length > 4 && (
              <span className="text-xs text-gray-600/70 ml-1">
                +{media.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Doodle decoration */}
        <div className="absolute bottom-2 right-2 opacity-20">
          <Heart size={16} className="text-gray-600" />
        </div>
      </div>
    </motion.div>
  );
}
