import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Heart, Sparkles } from "lucide-react";

interface MediaItem {
  type: "photo" | "video";
  url: string;
  caption: string;
}

interface MonthData {
  month: string;
  year: number;
  media: MediaItem[];
  special?: {
    type: "birthday" | "halloween" | "first-love" | "girlfriend" | "trip";
    title: string;
    description: string;
  };
}

interface MediaModalProps {
  month: MonthData;
  onClose: () => void;
}

export function MediaModal({ month, onClose }: MediaModalProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [captions, setCaptions] = useState<{ [key: number]: string }>(
    month.media.reduce(
      (acc, item, idx) => ({ ...acc, [idx]: item.caption }),
      {},
    ),
  );

  const itemsPerPage = 2;
  const totalPages = Math.ceil(month.media.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentItems = month.media.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  const updateCaption = (globalIndex: number, value: string) => {
    setCaptions({ ...captions, [globalIndex]: value });
  };

  const postItColors = [
    "bg-yellow-200 border-yellow-300",
    "bg-pink-200 border-pink-300",
    "bg-blue-200 border-blue-300",
    "bg-green-200 border-green-300",
    "bg-purple-200 border-purple-300",
    "bg-orange-200 border-orange-300",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, rotate: -1 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.9, opacity: 0, rotate: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden border-8 border-white max-h-[90vh] overflow-y-auto"
      >
        {/* Header with colorful gradient */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white p-6 relative sticky top-0 z-20">
          {/* Decorative elements */}
          <div className="absolute top-2 left-2 opacity-20">
            <Heart size={24} fill="currentColor" />
          </div>
          <div className="absolute bottom-2 right-2 opacity-20">
            <Sparkles size={24} />
          </div>

          <div className="flex items-center justify-between relative z-10">
            <div>
              <h2
                className="text-4xl font-bold mb-1"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {month.month} {month.year}
              </h2>
              {month.special && (
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mt-2">
                  <p
                    className="text-sm"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    ✨ {month.special.title}
                  </p>
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Special description */}
        {month.special && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b-4 border-dashed border-purple-200 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center">
                <Sparkles className="text-white" size={16} />
              </div>
              <p
                className="text-purple-900 font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {month.special.description}
              </p>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-[500px]">
          {month.media.length > 0 ? (
            <>
              {/* Media display with post-its */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    {currentItems.map((item, localIdx) => {
                      const globalIdx = currentPage * itemsPerPage + localIdx;
                      const postItColor =
                        postItColors[globalIdx % postItColors.length];
                      const rotation = localIdx === 0 ? -2 : 2;

                      return (
                        <div key={globalIdx} className="relative">
                          {/* Media item with polaroid style */}
                          {item.type === "video" ? (
                            <div className="aspect-[9/16] relative overflow-hidden">
                              {/* VIDEO REAL */}
                              <video
                                className="absolute inset-0 w-full h-full object-cover"
                                controls
                              >
                                <source src={item.url} type="video/mp4" />
                              </video>

                              {/* Overlay degradado para mantener estilo */}
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-300/40 via-pink-300/40 to-blue-300/40 pointer-events-none z-10" />

                              {/* Decorative corners */}
                              <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-white/70 z-10" />
                              <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-white/70 z-10" />
                              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-white/70 z-10" />
                              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-white/70 z-10" />

                              {/* Play overlay opcional */}
                              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                <div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center backdrop-blur-sm">
                                  ▶
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="aspect-[9/16] relative overflow-hidden">
                              {/* IMAGEN REAL */}
                              <img
                                src={item.url}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover"
                              />

                              {/* Overlay degradado */}
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-300/40 via-pink-300/40 to-blue-300/40" />

                              {/* Decorative corners */}
                              <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-white/70 z-10" />
                              <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-white/70 z-10" />
                              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-white/70 z-10" />
                              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-white/70 z-10" />
                            </div>
                          )}
                          {/* Post-it note for caption */}
                          <motion.div
                            initial={{ rotate: 0, scale: 0.9 }}
                            animate={{ rotate: -rotation * 1.5, scale: 1 }}
                            className={`${postItColor} border-2 rounded-sm p-4 shadow-lg relative`}
                            style={{ transformOrigin: "top center" }}
                          >
                            {/* Pin/tape effect */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-gray-400/40 rounded-sm" />

                            <textarea
                              value={captions[globalIdx] || ""}
                              onChange={(e) =>
                                updateCaption(globalIdx, e.target.value)
                              }
                              placeholder="Escribe algo bonito aquí..."
                              rows={3}
                              className="w-full bg-transparent border-none focus:outline-none resize-none text-gray-800 placeholder:text-gray-600/50"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            />

                            {/* Hand-drawn line decoration */}
                            <svg
                              className="w-full h-1 mt-2"
                              viewBox="0 0 200 4"
                            >
                              <path
                                d="M0 2 Q50 1, 100 2 T200 2"
                                stroke="currentColor"
                                strokeWidth="1"
                                fill="none"
                                className="text-gray-400/50"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                {totalPages > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      disabled={currentPage === 0}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white/95 hover:bg-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed shadow-xl transition-all border-2 border-purple-200"
                    >
                      <ChevronLeft className="text-purple-700" size={28} />
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={currentPage === totalPages - 1}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white/95 hover:bg-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed shadow-xl transition-all border-2 border-purple-200"
                    >
                      <ChevronRight className="text-purple-700" size={28} />
                    </button>
                  </>
                )}
              </div>

              {/* Page indicator */}
              <div className="mt-8 text-center">
                <p
                  className="text-sm text-purple-700 mb-3 font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Página {currentPage + 1} de {totalPages}
                </p>
                <div className="flex items-center justify-center gap-2">
                  {[...Array(totalPages)].map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx)}
                      className={`transition-all rounded-full ${
                        idx === currentPage
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 w-8 h-3"
                          : "bg-purple-300 hover:bg-purple-400 w-3 h-3"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-lg border-4 border-dashed border-purple-200">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={36} fill="currentColor" />
              </div>
              <p
                className="text-purple-900 text-2xl mb-2 font-bold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {month.special?.title}
              </p>
              <p
                className="text-purple-700 text-lg"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {month.special?.description}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
