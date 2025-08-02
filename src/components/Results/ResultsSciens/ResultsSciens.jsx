import React, { useEffect, useRef, useState } from "react";

const initialSubjects = [
  { name: "IT dasturlash", percent: 95 },
  { name: "Savodxonlik", percent: 80 },
  { name: "Ingliz tili", percent: 90 },
  { name: "Matematika", percent: 85 },
  { name: "Biologiya", percent: 75 },
  { name: "Kimyo", percent: 70 },
];

const SubjectsResult = () => {
  const sectionRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [animatedPercents, setAnimatedPercents] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Trigger animation only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Animate when visible
  useEffect(() => {
    if (!hasAnimated) return;

    const interval = setInterval(() => {
      setAnimatedPercents((prev) => {
        return initialSubjects.slice(0, visibleCount).map((subject, idx) => {
          const current = prev[idx] || 0;
          const target = subject.percent;
          const step = Math.max(1, Math.floor((target - current) / 10));
          if (current < target) return Math.min(current + step, target);
          return target;
        });
      });
    }, 20);

    return () => clearInterval(interval);
  }, [hasAnimated, visibleCount]);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, initialSubjects.length));
  };

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 py-8 bg-black text-yellow-400 font-sans "
    >
      <h2 className=" font-bold mb-6 text-[50px] tex-[#FFC107] max-[1150px]:text-[30px] max-[800px]:text-[20px] max-[400px]:text-[15px] max-[250px]:">Fanlar bo‘yicha natijalar taqsimoti</h2>
      <div className="space-y-6">
        {initialSubjects.slice(0, visibleCount).map((subject, idx) => (
          <div key={subject.name}>
            <div className="flex justify-between mb-2 font-semibold text-[#FFC107] text-[32px] max-[1150px]:text-[20px] max-[400px]:text-[15px] max-[250px]:text-[10px]">
              <span>{subject.name}</span>
              <span>{animatedPercents[idx] || 0}%</span>
            </div>
            <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${animatedPercents[idx] || 0}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < initialSubjects.length && (
        <div className="mt-8 text-center">
          <button
            onClick={handleShowMore}
            className="text-white text-lg mt-4 underline hover:text-yellow-300 transition-colors"
          >
            Ko‘proq natijalarni ko‘rish ↓
          </button>
        </div>
      )}
    </section>
  );
};

export default SubjectsResult;
