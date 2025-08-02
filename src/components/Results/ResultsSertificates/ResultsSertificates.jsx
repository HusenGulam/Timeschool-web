import { useState, useEffect } from 'react';
import { GiDiploma } from 'react-icons/gi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const certificates = [
  { title: 'A sertifikat', desc: "A’lo darajadagi natijalar uchun" },
  { title: 'B sertifikat', desc: "O‘rtacha natijalardan yuqori uchun" },
  { title: 'C sertifikat', desc: "Qoniqarli natijalar uchun" },
];

function ResultsSertificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 990);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section className="w-full px-5 py-10 box-border">
      <div className="text-[50px] font-bold text-[#FFC107] mb-12 text-start max-md:text-[30px] max-sm:text-[20px]">
        <h1>Beriladigan Sertifikatlar</h1>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-5 max-[990px]:justify-center">
        {certificates.map((item, idx) => {
          const isActive = !isMobile || idx === currentIndex;
          return (
            <div
              key={idx}
              className={`${
                isActive ? 'flex' : 'hidden'
              } flex-col items-center border-2 border-[#FFC107] rounded-[10px] p-5 gap-2 max-w-full transition-all duration-300 ease-in-out w-full md:flex-[1_1_calc(33.333%-20px)] hover:bg-[#FFC107] group`}
            >
              <GiDiploma
                size={50}
                className="text-[#FFC107] group-hover:text-black transition-all duration-200 group-hover:rotate-[10deg]"
              />
              <h1 className="text-[24px] font-bold text-[#FFC107] group-hover:text-black">
                {item.title}
              </h1>
              <p className="text-[#999] group-hover:text-black">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {isMobile && (
        <div className="flex justify-center gap-5 mt-6">
          <button
            onClick={prev}
            className="p-3 text-[20px] bg-[#FFC107] rounded-md hover:bg-[#e5b106] flex items-center justify-center"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="p-3 text-[20px] bg-[#FFC107] rounded-md hover:bg-[#e5b106] flex items-center justify-center"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}

export default ResultsSertificates;
