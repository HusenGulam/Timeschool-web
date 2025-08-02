import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaUser } from 'react-icons/fa';

const teachers = [
  {
    name: 'Palonchi',
    score: 'IELTS 7.5',
    bio: 'Ingliz tilidan dars berishga qiziqishim maktab davridan boshlangan va shu yo‘nalishni hayotimga bog‘lashga qaror qilganman.',
    experience: '5 Yillik tajriba',
    students: '100+ Mamnun O‘quvchilar',
  },
  {
    name: 'Aliyev',
    score: 'CEFR C1',
    bio: 'Men o‘quvchilarga mustahkam grammatika va og‘zaki nutqni o‘rgatishga ixtisoslashganman.',
    experience: '3 Yillik tajriba',
    students: '75+ Mamnun O‘quvchilar',
  },
  {
    name: 'Zaynab',
    score: 'IELTS 8.0',
    bio: 'O‘quvchilarga individual yondashuv asosida dars o‘taman. Mening darslarim doim interaktiv bo‘ladi.',
    experience: '4 Yillik tajriba',
    students: '90+ Mamnun O‘quvchilar',
  },
  {
    name: 'Sherzod',
    score: 'IELTS 7.0',
    bio: 'Men kommunikativ metodika asosida dars beraman va o‘quvchilarni real suhbatlarga tayyorlayman.',
    experience: '6 Yillik tajriba',
    students: '110+ Mamnun O‘quvchilar',
  },
  {
    name: 'Dilnoza',
    score: 'CEFR B2',
    bio: 'Yosh o‘quvchilarga ingliz tilini o‘rgatish mening eng sevimli mashg‘ulotim. Har bir darsga ijodiy yondashaman.',
    experience: '2 Yillik tajriba',
    students: '60+ Mamnun O‘quvchilar',
  },
];

export default function TeachersSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const swiperRef = useRef(null);
  const selected = teachers[selectedIndex];

  const handleClick = (index) => {
    setSelectedIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <section className="bg-black py-[60px]">
      <div className="text-center mb-[50px]">
          <h1 className="text-[50px] text-[#FFC107] font-bold mb-[10px] max-[650px]:text-[25px] max-[350px]:text-[20px] max-[250px]:text-[15px]">
            Bizning o'qituvchilarimiz
          </h1>
          <p className="text-[20px] text-white font-medium max-[650px]:text-[15px] max-[350px]:text-[10px] max-[250px]:text-[7px]">
            Haqiqiy qahramonlarimiz, quyida ular bilan tanishib chiqishingiz mumkin
          </p>
        </div>

        <div className="flex justify-between flex-wrap gap-[20px] text-white flex-col items-center text-center min-[991px]:flex-row min-[991px]:items-start min-[991px]:text-left">
          {/* DESKTOP LIST */}
          <div className="hidden min-[991px]:flex flex-col gap-[15px] w-[20%]">
            {teachers.map((t, i) => (
              <div
                key={i}
                onClick={() => handleClick(i)}
                className={`flex items-center gap-[10px] p-[12px] rounded-[10px] transition-all cursor-pointer ${selectedIndex === i ? 'bg-[#FFC107] text-black' : ''}`}
              >
                <FaUser
                  className={`text-[36px] p-[8px] rounded-full transition-all ${selectedIndex === i ? 'bg-black text-[#FFC107]' : 'text-white'}`}
                />
                <div className="flex flex-col">
                  <h1 className={`font-bold m-0 ${selectedIndex === i ? 'text-black' : 'text-[#FFC107]'}`}>{t.name}</h1>
                  <p className="text-[14px] m-0">{t.score}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE SWIPER */}
          <div className="w-full block min-[991px]:hidden">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={10}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
              }}
              className="mySwiper"
            >
              {teachers.map((t, i) => (
                <SwiperSlide key={i}>
                  <div
                    onClick={() => handleClick(i)}
                    className={`flex items-center gap-[10px] p-[12px] rounded-[10px] transition-all cursor-pointer ${selectedIndex === i ? 'bg-[#FFC107] text-black' : ''}`}
                  >
                    <FaUser
                      className={`text-[36px] p-[8px] rounded-full transition-all ${selectedIndex === i ? 'bg-black text-[#FFC107]' : 'text-white'}`}
                    />
                    <div className="flex flex-col">
                      <h1 className={`font-bold m-0 ${selectedIndex === i ? 'text-black' : 'text-[#FFC107]'}`}>{t.name}</h1>
                      <p className="text-[14px] m-0">{t.score}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-full h-[440px] bg-[#FFC107] rounded-[10px] flex justify-center items-center min-[991px]:w-[30%]">
            <img src="/logo.png" alt="Video Preview" className="w-[70%] object-contain max-[350px]:h-[300px]" />
          </div>

          <div className="w-full flex flex-col gap-[25px] min-[991px]:w-[25%]">
            <p className="text-[24px] leading-[1.6] text-white max-[350px]:text-[10px]">
              {selected.bio}
            </p>
            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-center min-[991px]:justify-between items-center gap-[12px] p-[18px] px-[20px] rounded-[10px] bg-[#FFC107] text-black font-semibold text-[16px]">
                <span>{selected.experience}</span>
                <div className="w-[16px] h-[16px] bg-black rounded-full" />
              </div>
              <div className="flex  justify-center min-[991px]:justify-between items-center gap-[12px] p-[18px] px-[20px] rounded-[10px] bg-[#1a1a1a] text-white font-semibold text-[16px]">
                <span className="text-center max-[350px]:text-[10px]">
                  {selected.students.split(' ')[0]}
                  {selected.students.split(' ').slice(1).join(' ')}
                </span>
                <div className="w-[16px] h-[16px] bg-[#FFC107] rounded-full" />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}