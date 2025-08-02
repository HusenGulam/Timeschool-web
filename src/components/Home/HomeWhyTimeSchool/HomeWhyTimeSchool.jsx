import { useState, useEffect } from 'react';
import { FaBrain, FaUserGraduate } from 'react-icons/fa';
import { BiBarChart } from 'react-icons/bi';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const data = [
  {
    icon: <FaBrain className="section_icon bg-[#FFC107] text-[#000] text-[100px] p-[20px] rounded-[100%] max-[350px]:text-[80px] max-[350px]:p-[10px] max-[240px]:text-[50px] max-[240px]:p-[5px]" />,
    title: 'Vaqtni boshqarish tizimi',
    desc: 'O‘quv rejangizni avtomatik rejalashtiring va har bir soatdan to‘liq foydalaning.',
  },
  {
    icon: <FaUserGraduate className="section_icon bg-[#FFC107] text-[#000] text-[100px] p-[20px] rounded-[100%] max-[350px]:text-[80px] max-[350px]:p-[10px] max-[240px]:text-[50px] max-[240px]:p-[5px]" />,
    title: 'Interaktiv o‘quv modullari',
    desc: 'Zamonaviy va qiziqarli usullar orqali bilim oling.',
  },
  {
    icon: <BiBarChart className="section_icon bg-[#FFC107] text-[#000] text-[100px] p-[20px] rounded-[100%] max-[350px]:text-[80px] max-[350px]:p-[10px] max-[240px]:text-[50px] max-[240px]:p-[5px]"  />,
    title: 'Taraqqiyotni kuzatish imkoniyati',
    desc: 'O‘z o‘rganish natijalaringizni muntazam nazorat qiling va o‘sishni kuzating.',
  }
];

function HomeWhyTimeSchool() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <section className="py-[100px] font-['Segoe UI']">
        <div className="section_title flex flex-col items-center gap-[10px] text-center">
                <h1 className="text-[50px] font-bold text-[#FFC107] drop-shadow-[0_0_10px_#ffc10766] sm:text-[36px] max-[700px]:text-[25px] max-[350px]:text-[20px] max-[240px]:text-[16px]">
                    Nega aynan Time School?
                </h1>
                <p className="text-[20px] text-[#ccc] max-w-[600px] sm:text-[16px] max-[700px]:text-[12px] max-[350px]:text-[8px] max-[240px]:text-[7px]">
                    Nega aynan Time School? Vaqtingizni samarali boshqaring, sifatli ta’lim oling.
                </p>
            </div>

            {/* Desktop View */}
            {!isMobile && (
                <div className="section_general flex justify-between flex-wrap gap-[30px] mt-[80px] max-[700px]:flex-col max-[700px]:items-center">
                    {data.map((item, i) => (
                        <div className="section_box bg-[#111] p-[30px_20px] rounded-[20px] flex-1 min-w-[260px] text-center transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center border border-[#222] hover:-translate-y-[10px] hover:shadow-[0_0_30px_#FFC10755] max-[700px]:w-full max-[700px]:max-w-[500px] max-[700px]:mt-[50px] max-[350px]:min-w-0"
                            key={i}>
                            {item.icon}
                            <h1 className="text-[22px] font-bold text-[#FFC107] mb-[10px] sm:text-[18px] max-[350px]:text-[15px] max-[240px]:text-[12px]">
                                {item.title}
                            </h1>
                            <p className="text-[16px] text-[#999] leading-[1.6] sm:text-[14px] max-[350px]:text-[10px] max-[240px]:text-[7px]">
                                {item.desc}
                            </p>
                        </div>
                    ))}
              </div>
            )}

            {/* Mobile Slider View */}
            {isMobile && (
              
                <div className="section_slider mt-[80px]">
                  <div className="section_box bg-[#111] p-[30px_20px] rounded-[20px] text-center transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center border border-[#222] min-w-[260px] mx-auto max-[350px]:min-w-0">
                      {data[index].icon}
                      <h1 className="text-[22px] font-bold text-[#FFC107] mb-[10px] sm:text-[18px] max-[350px]:text-[15px] max-[240px]:text-[12px]">
                          {data[index].title}
                      </h1>
                      <p className="text-[16px] text-[#999] leading-[1.6] sm:text-[14px] max-[350px]:text-[10px] max-[240px]:text-[7px]">
                          {data[index].desc}
                      </p>
                  </div>

                  {/* ✅ Slider arrows like your original design */}
                  <div className="slider_arrows text-[30px] flex justify-center gap-4 mt-4">
                    <button
                      onClick={prevSlide}
                      className="bg-[#FFC107] text-black p-2 rounded-full hover:opacity-80 transition"
                    >
                      <AiOutlineLeft />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="bg-[#FFC107] text-black p-2 rounded-full hover:opacity-80 transition"
                    >
                      <AiOutlineRight />
                    </button>
                </div>

              {/* ✅ Slider dots */}
              <div className="slider_dots flex justify-center gap-2 mt-4">
                {data.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`w-4 h-4 rounded-full cursor-pointer transition ${
                      index === dotIndex
                        ? 'bg-[#FFC107]'
                        : 'bg-[#FFC107] opacity-50'
                    }`}
                    onClick={() => setIndex(dotIndex)}
                  />
                ))}

                </div>
            </div>
          )}
    </section>
  );
}

export default HomeWhyTimeSchool;


