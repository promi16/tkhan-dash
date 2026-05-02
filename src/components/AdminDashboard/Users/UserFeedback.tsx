import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const UserFeedback = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah K.",
      comment: "So gentle with my anxious pup!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael R.",
      comment: "Very professional service, highly recommended.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jessica L.",
      comment: "The grooming was perfect, my dog looks amazing!",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6 max-w-4xl mx-auto md:mx-0"
    >
      <motion.div
        variants={itemVariants}
        className="bg-white p-6 sm:p-8 md:p-10 rounded-[24px] md:rounded-[32px] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-6 md:gap-12"
      >
        <div className="text-center shrink-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FF6B35]">
            5.0
          </h1>
          <div className="flex text-[#FF6B35] justify-center my-2 gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4" fill="currentColor" />
            ))}
          </div>
          <p className="text-sm md:text-xs text-gray-400 font-light">
            67 reviews
          </p>
        </div>

        <div className="flex-1 w-full space-y-3">
          {[5, 4, 3, 2, 1].map((s) => (
            <div
              key={s}
              className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-bold text-black"
            >
              <span className="w-5">{s}★</span>
              <div className="flex-1 h-2 bg-gray-50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: s === 5 ? "100%" : "0%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-[#FF6B35]"
                />
              </div>
              <span className="w-4 text-right font-medium">
                {s === 5 ? "1" : "0"}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="space-y-4">
        {reviews.map((rev) => (
          <motion.div
            key={rev.id}
            variants={itemVariants}
            whileHover={{ scale: 1.005 }}
            className="bg-white p-4 md:p-6 rounded-[20px] md:rounded-[24px] border border-gray-50 shadow-sm flex gap-3 md:gap-4 items-start"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex-shrink-0 flex items-center justify-center text-lg md:text-xl border border-gray-100">
              👤
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-row items-center justify-between gap-1">
                <p className="font-semibold text-black text-sm md:text-base">
                  {rev.name}
                </p>
                <div className="flex text-[#FF6B35] gap-0.5">
                  {[...Array(rev.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-3 h-3 md:w-4 md:h-4"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-600 font-light mt-2 leading-relaxed">
                {rev.comment}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
